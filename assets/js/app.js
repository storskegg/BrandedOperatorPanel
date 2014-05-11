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
          "status" : "tardy"
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
  $('#qMenu').html(qMenuTemplate());
};

var partial_panelHeader = function() {
  var panelHeader = _.template($('#tmpl_panelHeader').html());
  $('#panelHeader').html(partial_panelHeader());
};

var buildPanel = function() {
  // Get the data
  
  partial_qMenu();
  partial_panelHeader();
};

$(document).ready(function() {
  buildPanel();;
});