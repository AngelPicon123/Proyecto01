<?php

require_once __DIR__ . '/../models/TerapeutaModel.php';
require_once __DIR__ . '/../config/DataBse.php';

class TerapeutaController
{
    private $db;
    private $model;

    public function __construct()
    {
        $database = new DataBse();
        $this->db = $database->getConnection();
        $this->model = new TerapeutaModel($this->db);
    }

    //BUSCAR TODOS LOS TERAPEUTAS
    public function getAllTerapeutas()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $terapeutas = $this->model->getAllTerapeutas();
        echo json_encode($terapeutas);
    }

    //BUSCAR TERAPEUTA POR ID
    public function getTerapeutaById($id)
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        if (!empty($id)) {
            $terapeuta = $this->model->getTerapeutaById($id);

            if ($terapeuta) {
                echo json_encode($terapeuta);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "Terapeuta no encontrado"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Entrada invalida"]);
        }
    }
    //BUSCAR TERAPEUTA POR DNI
    public function getTerapeutaByDni($dni) {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
    
        if (!empty($dni)) {
            $terapeuta = $this->model->getTerapeutaByDni($dni);
    
            if ($terapeuta) {
                echo json_encode($terapeuta);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "terapeuta no encontrado"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Entrada invalida"]);
        }
    }
    
    //CRAR NUEVO Terapeuta
    public function createTerapeuta()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $data = json_decode(file_get_contents("php://input"));

        if (
            !empty($data->nombre) && !empty($data->apellido) && !empty($data->correo) &&
            !empty($data->direccion) && !empty($data->provincia) && !empty($data->region) &&
            !empty($data->dni) && !empty($data->sexo) && !empty($data->nroTelefonico)
        ) {

            // Insertar el nuevo usuario en la base de datos
            $result = $this->model->createTerapeuta(
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
                echo json_encode(["message" => "Terapeuta creado exitosamente"]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Fallo al crear Terapeuta"]);
            }
        } else {
            // Responder con código de error 400 si algún campo está vacío o falta
            http_response_code(400);
            echo json_encode(["message" => "Entrada inválida, faltan datos"]);
        }
    }

    //ACTUALIZAR UN TERAPEUTA
    public function updateTerapeuta($id)
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->nombre) && !empty($data->apellido) && !empty($data->correo) && !empty($data->direccion) && !empty($data->provincia) && !empty($data->region) && !empty($data->dni) && !empty($data->sexo) && !empty($data->nroTelefonico)) {
            $updated = $this->model->updateTerapeuta($id, $data->nombre, $data->apellido, $data->correo, $data->direccion, $data->provincia, $data->region, $data->dni, $data->sexo, $data->nroTelefonico);

            if ($updated) {
                echo json_encode(["message" => "TERAPEUTA ACTUALIZADO CORRECTAMENTE"]);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "TERAPEUTA NO SE ACTUALIZO"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "ENTRADA INVALIDA"]);
        }
    }

    //ELIMINAR UN TERAPEUTA
    public function deleteTerapeuta($id)
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: DELETE");

        if ($this->model->deleteTerapeuta($id)) {
            echo json_encode(["message" => "Terapeuta eliminada con éxito."]);
        } else {
            http_response_code(404);
            echo json_encode(["message" => "El Terapeuta no pudo ser eliminado o no se encontro."]);
        }
    }
}
