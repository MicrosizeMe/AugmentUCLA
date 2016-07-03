(function() {
	var app = angular.module('LeaguePage', ['headerController', 'blogController']);

	app.controller('StoreController', function() {
		this.products = gems;
	});
})();