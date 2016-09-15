// Approach for mongodb approach
var mongoose = require('mongoose');
var About = require("./dbtemplates/about");
var Item = require("./dbtemplates/item");
var Store = require("./dbtemplates/store");

var credentials = require('./credentials.js')
var opts = {
	server: {
		socketOptions: {
			keepAlive: 1
		}
	}
};

mongoose.connect(credentials.mongo.connectionString, opts);

//Establish team pages
currentAboutPageCount = 1;

About.find(function(err, aboutPages) {
	if (err) return console.error(err);
	if (aboutPages.length >= currentAboutPageCount) return;
	new About({
		teamID: "augment",
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
		mainHeader: "UCLA Augment: We kick ass and punch kittens.",
		blocks: [
			{
					size: 12,
					title: "About",
					content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?",
					linkText: null,
					linkUrl: "#"
				},
				{
					size: 4,
					title: "Upcoming Tournaments",
					content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?",
					linkText: "Click my face!",
					linkUrl: "#"
				},
				{
					size: 4,
					title: "Meeting Times",
					content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?",
					linkText: null,
					linkUrl: "#"
				},
				{
					size: 4,
					title: "Contact Info",
					content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?",
					linkText: null,
					linkUrl: "#"
				}
		],
		portfolioHeader: "Teams",
		iconData: [
			{
				imageLink: "/",
				imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg"
			},
			{
				imageLink: "/",
				imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg"
			},
			{
				imageLink: "/",
				imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg"
			},
			{
				imageLink: "/",
				imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg"
			},
			{
				imageLink: "/",
				imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg"
			},
			{
				imageLink: "/",
				imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg"
			}
		]
	}).save();
});

var itemCount = 5;
//Establish items
Item.find(function(err, items) {
	if (err) return console.error(err);
	if (items.length >= itemCount) return;
	Item.remove(function(err) {
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
	});
});


var storeCount = 5;
//Establish storefronts
Store.find(function(err, stores) {
	if (err) return console.error(err);
	if (stores.length >= storeCount) return;
	Store.remove(function(err) {
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
	})
})