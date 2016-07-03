(function() {

	var app = angular.module('headerController', [], function($locationProvider) {
	    $locationProvider.html5Mode(true);
	}); 

	// var app = angular.module('headerController', []);
	
	app.controller('HeaderController', [ "$http", "$location", 
		function($http, $location) {
			var header = this;
			this.logo = "logos/augmentlogo.png";

			this.isActive = function(path) {
				return ($location.path().indexOf(path) === 0);
			};
	}]);

	app.directive("navigationBar", function() {
		return {
			restrict: "E",
			templateUrl: "navbar.html",
			controller: 'HeaderController',
			controllerAs: "header"
		}
	});

})();