var dbChoice = 'mongoose'; 

if (dbChoice == 'mongoose') {
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
	module.exports = {
		mongooseModel: About,
		drop: function(callback) {
			About.remove({}, callback);
		},
		initialize: function() {
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
		},
		//Get the result of a search with one team as the ID
		//Callback should have signature (err, aboutPage)
		getPageForTeam: function(teamID, callback) {
			About.findOne({teamID: teamID}, callback);
		}
	}
}