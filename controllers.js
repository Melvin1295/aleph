var empleadoControllers = angular.module('empleadoControllers', []);

empleadoControllers.controller('EmpleadoListadoCtrl', ['$scope', '$http', '$log','$window'
    ,function ($scope, $http, $log,$window) {
    
    $scope.documento={};
    $scope.formato={};
    $scope.formato1={};
    $scope.descri_equipo={};
    $scope.descri_equipo2={};
    $scope.equipo_tipo={};
    $scope.cliente={};
    $scope.equipo={};
    $scope.formatoGeneral=[];
    $scope.listaFormato=[];
    listas();
    $scope.prueba = function(){
        $log.log($scope.documento);
    }
    $scope.validar=function(){$scope.formato.esta_meca=!$scope.formato1.esta_meca;}
    $scope.validar1=function(){$scope.formato1.esta_meca=!$scope.formato.esta_meca;}

    $scope.validar2=function(){$scope.formato1.mov_adec_equi=!$scope.formato.mov_adec_equi;}
    $scope.validar3=function(){$scope.formato.mov_adec_equi=!$scope.formato1.mov_adec_equi;}

    $scope.validar4=function(){$scope.formato1.esta_cable=!$scope.formato.esta_cable;}
    $scope.validar5=function(){$scope.formato.esta_cable=!$scope.formato1.esta_cable;}
   
    $scope.validar6=function(){$scope.formato1.ind_punto_focal=!$scope.formato.ind_punto_focal;}
    $scope.validar7=function(){$scope.formato.ind_punto_focal=!$scope.formato1.ind_punto_focal;}

    $scope.validar8=function(){$scope.formato1.funci_indicador=!$scope.formato.funci_indicador;}
    $scope.validar9=function(){$scope.formato.funci_indicador=!$scope.formato1.funci_indicador;}

     $scope.validar10=function(){$scope.formato1.interrup_expo=!$scope.formato.interrup_expo;}
    $scope.validar11=function(){$scope.formato.interrup_expo=!$scope.formato1.interrup_expo;}

    $scope.validar12=function(){$scope.formato1.barrera_protect=!$scope.formato.barrera_protect;}
    $scope.validar13=function(){$scope.formato.barrera_protect=!$scope.formato1.barrera_protect;}
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
    function listas(){
         $http.get('http://localhost/aleph/php/?a=listar').then(function(r){
            $scope.listaFormato=r.data;
        });
    }
    function departamentos(){
        $http.get('http://localhost/aleph/php/?a=departamentos').then(function(r){
           
        });
    }
    $scope.obtenerFormato=function(id){
       
        $http.get('http://localhost/aleph/php/?a=obtenerformato&id='+id).then(function(r){
            $scope.formato=r.data;
            alert($scope.formato.id);
            $window.location.href="#/edit/"+id;
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
    $scope.equipo.descripcion="Equipo Ejemplo";
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
                alert("registrado Correctamente!!");            
           
        });
    }
}]);

empleadoControllers.controller('EmpleadoVerCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $http.get('http://localhost/aleph/php/?a=obtenerformato&id=' + $routeParams.id).then(function(r){
         $scope.formato=r.data;
    });
}]);