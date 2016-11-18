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
				priceInCents: 1500,
				fullDescription: 
				"<h3>\
				The one stop membership for AUGment! Get access to all of our benefits, including:\
				</h3>\
				<ul>\
				\
				\
				<li>Priority access to all AUG generalized gaming events which includes tournaments, events, and LANs!\
				<ul>\
				<li>30min+ Early Access to events! Get first dibs on equipment!</li>\
				<li>Free/Discounted entry</li>\
				<li>Priority registration for tournaments</li>\
				</ul>\
				</li>\
				\
				\
				<li>Discounts at local businesses!\
				<ul>\
				<li>10% Frostalicious</li>\
				<li>10% Koala T</li>\
				<li>10% Seoul Sausage Co</li>\
				<li>10% Volcano Tea</li>\
				<li>and more to come!</li>\
				</ul>\
				</li>\
				\
				\
				<li>Access to a special per quarter raffle during lans!</li>\
				<li>Discounted AUG T-shirts + swag.</li>\
				<li>A plastic membership card! <small><small><small>so shiney</small></small></small></li>\
				</ul>\
				\
				<h3>...And membership benefits for ALL of our clubs, from League to Overwatch!",
				shortDescription: 
					"<p>Priority access to all of our club events \
					for the entire year!</p>",
				maxQuantity: 1,
				purchasable: false,
				stock: -1
			}).save();
			new Item({
				itemID:  "2",
				image: "/img/tespa-membership-box.png",
				name: "Tespa Membership",
				priceInCents: 1000,
				fullDescription: 
				"<h3>Tespa connects gamers across the country to each other and to the world of collegiate esports.</h3>\
				<p><b>TL;DR:</b> Whether you enjoy gaming with friends or have ambitions to compete on the biggest \
				stages in esports, Tespa gives college students the best opportunities to realize and embrace \
				their passion for gaming.</p>\
				<p>With over 191 chapters across the US and Canada, Tespa connects gamers the nation over \
				with tournaments, swag boxes, scholarships, and more!</p>\
				<p><b>By signing up with AUGment, you get everything in the membership box, shown above,\
				as well as a Tespa exclusive card back!</b>\
				This includes a t-shirt, lanyard, sunglasses, and a flame keycap for your mechanical keyboard!</p>\
				\
				",
				shortDescription: "<p>Access to swag box and membership in an intercollegiate group!</p>",
				maxQuantity: 1,
				purchasable: false,
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