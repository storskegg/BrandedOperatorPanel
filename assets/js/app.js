var bopData = {
	"extensions":{},
	"queues":{},
	"activeCalls":{}
};	// Init empty dataset
var currentQ = 'default';	// Set initial Q on page load
var dw;				// The Worker
var lastUpdate = 0;

var partial_qMenu = function() {
	var qMenuTemplate = _.template($('#tmpl_qMenu').html());
	$('#qMenu').html(qMenuTemplate(bopData));
};

var partial_panelStats = function() {
	var panelStats = _.template($('#tmpl_panelStats').html());
	$('#panelStats').html(panelStats(bopData));
};

var partial_panelUsers = function() {
	var panelUsers = _.template($('#tmpl_panelUsers').html());
	$('#panelUsers').html(panelUsers(bopData));
};

var partial_panelCalls = function() {
	var panelCalls = _.template($('#tmpl_panelCalls').html());
	$('#panelCalls').html(panelCalls(bopData));
};

var partial_panelExtensions = function() {
	var panelExtensions = _.template($('#tmpl_panelExtensions').html());
	$('#panelExtensions').html(panelExtensions(bopData));
};

var refreshPanel = function() {
	// Only init the more static components of the UI
	partial_qMenu();
	// (Re-)Init the more dynamic components of the UI
	partial_panelStats();
	partial_panelUsers();
	partial_panelCalls();
	partial_panelExtensions();
};

var bopFuncs = {
	indicator: function(status) {
		// To update an indicator (so you know the Worker is doing its job correctly)
		//$('.indicator').toggleClass('off').toggleClass('on');
	},
	data: function(data) {
		bopData = data;
		refreshPanel();
	},
	error: function(msg) {
		console.log(msg);
	},
	reload: function() {
		document.location.reload();
	}
};

var initWorker = function() {
	// Check if Web Workers are supported
	if (typeof Worker !== "undefined") {
		// Check if OUR worker is initialized
		// If not, get it running
		if (typeof dw == "undefined") {
			dw = new Worker('js/bop/bopWorker.js');
		}
		// The worker gives us JSON-encapsulated messages; Let's listen for them
		dw.onmessage = function(e) {
			var msg = JSON.parse(e.data);

			// If the message isn't an error, let's update the data object, and refresh the dynamic bits
			bopFuncs[msg.type](msg.data);
			/*
			if (msg.type == 'indicator') {
				;
			} else if (msg.type == 'data') {
				bopData = msg.data;
				refreshPanel();
			} else {
				// If it's an error, let's note it on the console
				console.log('bopWorker Error: ', msg.data);
			}
			*/
		};
		dw.onerror = function(err) {
			console.log("bopWorker -- An error has occurred: ", err);
		};
	} else {
		// If we don't support Web Sockets, let's work around it
		setInterval(function() {
			var rq = new XMLHttpRequest();
			var data = false;

			// We're expecting to find the data in this file
			// We're also assuming that the data will be plaintext, parseable into JSON
			rq.open('GET', '/wallboard.html', false);
			rq.send(null);

			if (rq.status >= 200 && rq.status < 400) {
				// If things look good, let's use it; account for empties, though
				bopData = JSON.parse(rq.responseText || {});
			}
		}, 2000);
	}
};

// A method to kill the worker if ever we need it; it's presently unimplemented
var killWorker = function() {
	dw.terminate();
};

/*
 * Courtesy of powtac: http://stackoverflow.com/questions/6312993/javascript-seconds-to-time-with-format-hhmmss
 */

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10 && hours > 0) {hours   = "0"+hours;}
    if (minutes < 10 && hours) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = "";
    if (hours) time += hours + ':';
    time += minutes + ':' + seconds;
    return time;
};

var prettifyDID = function(num) {
	if (typeof num === 'number') {
		num = num.toString();
	}

	if (typeof num !== 'string') {
		return num;
	} else if (num.length === 10) {
		return "(" + num.substring(0, 3) + ") " + num.substring(3,6) + "-" + num.substring(6, 10);
	} else if (num.length === 11) {
		// Assume an US Exchange
		return "(" + num.substring(1, 4) + ") " + num.substring(4,7) + "-" + num.substring(7, 11);
	} else if (num.length === 7) {
		return num.substring(0, 3) + "-" + num.substring(3,7);
	} else if (num.length < 7) {
		return 'Ext. ' + num;
	} else {
		return num;
	}
};

// Here is where the "magic" begins
$(document).ready(function() {
	// Delegate: Listen for changes in the current Q
	$(document.body).on('click', '.func_q_select', function(e) {
		e.preventDefault();
		currentQ = $(this).data('queue');
		refreshPanel();
	});

	refreshPanel();
	initWorker();
	setInterval(function() { document.location.reload(); }, 240000); // reload document every 4min
});