angular.module('mainApp')
  .controller('UserListController',['$scope', 'LearnUponService',
    function($scope, LearnUponService) {
      $scope.users = [];

      $scope.getUsers = function() {
        LearnUponService.getUsers(function (users) {
          $scope.users = users.user;
        });
      };
    }
  ]);
