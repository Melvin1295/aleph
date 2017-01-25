var app = angular.module('appDemo', [
  'ngRoute',
  'empleadoControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/rx_dental.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/edit/:id', {
        templateUrl: 'pages/acerca.html',
        controller: 'EmpleadoVerCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);