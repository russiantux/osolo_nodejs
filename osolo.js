var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');
var path = require("path");
  



console.log('Osolo dev_server v.0.0.1 DEV_BRANCH')

app.listen(8080);

function handler (request, response) {
    console.log('request starting...');
	
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


console.log('server is online')

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
