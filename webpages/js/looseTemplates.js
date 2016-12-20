(function() {
	var app = angular.module('looseDirectives', []);

	// app.directive("footerAndCopyright", function() {
	// 	return {
	// 		restrict: "E",
	// 		templateUrl: "/htmltemplates/footer-and-copyright.html"
	// 	};
	// });

	app.directive("redAsterisk", function() {
		return {
			restrict: 'E',
			template: "<span style='color:red'>*</span>"
		}
	});
})();