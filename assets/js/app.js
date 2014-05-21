var bopData = {
 "extensions" : {
	  "102" : {
		 "direction" : "outbound",
		 "num" : "102",
		 "activeCall" : "102",
		 "status" : "ringing"
	  },
	  "720" : {
		 "direction" : "inbound",
		 "num" : "720",
		 "activeCall" : "100",
		 "status" : "ringing"
	  }
   },

   "queues" : {
	  "200" : {
		 "name" : "200"
	  },
	  "default" : {
		 "name" : "default"
	  },
	  "100" : {
		 "name" : "100",
		 "member_stats" : {
			"104" : {
			   "Status" : "1",
			   "Paused" : "0",
			   "Membership" : "dynamic",
			   "Penalty" : "0",
			   "CallsTaken" : "0",
			   "LastCall" : "0",
			   "Location" : "Local/104@from-queue"
			},
			"103" : {
			   "Status" : "1",
			   "Paused" : "0",
			   "Membership" : "dynamic",
			   "Penalty" : "0",
			   "CallsTaken" : "0",
			   "LastCall" : "0",
			   "Location" : "Local/103@from-queue"
			},
			"106" : {
			   "Status" : "1",
			   "Paused" : "0",
			   "Membership" : "dynamic",
			   "Penalty" : "0",
			   "CallsTaken" : "0",
			   "LastCall" : "0",
			   "Location" : "Local/106@from-queue"
			},
			"102" : {
			   "Status" : "1",
			   "Paused" : "0",
			   "Membership" : "dynamic",
			   "Penalty" : "0",
			   "CallsTaken" : "0",
			   "LastCall" : "0",
			   "Location" : "Local/102@from-queue"
			},
			"108" : {
			   "Status" : "1",
			   "Paused" : "0",
			   "Membership" : "dynamic",
			   "Penalty" : "0",
			   "CallsTaken" : "1",
			   "LastCall" : "1400567786",
			   "Location" : "Local/108@from-queue"
			},
			"105" : {
			   "Status" : "1",
			   "Paused" : "0",
			   "Membership" : "dynamic",
			   "Penalty" : "0",
			   "CallsTaken" : "0",
			   "LastCall" : "0",
			   "Location" : "Local/105@from-queue"
			},
			"110" : {
			   "Status" : "1",
			   "Paused" : "0",
			   "Membership" : "dynamic",
			   "Penalty" : "0",
			   "CallsTaken" : "0",
			   "LastCall" : "0",
			   "Location" : "Local/110@from-queue"
			}
		 },
		 "activeUsers" : [
			"102",
			"106",
			"105",
			"108",
			"104",
			"110",
			"103"
		 ],
"activeCalls" : [
			{
			   "num" : "720",
			   "trying_agent" : "103",
			   "Channel" : "SIP/restoreh.voip.kawlin.com-000000b0",
			   "Wait" : "13",
			   "ConnectedLineName" : "103",
			   "ConnectedLineNum" : "103",
			   "CallerIDName" : "CS:720",
			   "Uniqueid" : "1400570487.498",
			   "qtime" : "0:13",
			   "CallerIDNum" : "720"
			}
		 ]

	  },
	  "300" : {
		 "name" : "300"
	  }
   }
};

$(document).foundation();

// Thanks to MatthewKennedy @
// https://github.com/zurb/foundation/issues/3800
// for this little bit.
$(function() {
	var timer;

	$(window).resize(function() {
		clearTimeout(timer);
		timer = setTimeout(function() {
			$('.inner-wrap').css("min-height", $(window).height() + "px" );
			$('#userPanelsWrap').css("max-height", ($(window).height() - $('#panelTopBar').outerHeight() - $('#panelHeader').outerHeight() - $('#usersPanelHeader').outerHeight()) + "px" );
		}, 40);
	}).resize();
});

var partial_qMenu = function() {
	var qMenuTemplate = _.template($('#tmpl_qMenu').html());
	$('#qMenu').html(qMenuTemplate(bopData));
};

var partial_panelHeader = function() {
	var panelHeader = _.template($('#tmpl_panelHeader').html());
	$('#panelHeader').html(panelHeader(bopData));
};

var partial_panelUsers = function() {
	var panelUsers = _.template($('#tmpl_panelUsers').html());
	$('#panelUsers').html(panelUsers(bopData));
};

var partial_panelCalls = function() {
	var panelCalls = _.template($('#tmpl_panelCalls').html());
	$('#panelCalls').html(panelCalls(bopData));
};

var buildPanel = function() {
	// Get the data
	partial_qMenu();
	partial_panelHeader();
	partial_panelUsers();
	partial_panelCalls();
};

var refreshPanel = function() {
	partial_panelUsers();
	partial_panelCalls();
};

var dw;
var initWorker = function() {
	if (typeof Worker !== "undefined") {
		if (typeof dw == "undefined") {
			dw = new Worker('js/bopWorker.js');
		}
		dw.onmessage = function(e) {
			var msg = event.data;
			if (msg.type != 'error') {
				bopData = msg.data;
				refreshPanel();
			} else {
				console.log('bopWorker Error: ', msg.data);
			}
		};
	} else {
		setInterval(function() {
			var rq = new XMLHttpRequest();
			var data = false;

			rq.open('GET', '/wallboard.html', false);
			rq.send(null);

			if (rq.status >= 200 && rq.status < 400) {
				bopData = JSON.parse(rq.responseText);
			}
		}, 2000);
	}
};
var killWorker = function() {
	dw.terminate();
}

$(document).ready(function() {
	// Set initial Q on page load
	bopData.currentQ = 100;
  
	$(document.body).on('click', '.func_q_select', function(e) {
		e.preventDefault();
		rawData.currentQ = $(this).data('queue');
		buildPanel();
	});

	buildPanel();
	setInterval(refreshPanel, 2000);
});