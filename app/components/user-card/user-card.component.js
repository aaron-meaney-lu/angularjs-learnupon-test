angular
  .module('mainApp')
  .component('userCard', {
    templateUrl: '/user-card/user-card.template.html',
    controller: 'UserCardController',
    bindings: {
      user: '<'
    }
  });
