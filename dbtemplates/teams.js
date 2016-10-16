var mongoose = require('mongoose');

var teamlistSchema = mongoose.Schema({
	teamIDs: [String]
});

var Teams = mongoose.model('Teams', teamlistSchema);
module.exports = Teams;