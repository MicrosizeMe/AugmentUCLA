(function() {
	var app = angular.module('AboutPage', [
		'headerController',
		'looseDirectives'
	]);

	app.factory('databaseInfo', ["$http", "$location", function($http, $location) {
		var id = $location.search().id;
		if (id == null) id = "fall2016lan";

		return $http({
			method: 'GET',
			url: '/api/getAbout?id=' + id
		});
	}]);

	app.controller('CarouselController', ["$sce", "databaseInfo", function($sce, databaseInfo) {
		var scope = this;

		//Get the data from the http call from earlier. 
		databaseInfo.then(function(returnRequest) {
			//If the field isn't there, then the thing had an error. Don't change values. 
			if (returnRequest.data.slides != null)
				scope.slides = returnRequest.data.slides;
			if (returnRequest.data.title != null) 
				scope.title = returnRequest.data.title;
		});

		//Get carousel data somehow. This will be updated upon a finsihed request. 
		this.slides = [
			{
				imageSrc: "http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg",
				imageCaption: "There's nothing here!"
			},
			{
				imageSrc: "http://www.planwallpaper.com/static/images/techno_wallpaper_2_0_hd_by_gredius-d5o48do.jpg",
				imageCaption: "This is an about 404 page!"
			},
			{
				imageSrc: "http://www.planwallpaper.com/static/images/Desktop-Wallpaper-HD2.jpg",
				imageCaption: "That's not a team!"
			},
			{
				imageSrc: "http://www.intrawallpaper.com/static/images/wallpaper__eeveelution_rainbow_by_arkeis_pokemon-d49kjyc.jpg",
				imageCaption: "I'm not sure what you expected!"
			}
		];



		//Set the first picture to active. 
		this.getActive = function(index) {
			return (index === 0) ? "active" : "";
		};

		this.title = "";
	}]);

	app.controller('SectionBlockHandler', ["$sce", "databaseInfo", function($sce, databaseInfo) {
		var scope = this;

		//Get the data from the http call from earlier. 
		databaseInfo.then(function(returnRequest) {
			//If the field isn't there, then the thing had an error. Don't change values. 
			if (returnRequest.data.sectionBlocks != null)
				scope.sectionBlocks = returnRequest.data.sectionBlocks;
			
			// Take all fields that should be trusted as html text as so.

			// Get all the section blocks to be displayed.
			var sectionBlocks = scope.sectionBlocks;
			// For each section block to be displayed,
			for (var i = 0; i < sectionBlocks.length; i++) {
				var sectionBlock = sectionBlocks[i];

				if (sectionBlock.hasOwnProperty("type")) {
					/*
					If the current section block has type 0, then it follows 
					the following format: 
					{
						type: 0,
						mainHeader: String,
						blocks: [{
							size: Number,
							title: String,
							content: String,
							linkText: String,
							linkUrl: String
						}]
					}
					Each block's content in blocks needs to be trusted as html.
					*/
					if (sectionBlock.type == 0) {
						var contentBlocks = sectionBlock.blocks;
						for (var j = 0; j < contentBlocks.length; j++) {
							contentBlocks[j].content = $sce.trustAsHtml(contentBlocks[j].content);
						}
					}

					/*
					If the current section block has type 1, then it follows 
					the following format: 
					{
						type: 1,
						portfolioHeader: String,
						portfolios: [{
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
					}
					Each portfolios's description needs to be trusted as html.
					*/
					else if (sectionBlock.type == 1) {
						var portfolios = sectionBlock.portfolios;
						for (var j = 0; j < portfolios.length; j++) {
							portfolios[j].description = $sce.trustAsHtml(portfolios[j].description);
						}
					}
				}
			}
		});

		//Get team data somehow
		this.sectionBlocks = [
			{
				type: 0,
				header: "404(ish): There isn't a page with that ID. Maybe you took a wrong turn?",
				blocks: []
			}
		];
	}]);
})();