angular
  .module('mainApp')
  .controller('UserCardController', ['$scope', 'LearnUponService',
    function($scope, LearnUponService) {
      const $ctlr = this;

      $ctlr.$onInit = function() {
        $ctlr.links = {
          'show': (() => {return `#!/user/${$ctlr.user.id}`})(),
          'edit': (() => {return `#!/user/${$ctlr.user.id}/edit`})(),
          'delete': (()=> {return `#!/user/${$ctlr.user.id}/delete`})(),
        };
      };
    }
  ]);
