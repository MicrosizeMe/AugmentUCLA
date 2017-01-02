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
				title: "Upcomming Augment Events",
				iframeURL: "https://calendar.google.com/calendar/embed?src=acmbruins%40gmail.com&ctz=America/Los_Angeles",
				events: ["test"]
			}).save();
		},
		//Get the result of a search with one team as the ID
		//Callback should have signature (err, aboutPage)
		getCalendarById: function(id, callback) {
			Calendar.findOne({id: id}, callback);
		}
	}
}