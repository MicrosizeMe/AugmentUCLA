var dbChoice = 'mongoose'; 

if (dbChoice == 'mongoose') {
	var mongoose = require('mongoose');

	var aboutSchema = mongoose.Schema({
		id: String,
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
			imageSrc: String,
			title: String,
			description: String,
			socialMedia: [{
				imageLink: String,
				//Font awesome icon class specifically
				icon: String
			}]
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
				id: "augment",
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
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: "Something here!",
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-dropbox"
						}]
					},
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: null,
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						},
						{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						},
						{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						}]
					},
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: "Something here!",
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						}]
					},
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: "Something here!",
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						}]
					},
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: "Something here!",
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						}]
					},
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: "Something here!",
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						}]
					}
				]
			}).save();
			new About({
				id: "fall2016lan",
				slides: [
					{
						imageSrc: "/img/augment-ucla-fall-lan-2016.jpg",
						imageCaption: ""
					}
				],
				mainHeader: "UCLA Augment's FALL 2016 LAN PARTY",
				blocks: [
					{
							size: 12,
							title: "DETAILS",
							content: 
"\
<h3><b>\
DOORS OPEN AT 7:00 FOR PAID AUGMENT MEMBERS. Check-Ins begin at 6:30!\
</b></h3>\
<p>\
<h4><b> Frequently Asked Questions: </b></h4> \
<a href='https://www.figma.com/file/ZLh9Lgg5D2BRiMboSFrMXbCj/AUGment-LAN-FAQ'> \
https://www.figma.com/file/ZLh9Lgg5D2BRiMboSFrMXbCj/AUGment-LAN-FAQ\
</a>\
</p>\
\
<p>\
Join AUGment at Covel Commons: Grand Horizon Room A during \
Week 8 for our Fall LAN party powered by \
<a href='https://www.facebook.com/GBTXG/' target='_self'>GIGABYTE Xtreme Gaming</a> \
and \
<a href='https://www.facebook.com/iBuypowerPC/' target='_self'>iBUYPOWER!</a>\
</p>\
<p>\
20 gaming PCs provided by iBUYPOWER and 6 laptops provided by GIGABYTE Xtreme Gaming \
will feature free play for League of Legends, Overwatch, Hearthstone, Counter-Strike: \
Global Offensive, and Dota 2. Alongside our PC gaming counterparts, \
we will be featuring on-site, prized tournaments in Smash 4 and Smash Melee as well as \
the introduction of FIFA '17 under the AUGment banner!\
</p>\
\
<p><b>\
<a href='https://www.eventbrite.com/e/augment-week-8-lan-party-tickets-28812344498'>\
Please register your raffle ticket above on Eventbrite!\
</a></b> \
You must check-in at the \
registration table on site. Please register early to avoid the wait!\
</p>\
<p><b>Eventbrite Link: </b>\
<a href='https://www.eventbrite.com/e/augment-week-8-lan-party-tickets-28812344498'>\
https://www.eventbrite.com/e/augment-week-8-lan-party-tickets-28812344498 \
</a>\
</p>\
"
,
							linkText: null,
							linkUrl: "#"
						},
						{
							size: 6,
							title: "Prizing",
							content: 
"\
<h3>Tournament Prizing Distribution</h3>\
<p>\
<b>Please refer to the following post for the prizing distribution for this event:</b>\
<a href='https://www.facebook.com/AugmentUCLA/posts/719293758223080'>\
https://www.facebook.com/AugmentUCLA/posts/719293758223080\
</a>\
</p>\
\
<h3>Raffle</h3>\
<p>\
Along with the LAN, we will also be hosting 2 raffles throughout the night, the 1st featuring quality products from our friends over at GG Superstore \
(<a href='https://www.ggsuperstore.com/'>\
https://www.ggsuperstore.com/ \
</a>)\
featuring shot glasses, iPhone cases, and many more. The 2nd big raffle will feature GIGABYTE Xtreme Gaming Headsets, Mice, and Keyboards!\
</p>\
",
							linkText: null,
							linkUrl: "#"
						},
						{
							size: 6,
							title: "Featuring...",
							content: 
"\
<p>\
<b>Please refer to the following post for the prizing distribution for this event:</b>\
<a href='https://www.facebook.com/AugmentUCLA/posts/719293758223080'>\
https://www.facebook.com/AugmentUCLA/posts/719293758223080\
</a>\
</p>\
\
<p>\
<b>League of Legends:</b> Finals played on stage. \
</p>\
<p>\
<b>Overwatch:</b> Finals played on stage.\
</p>\
<p>\
<b>Hearthstone:</b> REGISTER HERE: \
<a href='https://battlefy.com/hearthstone-at-ucla/augment-week-8-lan-party-hearthstone/58297bb8d6424c3d03a3b2cb/info'>\
https://battlefy.com/hearthstone-at-ucla/augment-week-8-lan-party-hearthstone/58297bb8d6424c3d03a3b2cb/info\
</a>\
</p>\
\
<p>\
<b>FIFA '17:</b> On-site registration\
</p>\
\
<p>\
<b>Smash Melee:</b> On-site registration $1\
</p>\
\
<p>\
<b>Smash 4:</b> On-site registration $3, Free for AUG Members\
</p>\
\
<p>\
<b>CS:GO:</b> Free play station\
</p>\
\
<p>\
<b>Dota2:</b> Free play station\
</p>\
\
<p></p>\
<p>\
Please feel free to BYOC, as the wait for the free-play computers may be long!\
</p>\
\
<p>\
Those participating in the Grand Finals of our League of Legends and Overwatch tournaments will have access \
to top-of-the-line IBUYPOWER rigs on stage, with the game projected to an audience and played live! If you \
prefer to use your own peripherals we encourage you to bring your own. Otherwise, we will have keyboards, \
mice, and headsets on-location for you to borrow.\
</p>\
",
							linkText: null,
							linkUrl: "#"
						}
				],
				portfolioHeader: "A Special Thanks to Our Sponsors!",
				iconData: [
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: "Something here!",
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-dropbox"
						}]
					},
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: null,
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						},
						{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						},
						{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						}]
					},
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: "Something here!",
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						}]
					},
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: "Something here!",
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						}]
					},
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: "Something here!",
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						}]
					},
					{
						imageLink: "/",
						imageSrc: "http://www.mcclureco.com/images/home-mods/Icons-Industries-Mod/ind-mod-icon-k12.jpg",
						title: "Team Name",
						description: "Something here!",
						socialMedia: [{
							imageLink: "http://gaming.logitech.com/en-us",
							//Font awesome icon class specifically
							icon: "fa-facebook-square"
						}]
					}
				]
			}).save();
		},
		//Get the result of a search with one team as the ID
		//Callback should have signature (err, aboutPage)
		getPageForId: function(id, callback) {
			About.findOne({id: id}, callback);
		}
	}
}