(function() {
	var app = angular.module("MerchPage", [
		'headerController',
		'looseDirectives',
		'merchSidebarController',
		'carouselController'
	]);

	app.controller('ShopController', ['$http', '$location', '$sce', 
		function($http, $location, $sce) {
			//Get shop info somehow

			this.items = [
				{
					id: 17894,
					image: "/logos/augmentlogo.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
				},
				{
					id: 17894,
					image: "/logos/augmentlogo.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
				},
				{
					id: 17894,
					image: "/logos/augmentlogo.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
				},
				{
					id: 17894,
					image: "/logos/augmentlogo.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
				},
				{
					id: 17894,
					image: "/logos/augmentlogo.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
				},
				{
					id: 17894,
					image: "/logos/augmentlogo.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
				},
				{
					id: 17894,
					image: "/logos/augmentlogo.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
				},
				{
					id: 17894,
					image: "/logos/augmentlogo.png",
					name: "Augment Membership",
					price: 5.00,
					shortDescription: $sce.trustAsHtml("<p>Access to all of our wonderful club events for the entire year! This pays tournament costs, something, yada, gib moneys. </p>"),
				}	
			];
		}
	]);

}());