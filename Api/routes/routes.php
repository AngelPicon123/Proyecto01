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
    
    case 'Proyecto01/Api/public/index.php/users/create':
        if ($requestMethod === 'POST'){
            $controller = new UserController();
            $controller->createUser();
        }
        break;

        case 'Proyecto01/Api/public/index.php/users/updateUser'.$id:
        if ($requestMethod === 'PATCH'){
            $controller = new UserController();
            $controller->updateUser($id);
            }
            break;

            case 'Proyecto01/Api/public/index.php/users/delete/'.$id:
                if ($requestMethod === 'DELETE'){
                    $controller = new UserController();
                    $controller->deleteUser($id);
                }
                break;

                default:  //header("HTTP/1.0 404 Not Found");
                            echo "Ruta no encontrada";
                break;
    
}
