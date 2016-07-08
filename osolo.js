var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');
var path = require("path");
  



console.log('Osolo v.0.0.2')
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
					console.log('page loaded')
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
    console.log('recived call to run .bat file');
	
	
	require('child_process').exec("run.bat", function (err, stdout, stderr) {
    if (err) {
        // Ooops.
        // console.log(stderr);
        return console.log(err);
    }

    // Done.
    console.log('bat file exacuted, check if server running');
	
	});

 
});
});
