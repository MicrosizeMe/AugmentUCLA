(function() {

	var app = angular.module('ItemPage', [
		'headerController',
		'looseDirectives'
	]);

	app.controller('ShopItemController', ["$http", "$location", "$sce",
		function($http, $location, $sce) {
			//Get item from database somehow
			var itemID = $location.search().item;

			
			this.image = "/logos/augmentlogo.png";
			this.name = "1 Year Membership";
			this.price = 5.00;
			this.description = $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>");
		}
	]);
}());