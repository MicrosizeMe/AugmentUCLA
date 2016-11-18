var dbChoice = 'mongoose'; 

if (dbChoice == 'mongoose') {
	var mongoose = require('mongoose');

	var staticDataSchema = mongoose.Schema({
		key: String,
		data: [String]
	});

	var Data = mongoose.model('StaticData', staticDataSchema);

	var teamList = ["dota2", "smash4", "melee", "csgo", "league", "overwatch", "hearthstone"];
	var memberships = ['augment', 'tespa'];

	module.exports = {
		//The actual mongoose module of the teams structure.
		mongooseModel: Data,
		//The function used to initialize the relevant database table. Takes a callback to dictate
		//next actions.
		drop: function(callbackFunction) {
			Data.remove(callbackFunction);
		},
		//Initialize the entries in the table. 
		initialize: function(err) {
			new Data({
				key: 'teams',
				data: teamList
			}).save();
			new Data({
				key: 'memberships',
				datas: memberships
			}).save();
		},
		getTeams: function() {
			return teamList;
		}, 
		getMemberships: function() {
			return memberships;
		}
	};
}