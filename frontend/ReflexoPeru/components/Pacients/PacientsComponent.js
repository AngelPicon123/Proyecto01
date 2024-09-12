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

              
      <div class="main-content" id="editUserModal" style="display: none;" > 
      
            <h1>CREAR NUEVO PACIENTE</h1>
            <form method="POST">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nombre">Nombres</label>
                        <input type="text" id="nombre" name="nombre">
                    </div>
                    <div class="form-group">
                        <label for="apellido">Apellidos</label>
                        <input type="text" id="apellido" name="apellido">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="correo">Correo</label>
                        <input type="email" id="correo" name="correo">
                    </div>
                </div>

                <button type="submit" class="btn-submit">Crear Paciente</button>
            </form>
              </div>

     

    `;

  $pacients.querySelector("#search").addEventListener("input", () => {
    searchUser();



  });

  



  return $pacients;
}


