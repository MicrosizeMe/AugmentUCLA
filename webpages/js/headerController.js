(function() {

	var app = angular.module('headerController', [], function($locationProvider) {
	    $locationProvider.html5Mode(true);
	}); 

	// var app = angular.module('headerController', []);
	
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

	app.directive("navigationBar", function() {
		return {
			restrict: "E",
			templateUrl: "/htmltemplates/navbar.html",
			controller: 'HeaderController',
			controllerAs: "header"
		}
	});

})();