<?php

require_once __DIR__ . '/../models/UserModels.php';
require_once __DIR__ . '/../config/DataBse.php';

class UserController {
    private $db;
    private $model;

    public function __construct() {
        $database = new DataBse();
        $this->db = $database->getConnection();
        $this->model = new UserModel($this->db);
    }

    public function getAllUsers() {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $users = $this->model->getUsers();
        echo json_encode($users);
    }

    public function searchUserById($id) {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
    
        if (!empty($id)) {
            $user = $this->model->getUserById($id);
    
            if ($user) {
                echo json_encode($user);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "User not found"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Invalid input"]);
        }
    }

    public function createUser() {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
    
        $data = json_decode(file_get_contents("php://input"));
    
        if (!empty($data->nombre) && !empty($data->apellido) && !empty($data->correo)) {
            // Insertar el nuevo usuario en la base de datos
            $result = $this->model->createUser($data->nombre, $data->apellido, $data->correo);
    
            if ($result) {
                echo json_encode(["message" => "User created successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Failed to create user"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Invalid input"]);
        }
    }

    public function updateUser($id) {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->nombre) && !empty($data->apellido) && !empty($data->correo)) {
            $updated = $this->model->updateUser($id, $data->nombre, $data->apellido, $data->correo);

            if ($updated) {
                echo json_encode(["message" => "User updated successfully"]);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "User not found"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Invalid input"]);
        }
    }

    public function deleteUser($id) {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: DELETE");

        if ($this->model->deleteUserById($id)) {
            echo json_encode(["message" => "User successfully deleted."]);
        } else {
            http_response_code(404);
            echo json_encode(["message" => "User could not be deleted."]);
        }
    }
}
