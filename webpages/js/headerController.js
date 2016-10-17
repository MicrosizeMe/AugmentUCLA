(function() {

	var app = angular.module('headerController', ["ngCookies"], function($locationProvider) {
	    $locationProvider.html5Mode(true);
	}); 

	// var app = angular.module('headerController', []);
	
	app.controller('HeaderController', ["$http", "$location", "$cookies", 
		function($http, $location, $cookies) {
			console.log("If you're looking in here, clearly you're interested in code. Email me if you want to help out! anbo_wei@outlook.com");
			console.log("Now stop looking in here, it's hideous.");

			//Initialize data to tell if the user is logged in. This is based on the existance of the cookie.
			var loggedIn = ($cookies.get("username") != null);

			//Used in callbacks.
			var header = this;

			//If logged in, get all relevant info. 
			$http({
				method: 'GET',
				url: '/api/getMyUserInfo'
			}).then(function(returnRequest) {
				var userInfo = returnRequest.data;
				if (userInfo.error == null) {
					header.username 	= userInfo.username;
					header.firstName 	= userInfo.firstName;
					header.lastName 	= userInfo.lastName;
					header.email 		= userInfo.email;
					header.gradYear 	= userInfo.gradYear;
					header.UID 			= userInfo.UID;
					header.phoneNumber 	= userInfo.phoneNumber;
					header.interests 	= userInfo.interests;
				}
				else console.log("User doesn't appear to be logged in.");
			});
			//this.username = $cookies.get("username");

			this.logo = "/logos/augmentlogo.png";

			this.isActive = function(askedPath) {
				var currentPath = $location.path();
				if (askedPath == "/") {
					//Hack for the index root
					return (currentPath == "/" || currentPath == "/blogpost");
				}
				if (askedPath == "/about") {
					//Hack for the index root
					return (currentPath == "/" || currentPath == "/about");
				}
				if (askedPath == "/merch") {
					//Hack for merch
					return (currentPath == "/item" || currentPath == "/merch");	
				}
				return (currentPath.indexOf(askedPath) === 0);
			};

			this.isLoggedIn = function() {
				return loggedIn;
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