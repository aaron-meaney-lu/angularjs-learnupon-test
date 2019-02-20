angular.module('mainApp')
  .controller('UserController',['$scope', 'LearnUponService',
    function($scope, LearnUponService) {
      $scope.testFunction = function() {
        alert(LearnUponService.testFunction());
      };

      $scope.getUsers = function() {
        return LearnUponService.getUsers();
      };
    }
  ]);
