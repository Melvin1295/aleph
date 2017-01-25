var app = angular.module('appDemo', [
  'ngRoute',
  'empleadoControllers','ui.bootstrap'
]);
app.directive('stringToNumber', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(value) {
                    return '' + value;
                });
                ngModel.$formatters.push(function(value) {
                    return parseFloat(value, 10);
                });
            }
        };
    });
app.directive('intToBoolean', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(value) {
                    return '' + value;
                });
                ngModel.$formatters.push(function(value) {
                    return parseInt(value);
                });
            }
        };
    });
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/home.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/rx_dental', {
        templateUrl: 'pages/rx_dental.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/rx_tomografia', {
        templateUrl: 'pages/rx_tomografia.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/header', {
        templateUrl: 'pages/header.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/edit/:id', {
        templateUrl: 'pages/editrx_dental.html',
        controller: 'EmpleadoVerCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);