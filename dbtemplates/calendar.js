var dbChoice = 'mongoose'; 

if (dbChoice == 'mongoose') {
	var mongoose = require('mongoose');

	var calendarSchema = mongoose.Schema({
		id: String,
		title: String,
		iframeURL: String,
		events: [String]
	});

	var Calendar = mongoose.model('Calendar', calendarSchema);
	module.exports = {
		mongooseModel: Calendar,
		drop: function(callback) {
			Calendar.remove({}, callback);
		},
		initialize: function() {
			new Calendar({
				id: "augment",
				title: "Upcoming AUGment Events",
				iframeURL: "https://calendar.google.com/calendar/embed?src=acmbruins%40gmail.com&ctz=America/Los_Angeles",
				events: ["test", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10"]
			}).save();
		},
		//Get the result of a search with one team as the ID
		//Callback should have signature (err, aboutPage)
		getCalendarById: function(id, callback) {
			Calendar.findOne({id: id}, callback);
		}
	}
}