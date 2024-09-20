<?php

require_once '../src/controller/PacienteController.php';
require_once '../src/controller/TerapeutaController.php';

$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Remove the base URI part
$baseUri = '/Proyecto01/Api/public/index.php';
$uri = str_replace($baseUri, '', $requestUri);

// Remove leading slash
$uri = ltrim($uri, '/');


$controller = new PacienteController();
$controllerTerapeuta = new TerapeutaController();

switch (true) {
    //leer todos los pacientes
    case preg_match('/^pacientes$/', $uri):
        if ($requestMethod === 'GET') {
            $controller->getAllPacientes();
        }
        break;
    //buscar paciente por id
    case preg_match('/^pacientes\/searchPacienteById\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'GET') {
            $id = $matches[1];  // El ID del usuario desde la URL
            $controller->searchPacienteById($id);
        }
        break;
         //buscar paciente por dni
    case preg_match('/^pacientes\/searchPacienteByDni\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'GET') {
            $dni = $matches[1];  // El ID del usuario desde la URL
            $controller->getPacienteByDni($dni);
        }
        break;
    //crear nuevo paciente
    case preg_match('/^pacientes\/create$/', $uri):
        if ($requestMethod === 'POST') {
            $controller->createPaciente();
        }
        break;
    //actualizar paciente
    case preg_match('/^pacientes\/updatePaciente\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'PUT') {
            $id = $matches[1];
            $controller->updatePaciente($id);
        }
        break;
    //borrar paciente
    case preg_match('/^pacientes\/delete\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'DELETE') {
            $id = $matches[1];
            $controller->deletePaciente($id);
        }
        break;

    //TERAPEUTAS

    //crear nuevo terapeuta
    case preg_match('/^terapeutas\/create$/', $uri):
        if ($requestMethod === 'POST') {
            $controllerTerapeuta->createTerapeuta();
        }
        break;
    //leer todos los Terapeutas
    case preg_match('/^terapeutas$/', $uri):
        if ($requestMethod === 'GET') {
            $controllerTerapeuta->getAllTerapeutas();
        }
        break;

    //buscar terapeuta por ID
    case preg_match('/^terapeutas\/searchTerapeutaById\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'GET') {
            $id = $matches[1];  // El ID del usuario desde la URL
            $controllerTerapeuta->getTerapeutaById($id);
        }
        break;
    //buscar terapeuta por dni
    case preg_match('/^terapeutas\/searchTerapeutaByDni\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'GET') {
            $dni = $matches[1];  // El ID del usuario desde la URL
            $controllerTerapeuta->getTerapeutaByDni($dni);
        }
        break;    
    //actualizar terapeuta    
    case preg_match('/^terapeutas\/updateTerapeuta\/(\d+)$/', $uri, $matches):
        if ($requestMethod == 'PUT') {
            $id = $matches[1];
            $controllerTerapeuta->updateTerapeuta($id);
        }
        break;

    //borrar terapeuta
    case preg_match('/^terapeutas\/delete\/(\d+)$/', $uri, $matches):
        if ($requestMethod === 'DELETE') {
            $id = $matches[1];
            $controllerTerapeuta->deleteTerapeuta($id);
        }
        break;






    //ultima
    default:
        header("HTTP/1.0 404 NOT FOUND");
        echo "Ruta no encontrada";
        break;
}
