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

		// this.calendarData = {
		// 	id: null,
		// 	title: null,
		// 	iframeURL: null,
		// 	events: []
		// };

		this.calendarData = {
			id: "augment",
			title: "UCLA Augment or whatever",
			iframeURL: "https://calendar.google.com/calendar/embed?src=acmbruins%40gmail.com&ctz=America/Los_Angeles",
			events: [
				{
					id: "test",
					title: "test",
					startDate: new Date(2011, 8, 1),
					endDate: new Date(2011, 9, 1),
					aboutPageId: "augment",
					shortDescription: "Testing!"
				},
				{
					id: "test3",
					title: "test2",
					startDate: new Date(2020, 9, 1),
					endDate: new Date(2020, 10, 1),
					aboutPageId: "augment",
					shortDescription: "Testing!"
				},
				{
					id: "test2",
					title: "test2",
					startDate: new Date(2020, 8, 1),
					endDate: new Date(2020, 9, 1),
					aboutPageId: "augment",
					shortDescription: "Testing!"
				},
				{
					id: "test4",
					title: "test2",
					startDate: new Date(2020, 10, 1),
					endDate: new Date(2020, 11, 1),
					aboutPageId: "augment",
					shortDescription: "Testing!"
				},
				{
					id: "test5",
					title: "test2",
					startDate: new Date(2020, 10, 1),
					endDate: new Date(2020, 11, 1),
					aboutPageId: "augment",
					shortDescription: "Testing!"
				},
				{
					id: "test6",
					title: "test2",
					startDate: new Date(2020, 10, 1),
					endDate: new Date(2020, 11, 1),
					aboutPageId: "augment",
					shortDescription: "Testing!"
				},
				{
					id: "test7",
					title: "test2",
					startDate: new Date(2020, 10, 1),
					endDate: new Date(2020, 11, 1),
					aboutPageId: "augment",
					shortDescription: "Testing!"
				},
				{
					id: "test8",
					title: "test2",
					startDate: new Date(2020, 10, 1),
					endDate: new Date(2020, 11, 1),
					aboutPageId: "augment",
					shortDescription: "Testing!"
				},
				{
					id: "test9",
					title: "test2",
					startDate: new Date(2020, 10, 1),
					endDate: new Date(2020, 11, 1),
					aboutPageId: "augment",
					shortDescription: "Testing!"
				},
				{
					id: "test10",
					title: "test2",
					startDate: new Date(2020, 10, 1),
					endDate: new Date(2020, 11, 1),
					aboutPageId: "augment",
					shortDescription: "Testing!"
				}
			]
		};

		// databaseInfo.then(function(returnRequest) {
		// 	if (returnRequest.data == null || returnRequest.data.error != null) {
		// 		scope.calendarData.title = "Error: " + returnRequest.error;
		// 	}
		// 	else {
		// 		scope.calendarData = returnRequest.data;
		// 		scope.calendarData.iframeURL = $sce.trustAsResourceUrl(scope.calendarData.iframeURL);
		// 	}
		// 	console.log(scope.calendarData);
		// });

	}]);
})();