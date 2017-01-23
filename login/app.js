var app = angular.module('appDemo', [
  'ngRoute',
  'empleadoControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login2', {
        templateUrl: 'login/view.html',
        controller: 'EmpleadoListadoCtrl'
      }).
           otherwise({
        redirectTo: '/'
      });
  }]);