console.log('hello');
//console.dir(process);
setInterval(function() {
	console.log('hello: ' + process.pid);
}, 3000);
