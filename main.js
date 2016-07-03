/*
var http = require("http");

http.createServer(function(request, response) {

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end("Hello, world\n");

}).listen(8080);
*/
var express = require('express');

var path = require('path');

var app = express();

app.use('/', express.static('webpages'));

app.get('/', function(req, res) {
	console.log("Sending index");
	res.sendFile(path.join(__dirname, 'webpages/index.html'));
});

// app.get('/about', function(req, res) {
// 	res.sendFile(path.join(__dirname, 'webpages/about.html'));
// });

// app.get('/tournament', function(req, res) {
// 	res.sendFile(path.join(__dirname, 'webpages/tournament.html'));
// });

// app.get('/calendar', function(req, res) {
// 	res.sendFile(path.join(__dirname, 'webpages/calendar.html'));
// });

// app.get('/contact', function(req, res) {
// 	res.sendFile(path.join(__dirname, 'webpages/contact.html'));
// });

app.get('/api_endpoint', function(req, res) {
    var json_object = { name: "Node.JS Demo", location: "ACM Clubhouse" };
    res.send(json_object);
});


app.listen(3000);

console.log("Server up...");