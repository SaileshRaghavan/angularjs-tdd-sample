.factory('followersFactory', function($http) {
	var user = {
		name: "",
		followers: []
	};
	return {
		fetchFollowers: function(handle) {
			$http.get("/" + handle + "/followers").success(function(response) {
				user.name = handle;
				user.followers = response;
			}).error(function() {});
		},
		getUser: function() {
			return user;
		}
	};
})
