(function() {
	var app = angular.module('RegisterPage', [
		'headerController',
		'looseDirectives',
		'ngMessages',
		'RegistrationDirectives'
	]);

	app.controller('RegisterController', ["$http", "$location",  function($http, $location) {
		//Get which team we're supposed to be pulling the data from
		var team = $location.search().team;

		this.username;
		this.password;
		this.firstName;
		this.lastName;
		this.uid;
		this.gradYear;
		this.phoneNumber;
		this.email;

		this.register = function() {
			console.log(this.username);
			console.log(this.password);
			console.log(this.firstName);
			console.log(this.lastName);
			console.log(this.uid);
			console.log(this.gradYear);
			console.log(this.phoneNumber);
			console.log(this.email);
		}

	}]);
})();