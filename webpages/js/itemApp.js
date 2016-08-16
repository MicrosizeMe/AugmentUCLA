(function() {

	var app = angular.module('ItemPage', [
		'headerController',
		'looseDirectives',
		'merchSidebarController'
	]);

	app.controller('ShopItemController', ["$http", "$location", "$sce",
		function($http, $location, $sce) {
			//Get item from database somehow
			var itemID = $location.search().item;

			
			this.image = "/logos/augmentlogo.png";
			this.name = "Augment Membership";
			this.price = 5.00;
			this.fullDescription = $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>");
			this.maxQuantity = 10;
			
			this.purchasable = true;
			this.alreadyHas = false;

			this.addToCart = function() {

			};
		}
	]);

}());