//This code is responsible for managing calls made by the front end that require officer or admin
//authentication (eg admin level operations). It does this by first establishing
//middleware that first verifies the user has admin credentials 
//If the request fails authentication, it returns an authorization error. 

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var About = require("./dbtemplates/about");
var Item = require("./dbtemplates/item");
var Store = require("./dbtemplates/store");
var User = require("./dbtemplates/user-core");

var auth = require('./auth')

//Input: An express application
module.exports = function(app) {

	var setLogin = function(res, username, password) {
		console.log("Setting cookie");
		res.cookie('username', username);
		res.cookie('password', auth.encrypt(password), { signed: true });
	}

	//Anything from this point on in the express middleware flow requires a user to be an officer.
	var verifyOfficer = function(req, res, next) {
		if (req.userObject.permissions != "officer" && req.userObject.permissions != "admin") {
			return res.send({ error: "Invalid credentials. You aren't cool enough." });
		}
		next();
	}

	app.use(verifyOfficer);

	//Gets all unique emails associated with a given email. Useful for blast emails.
	app.get('/api/getEmails', function(req, res) {
		var teamID = req.query.team;
		var returnList = [];
		var seen = {};
		User.find(function(err, users) {
			for (var i = 0; i < users.length; i++) {
				var interestList = users[i].interests;
				var email = users[i].email;
				if ((teamID == null || interestList.indexOf(teamID) >= 0) && !seen.hasOwnProperty(email)) {
					returnList.push(users[i].email);
					seen[email] = true;
				}
			}
			return res.send(returnList);
		});
	});

	console.log("Admin Api up...");
	return app;
}