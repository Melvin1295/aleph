var empleadoControllers = angular.module('empleadoControllers', []);

empleadoControllers.controller('EmpleadoListadoCtrl', ['$scope', '$http', function ($scope, $http) {
    //empleados();
    departamentos();   
    $scope.codigo_Departamento='01';
  
    function empleados(){
        $http.get('http://localhost/Cyl/php/?a=listar').then(function(r){
            $scope.model = r.data;
        });
    }
    function departamentos(){
        $http.get('http://localhost/Cyl/php/?a=departamentos').then(function(r){
            $scope.departamentos = r.data;
        });
    }
   
    
    $scope.retirar = function(id){
        if(confirm('Esta seguro de realizar esta acción?')){
            $http.get('http://localhost/Cyl/php/?a=eliminar&id=' + id).then(function(r){
                empleados();
            });
        }
    }
    
    $scope.registrar = function(){
        var model = {
            Correo: $scope.Correo,
            Nombre: $scope.Nombre,
            Apellido: $scope.Apellido,
            Sexo: $scope.Sexo,
            Sueldo: $scope.Sueldo,
            Profesion_id: $scope.Profesion_id,
            FechaNacimiento: $scope.FechaNacimiento
        };
        
        $http.post('http://localhost/Cyl/php/?a=registrar', model).then(function(r){
            empleados();
            
            $scope.Correo = null;
            $scope.Nombre = null;
            $scope.Apellido = null;
            $scope.Sueldo = null;
            $scope.FechaNacimiento = null;
        });
    }
}]);

empleadoControllers.controller('EmpleadoVerCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $http.get('http://localhost/Cyl/php/?a=obtener&id=' + $routeParams.id).then(function(r){
        $scope.model = r.data;
    });
}]);