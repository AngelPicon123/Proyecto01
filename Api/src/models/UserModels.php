<?php
//modelo de los usuarios registrados en la base de datos 
class UserModel {
    private $conn;
    private $table_name  ="users";

    public function __construct($database) {
        $this->conn = $database;
    }

    public function getUsers(){
        $query = "SELECT id, nombre, apellido, correo FROM". $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}