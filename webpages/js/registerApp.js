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

		this.register = function() {
			if ($scope.registrationForm.$invalid) {
				scope.flashMessage = "You forgot something!";
				return;
			}
			if (scope.uid != undefined) {
				scope.uid = "" + scope.uid;
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