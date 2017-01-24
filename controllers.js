var empleadoControllers = angular.module('empleadoControllers', []);

empleadoControllers.controller('EmpleadoListadoCtrl', ['$scope', '$http', '$log'
    ,function ($scope, $http, $log) {
    
    $scope.documento={};
    $scope.formato={};
    $scope.formato1={};
    $scope.descri_equipo={};
    $scope.descri_equipo2={};
    $scope.equipo_tipo={};
    $scope.cliente={};
    $scope.equipo={};
    $scope.formatoGeneral=[];
    $scope.prueba = function(){
        $log.log($scope.documento);
    }

    //empleados();
    /*departamentos();   
    $scope.codigo_Departamento='01';
    $scope.person=[];
  */
    function empleados(){
        $http.get('http://localhost/aleph/php/?a=listar').then(function(r){
            $scope.model = r.data;
        });
    }
    function departamentos(){
        $http.get('http://localhost/aleph/php/?a=departamentos').then(function(r){
            $scope.departamentos = r.data;
        });
    }
   
    
    $scope.retirar = function(id){
        if(confirm('Esta seguro de realizar esta acción?')){
            $http.get('http://localhost/aleph/php/?a=eliminar&id=' + id).then(function(r){
                empleados();
            });
        }
    }
    
    $scope.registrar = function(){
    $scope.equipo.descripcion="hola mundo";
    /*$scope.formatoGeneral.formato=$scope.formato;
    $scope.formatoGeneral.formato1=$scope.formato1;
    $scope.formatoGeneral.descri_equipo=$scope.descri_equipo;
    $scope.formatoGeneral.descri_equipo2=$scope.descri_equipo2;
    $scope.formatoGeneral.equipo_tipo=$scope.equipo_tipo;
    $scope.formatoGeneral.cliente=$scope.cliente;*/
        var model = {
          formato: $scope.formato,
          formato1: $scope.formato1,
          descri_equipo: $scope.descri_equipo,
          descri_equipo2:$scope.descri_equipo2,
          equipo_tipo: $scope.equipo_tipo,
          cliente: $scope.cliente,
          equipo: $scope.equipo
        };
        $http.post('http://localhost/aleph/php/?a=registrar',  model).then(function(r){
            if(r==true){
                alert("registrado Correctamente!!");
            }
           
        });
    }
}]);

empleadoControllers.controller('EmpleadoVerCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $http.get('http://localhost/Cyl/php/?a=obtener&id=' + $routeParams.id).then(function(r){
        $scope.model = r.data;
    });
}]);