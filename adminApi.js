//This code is responsible for managing calls made by the front end that require officer or admin
//authentication (eg admin level operations). It does this by first establishing
//middleware that first verifies the user has admin credentials 
//If the request fails authentication, it returns an authorization error. 

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var User = require("./dbtemplates/userCore");
var UserMembership = require("./dbtemplates/userMemberships");
var StaticData = require('./dbtemplates/staticData')

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

	app.get('/api/getMemberships', function(req, res) {
		res.send({memberships: StaticData.getMemberships()});
	});

	//Gets all unique emails associated with a given email. Useful for blast emails.
	app.get('/api/getEmails', function(req, res) {
		var teamID = req.query.team;
		var returnList = [];
		var seen = {};
		User.getAll(function(err, users) {
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

	//Get all users with an email or a username satisfying the input.
	app.get('/api/searchUserFromString', function(req, res) {
		var searchString = req.query.search;
		if (searchString == null) {
			res.send({error: "You must search for something!"});
		}
		else {
			User.findUsersByEmailOrUsername(searchString, function(err, users) {
				if (err) {
					return res.send(err);
				}
				else {
					var mapUser = function(user) {
						return {
							username: user.username,
							usernameLower: user.usernameLower, 
							password: user.password, 
							permissions: user.permissions, 
							firstName: user.firstName, 
							lastName: user.lastName, 
							email: user.email, 
							gradYear: user.gradYear,
							UID: user.UID,
							phoneNumber: user.phoneNumber, 
							interests: user.interests
						};
					}
					return res.send(users.map(mapUser));
				}
			});
		}	
	});

	//Get all memberships for a given user.
	app.get('/api/getMembershipsForUser', function(req, res) {
		if (req.query.username == null) {
			return res.send({error: "You must search for something!"});
		}
		console.log("Getting memberships for " + req.query.username);
		UserMembership.findMembershipsForUser(
			req.query.username, 
			function(err, memberships) {
				if (err) {
					return res.send({error: err});
				}
				else {
					if (memberships == null) {
						return res.send({error: "Couldn't find a user by that \
							username!"});
					}
					var allMemberships = StaticData.getMemberships();
					for (var i = 0; i < allMemberships.length; i++) {
						if (!memberships.membership.hasOwnProperty(allMemberships[i])) {
							memberships.membership[allMemberships[i]] = false;
						}
					}
					return res.send(memberships);
				}
			}
		);
	});

	//Set a membership for a user. 
	app.post('/api/setMembership', function(req, res) {
		var username = req.body.username;
		var membership = req.body.membership;
		if (!username) {
			return res.send({error: "Missing username!"});
		}
		if (!membership) {
			return res.send({error: 'Which membership are you specifying?'});
		}

		User.findUser(username, function(err, user) {
			if (!user) {
				//User doesn't exist!
				return res.send({error: "User doesn't exist!"});
			}
			// User does exist, add the membership
			UserMembership.setMembership(username, membership, function(err) {
				if (err) {
					return res.send({error: err});
				}
				else {
					res.send({status: "Done!"});
				}
			})
		});
	});

	//Remove a membership for a user. 
	app.post('/api/removeMembership', function(req, res) {
		var username = req.body.username;
		var membership = req.body.membership;
		if (!username) {
			return res.send({error: "Missing username!"});
		}
		if (!membership) {
			return res.send({error: 'Which membership are you specifying?'});
		}

		User.findUser(username, function(err, user) {
			if (!user) {
				//User doesn't exist!
				return res.send({error: "User doesn't exist!"});
			}
			// User does exist, add the membership
			UserMembership.removeMembership(username, membership, function(err) {
				if (err) {
					return res.send({error: err});
				}
				res.send({status: "Done!"});
			})
		});
	});

	console.log("Admin Api up...");
	return app;
}