var angularRoutingApp = angular.module('angularRoutingApp', 
    ['ngRoute',
     'empleadoControllers'
     ]);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/acerca', {
            templateUrl : 'pages/acerca.html',
            controller  : 'aboutController'
        })
        .when('/contacto', {
            templateUrl : 'pages/contacto.html',
            controller  : 'contactController'
        })
         .when('/lista', {
            templateUrl : 'pages/listado.html',
            controller  : 'myCtrl2'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angularRoutingApp.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});

angularRoutingApp.controller('aboutController', function($scope) {
    $scope.message = 'Esta es la página "Acerca de"';
});

angularRoutingApp.controller('contactController', function($scope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});
angularRoutingApp.controller('myCtrl2', function($scope,$http) {
    //$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
    $scope.nombre = "John";
    $scope.lastName = "Doe";
     empleados();
    
    
    function empleados(){
        $http.get('http://localhost/tienda/?a=listar').then(function(r){
            $scope.model = r.data;
        });
    }
});