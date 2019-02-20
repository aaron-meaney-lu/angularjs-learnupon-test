angular.module('mainApp')
  .service('LearnUponService', function() {
    this.testFunction = function() {
      return 'This service works!';
    };
  });
