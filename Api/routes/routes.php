<?php

require_once '../src/controller/PacienteController.php';

$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Remove the base URI part
$baseUri = '/Proyecto01/Api/public/index.php';
$uri = str_replace($baseUri, '', $requestUri);

// Remove leading slash
$uri = ltrim($uri, '/');


$controller = new PacienteController();

switch (true) {
    //leer todo
    case preg_match('/^pacientes$/', $uri):
        if ($requestMethod === 'GET') {
            $controller->getAllPacientes();
        }
    break;
    //buscar pot id
    case preg_match('/^pacientes\/searchPacienteById\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'GET') {
            $id = $matches[1];  // El ID del usuario desde la URL
            $controller->searchPacienteById($id);
        }
        break;
//crear nuevo
    case preg_match('/^pacientes\/create$/', $uri):
        if ($requestMethod === 'POST') {
            $controller->createPaciente();
        }
        break;
//actualizar
    case preg_match('/^pacientes\/updatePaciente\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'PUT') {
            $id = $matches[1];
            $controller->updatePaciente($id);
        }
        break;
//borrar
    case preg_match('/^pacientes\/delete\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'DELETE') {
            $id = $matches[1];
            $controller->deletePaciente($id);
        }
        break;

    case preg_match('/^users/searchUserById/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'GET') {
            $id = $matches[1];  // El ID del usuario desde la URL
            $controller->searchUserById($id);
        }
        break;





    default:
        header("HTTP/1.0 404 NOT FOUND");
        echo "Ruta no encontrada";
        break;
}
