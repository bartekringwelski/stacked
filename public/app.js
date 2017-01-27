angular
  .module("app", ['ngRoute', 'app.formController'])
  .config(function ($routeProvider) {
    console.log("is this loading router app?");
    $routeProvider
      .when("/", {
      templateUrl: "form/form.html",
      controller: "formController"
    })
      .when("/results", {
        templateUrl: "results/reults.html",
        controller: ""
      })
  })
