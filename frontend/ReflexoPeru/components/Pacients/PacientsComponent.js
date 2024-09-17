import { searchUser } from "./Pacients-get";

export function PacientsShow() {
  const $pacients = document.createElement("div");
  $pacients.classList.add("containerAll");
  $pacients.innerHTML = `
      <h1>Gestión de Pacientes</h1>
      <div class="Search">
        <input type="text" id="search" class="search-input" placeholder="Buscar por Nombre o Apellido / DNI" />
      </div>
      <div class="Buttons-general">
        <a href="#/register">Crear Nuevo Paciente +</a>
      </div>
      <div class="tableContainer">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Direccion</th>
              <th>Provicia</th>
              <th>Distrito</th>
              <th>Region</th>
              <th>DNI</th>
              <th>Sexo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody id="userTableBody">
          </tbody>
        </table>
      </div>
       <div class="main-content" id="editUserModal" style="display: none;" > 
      
            <h1>EDITAR PACIENTE</h1>
            <form  method="PUT" id="editUserForm">
                <div class="form-row-update">
                    <div class="form-group">
                        <label for="nombre">Nombres</label>
                        <input type="text" id="nombre" name="nombre">
                    </div>
                </div>
                 <div class="form-row-update">
                    <div class="form-group">
                        <label for="apellido">Apellidos</label>
                        <input type="text" id="apellido" name="apellido">
                    </div>
                </div>
                <div class="form-row-update">
                    <div class="form-group">
                        <label for="correo">Correo</label>
                        <input type="email" id="correo" name="correo">
                    </div>
                </div>

                <button type="submit" class="btn-submit">Editar Cliente</button>
            </form>
              </div>
    `;

  $pacients.querySelector("#search").addEventListener("input", () => {
    searchUser();
  });

  return $pacients;
}
