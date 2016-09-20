(function() {
	var app = angular.module('RegisterPage', [
		'headerController',
		'looseDirectives',
		'ngMessages',
		'RegistrationDirectives'
	]);

	app.controller('RegisterController', ["$http", "$window", "$scope", function($http, $window, $scope) {
		var scope = this;
		this.flashMessage = "";

		this.username;
		this.password;
		this.firstName;
		this.lastName;
		this.uid;
		this.gradYear;
		this.phoneNumber;
		this.email;

		this.interests = [
			{ 
				fullClubName: "Counter-Strike: Global Offensive",
				shortName: "csgo",
				interested: false
			},
			{ 
				fullClubName: "Dota 2",
				shortName: "dota2",
				interested: false
			},
			{ 
				fullClubName: "Hearthstone",
				shortName: "hearthstone",
				interested: false
			},
			{ 
				fullClubName: "League of Legends",
				shortName: "league",
				interested: false
			},
			{ 
				fullClubName: "Overwatch",
				shortName: "overwatch",
				interested: false
			},
			{ 
				fullClubName: "Super Smash Brothers: Melee",
				shortName: "smash4",
				interested: false
			},
			{ 
				fullClubName: "Super Smash Brothers 4",
				shortName: "melee",
				interested: false
			},
		];

		this.register = function() {
			if ($scope.registrationForm.$invalid) {
				scope.flashMessage = "You forgot something!";
				return;
			}
			
			if (scope.uid != undefined) {
				scope.uid = "" + scope.uid;
			}

			var interestList = [];
			for (var i = 0; i < scope.interests.length; i++) {
				var interest = scope.interests[i];
				if (interest.interested) 
					interestList.push(interest.shortName);
			}

			var body = {
				username: scope.username,
				password: scope.password,
				firstName: scope.firstName,
				lastName: scope.lastName,
				uid: scope.uid,
				gradYear: scope.gradYear,
				phoneNumber: scope.phoneNumber,
				email: scope.email,
				interests: interestList
			}
			console.log(body);
			$http({
				method: 'POST',
				url: '/api/register', 
				data: body
			}).then(
				function successCallback(response) {
					console.log(response);
					if (response.data.error != null) {
						scope.flashMessage = response.data.error;
						return;
					}
					else {
						scope.flashMessage = "";
						$window.location.href = '/';
					}
				}
			);
		}

	}]);
})();