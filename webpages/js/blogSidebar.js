(function() {

	var app = angular.module('blogSidebarController', [], function($locationProvider) {
	    $locationProvider.html5Mode(true);
	}); 

	// var app = angular.module('headerController', []);
	
	app.controller('BlogSidebarController', [ "$http", "$location", "$window",
		function($http, $location, $window) {
			//Get catagories by most popular
			this.catagories = ["1", "2", "3", "4", "5", "6"];

			//Get the blog search box
			this.searchTerm = "";

			this.onSubmit = function() {
				//Redirect to the given page if not empty
				if (this.searchTerm != "")
					$window.location.href = '/?search=' + this.searchTerm;
				else alert("Maybe try searching something.");
			};
	}]);

	app.directive("blogSidebar", function() {
		return {
			restrict: "E",
			templateUrl: "/htmltemplates/blog-sidebar.html",
			controller: 'BlogSidebarController',
			controllerAs: "blogSidebar"
		}
	});

})();