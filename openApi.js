//This code is responsible for managing calls made by the front end that do not require
//authentication.

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var About = require("./dbtemplates/about");
var Item = require("./dbtemplates/item");
var Store = require("./dbtemplates/store");
var User = require("./dbtemplates/userCore");

var auth = require('./auth')

//Input: An express application
module.exports = function(app) {

	var setLogin = function(res, username, password) {
		console.log("Setting cookie");
		res.cookie('username', username);
		res.cookie('password', auth.encrypt(password), { signed: true });
	}

	app.get('/api/getAbout', function(req, res) {
		var id = req.query.id;
		if (id == null) id = 'fall2016lan';
		About.getPageForId(id, function(err, aboutPage) {
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
				id: aboutPage.id,
				slides: aboutPage.slides,
				title: aboutPage.title,
				sectionBlocks: aboutPage.sectionBlocks,
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
			console.log(returnItem);
			res.send(returnItem);
		})
	});

	app.get('/api/checkUsername', function(req, res) {
		User.findUser(req.query.username.trim(), function(err, user) {
			res.send({ usernameExists: (user != null) });
		});
	});

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
					// Commented out automatic login for event.
					// res.cookie('username', username, { signed: true });
					// res.cookie('password', auth.encrypt(password), { signed: true });
					// console.log("Done with cookie");
					// setLogin(res, username, password);
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