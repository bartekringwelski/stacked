angular
  .module("app", ['form', 'results', 'ngRoute'])
  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/', {
        templateUrl: 'form/form.html',
        controller: 'formController'
      })
        .when('/results', {
          templateUrl: 'results/results.html',
          controller: 'resultsController'
        })
      // .otherwise({templateUrl: 'form/form.html', controller: 'formController'});
    }
  ]);
