export function PacientsShow() {
  const $pacients = document.createElement("div");
  $pacients.classList.add("containerAll");
  $pacients.innerHTML = `
      <h1>Gestión de Clientes</h1>
      <div class="Search">
        <input type="text" id="search" class="search-input" placeholder="Buscar por Nombre o Apellido / DNI" />
      </div>
      <div class="Buttons-general">
        <button >Crear Nuevo Terapeuta +</button>
      </div>
      <div class="tableContainer">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="userTableBody">
          </tbody>
        </table>
      </div>
    `;

  // Añadir el event listener aquí, después de que el contenido esté en el DOM
  $pacients.querySelector("#search").addEventListener("input", () => {
    searchUser();
  });

  return $pacients;
}