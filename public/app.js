angular
  .module("myApp", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
      templateUrl: "/form/form.html",
      controller: "formController"
    })
      .when("/results", {
        templateUrl: "/results/results.html",
        controller: "resultsController"
      });
  })
