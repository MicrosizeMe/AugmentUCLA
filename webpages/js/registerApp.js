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

	// //Verification code to ensure that the username is correct.  
	// app.directive('ngVerifyUsername', function() {
	// 	return {
	// 		restrict: "A",
	// 		require: "ngModel",
	// 		link: function($scope, $element, $attrs, ngModel) {
	// 			ngModel.$validators.required = function(modelValue) {
	// 				return (modelValue != undefined && modelValue.length != 0);
	// 			};

	// 			ngModel.$validators.minlength = function(modelValue) {
	// 				if (modelValue != undefined)
	// 					return modelValue.length >= 5;
	// 				return true;
	// 			};

	// 			ngModel.$validators.alphanum = function(modelValue) {
	// 				if (modelValue != undefined) {
	// 					return /^[a-z0-9]+$/i.test(modelValue);
	// 				}
	// 				return true;
	// 			};
	// 		}
	// 	}
	// });

	// //Verifies the confirmation is there and the password matches input. 
	// app.directive('ngVerifyMatches', function() {
	// 	return {
	// 		restrict: "A",
	// 		require: "ngModel",
	// 		scope: {
	// 			otherModelValue: "=ngVerifyMatches"
	// 		},
	// 		link: function($scope, $element, $attrs, ngModel) {
	// 			ngModel.$validators.required = function(modelValue) {
	// 				return (modelValue != undefined && modelValue.length != 0);
	// 			};

	// 			ngModel.$validators.matches = function(modelValue) {
	// 				if (modelValue != undefined) {
	// 					return modelValue == $scope.otherModelValue;
	// 				}
	// 				return true;
	// 			};
	// 		}
	// 	}
	// });


	// //Stolen code that capitalizes an input
	// app.directive('capitalizeFirst', function(uppercaseFilter, $parse) {
	// return {
	// 	require: 'ngModel',
	// 		link: function(scope, element, attrs, modelCtrl) {
	// 			var capitalize = function(inputValue) {
	// 				if (inputValue == undefined) return;
	// 				var capitalized = inputValue.charAt(0).toUpperCase() +
	// 					inputValue.substring(1);
	// 				if(capitalized !== inputValue) {
	// 					modelCtrl.$setViewValue(capitalized);
	// 					modelCtrl.$render();
	// 				}         
	// 				return capitalized;
	// 			}
	// 			var model = $parse(attrs.ngModel);
	// 			modelCtrl.$parsers.push(capitalize);
	// 			capitalize(model(scope));
	// 		}
	// 	};
	// });

	// //This code is stolen off somewhere, I can't remember, may need to google later
	// app.directive('phoneInput', ["$filter", "$browser", function($filter, $browser) {
	//     return {
	//         require: 'ngModel',
	//         link: function($scope, $element, $attrs, ngModelCtrl) {
	//             var listener = function() {
	//                 var value = $element.val().replace(/[^0-9]/g, '');
	//                 $element.val($filter('tel')(value, false));
	//             };

	//             // This runs when we update the text field
	//             ngModelCtrl.$parsers.push(function(viewValue) {
	//                 return viewValue.replace(/[^0-9]/g, '').slice(0,10);
	//             });

	//             // This runs when the model gets updated on the scope directly and keeps our view in sync
	//             ngModelCtrl.$render = function() {
	//                 $element.val($filter('tel')(ngModelCtrl.$viewValue, false));
	//             };

	//             $element.bind('change', listener);
	//             $element.bind('keydown', function(event) {
	//                 var key = event.keyCode;
	//                 // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
	//                 // This lets us support copy and paste too
	//                 if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
	//                     return;
	//                 }
	//                 $browser.defer(listener); // Have to do this or changes don't get picked up properly
	//             });

	//             $element.bind('paste cut', function() {
	//                 $browser.defer(listener);
	//             });
	//         }

	//     };
	// }]);

	// app.filter('tel', function () {
	//     return function (tel) {
	//         console.log(tel);
	//         if (!tel) { return ''; }

	//         var value = tel.toString().trim().replace(/^\+/, '');

	//         if (value.match(/[^0-9]/)) {
	//             return tel;
	//         }

	//         var country, city, number;

	//         switch (value.length) {
	//             case 1:
	//             case 2:
	//             case 3:
	//                 city = value;
	//                 break;

	//             default:
	//                 city = value.slice(0, 3);
	//                 number = value.slice(3);
	//         }

	//         if(number){
	//             if(number.length>3){
	//                 number = number.slice(0, 3) + '-' + number.slice(3,7);
	//             }
	//             else{
	//                 number = number;
	//             }

	//             return ("(" + city + ") " + number).trim();
	//         }
	//         else{
	//             return "(" + city;
	//         }

	//     };
	// });
})();