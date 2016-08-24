(function() {
	var app = angular.module("CartPage", [
		'headerController',
		'looseDirectives'
	]);

	app.controller('CartController', ['$http', '$location', "$sce",
		function($http, $location, $sce) {
		//Get cart info somehow

			this.cart = [
				{
					id: 17894,
					image: "http://megaicons.net/static/img/icons_sizes/7/59/64/pixelmator-icon.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
					quantity: 1, 
				},
				{
					id: 17894,
					image: "http://megaicons.net/static/img/icons_sizes/7/59/64/pixelmator-icon.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
					quantity: 1, 
				},
				{
					id: 17894,
					image: "http://megaicons.net/static/img/icons_sizes/7/59/64/pixelmator-icon.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
					quantity: 1, 
				},
				{
					id: 17894,
					image: "http://megaicons.net/static/img/icons_sizes/7/59/64/pixelmator-icon.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
					quantity: 1, 
				},	
			];

			this.total = 0.0;

			for (var i = 0; i < this.cart.length; i++) {
				var item = this.cart[i];
				item.subtotal = item.price * item.quantity;
				this.total += item.subtotal;
			}

			console.log(this.total);
		}
	]);

}());