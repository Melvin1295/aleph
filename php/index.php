<?php

// Cargamos Vendor
require __DIR__ . '/vendor/autoload.php';

$pdo = new PDO('mysql:host=localhost;dbname=aleph;charset=utf8', 'root', '');

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

$fluent = new FluentPDO($pdo);

$action = isset($_GET['a']) ? $_GET['a'] : null;

switch($action) {
    case 'departamentos':
        header('Content-Type: application/json');
        print_r(json_encode(profesiones($fluent)));
        break;
    case 'listar':
        header('Content-Type: application/json');
        print_r(json_encode(listar1($fluent)));
        break;
    case 'obtener':
        header('Content-Type: application/json');
        print_r(json_encode(obtener($fluent, $_GET['id'])));
        break;
     case 'obtenerformato':
        header('Content-Type: application/json');
        print_r(json_encode(obtenerformato($fluent, $_GET['id'])));
        break;
    case 'obtenerdetalle':
        header('Content-Type: application/json');
        print_r(json_encode(obtenerdetalle($fluent, $_GET['id'])));
        break;
    case 'obtenerdetalle2':
        header('Content-Type: application/json');
        print_r(json_encode(obtenerdetalle2($fluent, $_GET['id'])));
        break;
    case 'obtenercliente':
        header('Content-Type: application/json');
        print_r(json_encode(obtenercliente($fluent, $_GET['id'])));
        break;
    case 'id':
        header('Content-Type: application/json');
        print_r(json_encode(getidcliente($fluent)));
        break;
    case 'registrar':
        header('Content-Type: application/json');
        $data = json_decode(utf8_encode(file_get_contents("php://input")), true);
        print_r(json_encode(registrar($fluent, $data)));
        break;
    case 'update':
        header('Content-Type: application/json');
        $data = json_decode(utf8_encode(file_get_contents("php://input")), true);
        print_r(json_encode(update($fluent, $data)));
        break;
    case 'desactivar':
        header('Content-Type: application/json');
        $data = json_decode(utf8_encode(file_get_contents("php://input")), true);
        print_r(json_encode(desactivar($fluent, $data)));
        break;
    case 'eliminar':
        header('Content-Type: application/json');
        print_r(json_encode(eliminar($fluent, $_GET['id'])));
        break;
    case 'usuario':
       header('Content-Type: application/json');
        print_r(json_encode(getNombreUsuario($fluent)));
        break;
}
function getNombreUsuario($fluent){

    session_start();

    if($_SESSION["usuario"] == null){
       $_SESSION["usuario"]="sa";
    }
    return $fluent
         ->from('usuarios')
         ->select('usuarios.id')
         ->where('usuarios.nombre_usuario',$_SESSION["usuario"])
         ->fetch();
}
function profesiones($fluent)
{
    return $fluent
         ->from('departamento')
         ->fetchAll();
}

function listar($fluent)
{
    return $fluent
         ->from('empleado')
         ->select('empleado.*, profesion.Nombre as Profesion')
         ->orderBy("id DESC")
         ->fetchAll();
}
function listar1($fluent)
{
    return $fluent
         ->from('formato_control')
         ->leftJoin('datos_cliente ON datos_cliente.id = formato_control.datos_cliente_id')
         ->select('formato_control.*,datos_cliente.razon_social')
         ->orderBy("id DESC")
         ->fetchAll();
}
function getid($fluent)
{
    $result=$fluent
         ->from('equipo')
         ->select('max(equipo.id) as id')
         ->fetch();
   return $result->id;
}
function getidcliente($fluent)
{
    $result=$fluent
         ->from('datos_cliente')
         ->select('max(datos_cliente.id) as id')
         ->fetch();
   return $result->id;
}


function obtener($fluent, $id)
{
    return $fluent->from('empleado', $id)
                  ->select('empleado.*, profesion.Nombre as Profesion')
                              ->fetch();
}


function obtenerformato($fluent, $id)
{
    return $fluent->from('formato_control', $id)
                  ->select('formato_control.*')
                              ->fetch();
}
function obtenercliente($fluent, $id)
{
    return $fluent->from('datos_cliente', $id)
                  ->select('datos_cliente.*')
                              ->fetch();
}
function obtenerdetalle($fluent, $id)
{
      return $fluent->from('descri_producto')
                  ->select('descri_producto.*')
                  ->where('descri_producto.equipo_id',$id)
                  ->orderBy("id ")
                              ->fetch();
}
function obtenerdetalle2($fluent, $id)
{
    return $fluent->from('descri_producto')
                  ->select('descri_producto.*')
                  ->where('descri_producto.equipo_id',$id)
                  ->orderBy("id desc")
                              ->fetch();
}

function eliminar($fluent, $id)
{
    $fluent->deleteFrom('empleado', $id)
             ->execute();
    
    return true;
}

function registrar($fluent, $data)
{
      $fluent->insertInto('equipo', $data['equipo'])
             ->execute();    
                $ideuipo=getid($fluent);
                $descripcionEquipo=$data['descri_equipo'];
                $descripcionEquipo2=$data['descri_equipo2'];
                $descripcionEquipo['equipo_id']=$ideuipo;
                $descripcionEquipo2['equipo_id']=$ideuipo;
    
      $fluent->insertInto('datos_cliente', $data['cliente'])
             ->execute();

                $idCliente=getidcliente($fluent);
                $formato=$data['formato'];
                $formato['equipo_id']=$ideuipo;
                $formato['datos_cliente_id']=$idCliente;
                $formato['fecha']=date('Y-m-d');
      $fluent->insertInto('descri_producto', $descripcionEquipo)
             ->execute();
      $fluent->insertInto('descri_producto', $descripcionEquipo2)
             ->execute();
      $fluent->insertInto('formato_control', $formato)
             ->execute();
    return true;
}
function update ($fluent, $data)
{
    $formato=$data['formato'];
    $descripcionEquipo=$data['descri_equipo'];
    $descripcionEquipo2=$data['descri_equipo2'];
    $formato['fecha']=date('Y-m-d');
    $fluent->update('datos_cliente')->set($data['cliente'])->where('id', $formato['datos_cliente_id']) ->execute();
    $fluent->update('descri_producto')->set($descripcionEquipo)->where('id',$descripcionEquipo['id'])->execute();
    $fluent->update('descri_producto')->set($descripcionEquipo2)->where('id', $descripcionEquipo2['id'])->execute();
    $fluent->update('formato_control')->set($formato)->where('id', $formato['id'])->execute();
    return true;
}
function desactivar ($fluent, $data)
{
    $formato=$data['formato'];
    $fluent->update('formato_control')->set($formato)->where('id', $formato['id'])->execute();
    return true;
}