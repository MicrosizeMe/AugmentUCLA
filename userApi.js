//This code is responsible for managing calls made by the front end that require basic 
//authentication (eg not admin level operations). It does this by first establishing
//middleware that first verifies user credentials passed onto clients by cookies
//via setLogin. If the request fails authentication, it returns an authorization error. 

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

	//TODO
	var verifyLogin = function(req, res) {

	}

	console.log("User Api up...");
	return app;
}