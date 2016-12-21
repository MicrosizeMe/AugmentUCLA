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
			console.log(returnRequest.data);
			//If the field isn't there, then the thing had an error. Don't change values. 
			if (returnRequest.data.slides != null)
				scope.slides = returnRequest.data.slides;
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

	}]);

	app.controller('DescriptionHandler', ["$sce", "databaseInfo", function($sce, databaseInfo) {
		var scope = this;

		//Get the data from the http call from earlier. 
		databaseInfo.then(function(returnRequest) {
			scope.teamData = {};
			console.log(returnRequest.data);
			//If the field isn't there, then the thing had an error. Don't change values. 
			if (returnRequest.data.mainHeader != null)
				scope.teamData.header = returnRequest.data.mainHeader;
			if (returnRequest.data.blocks != null)
				scope.teamData.blocks = returnRequest.data.blocks;

			var blocks = scope.teamData.blocks
			for (var i = 0; i < blocks.length; i++) {
				blocks[i].content = $sce.trustAsHtml(blocks[i].content);
			}
		});

		//Get team data somehow
		this.teamData = {
			header: "404(ish): There isn't a team with that name.",
			blocks: []
		};
	}]);

	app.controller('PortfolioHandler', ["$sce", "databaseInfo", 
		function($sce, databaseInfo) {
			var scope = this;

			//Get the data from the http call from earlier. 
			databaseInfo.then(function(returnRequest) {
				console.log(returnRequest.data);
				//If the field isn't there, then the thing had an error. Don't change values. 
				if (returnRequest.data.portfolioHeader != null)
					scope.header = returnRequest.data.portfolioHeader;
				if (returnRequest.data.blocks != null)
					scope.iconData = returnRequest.data.iconData;

				var blocks = scope.iconData;
				for (var i = 0; i < blocks.length; i++) {
					blocks[i].description = $sce.trustAsHtml(blocks[i].description);
				}
			});

			//Get some stuff
			this.header = "Teams";
			this.iconData = [];
		}
	]);
})();