// Approach for mongodb approach
var mongoose = require('mongoose');
var About = require("./dbtemplates/about");
var Item = require("./dbtemplates/item");
var Store = require("./dbtemplates/store");
var Data = require("./dbtemplates/staticData");
var Event = require("./dbtemplates/event");
var Calendar = require("./dbtemplates/calendar");

var credentials = require('./credentials.js');
var opts = {
	server: {
		socketOptions: {
			keepAlive: 1
		}
	}
};

mongoose.connect(credentials.mongo.connectionString, opts);