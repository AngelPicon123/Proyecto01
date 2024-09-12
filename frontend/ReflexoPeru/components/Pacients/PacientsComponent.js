export function PacientsShow() {
  const $pacients = document.createElement("div");
  $pacients.classList.add("containerAll");
  $pacients.innerHTML = `
    <h1>Gestión de Clientes</h1>
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

  return $pacients;
}
