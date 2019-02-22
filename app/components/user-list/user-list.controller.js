angular.module('mainApp')
  .controller('UserListController',['$scope', 'LearnUponService',
    function($scope, LearnUponService) {
      $ctrl = this;

      $ctrl.loaded = false;

      $ctrl.$onInit = function() {
        LearnUponService.getUsers(function (users) {
          $ctrl.users = users.user;
          $ctrl.loaded = true;
        });
      };
    }
  ]);
