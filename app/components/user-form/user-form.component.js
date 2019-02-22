angular
  .module('mainApp')
  .component('userForm', {
    templateUrl: '/user-form/user-form.template.html',
    controller: 'UserFormController',
    bindings: {
      user: '<'
    }
  });
