angular
  .module('form', ['ui.utils.masks'])
  .controller('formController', function ($scope, $http) {

    console.log("hellow from inside forms");
    $(".selectpicker").selectpicker();

    $scope.getCommerceData = function () {

      var counter = 0;
      console.log("button just got clicked");
      $scope.hasData = true;

      let formData = $scope.formData;

    }
  });
