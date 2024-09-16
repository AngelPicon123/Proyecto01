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

    public function getAllPacientes() {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $pacientes = $this->model->getAllPacientes();
        echo json_encode($pacientes);
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
    
        if (!empty($data->nombre) && !empty($data->apellido) && !empty($data->correo) && 
        !empty($data->direccion) && !empty($data->provincia) && !empty($data->region) && 
        !empty($data->dni) && !empty($data->sexo) && !empty($data->nroTelefonico)) {

            // Insertar el nuevo usuario en la base de datos
           $result = $this->model->createPaciente(
            $data->nombre,
            $data->apellido,
            $data->correo,
            $data->direccion,
            $data->provincia,
            $data->region,
            $data->dni,
            $data->sexo,
            $data->nroTelefonico
        );
    
            if ($result) {
                echo json_encode(["message" => "Paciente creado exitosamente"]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Fallo al crear paciente"]);
            }
        } else {
            // Responder con código de error 400 si algún campo está vacío o falta
            http_response_code(400);
            echo json_encode(["message" => "Entrada inválida, faltan datos"]);
        }
    }

    public function updatePaciente($id) {
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
