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
    //-----------------------------------------------
    $routeProvider.
      when('/', {
        templateUrl: 'pages/rx_dental_list.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/rx_tomografia', {
        templateUrl: 'pages/rx_tomografia_list.html',
        controller: 'EmpleadoListadoCtrl'
      }).
       when('/rx_mamografia', {
        templateUrl: 'pages/rx_mamografia_list.html',
        controller: 'EmpleadoListadoCtrl'
      }).
       when('/rx_fluroscopico', {
        templateUrl: 'pages/rx_fluroscopico_list.html',
        controller: 'EmpleadoListadoCtrl'
      }).
        when('/rx_Convencional', {
        templateUrl: 'pages/rx_convencional_list.html',
        controller: 'EmpleadoListadoCtrl'
      }).
        when('/rx_desintometria', {
        templateUrl: 'pages/rx_desintometria_list.html',
        controller: 'EmpleadoListadoCtrl'
      }).
  //--------------------------------------------------------------------
      when('/rx_dental', {
        templateUrl: 'pages/rx_dental.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/rx_tomografia/create', {
        templateUrl: 'pages/rx_tomografia.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/rx_mamografia/create', {
        templateUrl: 'pages/rx_mamografia.html',
        controller: 'EmpleadoListadoCtrl'
      }).
      when('/rx_fluroscopico/create', {
        templateUrl: 'pages/rx_fluroscopico.html',
        controller: 'EmpleadoListadoCtrl'
      }).
       when('/rx_Convencional/create', {
        templateUrl: 'pages/rx_convencional.html',
        controller: 'EmpleadoListadoCtrl'
      }).
        when('/rx_Desintometria/create', {
        templateUrl: 'pages/rx_desintometria.html',
        controller: 'EmpleadoListadoCtrl'
      }).

      /*when('/rx_tomografia', {
        templateUrl: 'pages/rx_tomografia.html',
        controller: 'EmpleadoListadoCtrl'
      }).*/
      when('/header', {
        templateUrl: 'pages/header.html',
        controller: 'EmpleadoListadoCtrl'
      }).
    //--------------------------------------------------------------------------
      when('/edit/:id', {
        templateUrl: 'pages/editrx_dental.html',
        controller: 'EmpleadoVerCtrl'
      }).
      when('/editTomografia/:id', {
        templateUrl: 'pages/rx_tomografia_edit.html',
        controller: 'EmpleadoVerCtrl'
      }).
      when('/editMamografia/:id', {
        templateUrl: 'pages/rx_mamografia_edit.html',
        controller: 'EmpleadoVerCtrl'
      }).
      when('/editFluroscopico/:id', {
        templateUrl: 'pages/rx_fluroscopico_edit.html',
        controller: 'EmpleadoVerCtrl'
      }).
        when('/editConvencional/:id', {
        templateUrl: 'pages/rx_convencional_edit.html',
        controller: 'EmpleadoVerCtrl'
      }).
      when('/editDesintometria/:id', {
        templateUrl: 'pages/rx_desintometria_edit.html',
        controller: 'EmpleadoVerCtrl'
      }).
    //-------------------------------------------------------
    when('/print/:id', {
        templateUrl: 'pages/print_dental.html',
        controller: 'EmpleadoVerCtrl'
      }).
    when('/printTomografia/:id', {
        templateUrl: 'pages/print_tomografia.html',
        controller: 'EmpleadoVerCtrl'
      }).
    when('/printMamografia/:id', {
        templateUrl: 'pages/print_mamografia.html',
        controller: 'EmpleadoVerCtrl'
      }).
    when('/printFluroscopia/:id', {
        templateUrl: 'pages/print_fluroscopia.html',
        controller: 'EmpleadoVerCtrl'
      }).
     when('/printConvencional/:id', {
        templateUrl: 'pages/print_convencional.html',
        controller: 'EmpleadoVerCtrl'
      }).
     when('/printDesintometria/:id', {
        templateUrl: 'pages/print_desintometria.html',
        controller: 'EmpleadoVerCtrl'
      }).
    //-------------------------------------------------------
      otherwise({
        redirectTo: '/login'
      });
  }]);

