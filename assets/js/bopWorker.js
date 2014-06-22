//
// The Web Worker for RHWallboard
//
// It's just a simple thing
//

var debugObject = false;
var dver = false;

// This is our message prototype; we comminicate with the app via JSON-encapsulated objects
// type: data, error, indicator
// data: JSON, String, String (on || off)
var message = {
	type: 'data',
	data: false
};

var getData = function() {
	postMessage(JSON.stringify({type:'indicator',data:'on'}));

	var rq = new XMLHttpRequest();

	rq.onerror = function(err) {
		console.log('bopWorker[XHR] Error: ', err);
	};

	// We expect to find our data as plaintext in /wallboard.html
	// We'll be using syncronous XHR to prevent odd occurrences of reading the same file twice
	// at the same time.
	rq.open('GET', '/wallboard.html', false);
	rq.send(null);

	if (rq.status >= 200 && rq.status < 400) {
		var resp = rq.responseText;

		if (typeof resp != "string") {
			message.data = {activeCalls:[], extensions:{}, queues:{} };
		} else {
			message.data = JSON.parse(resp);

			if (!dver || dver < message.data.version) {
				dver = message.data.version;
			} else {
				for (var q in message.data.queues) {
					if (q.activeCalls && q.activeCalls.Wait) {
						q.activeCalls.Wait = (parseInt(q.activeCalls.Wait) + 1).toString();
					}
				}
			}
		}
	} else {
		var resp = rq.responseText;
		message.type = 'error';
		message.data = '[ ' + rq.status.toString() + ' ] - ' + resp;
	}

	postMessage(JSON.stringify(message));
	postMessage(JSON.stringify({type:'indicator',data:'off'}));

	// Init the next read 2sec after the current read completes
	setTimeout('getData()', 1000);
};

// Get it running
//console.log('bopWorker has been initialized');
getData();
