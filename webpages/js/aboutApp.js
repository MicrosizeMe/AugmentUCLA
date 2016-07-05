(function() {
	var app = angular.module('AboutPage', [
		'headerController',
		'looseDirectives',
	]);

	app.controller('CarouselController', ["$http", "$location",  function($http, $location) {
		//Get which team we're supposed to be pulling the data from
		var team = $location.search().team;

		//Get carousel data somehow
		this.slides = [
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
		];

		//Set the first picture to active. 
		this.getActive = function(index) {
			return (index === 0) ? "active" : "";
		};

	}]);

	app.controller('DescriptionHandler', ["$http", "$location", function($http, $location) {
		//Store the specific team we should be pulling data from
		var team = $location.search().team;

		//Get team data somehow
		this.teamData = {
			header: "UCLA Augment: We kick ass and punch kittens.",
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
			]
		};
	}]);

	app.controller('PortfolioHandler', ["$http", "$location", function($http, $location) {
		//Store the specific team we should be pulling data from
		var team = $location.search().team;

		//Get some stuff
		this.header = "Teams";
		this.iconData = [
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
		];
	}]);
})();