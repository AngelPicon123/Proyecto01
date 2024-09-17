<?php
// Modelo de los usuarios registrados en la base de datos
class PacienteModel {
    private $conn;
    private $table_name = "pacientes";

    public function __construct($database) {
        $this->conn = $database;
    }

//crear usuario
    public function createPaciente($nombre, $apellido, $correo, $direccion, $provincia, $region, $dni, $sexo, $nroTelefonico) {
        $sql = "INSERT INTO " . $this->table_name . " 
            (nombre, apellido, correo, direccion, provincia, region, dni, sexo, nroTelefonico) 
            VALUES (:nombre, :apellido, :correo, :direccion, :provincia, :region, :dni, :sexo, :nroTelefonico)";
        $stmt = $this->conn->prepare($sql);

        // Vincular parámetros
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':apellido', $apellido);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':direccion', $direccion);
        $stmt->bindParam(':provincia', $provincia);
        $stmt->bindParam(':region', $region);
        $stmt->bindParam(':dni', $dni);
        $stmt->bindParam(':sexo', $sexo);
        $stmt->bindParam(':nroTelefonico', $nroTelefonico);

        // Ejecutar la consulta
        return $stmt->execute();
    }
    // Buscar todos los usuarios
    public function getAllpacientes() {
        $query = "SELECT id, nombre, apellido, correo, direccion, provincia, region ,dni, sexo, nroTelefonico FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Buscar PACIENTE por ID
    public function getPacienteById($id) {
        $sql = "SELECT * FROM " . $this->table_name . " WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Actualizar Paciente
    public function updatePaciente($id, $nombre, $apellido, $correo, $direccion, $provincia, $region, $dni, $sexo, $nroTelefonico) {
        $sql = "UPDATE " . $this->table_name . " SET nombre = :nombre ,apellido = :apellido, correo = :correo, direccion = :direccion, provincia = :provincia, region = :region, dni = :dni, sexo = :sexo, nroTelefonico = :nroTelefonico
                                                 WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':apellido', $apellido);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':direccion', $direccion);
        $stmt->bindParam(':provincia', $provincia);
        $stmt->bindParam(':region', $region);
        $stmt->bindParam(':dni', $dni);
        $stmt->bindParam(':sexo', $sexo);
        $stmt->bindParam(':nroTelefonico', $nroTelefonico);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }

    // Eliminar paciente
    public function deletePaciente($id) {
        $sql = "DELETE FROM " . $this->table_name . " WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->rowCount() > 0;
    }
}
