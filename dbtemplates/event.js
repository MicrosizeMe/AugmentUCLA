var dbChoice = 'mongoose'; 

if (dbChoice == 'mongoose') {
	var mongoose = require('mongoose');

	var eventSchema = mongoose.Schema({
		id: String,
		title: String,
		startDate: Date,
		endDate: Date,
		aboutPageId: String,
		shortDescription: String
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

			new Event({
				id: "test3",
				title: "test2",
				startDate: new Date(2020, 9, 1),
				endDate: new Date(2020, 10, 1),
				aboutPageId: "augment",
				shortDescription: "Testing!"
			}).save();

			new Event({
				id: "test2",
				title: "test2",
				startDate: new Date(2020, 8, 1),
				endDate: new Date(2020, 9, 1),
				aboutPageId: "augment",
				shortDescription: "Testing!"
			}).save();

			new Event({
				id: "test4",
				title: "test2",
				startDate: new Date(2020, 10, 1),
				endDate: new Date(2020, 11, 1),
				aboutPageId: "augment",
				shortDescription: "Testing!"
			}).save();

			new Event({
				id: "test5",
				title: "test2",
				startDate: new Date(2020, 10, 1),
				endDate: new Date(2020, 11, 1),
				aboutPageId: "augment",
				shortDescription: "Testing!"
			}).save();

			new Event({
				id: "test6",
				title: "test2",
				startDate: new Date(2020, 10, 1),
				endDate: new Date(2020, 11, 1),
				aboutPageId: "augment",
				shortDescription: "Testing!"
			}).save();

			new Event({
				id: "test7",
				title: "test2",
				startDate: new Date(2020, 10, 1),
				endDate: new Date(2020, 11, 1),
				aboutPageId: "augment",
				shortDescription: "Testing!"
			}).save();

			new Event({
				id: "test8",
				title: "test2",
				startDate: new Date(2020, 10, 1),
				endDate: new Date(2020, 11, 1),
				aboutPageId: "augment",
				shortDescription: "Testing!"
			}).save();

			new Event({
				id: "test9",
				title: "test2",
				startDate: new Date(2020, 10, 1),
				endDate: new Date(2020, 11, 1),
				aboutPageId: "augment",
				shortDescription: "Testing!"
			}).save();

			new Event({
				id: "test10",
				title: "test2",
				startDate: new Date(2020, 10, 1),
				endDate: new Date(2020, 11, 1),
				aboutPageId: "augment",
				shortDescription: "Testing!"
			}).save();
		},
		getEventById: function(id, callback) {
			Event.findOne({id: id}, callback);
		},
		// Get the result of a search for all events in a list
		// later than the current date, sorted by date. 
		// Limited to 10 events unless a limit is specified. Limit
		// of 0 is no limit.
		// Page number (defaults to 0) specifies which set we start from.
		getEventsById: function(ids, callback, limit, pageNumber) {
			if (limit === undefined) 
				limit = 10;
			if (pageNumber === undefined)
				pageNumber = 0;
			Event.find({ 
				id: { $in: ids }, 
				endDate: { $gte: Date(Date.now()) }
			}).
			sort({startDate: 1}).
			limit(limit).
			skip(pageNumber * limit).
			exec(callback);
		}
	}
}