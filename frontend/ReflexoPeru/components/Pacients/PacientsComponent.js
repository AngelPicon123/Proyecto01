import { searchUserPatients } from "./Pacients-get";


export function PacientsShow() {
  const $pacients = document.createElement("div");
  $pacients.classList.add("containerAll");
  $pacients.innerHTML = `
      <h1>Gestión de Pacientes</h1>
      <div class="Search">
        <input type="text" id="search" class="search-input" placeholder="Buscar por Nombre o Apellido / DNI" />
      </div>
      <div class="Buttons-general">
        <a href="#/register-pacient">Crear Nuevo Paciente +</a>
      </div>
      <div class="tableContainer">
        <table>
          <thead>
            <tr>
              <th>DNI</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Direccion</th>
              <th>Provicia</th>
              <th>Distrito</th>
              <th>Sexo</th>
              <th>Telefono</th>
              <th>Acciones</th>
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
                        <label for="dni">DNI</label>
                        <input type="text" id="dni" name="dni">
                    </div> 
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
                    <div class="form-group">
                        <label for="correo">Correo</label>
                        <input type="email" id="correo" name="correo">
                    </div>
                </div>
                <div class="form-row-update">
                    <div class="form-group">
                        <label for="provincia">Provincia</label>
                            <select name="provincia" id="provincia">
                            </select>
                    </div>

                    <div class="form-group">
                    <label for="distrito">Distrito</label>
                    <select name="distrito" id="distrito" required>
                        
                    </select>
                    </div>
                </div>

                <div class="form-row-update">   
                    <div class="form-group">
                        <label for="direccion">Dirección</label>
                        <input type="text" id="direccion" name="direccion">
                    </div>
                    <div class="form-group">
                        <label for="sexo">Sexo</label>  
                        <select name="sexo" id="sexo">
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </div>
                </div>
                <div class="form-row-update">
                    <div class="form-group">
                        <label for="telefono">Telefono</label>
                        <input type="text" id="nroTelefonico" name="telefono">
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

export function RegisterUser() {
  const $register = document.createElement("div");
  $register.classList.add("sidebar");
  $register.innerHTML = `
    <div class="back-pacients">
      <a href="#/">Volver</a>
    </div>
    <div class="container-main">
      <div class="main-content">
        <h1>CREAR NUEVO PACIENTE</h1>
        <form method="POST" id="form-create" >
          <div class="form-row">
            <div class="form-group">
              <label for="dni">DNI</label>
              <input type="text" id="dni" name="dni" required>
            </div>
            <div class="form-group">
              <label for="nombre">Nombres</label>
              <input type="text" id="nombre" name="nombre" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="apellido">Apellidos</label>
              <input type="text" id="apellido" name="apellido" required>
            </div>
            <div class="form-group">
              <label for="provincia">Provincia</label>
              <select name="provincia" id="provincia">
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="distrito">Distrito</label>
              <select name="distrito" id="distrito" required>
              </select>
            </div>
            <div class="form-group">
              <label for="direccion">Dirección</label>
              <input type="text" id="direccion" name="direccion" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="sexo">Sexo</label>
              <select name="sexo" id="sexo">
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>
            <div class="form-group">
              <label for="correo">Correo</label>
              <input type="email" id="correo" name="correo" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="nroTelefonico">Nro. Telefonico</label>
              <input type="text" id="nroTelefonico" name="nroTelefonico" required>
            </div>
          </div>
          <button type="submit" id="btn-crear" class="btn-submit">Crear Paciente</button>
        </form>
      </div>
    </div>
    `;

  return $register;
}
