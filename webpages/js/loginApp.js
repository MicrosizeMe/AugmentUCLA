(function() {

	var app = angular.module('LoginApp', [
		"ngCookies",
		'headerController',
		'looseDirectives'
	], function($locationProvider) {
	    $locationProvider.html5Mode(true);
	}); 

	// var app = angular.module('headerController', []);
	
	app.controller('LoginController', ["$http", "$location", "$cookies", "$window", "$scope",
		function($http, $location, $cookies, $window, $scope) {
			//Initialize data to tell if the user is logged in. This is based on the existance of the cookie.
			var loggedIn = ($cookies.get("username") != null);

			//Used in callbacks.
			var header = this;
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
						$window.location.href = '/';
					}
					else {
						header.flashMessage = "Whoops, looks like your info is invalid!";
					}
				});		
			};
		}
	]);

})();