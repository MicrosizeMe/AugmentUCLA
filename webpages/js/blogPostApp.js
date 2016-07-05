(function() {
	var app = angular.module('BlogPostPage', [
		'headerController', 
		'looseDirectives',
		'blogSidebarController'
	]);

	app.controller('BlogPostController', ["$http", "$location", "$sce", 
		function($http, $location, $sce) {
			var blogPostNumber = $location.search().postID;

			//Defaults
			this.mainPost = {
				title: "I mean, what did you expect?",
				author: null,
				date: 1678909876,
				imageSrc: "http://breeze.unispheredesign.com/wp-content/uploads/2010/08/900x300_3.jpg",
				description: "Well, I guess I have to give you credit for being curious.",
				text: $sce.trustAsHtml("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>")
			}; 

			//Change from defaults

			this.comments = [
				{
					author: "Anbo Wei",
					imageSrc: "http://megaicons.net/static/img/icons_sizes/7/59/64/pixelmator-icon.png",
					text: "WOW! SUCH AN INFORMATIVE POST!",
					date: 1678909876,
					comments: [
						{
							author: "Anbo Wei",
							imageSrc: "http://megaicons.net/static/img/icons_sizes/7/59/64/pixelmator-icon.png",
							date: 1678909876,
							text: "WOW! SUCH AN INFORMATIVE POST!"
						}
					]
				},
				{
					author: "Anbo Wei",
					imageSrc: "http://megaicons.net/static/img/icons_sizes/7/59/64/pixelmator-icon.png",
					text: "WOW! SUCH AN INFORMATIVE POST!",

					comments: [

					]
				}
			];
		}
	]);
})();