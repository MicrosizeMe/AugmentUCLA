(function() {

	var app = angular.module('headerController', ["ngCookies"], function($locationProvider) {
	    $locationProvider.html5Mode(true);
	}); 

	// var app = angular.module('headerController', []);
	
	app.controller('HeaderController', ["$http", "$location", "$cookies", "$window", "$scope", "$sce",
		function($http, $location, $cookies, $window, $scope, $sce) {
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

			//If not logged in, here are the models for how we will do so.
			this.loginUsername;
			this.loginPassword;
			//This is the flash message in case a form is forgotten.
			this.flashMessage = "";

			//Test if we're logged in,
			this.isLoggedIn = function() {
				return loggedIn;
			}

			//If not, here's the form to do so.
			this.login = function() {
				if ($scope.loginForm.$invalid) {
					this.flashMessage = "Whoops, you forgot something!";
				}
				$http({
					method: 'POST',
					url: '/api/login',
					data: {
						username: header.loginUsername,
						password: header.loginPassword,
					}
				}).then(function(returnRequest) {
					var response = returnRequest.data;
					if (response.error == null) {
						$window.location.reload();
					}
					else {
						$window.location.href = '/login';
					}
				});
					
			}

			this.logout = function() {
				$cookies.remove("username");
				$cookies.remove("password");
				$window.location.reload();
			}
			

			this.logo = "/logos/augment-logo-updated-11-18-16.png";

			// How we dynamically create links. This makes it so we don't
			// have to change a lot of code in the future.
			// Title references what the link text will be called, href
			// refers to the link location, and exceptions refers to all other
			// link locations that fall under this header. 
			// If the current window location is the href or any of the exceptions
			// then the selection will be highlighted.
			this.headerLinks = [
				{
					title: $sce.trustAsHtml("About"),
					href: "/about",
					exceptions: ["/"],
					isActive: false
				},
				{
					title: $sce.trustAsHtml("Sponsors"),
					href: "/sponsors",
					exceptions: [],
					isActive: false
				},
				{
					title: $sce.trustAsHtml("<span class='glyphicon glyphicon-shopping-cart'></span> Merch and Membership"),
					href: "/merch",
					exceptions: ["/item"],
					isActive: false
				},
			];

			this.setActive = function() {
				var currentPath = $location.path();
				for (var i = 0; i < header.headerLinks.length; i++) {
					var entry = header.headerLinks[i];
					var result = currentPath == entry.href;
					for (var j = 0; j < entry.exceptions.length; j++) {
						result = result || (currentPath == entry.exceptions[j]); 
					}
					entry.isActive = result;
					if (result) break;
				}
			};

			this.setActive();
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

	app.directive("footerAndCopyright", function() {
		return {
			restrict: "E",
			templateUrl: "/htmltemplates/footer-and-copyright.html",
			controller: 'HeaderController',
			controllerAs: "header"
		};
	});

})();