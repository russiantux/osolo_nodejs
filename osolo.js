var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');
var path = require("path");
  



console.log('Osolo v.0.0.3')
console.log('Copyright (C) 2016  Viktor Lazarev')
console.log('This program comes with ABSOLUTELY NO WARRANTY!!')
console.log('This is free software, and you are welcome to redistribute it under certain conditions')
console.log('For detailed use of this program, please consult the LICENSE.MD file')


app.listen(8080);

function handler (request, response) {
    
	
	var filePath = '.' + request.url;
	if (filePath == './')
		filePath = './index.html';
		
	var extname = path.extname(filePath);
	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.ttf':
			contentType = 'font/ttf';
			break;
	}
	
	fs.exists(filePath, function(exists) {
	
		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				}
				else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
					
				}
			});
		}
		else {
			response.writeHead(404);
			response.end();
		}
	});
	
};


console.log('Osolo is online, running at port 8080')

io.on('connection', function (socket) {
  socket.on('runserver', function (RunServer) {
    console.log('Recived call to run server.');
	
	
 var exec = require('child_process').exec;
 var child = exec('java -Xmx1024M -Xms1024M -jar minecraft_server.1.10.jar',
        function (error, stdout, stderr){
            console.log('Server started');
            if(error !== null){
            console.log("Error when starting the server => "+error);
            }
});
 



 
});
});
