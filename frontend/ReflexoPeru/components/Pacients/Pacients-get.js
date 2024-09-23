import {
  getProvincias,
  getDistritos,
  initializeProvincesAndDistricts,
} from "../SelectOptions";

import Toastify from "toastify-js";

let currentUserId = null;

function getusersPatients() {
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
                <button onclick="editUserPatients(${user.id})"><img src="../../assets/img/boton-editar.png"></button>
                <button onclick="deleteUserPatients(${user.id})"><img src="../../assets/img/boton-borrar.png" ></button>
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

function deleteUserPatients(currentUserId) {
  const modal = document.getElementById("deleteUserModal");
  const backdrop = document.getElementById("modalBackdrop");
  const confirmDeleteUserBtn = document.getElementById("confirmDeleteUserBtn");
  const cancelDeleteUserBtn = document.getElementById("cancelDeleteUserBtn");

  if (modal && backdrop && confirmDeleteUserBtn && cancelDeleteUserBtn) {
    modal.style.display = "block";
    backdrop.style.display = "block";

    backdrop.onclick = () => {
      modal.style.display = "none";
      backdrop.style.display = "none";
    };

    cancelDeleteUserBtn.onclick = () => {
      modal.style.display = "none";
      backdrop.style.display = "none";
    };

    confirmDeleteUserBtn.onclick = () => {
      axios
        .delete(
          `http://localhost/Proyecto01/Api/public/index.php/pacientes/delete/${currentUserId}`
        )
        .then((response) => {
          console.log("User deleted successfully:", response.data);
          getusersPatients();

          Toastify({
            text: "Terapeuta Eliminado",
            className: "info",
            close: true,
            style: {
              background: "linear-gradient(to right, #da2408  ,#870909)",
              color: "white",
              fontSize: "20px",
              padding: "15px",
              borderRadius: "5px",
            },
          }).showToast();

          modal.style.display = "none";
          backdrop.style.display = "none";
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    };
  }
}



function editUserPatients(userId) {
  currentUserId = userId;
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
        document.getElementById("direccion").value = userData.direccion;
        document.getElementById("nroTelefonico").value = userData.nroTelefonico;
        document.getElementById("sexo").value = userData.sexo;

        const provinciaElement = document.getElementById("provincia");
        const distritoElement = document.getElementById("distrito");

        const provincias = getProvincias();
        const distritos = getDistritos();

        function selectOptions(array, element) {
          if (!element) return;
          let elements = "<option selected disabled> --Seleccionar--</option>";
          array.forEach((option) => {
            elements += `<option value="${option}">${option}</option>`;
          });
          element.innerHTML = elements;
        }

        selectOptions(provincias, provinciaElement);
        provinciaElement.value = userData.provincia;

        provinciaElement.addEventListener("change", (e) => {
          let value = provinciaElement.value;
          if (!distritoElement) return;
          distritoElement.innerHTML = `<option selected disabled>--Seleccionar--</option>`;

          if (distritos[value]) {
            distritos[value].forEach((distrito) => {
              distritoElement.innerHTML += `<option value="${distrito}">${distrito}</option>`;
            });
          }
        });

        if (distritos[userData.provincia]) {
          selectOptions(distritos[userData.provincia], distritoElement);
          distritoElement.value = userData.region;
        }

        // Remove any existing event listener
        const form = document.getElementById("editPatientForm");
        if (form) {
          form.addEventListener("submit", handleSubmit);
        }
        



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

function handleSubmit(event) {
  event.preventDefault();
  const modal = document.getElementById("editUserModal");
  const backdrop = document.getElementById("modalBackdrop");

  const nombres = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;
  const provincia = document.getElementById("provincia").value;
  const region = document.getElementById("distrito").value;
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const nroTelefonico = document.getElementById("nroTelefonico").value;

  if (!region || region === "--Seleccionar--") {
    alert("Por favor, seleccione un distrito.");
    return;
  }
  const regex = /^[0-9]{8}$/;
  if (!regex.test(dni)) {
    alert("Por favor, ingrese un DNI correcto.");
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
    .put(
      `http://localhost/Proyecto01/Api/public/index.php/pacientes/updatePaciente/${currentUserId}`,
      pacienteData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
        Toastify({
          text: "Paciente Editado",
          className: "info",
          close: true,
          style: {
            background: "linear-gradient(to right, #d1c656 ,#FFC300  )",
            color: "white",
            fontSize: "20px",
            padding: "15px",
            borderRadius: "5px",
          },
        }).showToast();
      getusersPatients();
      modal.style.display = "none";
      backdrop.style.display = "none";
    })
    .catch((error) => {
      console.error("Error al crear el paciente:", error);
    });
}

function searchUserPatients() {
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
                <button onclick="editUserPatients(${usuario.id})"><img></h4></button>
                <button onclick="deleteUserPatients(${usuario.id})"><h4>Imprimir</h4></button>
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

function RegistrarUserPatients() {
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

      if (!region || region === "--Seleccionar--") {
        alert("Por favor, seleccione un distrito.");
        return;
      }

      const regex = /^[0-9]{8}$/;
      if (!regex.test(dni)) {
        alert("Por favor, ingrese un DNI correcto.");
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

          form.reset();
          
      Toastify({
        text: "Paciente Registrado",
        className: "info",
        close: true,
        style: {
          background: "linear-gradient(to right, #3bc152  ,#448709   )",
          color: "white",
          fontSize: "20px",
          padding: "15px",
          borderRadius: "5px",
        },
      }).showToast();
        })
        .catch((error) => {
          console.error("Error al crear el paciente:", error);
        });
    });
  }
}

window.editUserPatients = editUserPatients;
window.deleteUserPatients = deleteUserPatients;


export {
  editUserPatients,
  getusersPatients,
  searchUserPatients,
  RegistrarUserPatients,
};
