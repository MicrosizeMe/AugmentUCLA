var dbChoice = 'mongoose'; 

if (dbChoice == 'mongoose') {
	var mongoose = require('mongoose');

	var itemSchema = mongoose.Schema({
		itemID: String,
		image: String,
		name: String,
		priceInCents: Number,
		fullDescription: String,
		shortDescription: String,
		maxQuantity: Number,
		//-1 represents infinite stock (eg membership)
		stock: Number
	});

	var Item = mongoose.model('Item', itemSchema);
	module.exports = {
		mongooseModel: Item,
		drop: function(callback) {
			Item.remove(callback);
		},
		initialize: function(err) {
			new Item({
				itemID:  "1",
				image: "/logos/augmentlogo.png",
				name: "Augment Membership",
				priceInCents: 500,
				fullDescription: "<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>",
				shortDescription: "<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>",
				maxQuantity: 1,
				purchasable: Boolean,
				stock: -1
			}).save();
		},
		//Get the result of a search for the specific item.
		//Callback should have signature (err, item)
		getItemByID: function(itemID, callback) {
			Item.findOne({itemID: itemID}, callback);
		}
	};
}