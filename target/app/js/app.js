var app=angular.module("app",["ngRoute","controllers"]);
app.config(["$routeProvider",function(b){b.when("/",{templateUrl:"partials/home.html",controller:"HomeController"}).otherwise({redirectTo:"/"})
}]);