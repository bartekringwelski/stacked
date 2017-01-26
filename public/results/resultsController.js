angular
  .module('app', [])
  .controller('resultsController', [
    '$scope',
    '$http',
    function ($scope, $http) {
      console.log("heeey from inside results controller");
    }
  ]);
