//Routing handled here.

//app: Express application. 
module.exports = function(app) {

	var express = require('express');
	var path = require('path');

	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/about.html'));
	});

	app.get('/about', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/about.html'));
	});

	app.get('/sponsors', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/sponsors.html'));
	});

	app.get('/tournament', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/tournament.html'));
	});

	app.get('/calendar', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/calendar.html'));
	});

	app.get('/contact', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/contact.html'));
	});

	app.get('/blogpost', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/blog-post.html'));
	});

	app.get('/register', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/register.html'));
	});

	app.get('/login', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/login.html'));
	});

	app.get('/item', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/item.html'));
	});

	app.get('/merch', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/merch.html'));
	});

	app.get('/settings', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/settings.html'));
	});

	app.get('/orders', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/orders.html'));
	});

	app.get('/cart', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/cart.html'));
	});

	app.get('/checkout', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/checkout.html'));
	});

	app.get('/confirmation', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/confirmation.html'));
	});

	app.get('/thanks', function(req, res) {
		res.sendFile(path.join(__dirname, 'webpages/thanks.html'));
	});

	app.use('/', express.static('webpages'));

	console.log("Routes established...")

	return app;
};
