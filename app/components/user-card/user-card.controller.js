angular
  .module('mainApp')
  .controller('UserCardController', ['$scope', 'LearnUponService',
    function($scope, LearnUponService) {
      const $ctrl = this;
      
      $ctrl.$onInit = function() {
        $ctrl.links = {
          'show': (() => {return `#!/user/${$ctrl.user.id}`})(),
          'edit': (() => {return `#!/user/${$ctrl.user.id}/edit`})(),
          'delete': (()=> {return `#!/user/${$ctrl.user.id}/delete`})(),
        };
      };
    }
  ]);
