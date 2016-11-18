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

			var scope = this;
			$http({
				method: 'GET',
				url: '/api/getMerchItem?item=' + itemID
			}).then(function(returnRequest) {
				var item = returnRequest.data;
				if (item.error == null) {
					scope.image = item.image;
					scope.name = item.name;
					scope.price = item.priceInCents / 100;
					scope.fullDescription = $sce.trustAsHtml(item.fullDescription);
					scope.maxQuantity = item.maxQuantity;
					scope.purchasable = item.purchasable;
				}
				else console.log("Error was not null.");
			});
			
			this.image = "/logos/augmentlogo.png";
			this.name = "Augment Membership";
			this.price = 5.00;2
			this.fullDescription = $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>");
			this.maxQuantity = 10;
			
			this.purchasable = true;
			this.alreadyHas = false;

			this.showAdded = false;

			this.addToCart = function() {
				this.showAdded = true;
			};
		}
	]);

}());