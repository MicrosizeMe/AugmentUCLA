(function() {
	var app = angular.module('BlogFrontPage', [
		'headerController', 
		'looseDirectives',
		'blogSidebarController'
	]);

	app.controller('BlogController', ["$http", "$anchorScroll", "$location", function($http, $anchorScroll, $location) {
		this.logo = "/logos/augmentlogonontransparent.png";

		//Search term is included in the url. Store if it exists
		var searchTerm = $location.search().search;

		//Get information briefs about the blog posts, 

		this.viewLimit = 10; //max number of posts to view at a time. Likely should be
			//moved to another file of constants.

		//get the newest post number somehow
		this.upperMost = $location.search().page ? 
			$location.search().page * this.viewLimit : 1;

		//Set a scroll offset. 
		$anchorScroll.yOffset = 100;

		//Get info somehow
		this.briefs = [
			{
				id:125567,
				title: "Welcome to Augment!",
				author: "Anbo Wei",
				date: 1234567876,
				imageSource: "http://i.imgur.com/pfkiPP6.gif",
				imageAltText: null,
				description: "Holy balls?"
			},
			{
				id:125567,
				title: "Welcome to Augment!",
				author: "Anbo Wei",
				date: 1234567876,
				imageSource: "http://i.imgur.com/pfkiPP6.gif",
				imageAltText: null,
				description: "Holy balls?"
			},
			{
				id:125567,
				title: "Welcome to Augment!",
				author: "Anbo Wei",
				date: 1234567876,
				imageSource: "http://i.imgur.com/pfkiPP6.gif",
				imageAltText: null,
				description: "Holy balls?"
			}
		];

		//Called by the previous and next buttons to add to the end of the list
		//Scrolls to the top of the list.
		this.getSet = function(startIndex) {
			this.upperMost = startIndex;
			//Get some amount of things, update brief array, so on

			$anchorScroll("scroll-header");
		}
	}]);
})();