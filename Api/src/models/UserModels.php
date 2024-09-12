<?php
// Modelo de los usuarios registrados en la base de datos
class UserModel {
    private $conn;
    private $table_name = "users";

    public function __construct($database) {
        $this->conn = $database;
    }

//crear usuario
    public function createUser($nombre, $apellido, $correo) {
        $sql = "INSERT INTO " . $this->table_name . " (nombre, apellido, correo) VALUES (:nombre, :apellido, :correo)";
        $stmt = $this->conn->prepare($sql);

        // Vincular parámetros
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':apellido', $apellido);
        $stmt->bindParam(':correo', $correo);

        // Ejecutar la consulta
        return $stmt->execute();
    }
    // Buscar todos los usuarios
    public function getUsers() {
        $query = "SELECT id, nombre, apellido, correo FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Buscar usuario por ID
    public function getUserById($id) {
        $sql = "SELECT * FROM " . $this->table_name . " WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Actualizar usuario
    public function updateUser($id, $name, $apellido,$email) {
        $sql = "UPDATE " . $this->table_name . " SET nombre = :name, apellido = :apellido, correo = :email WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':apellido', $apellido);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }

    // Eliminar usuario
    public function deleteUserById($id) {
        $sql = "DELETE FROM " . $this->table_name . " WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->rowCount() > 0;
    }
}
