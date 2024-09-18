function getusers() {
  const tableBody = document.getElementById("userTableBody");

  if (tableBody) {
    axios
      .get("http://localhost/Proyecto01/Api/public/index.php/pacientes")
      .then((response) => {
        const users = response.data;
        tableBody.innerHTML = "";
        users.forEach((user) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${user.dni}</td>
            <td>${user.nombre}</td>
            <td>${user.apellido}</td>
            <td>${user.correo}</td>
            <td>${user.direccion}</td>
            <td>${user.provincia}</td>
            <td>${user.region}</td>
            <td>${user.sexo}</td>
            <td>${user.nroTelefonico}</td>
            <td>
              <div class="Buttons-actions">
                <button onclick="editUser(${user.id})"><h4>Editar</h4></button> 
                <button onclick="deleteUser(${user.id})"><h4>Eliminar</h4></button>
              </div>
            </td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  } else {
    console.error("El elemento 'userTableBody' no existe en el DOM.");
  }
}
///////////////////////////////////////////////////////////////
window.deleteUser = function (userId) {
  axios
    .delete(
      `http://localhost/Proyecto01/Api/public/index.php/pacientes/delete/${userId}`
    )
    .then((response) => {
      console.log("User deleted successfully:", response.data);

      getusers();
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
};

///////////////////////////////////////////////////////////////

function editUser(userId) {
  const modal = document.getElementById("editUserModal");
  const backdrop = document.getElementById("modalBackdrop");

  if (modal && backdrop) {
    modal.style.display = "block";
    backdrop.style.display = "block";

    backdrop.addEventListener("click", () => {
      modal.style.display = "none";
      backdrop.style.display = "none";
    });

    axios
      .get(
        `http://localhost/Proyecto01/Api/public/index.php/pacientes/searchPacienteById/${userId}`
      )
      .then((response) => {
        console.log(response.data);
        const userData = response.data;

        document.getElementById("dni").value = userData.dni;
        document.getElementById("nombre").value = userData.nombre;
        document.getElementById("apellido").value = userData.apellido;
        document.getElementById("correo").value = userData.correo;
        document.getElementById("provincia").value = userData.provincia;
        document.getElementById("direccion").value = userData.direccion;
        document.getElementById("nroTelefonico").value = userData.nroTelefonico;
        document.getElementById("sexo").value = userData.sexo;

        // Actualizar el select de distrito
        const provinciaSelect = document.getElementById("provincia");
        const distritoSelect = document.getElementById("distrito");

        if (provinciaSelect && distritoSelect) {
          // Cambiar la provincia para actualizar los distritos
          provinciaSelect.value = userData.provincia;
          const event = new Event("change");
          provinciaSelect.dispatchEvent(event);
          distritoSelect.value = userData.distrito;
        }
        puteditUser(userId);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  } else {
    console.error(
      "El modal, el backdrop o el botón de cerrar no se encontraron en el DOM."
    );
  }
}
///////////////////////////////////////////////////////////////////

function puteditUser(userId) {
  const form = document.getElementById("editUserForm");

  if (form) {
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
      event.preventDefault();

      const nombres = document.getElementById("nombre").value;
      const apellidos = document.getElementById("apellido").value;
      const correo = document.getElementById("correo").value;
      const direccion = document.getElementById("direccion").value;
      const provincia = document.getElementById("provincia").value;
      const region = document.getElementById("region").value;
      const dni = document.getElementById("dni").value;
      const sexo = document.getElementById("sexo").value;
      const nroTelefonico = document.getElementById("nroTelefonico").value;

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
        .put(
          `http://localhost/Proyecto01/Api/public/index.php/pacientes/updatePaciente/${userId}`,
          pacienteData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        .then((response) => {
          console.log(response.data);
          alert("Paciente editado exitosamente");
          form.removeEventListener("submit", handleSubmit);
          getusers();
        })
        .catch((error) => {
          console.error("Error al crear el paciente:", error);
        });
    }
  }
}
///////////////////////////////////////////////////////////////
window.editUser = editUser;
export { editUser, getusers, puteditUser, searchUser };

///////////////////////////////////////////////////////////////
function searchUser() {
  axios
    .get("http://localhost/Proyecto01/Api/public/index.php/pacientes")
    .then((response) => {
      const users = response.data;
      const letrasABuscar = document
        .getElementById("search")
        .value.toLowerCase();

      const usuariosFiltrados = users.filter(
        (pacientes) =>
          pacientes.nombre.toLowerCase().startsWith(letrasABuscar) ||
          pacientes.apellido.toLowerCase().startsWith(letrasABuscar) ||
          pacientes.dni.toLowerCase().startsWith(letrasABuscar)
      );

      console.log("Usuarios Filtrados:", usuariosFiltrados);
      const tableBody = document.getElementById("userTableBody");
      tableBody.innerHTML = "";
      usuariosFiltrados.forEach((usuario) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${usuario.dni}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.direccion}</td>
            <td>${usuario.provincia}</td>
            <td>${usuario.region}</td>
            <td>${usuario.sexo}</td>
            <td>${usuario.nroTelefonico}</td>

            <td>
              <div class="Buttons-actions">
                <button onclick="editUser(${usuario.id})"><h4>Editar</h4></button>
                <button onclick="deleteUser(${usuario.id})"><h4>Imprimir</h4></button>
              </div>
            </td>
          `;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los usuarios:", error);
    });
}
//////////////////////////////////////////////////////////////////
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
