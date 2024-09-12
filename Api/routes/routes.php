<?php

require_once '../src/controller/UserController.php';

$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Remove the base URI part
$baseUri = '/Proyecto01/Api/public/index.php';
$uri = str_replace($baseUri, '', $requestUri);

// Remove leading slash
$uri = ltrim($uri, '/');

// Define routes
/*
echo "REQUEST URI: " . $requestUri . "<br>";
echo "PROCESSED URI: " . $uri . "<br>";
echo "METHOD: " . $requestMethod . "<br>";

*/

$controller = new UserController();

switch (true) {
    //leer todo
    case preg_match('/^users$/', $uri):
        if ($requestMethod === 'GET') {
            $controller->getAllUsers();
        }
    break;
    //buscar pot id
    case preg_match('/^users\/searchUserById\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'GET') {
            $id = $matches[1];  // El ID del usuario desde la URL
            $controller->searchUserById($id);
        }
        break;
//crear nuevo
    case preg_match('/^users\/create$/', $uri):
        if ($requestMethod === 'POST') {
            $controller->createUser();
        }
        break;
//actualizar
    case preg_match('/^users\/updateUser\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'PUT') {
            $id = $matches[1];
            $controller->updateUser($id);
        }
        break;
//borrar
    case preg_match('/^users\/delete\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'DELETE') {
            $id = $matches[1];
            $controller->deleteUser($id);
        }
        break;

    default:
        header("HTTP/1.0 404 NOT FOUND");
        echo "Ruta no encontrada";
        break;
}
