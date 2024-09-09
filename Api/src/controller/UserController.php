<?php

require_once __DIR__ .'/../models/UserModels.php';
require_once __DIR__ .'/../config/DataBse.php';

class UserController{
    private $db;
    private $model;

    public function __construct(){
        $database = new DataBse();
        $this ->db = $database->getConnection();
        $this ->model = new UserModel($this->db);

    }

    public function getAllUsers(){
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $data = json_decode(file_get_contents("php://input"));

        if(!empty($data->users) && !empty($data->email)){

            echo json_encode(["message"=> "User created successfully"]);
        }else{
            http_response_code(400);
            echo json_encode(["message"=> "Invalid input"]);
        }

    }
}