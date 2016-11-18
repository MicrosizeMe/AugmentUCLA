//Routing handled here.

//app: Express application. 
module.exports = function(app) {

	var express = require('express');
	var path = require('path');

	app.get('/admin-controls', function(req, res) {
		res.sendFile(path.join(__dirname, 'adminPages/admin-controls.html'));
	});

	app.use('/', express.static('adminPages'));

	console.log("Admin Routes established...")

	return app;
};
