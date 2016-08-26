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

	app.controller('OrdersController', ["$http", "$location",
		function($http, $location) {
			//Get personal info somehow
			this.obtainedFirstName = "Anbo";
		}
	]);
}());