
var myApp = angular.module('app',[]);

myApp.controller('formController', ['$scope', '$http', function($scope, $http) {

  $scope.getCommerceData = function(){

    var formData = $scope.formData;
    console.log(formData);

    $http.get(`https://api.commerce.gov/midaas/distribution?state=${formData.state}&race=${formData.race}&agegroup=25-34&sex=${formData.gender}&api_key=FCQsSMDXxo4njKfBe2cvHG7zXU4rhvDEIJ5onFAh`)
      .then(function(success, err){
      console.log(success, err);
      }
  ) 
}
}
]);

