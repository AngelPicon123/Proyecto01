function searchUser() {
  axios
    .get("http://localhost/Proyecto01/Api/public/index.php/users")
    .then((response) => {
      const users = response.data;
      const letrasABuscar = document.getElementById("search").value;

      const usuariosFiltrados = users.filter((user) =>
        user.apellido.toLowerCase().includes(letrasABuscar.toLowerCase())
      );

      console.log("Usuarios Filtrados:", usuariosFiltrados);
      const tableBody = document.getElementById("userTableBody");
      tableBody.innerHTML = "";
      usuariosFiltrados.forEach((usuario) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.correo}</td>
            <td>
              <div class="Buttons-actions">
                <button><h4>Editar</h4></button>
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
