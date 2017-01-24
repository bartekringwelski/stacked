angular.module('app',[])
  .controller('formController', ['$scope', '$http', function($scope, $http) {
    $scope.getCommerceData = function(){
      let formData = $scope.formData;
      $http.post('/userSubmission', formData);
    }
  }]);

