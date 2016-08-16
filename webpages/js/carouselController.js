(function() {
	var app = angular.module('carouselController', []);

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

	app.directive('carousel', function() {
		return {
			restrict: 'A',
			templateUrl: '/htmltemplates/carousel.html',
			controller: 'CarouselController',
			controllerAs: 'carousel'
		};
	});
}());