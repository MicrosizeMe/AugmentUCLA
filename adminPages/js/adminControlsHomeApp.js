(function() {

	var app = angular.module('AdminControlsHomePage', [
		'looseDirectives',
		'RegistrationDirectives',
		'ngMessages',
		'headerController'
		], 
		function($locationProvider) {
		    $locationProvider.html5Mode(true);
		}
	);

	app.factory('databaseInfo', ["$http", "$location", function($http, $location) {
		var id = $location.search().id;
		if (id == null) id = "fall2016lan";

		return $http({
			method: 'GET',
			url: '/api/getAbout?id=' + id
		});
	}]);

	app.controller('PageController', ["$http", "$location",
		function($http, $location) {
			var scope = this;
			this.obtainedFirstName = "Admin";
			$http({
				method: 'GET',
				url: '/api/getMyUserInfo'
			}).then(function(result) {
				if (result.data != null)
					scope.obtainedFirstName = result.data.firstName;
			})
		}
	]);

	app.controller('MembershipSetterController', ['$http', function($http) {
		this.searchString;

		var scope = this;
		this.users = [];


		//Get all memberships so we can fill out the table.
		this.allMemberships = [];
		$http({
			method: 'GET',
			url: '/api/getAllMemberships'
		}).then(function(result) {
			if (result.data)
				scope.allMemberships = result.data.memberships;
		});

		var generateSetMembershipsCallback = function(user) {
			return function(result) {
				if (!result.data) {
					alert("Something went wrong!");
					return;
				}
				console.log(result.data.membership);
				user.membership = result.data.membership;
			}
		};

		var membershipDetails = function(users) {
			for (var i = 0; i < users.length; i++) {
				// For each user, get memberships for that user. 
				var user = users[i];
				$http({
					method: 'GET',
					url: '/api/getMembershipsForUser?username=' + user.username
				}).then(generateSetMembershipsCallback(user));
			}
		}

		this.search = function(){
			if (!scope.searchString) {
				alert("You need to search for someone! Enter their email, name, or username.");
				return;
			}
			$http({
				method: 'GET',
				url: '/api/searchUserFromString?search=' + scope.searchString
			}).then(function(result){
				if (!result.data) {
					alert("Something went wrong!");
					return;
				}
				scope.users = result.data;
				console.log(scope.users);
				//Now that we have all the users, get membership details for each.
				membershipDetails(scope.users);
			});
		}

		this.updateMembership = function(user, membershipID) {
			if (user.membership[membershipID]) {
				// Thing is true, set the membership.
				console.log(user.username);
				console.log(membershipID);
				console.log(user.membership[membershipID]);
				$http({
					method: 'POST',
					url: '/api/setMembership',
					data: {
						username: user.username,
						membership: membershipID
					}
				}).then(function() {
					alert(
						"Set " + membershipID + " membership for " + 
						user.username + "."
					);
				});
			}
			else {
				// Remove the membership.
				console.log(user.username);
				console.log(membershipID);
				console.log(user.membership[membershipID]);
				$http({
					method: 'POST',
					url: '/api/removeMembership',
					data: {
						username: user.username,
						membership: membershipID
					}
				}).then(function() {
					alert(
						"Removed " + membershipID + " membership for " + 
						user.username + "."
					);
				});
			}
		}

	}]);
}())