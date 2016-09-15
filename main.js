/*
var http = require("http");

http.createServer(function(request, response) {

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end("Hello, world\n");

}).listen(8080);
*/
var express = require('express');

var app = express();

var path = require('path');
var database = require('./database.js');
 
app = require("./routes")(app);

app = require('./api')(app);




app.listen(process.env.PORT || 3000);

console.log("Server up!");