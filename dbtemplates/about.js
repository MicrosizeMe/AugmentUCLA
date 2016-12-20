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
				blocks: 
				[
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
								Please register your raffle ticket on Eventbrite!\
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
						imageLink: "http://www.gigabyte.us/",
						imageSrc: "/img/gigabyte-xg.png",
						title: "Gigabyte Xtreme Gaming",
						description: 
							"<p>Gigabyte is a PC parts company that owns the Xtreme Gaming \
							brand of products. They sponsor AUGment through providing prizing \
							for tournaments, raffles, as well as hardware like laptops and in \
							the near future, PCs.\
							</p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/GIGABYTE.US/",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://www.youtube.com/user/GIGABYTEChannel",
								//Font awesome icon class specifically
								icon: "fa-youtube"
							},
							{
								imageLink: "https://www.instagram.com/gigabyte_official/",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
						]
					},
					{
						imageLink: "http://www.ibuypower.com/",
						imageSrc: "/img/IBUYPOWER.png",
						title: "iBUYPOWER",
						description: 
							"<p>iBUYPOWER specializes in building top-of-the-line custom \
							gaming PCs for all price points. They sponsor AUGment through \
							loaner PCs and other prizing.\
							</p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/iBuypowerPC",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://twitter.com/iBUYPOWER",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.youtube.com/user/ibuypower",
								//Font awesome icon class specifically
								icon: "fa-youtube"
							},
							{
								imageLink: "https://www.instagram.com/ibuypowerpc/",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
						]
					},
					{
						imageLink: "http://www.sceptre.com/",
						imageSrc: "/img/sceptre.png",
						title: "Sceptre",
						description: 
							"<p>Sceptre is a leading innovator in 4k display and high definition \
							TV’s and monitors. Relative newcomers to gaming, Sceptre has now reapplied \
							its expertise and knowledge gleaned from its development of TV’s and refocused \
							them into creating the perfect line of gaming monitors. Sceptre sponsors AUGment \
							through prizing, as well as loaning of monitors for AUGment LANs and tournaments.\
							</p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/SceptreInc",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://twitter.com/SceptreDisplay",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.instagram.com/sceptretv/",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
						]
					},
					{
						imageLink: "http://easywaysusa.com/",
						imageSrc: "/img/volcano-tea-logo.png",
						title: "Volcano Tea House (Sawtelle)",
						description: 
							"<p>Founded in 2001, Volcano Tea House launched its California flagship store \
							in West Los Angeles and followed quickly with this location in Sawtelle. We \
							continue to strive to produce superior products, fast and friendly service, \
							and provide a relaxing environment for our patrons while showcasing the finest \
							ingredients and authentic boba recipes.\
							</p>\
							<p><b>Get 20% off your order when you show an AUGment ID!</b></p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/pg/VolcanoTeaHouse/",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://twitter.com/volcanoteahouse",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.instagram.com/volcanoteahouse/",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
						]
					},
					{
						imageLink: "http://www.koalatcafe.com/",
						imageSrc: "/img/koala-t.png",
						title: "Koala T Cafe",
						description: 
							"<p>The earliest vision of Koala T was born out of the UCLA campus \
							when two students sought to cater delicious, quality eats and boba \
							to their fellow Bruins, college students who appreciated a well-crafted \
							meal at a reasonable price. In addition to being the home of an award-winning \
							chef, Koala T strives to become a leading fixture within the Westwood community. \
							Our work with UCLA-based organizations through fundraisers and sponsorships are \
							a testament to our commitment to create relationships with the student body of \
							nearby campuses.\
							</p>\
							<p><b>Get 10% off your order when you show an AUGment ID!</b></p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/koalatcafe",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://twitter.com/koalatcafe",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.instagram.com/koalatcafe",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
							{
								imageLink: "https://www.yelp.com/biz/koala-t-caf%C3%A9-los-angeles",
								//Font awesome icon class specifically
								icon: "fa-yelp"
							},
						]
					},
					{
						imageLink: "http://frostaliciousnow.com/",
						imageSrc: "/img/frostalicious.png",
						title: "Frostalicious Shaved Snow",
						description: 
							"<p>Light as a snowflake, fluffy as a cloud, Frostalicious takes \
							Taiwanese shaved ice to new heights. From the very first bite, your \
							taste buds spring to life. As the rich, delicious ribbons swirl around \
							your tongue, you bask in icy ecstasy. And that’s just the first spoonful.\
							</p>\
							<p><b>Get 10% off your order when you show an AUGment ID!</b></p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/frostalicious/",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://www.instagram.com/frosta_licious/",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.yelp.com/biz/frostalicious-los-angeles?osq=frostalicious+snow",
								//Font awesome icon class specifically
								icon: "fa-yelp"
							},
						]
					},
					{
						imageLink: "http://www.seoulsausage.com/",
						imageSrc: "/img/seoul-sauasge.png",
						title: "Seoul Sausage",
						description: 
							"<p>In less than three years. <b>Seoul Sausage Company</b> has \
							become the premier force behind <b>cutting edge Korean BBQ.</b> \
							What began as a tiny catering company run out of their apartment \
							kitchen, Seoul Sausage is now a multi-faceted culinary enterprise \
							comprised of two acclaimed restaurants (West LA and Downtown LA), \
							two food trucks, a customized grilling scion and an in-demand \
							catering company.\
							</p>\
							<p>\
							Founded by brothers Ted and Yong Kim alongside Chef Chris Oh, \
							Seoul Sausage Company broke onto the public’s awareness\
							when they <b>won Season 3 of The Great Food Truck Race,</b> \
							Food Network’s second highest rated show. Now, food celebrities \
							such as Alton Brown, Giada De Laurentis and Bobby Flay frequent \
							their store during TV shoots to munch on their favorite dishes.\
							</p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/SeoulSausage/",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://twitter.com/SeoulSausage/",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.instagram.com/seoulsausage/",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
							{
								imageLink: 
									"https://www.yelp.com/biz/seoul-sausage-company-los-angeles-2",
								//Font awesome icon class specifically
								icon: "fa-yelp"
							},
						]
					},
				]
			}).save();
			new About({
				id: "sponsors",
				slides: [
					{
						imageSrc: "/img/augment-ucla-fall-lan-2016.jpg",
						imageCaption: ""
					}
				],
				mainHeader: "A Special Thanks to Our Sponsors!",
				blocks: 
				[
					{
						size: 12,
						title: "",
						content: 
							"",
						linkText: null,
						linkUrl: "#"
					}
				],
				portfolioHeader: "A Special Thanks to Our Sponsors!",
				iconData: [
					{
						imageLink: "http://www.gigabyte.us/",
						imageSrc: "/img/gigabyte-xg.png",
						title: "Gigabyte Xtreme Gaming",
						description: 
							"<p>Gigabyte is a PC parts company that owns the Xtreme Gaming \
							brand of products. They sponsor AUGment through providing prizing \
							for tournaments, raffles, as well as hardware like laptops and in \
							the near future, PCs.\
							</p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/GIGABYTE.US/",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://www.youtube.com/user/GIGABYTEChannel",
								//Font awesome icon class specifically
								icon: "fa-youtube"
							},
							{
								imageLink: "https://www.instagram.com/gigabyte_official/",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
						]
					},
					{
						imageLink: "http://www.ibuypower.com/",
						imageSrc: "/img/IBUYPOWER.png",
						title: "iBUYPOWER",
						description: 
							"<p>iBUYPOWER specializes in building top-of-the-line custom \
							gaming PCs for all price points. They sponsor AUGment through \
							loaner PCs and other prizing.\
							</p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/iBuypowerPC",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://twitter.com/iBUYPOWER",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.youtube.com/user/ibuypower",
								//Font awesome icon class specifically
								icon: "fa-youtube"
							},
							{
								imageLink: "https://www.instagram.com/ibuypowerpc/",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
						]
					},
					{
						imageLink: "http://www.sceptre.com/",
						imageSrc: "/img/sceptre.png",
						title: "Sceptre",
						description: 
							"<p>Sceptre is a leading innovator in 4k display and high definition \
							TV’s and monitors. Relative newcomers to gaming, Sceptre has now reapplied \
							its expertise and knowledge gleaned from its development of TV’s and refocused \
							them into creating the perfect line of gaming monitors. Sceptre sponsors AUGment \
							through prizing, as well as loaning of monitors for AUGment LANs and tournaments.\
							</p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/SceptreInc",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://twitter.com/SceptreDisplay",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.instagram.com/sceptretv/",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
						]
					},
					{
						imageLink: "http://easywaysusa.com/",
						imageSrc: "/img/volcano-tea-logo.png",
						title: "Volcano Tea House (Sawtelle)",
						description: 
							"<p>Founded in 2001, Volcano Tea House launched its California flagship store \
							in West Los Angeles and followed quickly with this location in Sawtelle. We \
							continue to strive to produce superior products, fast and friendly service, \
							and provide a relaxing environment for our patrons while showcasing the finest \
							ingredients and authentic boba recipes.\
							</p>\
							<p><b>Get 20% off your order when you show an AUGment ID!</b></p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/pg/VolcanoTeaHouse/",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://twitter.com/volcanoteahouse",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.instagram.com/volcanoteahouse/",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
						]
					},
					{
						imageLink: "http://www.koalatcafe.com/",
						imageSrc: "/img/koala-t.png",
						title: "Koala T Cafe",
						description: 
							"<p>The earliest vision of Koala T was born out of the UCLA campus \
							when two students sought to cater delicious, quality eats and boba \
							to their fellow Bruins, college students who appreciated a well-crafted \
							meal at a reasonable price. In addition to being the home of an award-winning \
							chef, Koala T strives to become a leading fixture within the Westwood community. \
							Our work with UCLA-based organizations through fundraisers and sponsorships are \
							a testament to our commitment to create relationships with the student body of \
							nearby campuses.\
							</p>\
							<p><b>Get 10% off your order when you show an AUGment ID!</b></p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/koalatcafe",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://twitter.com/koalatcafe",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.instagram.com/koalatcafe",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
							{
								imageLink: "https://www.yelp.com/biz/koala-t-caf%C3%A9-los-angeles",
								//Font awesome icon class specifically
								icon: "fa-yelp"
							},
						]
					},
					{
						imageLink: "http://frostaliciousnow.com/",
						imageSrc: "/img/frostalicious.png",
						title: "Frostalicious Shaved Snow",
						description: 
							"<p>Light as a snowflake, fluffy as a cloud, Frostalicious takes \
							Taiwanese shaved ice to new heights. From the very first bite, your \
							taste buds spring to life. As the rich, delicious ribbons swirl around \
							your tongue, you bask in icy ecstasy. And that’s just the first spoonful.\
							</p>\
							<p><b>Get 10% off your order when you show an AUGment ID!</b></p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/frostalicious/",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://www.instagram.com/frosta_licious/",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.yelp.com/biz/frostalicious-los-angeles?osq=frostalicious+snow",
								//Font awesome icon class specifically
								icon: "fa-yelp"
							},
						]
					},
					{
						imageLink: "http://www.seoulsausage.com/",
						imageSrc: "/img/seoul-sauasge.png",
						title: "Seoul Sausage",
						description: 
							"<p>In less than three years. <b>Seoul Sausage Company</b> has \
							become the premier force behind <b>cutting edge Korean BBQ.</b> \
							What began as a tiny catering company run out of their apartment \
							kitchen, Seoul Sausage is now a multi-faceted culinary enterprise \
							comprised of two acclaimed restaurants (West LA and Downtown LA), \
							two food trucks, a customized grilling scion and an in-demand \
							catering company.\
							</p>\
							<p>\
							Founded by brothers Ted and Yong Kim alongside Chef Chris Oh, \
							Seoul Sausage Company broke onto the public’s awareness\
							when they <b>won Season 3 of The Great Food Truck Race,</b> \
							Food Network’s second highest rated show. Now, food celebrities \
							such as Alton Brown, Giada De Laurentis and Bobby Flay frequent \
							their store during TV shoots to munch on their favorite dishes.\
							</p>\
							",
						socialMedia: [
							{
								imageLink: "https://www.facebook.com/SeoulSausage/",
								//Font awesome icon class specifically
								icon: "fa-facebook-square"
							},
							{
								imageLink: "https://twitter.com/SeoulSausage/",
								//Font awesome icon class specifically
								icon: "fa-twitter"
							},
							{
								imageLink: "https://www.instagram.com/seoulsausage/",
								//Font awesome icon class specifically
								icon: "fa-instagram"
							},
							{
								imageLink: 
									"https://www.yelp.com/biz/seoul-sausage-company-los-angeles-2",
								//Font awesome icon class specifically
								icon: "fa-yelp"
							},
						]
					},
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