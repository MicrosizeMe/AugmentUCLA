(function() {
	var app = angular.module("CalendarApp", ['headerController', 'looseDirectives']);

	app.factory('databaseInfo', ["$http", "$location", function($http, $location) {
		var id = $location.search().id;
		if (id == null) id = "augment";

		return $http({
			method: 'GET',
			url: '/api/getCalendar?id=' + id
		});
	}]);

	app.controller('CalendarController', ["$sce", "databaseInfo", function($sce, databaseInfo) {
		var scope = this;

		this.calendarData = {
			id: null,
			title: null,
			iframeURL: null,
			events: []
		};

		databaseInfo.then(function(returnRequest) {
			if (returnRequest.data == null || returnRequest.data.error != null) {
				scope.calendarData.title = "Error: " + returnRequest.error;
			}
			else {
				scope.calendarData = returnRequest.data;
				scope.calendarData.iframeURL = $sce.trustAsResourceUrl(scope.calendarData.iframeURL);
			}
			console.log(scope.calendarData);
		});

	}]);
})();