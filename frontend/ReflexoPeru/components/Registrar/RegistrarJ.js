function RegistrarUser() {
  const form = document.getElementById("form-create");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nombres = document.getElementById("nombre").value;
      const apellidos = document.getElementById("apellido").value;
      const correo = document.getElementById("correo").value;
      const direccion = document.getElementById("direccion").value;
      const provincia = document.getElementById("provincia").value;
      const region = document.getElementById("distrito").value;
      const dni = document.getElementById("dni").value;
      const sexo = document.getElementById("sexo").value;
      const nroTelefonico = document.getElementById("nroTelefonico").value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(correo)) {
        alert("El correo electrónico no es válido.");
        return;
      }

      const pacienteData = {
        nombre: nombres,
        apellido: apellidos,
        correo: correo,
        direccion: direccion,
        provincia: provincia,
        region: region,
        dni: dni,
        sexo: sexo,
        nroTelefonico: nroTelefonico,
      
      };

      axios
        .post(
          "http://localhost/Proyecto01/Api/public/index.php/pacientes/create",
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


export { RegistrarUser };
