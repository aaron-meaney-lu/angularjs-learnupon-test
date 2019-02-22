angular
  .module('mainApp')
  .controller('UserCardController', ['$scope', '$routeParams', 'LearnUponService',
    function($scope, $routeParams, LearnUponService) {
      const $ctrl = this;

      $ctrl.loadStatus = 'unloaded';

      $ctrl.extraDetails = false;

      $ctrl.$onInit = function() {
        if ($ctrl.user) {
          $ctrl.loadStatus = 'loaded';
          $ctrl._generateLinks();
        } else {
          $ctrl._getUser($routeParams.id);
        }
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
      }

      $ctrl._generateLinks = function() {
        $ctrl.links = {
          'show': `#!/user/${$ctrl.user.id}`,
          'edit': `#!/user/${$ctrl.user.id}/edit`,
          'delete': `#!/user/${$ctrl.user.id}/delete`,
        };
      };
    }
  ]);
