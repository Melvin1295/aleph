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
      when('/ver/:id', {
        templateUrl: 'partials/ver.html',
        controller: 'EmpleadoVerCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);