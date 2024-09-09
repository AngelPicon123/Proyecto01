<?php

require_once '../src/controller/UserController.php';

$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

//definicion de rutas

switch ($requestUri) {
    case 'Proyecto01/Api/public/index.php/users':
        if ($requestMethod === 'GET'){
            $controller = new UserController();
            $controller->getAllUsers();
        }
    break;
    /*
    case 'Proyecto01/Api/public/index.php/users/crate':
        if ($requestMethod === 'POST'){
            $controller = new UserController();
            $controller->createUser();
        }
        break;
    */
}
