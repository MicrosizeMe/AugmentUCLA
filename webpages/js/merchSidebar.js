(function(){
	var app = angular.module('merchSidebarController', [], function($locationProvider) {
	    $locationProvider.html5Mode(true);
	}); 
	
	app.controller('MerchSidebarController', ["$http", "$scope", function($http, $scope) {
		//Get categories somehow
		$scope.categories = [
			// {
			// 	name: "T-Shirts",
			// 	categoryId: 1,
			// 	href: "#"
			// },
			// {
			// 	name: "Tickets",
			// 	categoryId: 2,
			// 	href: "#"
			// },
			{
				name: "Membership",
				categoryId: 3,
				href: "#"
			}
		];

		//Get the data for which category is active given the ID 
		$scope.getActiveCategory = function(id) {
			return 3;
		}
	}]);

	app.directive('merchSidebar', function() {
		return {
			restrict: 'E',
			templateUrl: '/htmltemplates/merch-sidebar.html', 
			controller: 'MerchSidebarController',
			scope: {
				input: "=id"
			}
		};
	});

}());