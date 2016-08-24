(function() {
	var app = angular.module("CheckoutPage", [
		'headerController',
		'looseDirectives'
	]);

	app.controller('CheckoutController', ['$http', '$location', 
		function($http, $location, $sce) {
		//Get cart info somehow

			
		}
	]);

}());