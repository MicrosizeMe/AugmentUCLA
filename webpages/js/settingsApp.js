(function() {

	var app = angular.module('SettingsPage', [
		'headerController',
		'looseDirectives'
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