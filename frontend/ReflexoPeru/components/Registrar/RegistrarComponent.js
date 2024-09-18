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

  return $register;
}
