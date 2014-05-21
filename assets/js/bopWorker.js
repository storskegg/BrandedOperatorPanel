var getData = function() {
	var message = {
		type: 'data',
		data: false
	};

	
	var rq = new XMLHttpRequest();

	rq.open('GET', '/wallboard.html', false);
	rq.send(null);

	if (rq.status >= 200 && rq.status < 400) {
		message.data = JSON.parse(rq.responseText);
	}

	if (message.data !== false) {
		postMessage(message);
	} else {
		postMessage({type:'error', data:rq.status.toString()});
	}
	setTimeout('getData()', 2000);
};

getData();
