var dbChoice = 'mongoose'; 

if (dbChoice == 'mongoose') {
	var mongoose = require('mongoose');

	var eventSchema = mongoose.Schema({
		id: String,
		title: String,
		startDate: Date,
		endDate: Date,
		aboutPageId: String,
		shortDescription: String,
	});

	// Returns a string representing the time in which an event is to occur.
	eventSchema.methods.getTimeString = function() {
		var returnString = "";
	};

	var Event = mongoose.model('Event', eventSchema);
	module.exports = {
		mongooseModel: Event,
		drop: function(callback) {
			Event.remove({}, callback);
		},
		initialize: function() {
			// var date = new Date(2011, 0, 0, 0, 0);
			var date = new Date(Date.now());
			console.log(date);
			console.log(date.toGMTString());
			console.log(date.toLocaleDateString());
			console.log(date.toLocaleTimeString());
			console.log(date);
			console.log(date.toDateString());
			new Event({
				id: "test",
				title: "test",
				startDate: new Date(2011, 8, 1),
				endDate: new Date(2011, 9, 1),
				aboutPageId: "augment",
				shortDescription: "Testing!"
			}).save();
		},
		//Get the result of a search with one team as the ID
		//Callback should have signature (err, aboutPage)
		getEventById: function(id, callback) {
			Event.findOne({id: id}, callback);
		}
	}
}