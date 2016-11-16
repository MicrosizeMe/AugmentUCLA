//This code is responsible for managing calls made by the front end that do not require
//authentication.

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var About = require("./dbtemplates/about");
var Item = require("./dbtemplates/item");
var Store = require("./dbtemplates/store");
var User = require("./dbtemplates/user-core");
var Teams = require("./dbtemplates/teams")

var auth = require('./auth')

//Input: An express application
module.exports = function(app) {

	var setLogin = function(res, username, password) {
		console.log("Setting cookie");
		res.cookie('username', username);
		res.cookie('password', auth.encrypt(password), { signed: true });
	}

	app.get('/api/getAbout', function(req, res) {
		var teamID = req.query.team;
		if (teamID == null) teamID = 'augment';
		About.getPageForTeam(teamID, function(err, aboutPage) {
			if (err) {
				console.log(err);
				res.send({error: "503: Database Error"});
				return;
			}
			if (aboutPage == null) {
				res.send({error: "Page Not Found"});
				return;
			}
			var returnItem = {
				teamID: aboutPage.teamID,
				slides: aboutPage.slides,
				mainHeader: aboutPage.mainHeader,
				blocks: aboutPage.blocks,
				portfolioHeader: aboutPage.portfolioHeader,
				iconData: aboutPage.iconData,
			};
			res.send(returnItem);
		});
	});

	app.get('/api/getMerchItem', function(req, res) {
		var itemID = req.query.item;
		Item.getItemByID(itemID, function(err, item) {
			if (err) {
				console.log(err);
				res.send({error: "503: Database Error"});
				return;
			}
			if (item == null) {
				res.send({error: "Item Not Found"});
				return;
			}
			var returnItem = {
				itemID: item.itemID,
				image: item.image,
				name: item.name,
				priceInCents: item.priceInCents,
				fullDescription: item.fullDescription,
				shortDescription: item.shortDescription,
				maxQuantity: item.maxQuantity,
				//-1 represents infinite stock (eg membership)
				stock: item.stock
			};
			res.send(returnItem);
		});
	});

	app.get('/api/getStorefront', function(req, res) {
		var storeID = req.query.team;
		if (storeID == null) storeID = "membership";
		Store.getStorefrontByID(storeID, function(err, store) {
			if (err) {
				console.log(err);
				res.send({error: "503: Database Error"});
			}
			if (store == null) {
				res.send({error: "Item Not Found"});
				return;
			}
			var returnItem = {
				storeID: store.storeID,
				slides: store.slides,
				items: store.items,
			};
			res.send(returnItem);
		})
	});

	app.get('/api/checkUsername', function(req, res) {
		User.findUser(req.query.username.trim(), function(err, user) {
			res.send({ usernameExists: (user != null) });
		});
	});

	/*
	// Registers a new account. Also logs the new account in.
	app.post('/api/register', function(req, res) {
		// Helper function: Returns "" if the username is valid, an error message
		// otherwise.

		var validateUsername = function(username) {
			username = username.trim();
			if (!username) {
				return "Username: A username is required.";
			}
			if (username.length < 5) {
				return "Username: Username must be at least 5 characters long.";
			}
			if (!/^[a-zA-Z0-9]+$/i.test(username)) {
				return "Username: Username must be alphanumeric.";
			}
			//Username check will happen separately, since it involves a callback.
			return "";
		}

		// Similarly, returns an error string if there's a problem, otherwise 
		// returns ""
		var validatePassword = function(password) {
			if (password == null) 
				return "Password: A Password is required.";
			if (password.length < 10)
				return "Password: Password must be at least 10 characters long.";
			return "";
		}

		var validateName = function(name) {
			if (name == null) {
				return "Name: Names are required.";
			}
			if (!/^[a-zA-Z \-']+$/.test(name)) {
				return "Name: Name is not alphabetical.";
			}
			return "";
		}

		var validateDigits = function(uid, digitCount) {
			if (uid == null) {
				return "";
			}
			if (uid.length != digitCount) {
				return "UID or Phone Number: Incorrect digit count.";
			}
			if (!/^[0-9]+$/.test(uid)) {
				return "UID or Phone Number: Not Digit String";
			}
			return "";
		}

		var validateGradYear = function(gradYear) {
			if (gradYear == null) {
				return "";	
			}
			if (parseInt(gradYear) == NaN || parseInt(gradYear) < 0) {
				return "GradYear: Not a valid input."
			}
			return "";
		}

		var validateEmail = function(email) {
			if (email == null) {
				return "Email: Email is required.";
			}
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!re.test(email)) {
				return "Email: Email is invalid.";
			}
			return "";
		}

		var validateInterests = function(interests, interestList) {
			console.log(interests.length);
			var validInterests = interestList;
			for (var i = 0; i < interests.length; i++) {
				if (!(validInterests.indexOf(interests[i]) >= 0)) {
					return "Interests: Invalid interest: " + interests[i];
				}
			}
			return "";
		}
		
		var shouldExit = function(error) {
			if (error != "") {
				res.send({ error: error });
				console.log("Error!");
				return true;
			}
			return false;
		}

		var username = req.body.username.trim();
		if (shouldExit(validateUsername(username))) {
			return;
		}

		var usernameLower = username.toLowerCase();
		
		var password = req.body.password;
		if (shouldExit(validatePassword(password))) {
			return;
		}

		var firstName = req.body.firstName.trim();
		if (shouldExit(validateName(firstName))) {
			return;
		}

		var lastName = req.body.lastName.trim();
		if (shouldExit(validateName(lastName))) {
			return;
		}

		var uid = req.body.uid;
		if (shouldExit(validateDigits(uid, 9))) {
			return;
		}

		var gradYear = req.body.gradYear;
		if (shouldExit(validateGradYear(gradYear))) {
			return;
		}

		var phoneNumber = req.body.phoneNumber;
		if (shouldExit(validateDigits(phoneNumber, 10))) {
			return;
		}

		var email = req.body.email;
		if (shouldExit(validateEmail(email))) {
			return;
		}

		// var interests = req.body.interests;
		// if (interests == null) interests = [];
		// if (shouldExit(validateInterests(interests))) {
		// 	return;
		// }

		//Validate interests. This has to be a separate call since we read the team list dynamically.
		Teams.findOne({}, function(err, teamlist) {
			
			var interests = req.body.interests;
			if (interests == null) interests = [];
			if (shouldExit(validateInterests(interests, teamlist.teamIDs))) {
				return;
			}

			console.log("Input valid...");
			User.findOne({ usernameLower: usernameLower }, function(err, user) {
				if (err) {
					console.log(err);
					return res.send({ error: err });
				}
				if (user != null) {
					console.log(user);
					// Username exists, block it
					return res.send({ error: "Username: Username is already taken." });
				}
				else {
					console.log("Registration okay to go, starting");
					// Add the account. 
					var user = new User({
					// console.log({
						username: username,
						usernameLower: usernameLower,
						permissions: "user",
						firstName: firstName,
						lastName: lastName,
						email: email,
						gradYear: gradYear,
						UID: uid,
						phoneNumber: phoneNumber,
						interests: interests
					});
					user.password = user.generateHash(password);
					user.save();
					// setLogin(res, username, password);
					setLogin(res, username, password);
					res.send({ status: "done" });
					console.log("Super done");
				}
			});
		})
	});

	*/
	app.post('/api/register', function(req, res) {
		var username = req.body.username.trim();
		var password = req.body.password;
		var interests = req.body.interests;
		if (interests == null) interests = [];
		User.register({
				username: req.body.username.trim(),
				password: req.body.password,
				firstName: req.body.firstName.trim(),
				lastName: req.body.lastName.trim(),
				uid: req.body.uid,
				gradYear: req.body.gradYear,
				phoneNumber: req.body.phoneNumber,
				email: req.body.email,
				interests: interests
			}, function(err) {
				if (err) {
					res.send({ error: err });
					console.log("Registration error! " + err);
					return;
				}
				else {
					res.cookie('username', username, { signed: true });
					res.cookie('password', auth.encrypt(password), { signed: true });
					console.log("Done with cookie");
					setLogin(res, username, password);
					res.send({ status: "done" });
					console.log("Super done");
				}
			}
		);
	});
	//The api call necessary for setting the cookie needed for calls that involve authentication.
	app.post('/api/login', function(req, res) {
		var username = req.body.username.trim();
		var password = req.body.password;

		/*
		User.findOne({ usernameLower: usernameLower }, function(err, user) {
			if (err) {
				console.log(err);
				return res.send({ error: err });
			}
			if (user == null) {
				console.log(user);
				return res.send({ error: "Username: Username not found!" });
			}
			else {
				//Found the username. 
				if (!user.validPassword(password)) {
					return res.send({ error: "Password: Password is invalid!" });
				}
				else {
					setLogin(res, username, password);
					return res.send({ status: "done" });
				}
			}
		});
		*/
		User.loginCheck({
				username: username,
				password: password
			}, function(err) {
				if (err) {
					return res.send({ error: err });
				}
				else {
					setLogin(res, username, password);
					return res.send({ status: "done" });
				}
			}
		);
	});
	
	console.log("Open Api up...");
	return app;
}