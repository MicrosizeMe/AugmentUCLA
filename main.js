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
var credentials = require('./credentials')

var expressSession = require('express-session');
app.use(expressSession({secret: credentials.secret}));
app.use(require('body-parser').json({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(require('cookie-parser')(credentials.cookieSecret));


app = require("./routes")(app);
app = require('./openApi')(app);




app.listen(process.env.PORT || 3000);

console.log("Server up!");