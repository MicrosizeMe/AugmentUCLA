(function() {

	var app = angular.module('OrdersPage', [
		'looseDirectives',
		'RegistrationDirectives',
		'ngMessages',
		'headerController'
		], 
		function($locationProvider) {
		    $locationProvider.html5Mode(true);
		}
	);

	app.controller('OrdersController', ["$http", "$location", "$sce",
		function($http, $location, $sce) {
			//Get personal info somehow

			//Get order history somehow
			this.pendingOrders = [
				{
					orderNumber: 1234,
					delivery: 7498294,
					orderDate: 732911,
					items: [
						{
							itemId: 17894,
							quantity: 1
						},
						{
							itemId: 17894,
							quantity: 1
						},	
					]
				},
				{
					orderNumber: 1234,
					delivery: 7498294,
					orderDate: 732911,
					items: [
						{
							itemId: 17894,
							quantity: 1
						},
						{
							itemId: 17894,
							quantity: 1
						},	
					]
				},
				{
					orderNumber: 1234,
					delivery: 7498294,
					orderDate: 732911,
					items: [
						{
							itemId: 17894,
							quantity: 1
						},
						{
							itemId: 17894,
							quantity: 1
						},	
					]
				}
			];

			this.completedOrders = [
				{
					orderNumber: 1234,
					delivery: 7498294,
					orderDate: 732911,
					items: [
						{
							itemId: 17894,
							quantity: 1
						},
						{
							itemId: 17894,
							quantity: 1
						},	
					]
				},
				{
					orderNumber: 1234,
					delivery: 7498294,
					orderDate: 732911,
					items: [
						{
							itemId: 17894,
							quantity: 1
						},
						{
							itemId: 17894,
							quantity: 1
						},	
					]
				},
				{
					orderNumber: 1234,
					delivery: 7498294,
					orderDate: 732911,
					items: [
						{
							itemId: 17894,
							quantity: 1
						},
						{
							itemId: 17894,
							quantity: 1
						},	
					]
				}
			];

			//Dictionary of items and such to be populated by ID
			this.itemList = {};

			//Populate a list of item numbers from these orders, then look them up
			for (var i = 0; i < this.pendingOrders.length; i++) {
				var currentOrder = this.pendingOrders[i];
				for (var j = 0; j < currentOrder.items.length; j++) {
					currentItem = currentOrder.items[j].itemId;
					if (!this.itemList.hasOwnProperty(currentItem)) {
						this.itemList[currentItem] = {
							id: 17894,
							image: "http://megaicons.net/static/img/icons_sizes/7/59/64/pixelmator-icon.png",
							name: "Augment Membership",
							price: 5.00,
							shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>") 
						};
					}
				}
			}
		}
	]);
}());