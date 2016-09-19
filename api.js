//This code is responsible for managing calls made by the front end

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var About = require("./dbtemplates/about");
var Item = require("./dbtemplates/item");
var Store = require("./dbtemplates/store");
var User = require("./dbtemplates/user-core");
//Input: An express application
module.exports = function(app) {


	app.get('/api/getAbout', function(req, res) {
		console.log(req.protocol);
		var teamID = req.query.team;
		if (teamID == null) teamID = 'augment';
		About.find({teamID: teamID}, function(err, aboutPage) {
			if (err) {
				console.log(err);
				res.send({error: "503: Database Error"});
				return;
			}
			if (aboutPage.length == 0) {
				res.send({error: "Page Not Found"});
				return;
			}
			aboutPage = aboutPage[0];
			console.log(aboutPage);
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
		Item.find({itemID: itemID}, function(err, items) {
			if (err) {
				console.log(err);
				res.send({error: "503: Database Error"});
				return;
			}
			if (items.length == 0) {
				res.send({error: "Item Not Found"});
				return;
			}
			item = items[0]; 
			console.log(item);
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
		Store.find({storeID: storeID}, function(err, storefronts) {
			if (err) {
				console.log(err);
				res.send({error: "503: Database Error"});
			}
			store = storefronts[0];
			console.log(store);
			var returnItem = {
				storeID: store.storeID,
				slides: store.slides,
				items: store.items,
			};
			res.send(returnItem);
		})
	});

	app.get('/api/checkUsername', function(req, res) {
		User.find({ username: req.query.username }, function(user) {
			res.send({ usernameExists: (user != null) });
		});
	})

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
			if (!/^[a-zA-Z]+$/.test(name)) {
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
			if (parseInt(gradYear) == NaN || parseInt(gradYear) <= 0) {
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
		
		var errorValidate = function(error) {
			if (error != "") {
				res.send({ error: error });
			}
			return;
		}

		var username = req.body.username.trim();
		errorValidate(validateUsername(username));
		
		var password = req.body.password;
		errorValidate(validatePassword(password));

		var firstName = req.body.firstName.trim();
		errorValidate(validateName(firstName));

		var lastName = req.body.lastName.trim();
		errorValidate(validateName(lastName));

		var uid = req.body.uid;
		errorValidate(validateDigits(uid, 9));

		var gradYear = req.body.gradYear;
		errorValidate(validateGradYear(gradYear));

		var phoneNumber = req.body.phoneNumber;
		errorValidate(validateDigits(phoneNumber, 10));

		var email = req.body.email;
		errorValidate(validateEmail(email));

		User.find({ username: username }, function(user) {
			if (user != null) {
				// Username exists, block it
				res.send({ error: "Username: Username is already taken." });
			}
			else {
				// Add the account. 
				new User({
				// console.log({
					username: username,
					password: User.methods.generateHash(password),
					permissions: "user",
					firstName: firstName,
					lastName: lastName,
					email: email,
					gradYear: gradYear,
					UID: uid,
					phoneNumber: phoneNumber
				}).save();
				res.send({ status: "done" });
			}
		});
	});


	console.log("Api up...");
	return app;
}