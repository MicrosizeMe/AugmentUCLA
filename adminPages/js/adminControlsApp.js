(function() {

	var app = angular.module('SettingsPage', [
		'looseDirectives',
		'RegistrationDirectives',
		'ngMessages',
		'headerController'
		], 
		function($locationProvider) {
		    $locationProvider.html5Mode(true);
		}
	);

	app.controller('SettingsController', ["$http", "$location",
		function($http, $location) {
			//Get personal info somehow
			this.obtainedFirstName = "Anbo";
		}
	]);

	app.controller('MembershipSetterController', ['$http', function($http) {

	}]);
}())