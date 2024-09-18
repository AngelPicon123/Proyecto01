import { searchUser } from "./Pacients-get";

export function therapistsShow() {
  const $therapistsShow = document.createElement("div");
  $therapistsShow.classList.add("containerAll");
  $therapistsShow.innerHTML = `
      <h1>Gestión de Terapeutas</h1>
      <div class="Search">
        <input type="text" id="search" class="search-input" placeholder="Buscar por Nombre o Apellido / DNI" />
      </div>
      <div class="Buttons-general">
        <a href="#/register-therapist">Crear Nuevo Paciente +</a>
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
              <th>DNI</th>
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
      
            <h1>CREAR NUEVO CLIENTE</h1>
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

                <div class="form-row-update">
                    <div class="form-group">
                        <label for="direccion">Dirección</label>
                        <input type="text" id="direccion" name="direccion">
                    </div>  
                </div>

                <div class="form-row-update">
                    <div class="form-group">
                        <label for="provincia">Provincia</label>
                        <select name="provincia" id="provincia">
                            <option value="Lima">Lima</option>
                            <option value="Arequipa">Arequipa</option>
                            <option value="Piura">Piura</option>
                            <option value="Tacna">Tacna</option>
                            <option value="Cajamarca">Cajamarca</option>
                            <option value="Callao">Callao</option>
                            <option value="Loreto">Loreto</option>
                            <option value="Moquegua">Moquegua</option>
                            <option value="Ayacucho">Ayacucho</option>
                            <option value="Ancash">Ancash</option>
                            <option value="Lambayeque">Lambayeque</option>
                            <option value="Huanuco">Huanuco</option>
                            <option value="Cusco">Cusco</option>
                            <option value="Puno">Puno</option>
                            <option value="Madre de Dios">Madre de Dios</option>
                        </select>
                    </div>
                </div>

                <div class="form-row-update"> 
                    <div class="form-group">
                        <label for="distrito">Distrito</label>
                        <input type="text" id="region" name="distrito">
                    </div>  
                </div>

                <div class="form-row-update">
                    <div class="form-group">
                        <label for="dni">DNI</label>
                        <input type="text" id="dni" name="dni">
                    </div>  
                </div>

                <div class="form-row-update">
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

  $therapistsShow.querySelector("#search").addEventListener("input", () => {
    searchUser();
  });

  return $therapistsShow;
}

export function RegisterTherapist() {
  const $RegisterTherapists = document.createElement("div");
  $RegisterTherapists.classList.add("sidebar");
  $RegisterTherapists.innerHTML = `
       <div class="back-pacients">
      <a href="#/list-therapists">Volver</a>
    </div>
    <div class="container-main">
      <div class="main-content">
        <h1>CREAR NUEVO TERAPEUTA</h1>
        <form method="POST" id="form-create">
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
                <option value="Lima">Lima</option>
                <option value="Arequipa">Arequipa</option>
                <option value="Piura">Piura</option>
                <option value="Tacna">Tacna</option>
                <option value="Cajamarca">Cajamarca</option>
                <option value="Callao">Callao</option>
                <option value="Loreto">Loreto</option>
                <option value="Moquegua">Moquegua</option>
                <option value="Ayacucho">Ayacucho</option>
                <option value="Ancash">Ancash</option>
                <option value="Lambayeque">Lambayeque</option>
                <option value="Huanuco">Huanuco</option>
                <option value="Cusco">Cusco</option>
                <option value="Puno">Puno</option>
                <option value="Madre de Dios">Madre de Dios</option>
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

  return $RegisterTherapists;
}
