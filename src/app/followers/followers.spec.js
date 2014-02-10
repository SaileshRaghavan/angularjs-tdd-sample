describe("Followers", function(){
	beforeEach( module('sampleApp.followers') );

	var scope;
	beforeEach(inject(function($rootScope){
		scope = $rootScope.$new();
	}));
	it("should route to show followers", inject(function($state){
		expect(function(){
			$state.transitionTo('followers', {handle: 'twitter'});
		}).not.toThrow();
		scope.$apply();
		expect($state.current.controller).toBe('FollowersController');
	}));

	it("should fetch the followers",inject(function(followersFactory,$httpBackend){
		var handle = "twitter";
		var response = {followers: ['abc','xyz'] };
		$httpBackend.expectGET("/"+handle+"/followers").respond(response);
		followersFactory.fetchFollowers(handle);
		$httpBackend.flush();
		expect(followersFactory.getUser().name).toBe(handle);
		expect(followersFactory.getUser().followers).toBe(response.followers);
	}));

	it("should render followers details", inject(function(followersFactory, $controller){
		var user = {
			name: 'twitter',
			followers: ['firefox', 'chrome', 'safari']
		};
		spyOn(followersFactory, 'getUser').andReturn(user);
		spyOn(followersFactory,'fetchFollowers');
		var followersController = $controller('FollowersController', {$scope: scope});
		scope.$apply();
		expect(scope.user).toBe(user);
		expect(followersFactory.fetchFollowers).toHaveBeenCalled();
	}));

});