function getusers() {
  const tableBody = document.getElementById("userTableBody");

  if (tableBody) {
    axios
      .get("http://localhost/Proyecto01/Api/public/index.php/users")
      .then((response) => {
        const users = response.data;
        tableBody.innerHTML = "";
        users.forEach((user) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nombre}</td>
            <td>${user.apellido}</td>
            <td>${user.correo}</td>
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

///////////////////////////////////////////////////////////////
window.deleteUser = function (userId) {
  axios
    .delete(
      `http://localhost/Proyecto01/Api/public/index.php/users/delete/${userId}`
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

function editUser(id) {
  const modal = document.getElementById("editUserModal");
  const backdrop = document.getElementById("modalBackdrop");

  if (modal && backdrop) {
    // Mostrar el modal y el backdrop
    modal.style.display = "block";
    backdrop.style.display = "block";

    // Cerrar el modal al hacer clic en el backdrop
    backdrop.addEventListener("click", () => {
      modal.style.display = "none";
      backdrop.style.display = "none";
    });


    axios
      .get(
        `http://localhost/Proyecto01/Api/public/index.php/users/searchUserById/2`
      )
      .then((response) => {
          console.log(response.data);
   const userData = response.data;

   // Insertar los datos en los inputs del formulario
   document.getElementById("nombre").value = userData.nombre;
   document.getElementById("apellido").value = userData.apellido;
   document.getElementById("correo").value = userData.correo;


      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });






    // Cerrar el modal al hacer clic en el botón de cerrar
  } else {
    console.error(
      "El modal, el backdrop o el botón de cerrar no se encontraron en el DOM."
    );
  }






}

/////////////////////////////////////////////////////////////// 




window.editUser = editUser; // Hacer editUser accesible globalmente


export { editUser, getusers };

///////////////////////////////////////////////////////////////
