var empleadoControllers = angular.module('empleadoControllers', []);

empleadoControllers.controller('EmpleadoListadoCtrl', ['$scope', '$http','$location','$window', function ($scope, $http,$location,$window) {
      
    $scope.user='';
    $scope.passw='';
    $scope.usuario={};
    $scope.login=function(){   	   
          
            $http.get('/aleph/php/login.php/?a=login&username=' + $scope.user+"&clave="+$scope.passw).then(function(r){
            	 
                if( r.data == true){ 
                	$window.location.href="/aleph/#/";
                }else{
                	alert("Error Login contraseña o usuario incorrecto !!");
                }
            });
        
    }
}]);

