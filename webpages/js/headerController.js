(function() {

	var app = angular.module('headerController', [], function($locationProvider) {
	    $locationProvider.html5Mode(true);
	}); 

	// var app = angular.module('headerController', []);
	
	app.controller('HeaderController', ["$http", "$location", 
		function($http, $location) {
			var header = this;
			this.logo = "/logos/augmentlogo.png";

			this.isActive = function(askedPath) {
				var currentPath = $location.path();
				if (askedPath == "/") {
					//Hack for the index root
					return (currentPath == "/" || currentPath == "/blogpost");
				}
				if (askedPath == "/merch") {
					//Hack for merch
					return (currentPath == "/item" || currentPath == "/merch");	
				}
				return (currentPath.indexOf(askedPath) === 0);
			};

			this.isLoggedIn = function() {
				return true;
			}
		}
	]);

	app.directive("navigationBarHeader", function() {
		return {
			restrict: "E",
			templateUrl: "/htmltemplates/navbar/navbar-header.html",
			controller: 'HeaderController',
			controllerAs: "header"
		}
	});

	app.directive("navigationBarTop", function() {
		return {
			restrict: "E",
			templateUrl: "/htmltemplates/navbar/navbar-top.html",
			controller: 'HeaderController',
			controllerAs: "header"
		}
	});

	app.directive("navigationBarSide", function() {
		return {
			restrict: "E",
			templateUrl: "/htmltemplates/navbar/navbar-side.html",
			controller: 'HeaderController',
			controllerAs: "header"
		}
	});

	app.directive("navigationBar", function() {
		return {
			restrict: "E",
			templateUrl: "/htmltemplates/navbar/navbar.html",
			controller: 'HeaderController',
			controllerAs: "header"
		}
	});

	app.directive("navigationBarSettings", function() {
		return {
			restrict: "E",
			templateUrl: "/htmltemplates/navbar/navbar-settings.html",
			controller: 'HeaderController',
			controllerAs: "header"
		}
	});

})();