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
							quantity: 2
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

			var controller = this;
			//Populate a list of item numbers from these orders, then look them up
			var populateList = function(list) {
				for (var i = 0; i < list.length; i++) {
					var currentOrder = list[i];
					currentOrder.price = 0;
					for (var j = 0; j < currentOrder.items.length; j++) {
						currentItem = currentOrder.items[j].itemId;
						if (!controller.itemList.hasOwnProperty(currentItem)) {
							controller.itemList[currentItem] = {
								id: 17894,
								image: "http://megaicons.net/static/img/icons_sizes/7/59/64/pixelmator-icon.png",
								name: "Augment Membership",
								price: 5.00,
								shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>") 
							};
						}
						currentOrder.price += currentOrder.items[j].quantity * controller.itemList[currentItem].price
					}
				}
			};

			populateList(this.pendingOrders);
			populateList(this.completedOrders);


			//Delete a pending order
			this.deletePending = function(index) {
				if (confirm("Are you sure? This will cancel the order.")) {
					this.pendingOrders.splice(index, 1);
				}
			};
		}
	]);
}());