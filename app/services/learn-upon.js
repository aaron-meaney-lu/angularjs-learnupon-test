angular.module('mainApp')
  .service('LearnUponService', function() {
    this.testFunction = function() {
      return '<%ENV%>LEARNUPON_TEST_KEY<%ENV%>';
    };
  });
