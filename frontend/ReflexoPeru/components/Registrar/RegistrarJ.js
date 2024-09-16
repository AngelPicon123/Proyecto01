function RegistrarUser() {
  const form = document.getElementById("form-create");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nombres = document.getElementById("nombre").value;
      const apellidos = document.getElementById("apellido").value;
      const correo = document.getElementById("correo").value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(correo)) {
        alert("El correo electrónico no es válido.");
        return;
      }

      const pacienteData = {
        nombre: nombres,
        apellido: apellidos,
        correo: correo,
      };

      axios
        .post(
          "http://localhost/Proyecto01/Api/public/index.php/users/create",
          pacienteData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          alert("Paciente creado exitosamente");
          form.reset();
        })
        .catch((error) => {
          console.error("Error al crear el paciente:", error);
        });
    });
  }
}


document.addEventListener("DOMContentLoaded", () => {
  RegistrarUser();
});

export { RegistrarUser };
