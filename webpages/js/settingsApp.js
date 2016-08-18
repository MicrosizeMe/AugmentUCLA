(function() {

	var app = angular.module('SettingsPage', [
		'looseDirectives',
		'RegistrationDirectives'
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

	app.controller('UpdateInfoController', ["$http", "$location",
		function($http, $location) {
			this.currentPassword;
			this.password;
			this.firstName;
			this.lastName;
			this.uid;
			this.gradYear;
			this.phoneNumber;
			this.email;
		}
	]);

	app.controller('HeaderController', ["$http", "$location", 
		function($http, $location) {
			var header = this;
			this.logo = "/logos/augmentlogo.png";

			this.isActive = function(path) {
				if (path == "/") {
					//Hack for the index root
					return ($location.path() == "/" || $location.path() == "/blogpost");
				}
				if (path == "/merch") {
					//Hack for merch
					return ($location.path() == "/item" || $location.path() == "/merch");	
				}
				return ($location.path().indexOf(path) === 0);
			};

			this.isLoggedIn = function() {
				return true;
			}
		}
	]);
}())