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
        print_r(json_encode(listar($fluent)));
        break;
    case 'login':
        header('Content-Type: application/json');
        print_r(json_encode(loggin($fluent, $_GET['username'],$_GET['clave'])));
        break;
    case 'registrar':
        header('Content-Type: application/json');
        $data = json_decode(utf8_encode(file_get_contents("php://input")), true);
        print_r(json_encode(registrar($fluent, $data)));
        break;
    case 'eliminar':
        header('Content-Type: application/json');
        print_r(json_encode(eliminar($fluent, $_GET['id'])));
        break;
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
         ->from('usuarios')
         ->select('usuarios.*')
         ->orderBy("id DESC")
         ->fetchAll();
}

function loggin($fluent, $username,$clave)
{
    
     $fluent
         ->from('usuarios')
         ->select('usuarios.id')
         ->where('usuarios.nombre_usuario',$username)
         ->where('usuarios.clave',$clave)   
         ->fetch();
    session_start();
    $_SESSION["usuario"]=$username;
    return true;
}

function eliminar($fluent, $id)
{
    $fluent->deleteFrom('empleado', $id)
             ->execute();
    
    return true;
}

function registrar($fluent, $data)
{
    $data['FechaRegistro'] = date('Y-m-d');
    $fluent->insertInto('usuarios', $data)
             ->execute();
    
    return true;
}