var mongoose = require('mongoose');

var aboutSchema = mongoose.Schema({
	teamID: String,
	slides: [{
		imageSrc: String,
		imageCaption: String
	}],
	mainHeader: String,
	blocks: [{
		size: Number,
		title: String,
		content: String,
		linkText: String,
		linkUrl: String
	}],
	portfolioHeader: String,
	iconData: [{
		imageLink: String,
		imageSrc: String
	}]
});

var About = mongoose.model('About', aboutSchema);
module.exports = About;