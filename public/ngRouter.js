angular
  .module("app", ['form', 'results', 'nya.bootstrap.select', 'ngRoute'])
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
          controller: 'formController'
        })
        .otherwise({templateUrl: 'form/form.html', controller: 'formController'});
    }
  ]);
