(function() {

	var app = angular.module('blogController', []);


	app.controller('BlogController', ["$http", function($http) {
		this.logo = "/logos/augmentlogonontransparent.png";

		//Get information briefs about the blog posts, 

		this.upperMost = 1;//get the newest one somehow
		this.viewLimit = 10;

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
			}
		];

		//Get catagories by most popular
		this.catagories = ["1", "2", "3", "4", "5", "6"];

		//Called by the previous and next buttons to add to the end of the list
		this.getSet = function(startIndex) {
			this.upperMost = startIndex;
			//Get some amount of things, update brief array, so on
		}
	}]);

})();