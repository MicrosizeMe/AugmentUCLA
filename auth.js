(function() {
	var passport = require('passport');
	var LocalStrategy = require('passport-local').Strategy;
	var mysql = require('mysql');

	var connection = mysql.createConnection({
		host		: 'localhost',
		user		: 'root',
		password	: 'b3tternerfirelia',
		database	: 'nodejstesting'
	});

	connection.connect();

	passport.use(new LocalStrategy(
		function(username, password, done) {
			
		}
	));



}());