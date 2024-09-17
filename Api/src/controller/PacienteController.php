<?php

require_once __DIR__ . '/../models/UserModels.php';
require_once __DIR__ . '/../config/DataBse.php';

class PacienteController{
    private $db;
    private $model;

    public function __construct() {
        $database = new DataBse();
        $this->db = $database->getConnection();
        $this->model = new PacienteModel($this->db);
    }

    public function getAllPacientes() {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $pacientes = $this->model->getAllpacientes();
        echo json_encode($pacientes);
    }

    public function searchPacienteById($id) {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
    
        if (!empty($id)) {
            $paciente = $this->model->getPacienteById($id);
    
            if ($paciente) {
                echo json_encode($paciente);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "paciente not found"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Invalid input"]);
        }
    }

    public function createPaciente() {
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

        if (!empty($data->nombre) && !empty($data->apellido) && !empty($data->correo) && !empty($data->direccion) && !empty($data->provincia) && !empty($data->region) && !empty($data->dni) && !empty($data->sexo) && !empty($data->nroTelefonico)) {
            $updated = $this->model->updatePaciente($id, $data->nombre, $data->apellido, $data->correo, $data->direccion, $data->provincia, $data->region, $data->dni, $data->sexo, $data->nroTelefonico);

            if ($updated) {
                echo json_encode(["message" => "PACIENTE ACTUALIZADO CORRECTAMENTE"]);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "PACIENTE NO SE ACTUALIZO"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "ENTRADA INVALIDA"]);
        }
    }

    public function deletePaciente($id) {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: DELETE");

        if ($this->model->deletePaciente($id)) {
            echo json_encode(["message" => "Paciente eliminada con éxito."]);
        } else {
            http_response_code(404);
            echo json_encode(["message" => "El paciente no pudo ser eliminado."]);
        }
    }
}
