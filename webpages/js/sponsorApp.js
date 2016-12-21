(function() {
	var app = angular.module('SponsorPage', [
		'headerController',
		'looseDirectives'
	]);

	app.factory('databaseInfo', ["$http", "$location", function($http, $location) {
		return $http({
			method: 'GET',
			url: '/api/getAbout?id=sponsors'
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
		this.slides = [];

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