function searchUser() {
  axios
    .get("http://localhost/Proyecto01/Api/public/index.php/users")
    .then((response) => {
      const users = response.data;

    letrasABuscar = document.getElementById("search").value;
   

      const usuariosFiltrados = users.filter((user) =>
        user.apellido.includes(letrasABuscar)
      );

      console.log("Usuarios Filtrados:", usuariosFiltrados);
const tableBody = document.getElementById("userTableBody");
tableBody.innerHTML = ""; 
usuariosFiltrados.forEach((usuariosFiltrados) => {
  const row = document.createElement("tr");
  row.innerHTML = `
                                <td>${usuariosFiltrados.id}</td>
                                <td>${usuariosFiltrados.nombre}</td>
                                <td>${usuariosFiltrados.apellido}</td>
                                <td>${usuariosFiltrados.correo}</td>
                                <td>
                                    <div class="Buttons-actions">
                                        <button>
                                            <h4>Editar</h4>
                                        </button>
                                        <button onclick="deleteUser(${usuariosFiltrados.id})">
                                            <h4>Imprimir</h4>
                                        </button>
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

document.getElementById("search").addEventListener("input", () => {



  searchUser();



   }); 