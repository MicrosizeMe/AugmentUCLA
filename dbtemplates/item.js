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
module.exports = Item;