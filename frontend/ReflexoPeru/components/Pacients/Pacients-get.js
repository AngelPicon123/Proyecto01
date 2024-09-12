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
                <button><h4>Editar</h4></button>
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

export { getusers };
