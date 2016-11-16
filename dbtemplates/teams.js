var dbChoice = 'mongoose'; 

if (dbChoice == 'mongoose') {
	var mongoose = require('mongoose');

	var teamlistSchema = mongoose.Schema({
		teamIDs: [String]
	});

	var Teams = mongoose.model('Teams', teamlistSchema);

	var teamList = ["dota2", "smash4", "melee", "csgo", "league", "overwatch", "hearthstone"];

	module.exports = {
		//The actual mongoose module of the teams structure.
		mongooseModel: Teams,
		//The function used to initialize the relevant database table. Takes a callback to dictate
		//next actions.
		drop: function(callbackFunction) {
			Teams.remove(callbackFunction);
		},
		//Initialize the entries in the table. 
		initialize: function(err) {
			new Teams({
				teamIDs: teamList
			}).save();
		},
		getTeams: function() {
			return teamList;
		}
	};
}