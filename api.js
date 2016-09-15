//This code is responsible for managing calls made by the front end

//Input: An express application
module.exports = function(app) {

	var express = require('express');
	var path = require('path');
	var mongoose = require('mongoose');
	var About = require("./dbtemplates/about");
	var Item = require("./dbtemplates/item");
	var Store = require("./dbtemplates/store")

	app.get('/api/getAbout', function(req, res) {
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


	console.log("Api up...");
	return app;
}