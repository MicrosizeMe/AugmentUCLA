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
						imageSrc: "http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg",
						imageCaption: "I should buy a boat!"
					},
					{
						imageSrc: "http://www.planwallpaper.com/static/images/techno_wallpaper_2_0_hd_by_gredius-d5o48do.jpg",
						imageCaption: "Starrrs"
					},
					{
						imageSrc: "http://www.planwallpaper.com/static/images/Desktop-Wallpaper-HD2.jpg",
						imageCaption: "Balooooons"
					},
					{
						imageSrc: "http://www.intrawallpaper.com/static/images/wallpaper__eeveelution_rainbow_by_arkeis_pokemon-d49kjyc.jpg",
						imageCaption: "What a nerd!"
					}
				],
				items: [
					"1"
				]
			}).save();
		},
		getStorefrontByID: function(storeID, callback) {
			Store.findOne({storeID: storeID}, callback);
		}
	};
}