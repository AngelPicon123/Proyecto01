export function RegisterUser() {
  const $register = document.createElement("div");
  $register.classList.add("sidebar");
  $register.innerHTML = `
        <div class="main-content"> 
            <h1>CREAR NUEVO CLIENTE</h1>
            <form method="POST" id ="form-create">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nombre">Nombres</label>
                        <input type="text" id="nombre" name="nombre">
                    </div>
                   
                </div>
                <div class="form-row">
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

                <button type="submit" id="btn-crear" class="btn-submit">Crear Paciente</button>
            </form>
    `;

  return $register;
}
