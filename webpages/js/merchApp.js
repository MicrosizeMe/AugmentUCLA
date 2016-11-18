(function() {
	var app = angular.module("MerchPage", [
		'headerController',
		'looseDirectives',
		'merchSidebarController'
	]);

	app.factory('databaseMerchFinder', ['$http', "$location", function($http, $location) {
		var team = $location.search().team;
		if (team == null) team = "membership";

		return $http({
			method: 'GET',
			url: '/api/getStorefront?team=' + team
		});
	}]);

	app.controller('CarouselController', ["databaseMerchFinder", function(databaseMerchFinder) {
		var scope = this;
		databaseMerchFinder.then(function(returnRequest) {
			if (returnRequest.data.error == null) {
				scope.slides = returnRequest.data.slides;
			}
		})

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

	app.controller('ShopController', ["databaseMerchFinder", "$sce", "$http", function(databaseMerchFinder, $sce, $http) {
		//Get shop info somehow
		var scope = this;
		databaseMerchFinder.then(function(returnRequest) {
			var generateCallback = function(array, callbackIndex) {
				return function(itemInfo) {
					array[callbackIndex] = {
						id: itemInfo.data.itemID,
						image: itemInfo.data.image,
						name: itemInfo.data.name,
						price: itemInfo.data.priceInCents / 100,
						shortDescription: $sce.trustAsHtml(itemInfo.data.shortDescription)
					}
				}
			}
			if (returnRequest.data.error == null) {
				scope.items = [];
				for (var i = 0; i < returnRequest.data.items.length; i++) {
					$http({
						method: 'GET',
						url: '/api/getMerchItem?item=' + returnRequest.data.items[i]
					}).then(generateCallback(scope.items, i));
				}
				console.log(scope.items);
			}
		});
	}]);

}());