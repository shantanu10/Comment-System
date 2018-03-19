angular.module('commentApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/comments', {

		templateUrl: '/views/comments.html',
		controller: "CommentsController"
	})

	.otherwise('/comments');

});