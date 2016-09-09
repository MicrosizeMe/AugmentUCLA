// Approach for mongodb approach
var mongoose = require('mongoose');
var credentials = require('./credentials.js')
var opts = {
	server: {
		socketOptions: {
			keepAlive: 1
		}
	}
};

mongoose.connect(credentials.mongo.connectionString, opts);