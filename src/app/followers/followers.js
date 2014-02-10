angular.module('sampleApp.followers', ['ui.router', 'ui.state'])

.config(function($stateProvider){
	$stateProvider.state('followers', {
		url: '/:handle/followers',
		template: '<div><h1>{{ user.name }}</h1><ul><li ng-repeat="follower in user.followers">{{ follower }}</li></ul></div>',
		controller: "FollowersController",
		data: { pageTitle: "followers" }
	});
})

.factory('followersFactory', function($http) {
	var user = {
		name: "",
		followers: []
	};
	return {
		fetchFollowers: function(handle) {
			$http.get("/" + handle + "/followers").success(function(response) {
				user.name = handle;
				user.followers = response.followers;
			}).error(function() {});
		},
		getUser: function() {
			return user;
		}
	};
})


.controller('FollowersController', function($scope, followersFactory, $stateParams){
	$scope.user = followersFactory.getUser();
	followersFactory.fetchFollowers($stateParams.handle);
})


;