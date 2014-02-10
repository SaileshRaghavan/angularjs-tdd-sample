angular.module( 'sampleApp', [
  'templates-app',
  'templates-common',
  'ui.state',
  'ui.route',
  'sampleApp.followers'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/notfound' );
})

.config(function($stateProvider){
  $stateProvider.state('notfound', {
    url: '/notfound',
    template: "<h1>WRONG TURN!</h1>",
    data: {pageTitle: '404'}
  });
  })


.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | sampleApp' ;
    }
  });
})

;

