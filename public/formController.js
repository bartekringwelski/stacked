angular.module('app',[])
  .controller('formController', ['$scope', '$http', function($scope, $http) {
    
    $scope.getCommerceData = function(){
      console.log("hello");

      let formData = $scope.formData;
      $http.post('/userSubmission', formData).then( (response) => $scope.apiResults = response.data);
      console.log("response from server", $scope.apiResults);
    }
  }]);

