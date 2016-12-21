(function() {
	var app = angular.module('looseDirectives', []);

	app.directive("redAsterisk", function() {
		return {
			restrict: 'E',
			template: "<span style='color:red'>*</span>"
		}
	});
})();