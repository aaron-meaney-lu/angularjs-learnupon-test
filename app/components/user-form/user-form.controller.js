angular
  .module('mainApp')
  .controller('UserFormController', ['$scope', '$routeParams', '$window', 'LearnUponService',
    function($scope, $routeParams, $window, LearnUponService) {
      const $ctrl = this;

      $ctrl.loadStatus = 'unloaded';

      $ctrl.$onInit = function() {
        if ($ctrl.user) {
          $ctrl.loadStatus = 'loaded';
          $ctrl._generateLinks();
        } else {
          $ctrl._getUser($routeParams.id);
        }
      };

      $ctrl.updateUser = function() {
        LearnUponService.updateUser($ctrl.user, function(response) {
          if (response.success) {
            $window.location.href = `#!/user/${$ctrl.user.id}`;
          } else {
            alert(`Error saving user: ${response.message}`);
          }
        });
      };

      $ctrl._getUser = function(id) {
        LearnUponService.getUser(id, function(user) {
          if (user) {
            $ctrl.user = user;
            $ctrl.loadStatus = 'loaded';
            $ctrl._generateLinks();
          } else {
            $ctrl.loadStatus = 'error';
          }
        });
      };

      $ctrl._generateLinks = function() {
        $ctrl.links = {
          'show': `#!/user/${$ctrl.user.id}`,
          'delete': `#!/user/${$ctrl.user.id}/delete`,
        };
      };
    }]);
