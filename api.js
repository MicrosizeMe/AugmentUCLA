//This code is responsible for managing calls made by the front end

//Input: An express application
module.exports = function(app) {

	var express = require('express');
	var path = require('path');
	var mongoose = require('mongoose');
	var About = require("./dbtemplates/about");

	app.get('/api/getAbout', function(req, res) {
		var teamID = req.query.team;
		if (teamID == null) teamID = 'augment';
		About.find({teamID: teamID}, function(err, aboutPage) {
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
		})
	});


	console.log("Api up...");
	return app;
}