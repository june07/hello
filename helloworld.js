const os = require('os');

console.log(process);
setInterval(function() {
	console.log('Hello, I\'m running on ' + os.platform() + ' my pid is: ' + process.pid);
	console.dir(process.ppid);
}, 3000);
