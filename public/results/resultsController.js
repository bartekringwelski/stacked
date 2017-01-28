angular
  .module('results', ['ui.utils.masks'])
  .controller('resultsController', function ($scope, $http) {
    $(".selectpicker").selectpicker();
    console.log("this get loadeD?");
  });
