import { searchUserTherapist } from "./Therapist";
import { initializeProvincesAndDistricts } from "../SelectOptions";

export function therapistsShow() {
  const $pacients = document.createElement("div");
  $pacients.classList.add("containerAll");
  $pacients.innerHTML = `
      <h1 class="title">Gestión de Terapeutas </h1>
      <div class="Search">
        <input type="text" id="search" class="search-input" placeholder="Buscar por Nombre o Apellido / DNI" />
      </div>
      <div class="Buttons-general">
        <a href="#/register-therapist">Crear Nuevo Terapeuta +</a>
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

         <div class="main-content animate__animated animate__fadeIn" id="deleteUserModal">
        <form class="deleteUserModal-content">
          <h2>Eliminar Paciente</h2>
          <p>¿Esta seguro de eliminar este Paciente?</p>
           <div class="form-btns">
            <button id="confirmDeleteUserBtn" class="btn-submit">Eliminar</button>
            <button id="cancelDeleteUserBtn"  class="btn-submit">Cancelar</button>
          </div>
        </form>
        </div>

      





      
       <div class="main-content" id="editUserModal" style="display: none;" > 
      
            <h1>EDITAR PACIENTE</h1>
            <form  method="PUT" class="form-create" id="editPatientForm">
                <div class="form-row-update">
                 <div class="form-group">
                        <label for="dni">DNI</label>
                        <input type="text" id="dni" name="dni"  required>
                    </div> 
                    <div class="form-group">
                        <label for="nombre">Nombres</label>
                        <input type="text" id="nombre" name="nombre" required>
                    </div>
                   
                </div>
                <div class="form-row-update">
                 <div class="form-group">
                        <label for="apellido">Apellidos</label>
                        <input type="text" id="apellido" name="apellido"  required>
                    </div>
                    <div class="form-group">
                        <label for="correo">Correo</label>
                        <input type="email" id="correo" name="correo" required>
                    </div>
                </div>
                <div class="form-row-update">
                    <div class="form-group">
                        <label for="provincia">Provincia</label>
                            <select name="provincia" id="provincia"   required>
                            </select>
                    </div>

                    <div class="form-group">
                    <label for="distrito">Distrito</label>
                    <select name="distrito" id="distrito" required  required>
                        
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
    searchUserTherapist();
  });
  const provinciaElement = $pacients.querySelector("#provincia");
  const distritoElement = $pacients.querySelector("#distrito");
  initializeProvincesAndDistricts(provinciaElement, distritoElement);
  return $pacients;
}

export function RegisterViewTherapist() {
  const $RegisterTherapists = document.createElement("div");
  $RegisterTherapists.classList.add("sidebar");
  $RegisterTherapists.innerHTML = `
       <div class="back-pacients">
      <a href="#/list-therapists">Volver</a>
    </div>
    <div class="container-main">
      <div class="main-content">
        <h1>CREAR NUEVO TERAPEUTA</h1>
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
  const provinciaElement = $RegisterTherapists.querySelector("#provincia");
  const distritoElement = $RegisterTherapists.querySelector("#distrito");
  initializeProvincesAndDistricts(provinciaElement, distritoElement);

  return $RegisterTherapists;
}
