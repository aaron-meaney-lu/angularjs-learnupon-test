angular
  .module('mainApp')
  .component('userEditForm', {
    templateUrl: '/user-edit-form/user-edit-form.template.html',
    controller: 'UserEditFormController',
    bindings: {
      user: '<'
    }
  });
