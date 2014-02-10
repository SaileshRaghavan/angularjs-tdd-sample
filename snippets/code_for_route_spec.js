angular.module('sampleApp.followers', ['ui.router', 'ui.state'])

.config(function($stateProvider){
	$stateProvider.state('followers', {
		url: '/:handle/followers',
		template: '<div><h1>{{ user.name }}</h1><p ng-repeat="follower in user.followers">{{ follower }}</p></div>',
		controller: 'FollowersController',
		data: { pageTitle: "followers" }
	});
})


.controller('FollowersController', function($scope){

})
;