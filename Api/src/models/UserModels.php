<?php
//modelo de los usuarios registrados en la base de datos 
class UserModel {
    private $conn;
    private $table_name  ="users";

    public function __construct($database) {
        $this->conn = $database;
    }
    //buscar todos los usuarios
    public function getUsers(){
        $query = "SELECT id, nombre, apellido, correo FROM". $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
<<<<<<< Updated upstream
    //buscar usuarios por ID
    public function getUserById($id) {
        $sql = "SELECT * FROM users WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

        //actualizar usuarios
    public function updateUser($id, $name, $email) {
        $sql = "UPDATE users SET name = :name, email = :email WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':id', $id);
    
        return $stmt->execute();
    }
    //ELIMINAR USUARIO
    public function deleteUserById($id) {
        $sql = "DELETE FROM users WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->rowCount() > 0;
    }
=======
>>>>>>> Stashed changes

}