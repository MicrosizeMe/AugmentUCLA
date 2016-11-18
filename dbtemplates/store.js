var dbChoice = 'mongoose'; 

if (dbChoice == 'mongoose') {
	var mongoose = require('mongoose');

	var storeSchema = mongoose.Schema({
		storeID: String,
		slides: [
			{
				imageSrc: String,
				imageCaption: String
			}
		],
		//A collection of item IDs to later be crossed referenced with individual item calls
		items: [String]
	})

	var Store = mongoose.model("Store", storeSchema);
	module.exports = {
		mongooseModel: Store,
		drop: function(callback) {
			Store.remove(callback)
		},
		initialize: function(err) {
			new Store({
				storeID: "membership",
				slides: [
					{
						imageSrc: "/img/league-wallpaper.jpg",
						imageCaption: "Membership for League..."
					},
					{
						imageSrc: "/img/hearthstone-wallpaper.jpg",
						imageCaption: "Hearthstone..."
					},
					{
						imageSrc: "/img/smash-4-wallpaper.png",
						imageCaption: "Smash..."
					},
					{
						imageSrc: "/logos/augmentlogonontransparent.png",
						imageCaption: "And more! Pick up a membership!"
					}
				],
				items: [
					"1", "2"
				]
			}).save();
		},
		getStorefrontByID: function(storeID, callback) {
			Store.findOne({storeID: storeID}, callback);
		}
	};
}