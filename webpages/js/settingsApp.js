(function() {

	var app = angular.module('SettingsPage', [
		'looseDirectives',
		'RegistrationDirectives',
		'ngMessages',
		'headerController'
		], 
		function($locationProvider) {
		    $locationProvider.html5Mode(true);
		}
	);

	app.controller('SettingsController', ["$http", "$location",
		function($http, $location) {
			//Get personal info somehow
			this.obtainedFirstName = "Anbo";
		}
	]);

	app.controller('MembershipController', ["$http", "$location", 
		function($http, $location) {
			//Get club info somehow
			this.clubs = [
				{
					clubName: "Augment",
					clubId: "augment",
					membershipStoreId: 46583,
					clubLogoUrl: "/logos/augmentlogonontransparent.png",
					isMember: true
				},
				{
					clubName: "Augment",
					clubId: "augment",
					membershipStoreId: 46583,
					clubLogoUrl: "/logos/augmentlogonontransparent.png",
					isMember: false
				},
				{
					clubName: "Augment",
					clubId: "augment",
					membershipStoreId: 46583,
					clubLogoUrl: "/logos/augmentlogonontransparent.png",
					isMember: true
				}
			];
		}
	]);

	app.controller('UpdateInfoController', ["$http", "$location",
		function($http, $location) {
			this.currentPassword;
			this.newPassword;
			this.confirmPassword;
			this.firstName;
			this.lastName;
			this.uid;
			this.gradYear;
			this.phoneNumber;
			this.email;

			this.passwordIncorrect = null;

			this.update = function() {
				console.log("this.currentPassword:" + this.currentPassword);
				console.log("this.newPassword:" + this.newPassword);
				console.log("this.confirmPassword:" + this.confirmPassword);
				console.log("this.firstName:" + this.firstName);
				console.log("this.lastName:" + this.lastName);
				console.log("this.uid:" + this.uid);
				console.log("this.gradYear:" + this.gradYear);
				console.log("this.phoneNumber:" + this.phoneNumber);
				console.log("this.email:" + this.email);

				this.passwordIncorrect = true;
			};
		}
	]);

}())