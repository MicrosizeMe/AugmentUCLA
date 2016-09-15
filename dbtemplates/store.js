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
module.exports = Store;