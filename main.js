/*
var http = require("http");

http.createServer(function(request, response) {

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end("Hello, world\n");

}).listen(8080);
*/
var express = require('express');

var app = express();
app.get('/', function(req, res) {
	res.send("Hello, world!");
})

app.get('/api_endpoint', function(req, res) {
    var json_object = { name: "Node.JS Demo", location: "ACM Clubhouse" };
    res.send(json_object);
});


app.listen(3000);

console.log("Server up...");