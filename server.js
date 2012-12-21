var http = require('http'),
	url = require('url'),
	fs = require('fs'),
	compiler = require('./compiler.js');

var path = require('path').dirname(require.main.filename) + "/live";

var port_number = 1337;


http.createServer(function(request, response) {
		
	var url = request.url;

	if (url === "/" || url === "" || !url) url = "/index.html";

	var file_name = path + url;

	fs.exists(file_name, function(status) {

		if (!status) {
		
			response.writeHead(200, {"Content-Type": "text/plain"});
	        response.write("HELLO WORLD FILE NOT FOUND" + "\n");
	        response.end();

	        return;
		}

		else {

			fs.readFile(file_name, 'utf8', function(err, content) {

				if(err) {

					console.log("ERROR");

				}

				response.writeHead(200, { 'Content-Type': 'text/html' });
				response.write(content);

				response.end(content, 'utf-8');
			});
		}

	});//end of file exists


}).listen(port_number, '127.0.0.1');

console.log("Server now running on port " + port_number);


