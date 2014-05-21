window.rawData = {
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

/*
window.rawData = {
	"currentQ" : 100,
	"queues" : {
		"200" : {
			"activeUsers" : [ "103", "104", "107", "108", "110" ],
			"name" : "Lab",
			"activeCalls" : {
				"6084660831" : {
					"bound" : "inbound",
					"num" : "6084660831",
					"atime" : "",
					"qtime" : "2:45",
					"status" : "active"
				},
				"6084660834" : {
					"num" : "6084660834",
					"atime" : "",
					"qtime" : "2:45"
				},
				"6084660833" : {
					"num" : "6084660833",
					"atime" : "",
					"qtime" : "2:45"
				},
				"6084660836" : {
					"num" : "6084660836",
					"atime" : "",
					"qtime" : "2:45"
				},
				"6084660832" : {
					"bound" : "outbound",
					"num" : "6084660832",
					"atime" : "",
					"qtime" : "2:45"
				},
				"6084660835" : {
					"num" : "6084660835",
					"atime" : "",
					"qtime" : "2:45"
				}
			}
		},
		"100" : {
			"activeUsers" : [ "103", "104", "107", "108", "110" ],
			"name" : "Customer Service",
			"activeCalls" : {
				"6084660831" : {
					"num" : "6084660831",
					"atime" : "",
					"qtime" : "2:45",
					"status" : "active"
				},
				"6084660834" : {
					"num" : "6084660834",
					"atime" : "",
					"qtime" : "2:45",
					"status" : "waiting"
				},
				"6084660833" : {
					"num" : "6084660833",
					"atime" : "",
					"qtime" : "2:45",
					"status" : "waiting"
				},
				"6084660836" : {
					"num" : "6084660836",
					"atime" : "",
					"qtime" : "2:45",
					"status" : "waiting"
				},
				"6084660832" : {
					"num" : "6084660832",
					"atime" : "",
					"qtime" : "2:45",
					"status" : "active"
				},
				"6084660835" : {
					"num" : "6084660835",
					"atime" : "",
					"qtime" : "2:45",
					"status" : "waiting"
				}
			}
		},
		"300" : {
			"activeUsers" : [ "103", "104", "107", "108", "110" ],
			"name" : "Pharmacy",
			"activeCalls" : {
				"6084660831" : {
					"num" : "6084660831",
					"atime" : "",
					"qtime" : "2:45"
				},
				"6084660834" : {
					"num" : "6084660834",
					"atime" : "",
					"qtime" : "2:45"
				},
				"6084660833" : {
					"num" : "6084660833",
					"atime" : "",
					"qtime" : "2:45"
				},
				"6084660836" : {
					"num" : "6084660836",
					"atime" : "",
					"qtime" : "2:45"
				},
				"6084660832" : {
					"num" : "6084660832",
					"atime" : "",
					"qtime" : "2:45"
				},
				"6084660835" : {
					"num" : "6084660835",
					"atime" : "",
					"qtime" : "2:45"
				}
			}
		}
	},
	"extensions" : {
		"110" : {
			"activeCall" : "6084660832",
			"num" : "110",
			"name" : "Jennifer W",
			"status" : "oncall"
		},
		"107" : {
			"activeCall" : false,
			"num" : "107",
			"name" : "User X",
			"status" : "dnd"
		},
		"104" : {
			"activeCall" : "6084660831",
			"num" : "104",
			"name" : "Jen H",
			"status" : "oncall"
		},
		"103" : {
			"activeCall" : false,
			"num" : "103",
			"name" : "Karen S",
			"status" : "ready"
		},
		"108" : {
			"activeCall" : false,
			"num" : "108",
			"name" : "Ann R",
			"status" : "ready"
		},
		"102" : {
			"activeCall" : false,
			"num" : "102",
			"name" : "Joan H",
			"status" : "offline"
		}
	}
};

*/

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
	$('#qMenu').html(qMenuTemplate(rawData));
};

var partial_panelHeader = function() {
	var panelHeader = _.template($('#tmpl_panelHeader').html());
	$('#panelHeader').html(panelHeader(rawData));
};

var partial_panelUsers = function() {
	var panelUsers = _.template($('#tmpl_panelUsers').html());
	$('#panelUsers').html(panelUsers(rawData));
};

var partial_panelCalls = function() {
	var panelCalls = _.template($('#tmpl_panelCalls').html());
	$('#panelCalls').html(panelCalls(rawData));
};

var buildPanel = function() {
	// Get the data
  
  window.rawData.currentQ = 100;
	
	partial_qMenu();
	partial_panelHeader();
	partial_panelUsers();
	partial_panelCalls();
};

$(document).ready(function() {
	buildPanel();;
});