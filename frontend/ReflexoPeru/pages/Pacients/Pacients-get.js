document.addEventListener("DOMContentLoaded", () => {
 getusers();
});
/////////////////////
const tableBody = document.getElementById("userTableBody");

  function getusers() {
    axios
      .get("http://localhost/Proyecto01/Api/public/index.php/users")
      .then((response) => {
        const users = response.data;
        tableBody.innerHTML = ""; // Limpiar la tabla antes de agregar nuevos usuarios
        users.forEach((user) => {
          const row = document.createElement("tr");
          row.innerHTML = `
                                <td>${user.id}</td>
                                <td>${user.nombre}</td>
                                <td>${user.apellido}</td>
                                <td>${user.correo}</td>
                                <td>
                                    <div class="Buttons-actions">
                                        <button>
                                            <h4>Editar</h4>
                                        </button>
                                        <button onclick="deleteUser(${user.id})">
                                            <h4>Imprimir</h4>
                                        </button>
                                    </div>
                                </td>
                            `;
          tableBody.appendChild(row);
        });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

    }
