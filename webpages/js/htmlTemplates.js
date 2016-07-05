(function() {
	var app = angular.module('looseDirectives', []);

	app.directive("footerAndCopyright", function(){
		return {
			restrict: "E",
			templateUrl: "/htmltemplates/footer-and-copyright.html"
		};
	});
})();