// Approach for mongodb approach
var mongoose = require('mongoose');
var About = require("./dbtemplates/about");
var Item = require("./dbtemplates/item");
var Store = require("./dbtemplates/store");
var Teams = require("./dbtemplates/teams")

var credentials = require('./credentials.js');
var opts = {
	server: {
		socketOptions: {
			keepAlive: 1
		}
	}
};

mongoose.connect(credentials.mongo.connectionString, opts);

Teams.drop(Teams.initialize);

About.drop(About.initialize);

Item.drop(Item.initialize);

Store.drop(Store.initialize);