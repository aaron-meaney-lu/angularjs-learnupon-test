angular
  .module('mainApp')
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/users', {
          templateUrl: '/index-users.html'
        })
        .when('/user/:id', {
          templateUrl: '/show-user.html'
        })
        .when('/user/:id/edit', {
          templateUrl: '/edit-user.html'
        })
        .when('/users/new', {
          templateUrl: '/create-user.html'
        })
        .otherwise({
          redirectTo: '/users'
        });
    }
]);
