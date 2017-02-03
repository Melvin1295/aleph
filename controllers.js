var empleadoControllers = angular.module('empleadoControllers', []);

empleadoControllers.controller('EmpleadoListadoCtrl', ['$location','$scope', '$http', '$log','$window'
    ,function ($location,$scope, $http, $log,$window) {
    
    $scope.documento="ejemplo";
    $scope.formato={};
    $scope.formato1={};
    $scope.descri_equipo={};
    $scope.descri_equipo2={};
    $scope.equipo_tipo={};
    $scope.cliente={};
    $scope.equipo={};
    $scope.formatoGeneral=[];
    $scope.listaFormato=[];
    $scope.viewby = 3; 
    $scope.usuario={};
    $scope.formato.fecha=new Date();
    $scope.datoBuscado;
   
    $http.get('/aleph/php/?a=usuario').then(function(r){
            $scope.usuario = r.data;
            
            if($scope.usuario.id == null){
                $window.location.href="/aleph/login.html";
            }
            //
        });
     listas();
    
    $scope.salir = function(){
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
   $scope.buscar=function()
   {
   if($location.path()== '/'){
         $http.get('/aleph/php/?a=buscar&tipo='+0+'&dato='+$scope.datoBuscado).then(function(r){
            $scope.listaFormato=r.data;
            $scope.viewby = 10;
            $scope.totalItems = $scope.listaFormato.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5; 
            $scope.setItemsPerPage(5);
        });
      }
      if($location.path()== '/rx_tomografia'){
          $http.get('/aleph/php/?a=buscar&tipo='+1+'&dato='+$scope.datoBuscado).then(function(r){
            $scope.listaFormato=r.data;
            $scope.viewby = 10;
            $scope.totalItems = $scope.listaFormato.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5; 
            $scope.setItemsPerPage(5);
        });
      }
      if($location.path()== '/rx_mamografia'){
          $http.get('/aleph/php/?a=buscar&tipo='+2+'&dato='+$scope.datoBuscado).then(function(r){
            $scope.listaFormato=r.data;
            $scope.viewby = 10;
            $scope.totalItems = $scope.listaFormato.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5; 
            $scope.setItemsPerPage(5);
        });
        }
      if($location.path()== '/rx_fluroscopico'){
          $http.get('/aleph/php/?a=buscar&tipo='+3+'&dato='+$scope.datoBuscado).then(function(r){
            $scope.listaFormato=r.data;
            $scope.viewby = 10;
            $scope.totalItems = $scope.listaFormato.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5; 
            $scope.setItemsPerPage(5);
        });
      }
       if($location.path()== '/rx_Convencional'){
          $http.get('/aleph/php/?a=buscar&tipo='+4+'&dato='+$scope.datoBuscado).then(function(r){
            $scope.listaFormato=r.data;
            $scope.viewby = 10;
            $scope.totalItems = $scope.listaFormato.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5; 
            $scope.setItemsPerPage(5);
        });
      }

   }
    function empleados(){
        $http.get('/aleph/php/?a=listar').then(function(r){
            $scope.model = r.data;
        });
    }
    $scope.salir=function()
    {
       $http.get('/aleph/php/?a=salir').then(function(r){
          
           $window.location.href="/aleph/login.html";
          
       });
    }
    function listas(){
      if($location.path()== '/'){
         $http.get('/aleph/php/?a=listar&tipo='+0).then(function(r){
            $scope.listaFormato=r.data;
            $scope.viewby = 10;
            $scope.totalItems = $scope.listaFormato.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5; 
            $scope.setItemsPerPage(5);
        });
      }
      if($location.path()== '/rx_tomografia'){
          $http.get('/aleph/php/?a=listar&tipo='+1).then(function(r){
            $scope.listaFormato=r.data;
            $scope.viewby = 10;
            $scope.totalItems = $scope.listaFormato.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5; 
            $scope.setItemsPerPage(5);
        });
      }
      if($location.path()== '/rx_mamografia'){
          $http.get('/aleph/php/?a=listar&tipo='+2).then(function(r){
            $scope.listaFormato=r.data;
            $scope.viewby = 10;
            $scope.totalItems = $scope.listaFormato.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5; 
            $scope.setItemsPerPage(5);
        });
        }
      if($location.path()== '/rx_fluroscopico'){
          $http.get('/aleph/php/?a=listar&tipo='+3).then(function(r){
            $scope.listaFormato=r.data;
            $scope.viewby = 10;
            $scope.totalItems = $scope.listaFormato.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5; 
            $scope.setItemsPerPage(5);
        });
      }
       if($location.path()== '/rx_Convencional'){
          $http.get('/aleph/php/?a=listar&tipo='+4).then(function(r){
            $scope.listaFormato=r.data;
            $scope.viewby = 10;
            $scope.totalItems = $scope.listaFormato.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5; 
            $scope.setItemsPerPage(5);
        });
      }

    }
    $scope.abrirVentana=function(url) {
           window.open(url);
        }
    
    function departamentos(){
        $http.get('/aleph/php/?a=departamentos').then(function(r){
           
        });
    }
    $scope.obtenerFormato=function(id){
       
        $http.get('/aleph/php/?a=obtenerformato&id='+id).then(function(r){
            $scope.formato=r.data;
            alert($scope.formato.id);
            $window.location.href="#/edit/"+id;
        });
    }
   
    
    $scope.retirar = function(id){
        if(confirm('Esta seguro de realizar esta acción?')){
            $http.get('/aleph/php/?a=eliminar&id=' + id).then(function(r){
                empleados();
            });
        }
    }
    
    $scope.registrar = function(){
    $scope.formato.fecha=$scope.formato.fecha.getFullYear()+'-'+($scope.formato.fecha.getMonth()+1)+'-'+$scope.formato.fecha.getDate()+' '+
                         $scope.formato.fecha.getHours()+':'+$scope.formato.fecha.getMinutes()+':'+$scope.formato.fecha.getSeconds();
    
    $scope.equipo.descripcion="Equipo Ejemplo";
        var model = {
          formato: $scope.formato,
          formato1: $scope.formato1,
          descri_equipo: $scope.descri_equipo,
          descri_equipo2:$scope.descri_equipo2,
          cliente: $scope.cliente,
          equipo: $scope.equipo
        };
        $http.post('/aleph/php/?a=registrar', model).then(function(r){            
                alert("registrado Correctamente!!");  
                $window.location.href="#/";          
           
        });
    }
    $scope.registrarTomografia = function(){
       $scope.formato.fecha=$scope.formato.fecha.getFullYear()+'-'+($scope.formato.fecha.getMonth()+1)+'-'+$scope.formato.fecha.getDate()+' '+
                         $scope.formato.fecha.getHours()+':'+$scope.formato.fecha.getMinutes()+':'+$scope.formato.fecha.getSeconds();
    
    $scope.equipo.descripcion="Equipo Ejemplo";
    $scope.formato.tipo=1;
        var model = {
          formato: $scope.formato,
          formato1: $scope.formato1,
          descri_equipo: $scope.descri_equipo,
          descri_equipo2:$scope.descri_equipo2,
          cliente: $scope.cliente,
          equipo: $scope.equipo
        };
        $http.post('/aleph/php/?a=registrar', model).then(function(r){            
                alert("registrado Correctamente!!");  
                $window.location.href="#/rx_tomografia";          
           
        });
    }
    $scope.registrarMamografia = function(){
    $scope.formato.fecha=$scope.formato.fecha.getFullYear()+'-'+($scope.formato.fecha.getMonth()+1)+'-'+$scope.formato.fecha.getDate()+' '+
                         $scope.formato.fecha.getHours()+':'+$scope.formato.fecha.getMinutes()+':'+$scope.formato.fecha.getSeconds();
    
    $scope.equipo.descripcion="Equipo Ejemplo";
    $scope.formato.tipo=2;
        var model = {
          formato: $scope.formato,
          formato1: $scope.formato1,
          descri_equipo: $scope.descri_equipo,
          descri_equipo2:$scope.descri_equipo2,
          cliente: $scope.cliente,
          equipo: $scope.equipo
        };
        $http.post('/aleph/php/?a=registrar', model).then(function(r){            
                alert("registrado Correctamente!!");  
                $window.location.href="#/rx_mamografia";          
           
        });
    }
    $scope.registrarFluroscopia = function(){
     $scope.formato.fecha=$scope.formato.fecha.getFullYear()+'-'+($scope.formato.fecha.getMonth()+1)+'-'+$scope.formato.fecha.getDate()+' '+
                         $scope.formato.fecha.getHours()+':'+$scope.formato.fecha.getMinutes()+':'+$scope.formato.fecha.getSeconds();
    
    $scope.equipo.descripcion="Equipo Ejemplo";
    $scope.formato.tipo=3;
        var model = {
          formato: $scope.formato,
          formato1: $scope.formato1,
          descri_equipo: $scope.descri_equipo,
          descri_equipo2:$scope.descri_equipo2,
          cliente: $scope.cliente,
          equipo: $scope.equipo
        };
        $http.post('/aleph/php/?a=registrar', model).then(function(r){            
                alert("registrado Correctamente!!");  
                $window.location.href="#/rx_fluroscopico";          
           
        });
    }
    $scope.registrarConvencional = function(){
     $scope.formato.fecha=$scope.formato.fecha.getFullYear()+'-'+($scope.formato.fecha.getMonth()+1)+'-'+$scope.formato.fecha.getDate()+' '+
                         $scope.formato.fecha.getHours()+':'+$scope.formato.fecha.getMinutes()+':'+$scope.formato.fecha.getSeconds();
    
    $scope.equipo.descripcion="Equipo Ejemplo";
    $scope.formato.tipo=4;
        var model = {
          formato: $scope.formato,
          formato1: $scope.formato1,
          descri_equipo: $scope.descri_equipo,
          descri_equipo2:$scope.descri_equipo2,
          cliente: $scope.cliente,
          equipo: $scope.equipo
        };
        $http.post('/aleph/php/?a=registrar', model).then(function(r){            
                alert("registrado Correctamente!!");  
                $window.location.href="#/rx_Convencional";          
           
        });
    }
     $scope.desactivar = function(row){
        if(row.estado==0){row.estado=1}else{row.estado=0;};
        var model = {
          formato: row
        };
        $http.post('/aleph/php/?a=desactivar', model).then(function(r){            
                alert("desactivado correctamente!!");  
                          
           listas();
        });
    }
 
  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };
  $scope.imprimir= function(){
        if( $scope.descri_equipo.equi_id != null && $scope.descri_equipo2.equipo_id != null && $scope.cliente.datos_cliente_id != null)
          {
             $window.location.href="/printConvencional/"+ $routeParams.id; 
          }
    }
$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; //reset to first paghe
}
}]);

empleadoControllers.controller('EmpleadoVerCtrl', ['$location','$scope', '$routeParams', '$http','$window', function ($location,$scope, $routeParams, $http,$window) {
    $scope.formato1={};
   // $scope.fecha2='';
    $http.get('/aleph/php/?a=obtenerformato&id=' + $routeParams.id).then(function(r){
           $scope.formato=r.data;
           $scope.fecha2=$scope.formato.fecha;
           $scope.formato.fecha=new Date($scope.formato.fecha);
          // $scope.formato.fecha=new Date($scope.sumaFecha(1,r.data.fecha));
          
          $http.get('/aleph/php/?a=obtenercliente&id=' + $scope.formato.datos_cliente_id).then(function(r){
              $scope.cliente=r.data;
          });
          $http.get('/aleph/php/?a=obtenerdetalle&id=' + $scope.formato.equipo_id).then(function(r){
              $scope.descri_equipo=r.data;
          });
          $http.get('/aleph/php/?a=obtenerdetalle2&id=' + $scope.formato.equipo_id).then(function(r){
              $scope.descri_equipo2=r.data;
          });
    });
      $scope.usuario={};
   
    $http.get('/aleph/php/?a=usuario').then(function(r){
            $scope.usuario = r.data;
            
            if($scope.usuario.id == null){
                $window.location.href="/aleph/login.html"
            }
            //
        });
     $scope.mostrar=true;
   
     $scope.onload = function() {
        $scope.mostrar=false;
        //slert($scope.mostrar);
        window.print();
        setTimeout(function() {
          window.close();
        }, 1);
      }
    $scope.completarCero=function(num){
      var numero='';
           if (num < 10)
            {
               numero='0'+num;
            }else{
               numero=''+num;
            }
            return numero;
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

    $scope.update = function(){
    
        var model = {
          formato: $scope.formato,
          formato1: $scope.formato1,
          descri_equipo: $scope.descri_equipo,
          descri_equipo2:$scope.descri_equipo2,
          cliente: $scope.cliente
        };
        $http.post('/aleph/php/?a=update',  model).then(function(r){            
                alert("Actualizado Correctamente!!");   
                if($location.path()== '/edit/'+ $routeParams.id){
                   $window.location.href="#/"; 
                }
                if($location.path()== '/editTomografia/'+ $routeParams.id){
                   $window.location.href="#/rx_tomografia"; 
                }
                if($location.path()== '/editMamografia/'+ $routeParams.id){
                   $window.location.href="#/rx_mamografia"; 
                }
                if($location.path()== '/editFluroscopico/'+ $routeParams.id){
                   $window.location.href="#/rx_fluroscopico"; 
                }  
                 if($location.path()== '/editConvencional/'+ $routeParams.id){
                   $window.location.href="#/rx_Convencional"; 
                }          
               
        });
    }
}]);