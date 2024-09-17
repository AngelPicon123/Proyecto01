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
  const provinciasYDistritos = {
    Lima: [
      "Lima Cercado",
      "San Juan de Lurigancho",
      "San Martín de Porres",
      "La Victoria",
      "Miraflores",
      "Surco",
      "San Isidro",
      "Barranco",
      "San Borja",
      "Lince",
      "Pueblo Libre",
      "Magdalena",
      "San Miguel",
      "Chorrillos",
      "Villa El Salvador",
      "Villa María del Triunfo",
      "San Juan de Miraflores",
      "Ate",
      "El Agustino",
      "Cieneguilla",
      "Lurigancho-Chosica",
      "Pucusana",
      "Punta Hermosa",
      "Punta Negra",
      "Santa María del Mar",
      "San Bartolo",
    ],
    Arequipa: [
      "Arequipa Cercado",
      "Cerro Colorado",
      "Jacobo Hunter",
      "Paucarpata",
      "Miraflores",
      "Mariano Melgar",
      "Alto Selva Alegre",
      "Cayma",
      "Sachaca",
      "Tiabaya",
      "Yanahuara",
      "Sabandía",
      "Characato",
      "Mollebaya",
      "Yarabamba",
      "Quequeña",
    ],
    Piura: [
      "Piura Cercado",
      "Castilla",
      "Catacaos",
      "Sechura",
      "Sullana",
      "Talara",
      "Paita",
      "La Unión",
      "Tambogrande",
      "Chulucanas",
      "La Arena",
      "Huancabamba",
    ],
    Tacna: [
      "Tacna Cercado",
      "Alto de la Alianza",
      "Ciudad Nueva",
      "Gregorio Albarracín",
      "Pocollay",
      "Calana",
      "Sama",
      "Inclán",
      "Palca",
    ],
    Cajamarca: [
      "Cajamarca Cercado",
      "Baños del Inca",
      "La Encañada",
      "Los Baños del Inca",
      "Namora",
      "Jesús",
      "Matara",
      "San Juan",
    ],
    Callao: [
      "Callao Cercado",
      "Bellavista",
      "Carmen de la Legua Reynoso",
      "La Perla",
      "La Punta",
      "Ventanilla",
      "Mi Perú",
    ],
    Loreto: [
      "Iquitos",
      "Nauta",
      "Requena",
      "Punchana",
      "San Juan Bautista",
      "Belén",
      "Yurimaguas",
      "Pebas",
      "Mazán",
      "Alto Amazonas",
    ],
    Moquegua: [
      "Moquegua Cercado",
      "Ilo",
      "Mariscal Nieto",
      "Samegua",
      "Torata",
      "Carumas",
      "Cuchumbaya",
      "San Cristobal",
    ],
    Ayacucho: [
      "Ayacucho Cercado",
      "Carmen Alto",
      "Jesús Nazareno",
      "San Juan Bautista",
      "Huanta",
      "Vilcas Huamán",
      "Cangallo",
      "Pauza",
      "Querobamba",
      "Lucanas",
      "Parinacochas",
      "Coracora",
    ],
    Ancash: [
      "Huaraz",
      "Carhuaz",
      "Yungay",
      "Chimbote",
      "Casma",
      "Huarmey",
      "Aija",
      "Corongo",
      "Pallasca",
      "Sihuas",
    ],
    Lambayeque: [
      "Chiclayo",
      "Ferreñafe",
      "Lambayeque",
      "Mórrope",
      "Olmos",
      "Pacora",
      "Túcume",
      "Jayanca",
      "Salas",
    ],
    Huanuco: [
      "Huánuco",
      "Ambo",
      "Dos de Mayo",
      "Tingo María",
      "Aucayacu",
      "Lauricocha",
      "Pachitea",
      "Marañón",
      "Leoncio Prado",
    ],
    Cusco: [
      "Cusco Cercado",
      "San Jerónimo",
      "Santiago",
      "Wanchaq",
      "San Sebastián",
      "Pisac",
      "Calca",
      "Urubamba",
      "Ollantaytambo",
      "Sicuani",
      "Espinar",
    ],
    Puno: [
      "Puno Cercado",
      "Azángaro",
      "Carabaya",
      "Juliaca",
      "Yunguyo",
      "Ilave",
      "Desaguadero",
      "Huancané",
      "Lampa",
      "Chucuito",
      "San Román",
    ],
    "Madre de Dios": [
      "Tambopata",
      "Manu",
      "Tahuamanu",
      "Iñapari",
      "Las Piedras",
      "Laberinto",
    ],
  };

  const $provinciaSelect = $register.querySelector("#provincia");
  const $distritoSelect = $register.querySelector("#distrito");

  // Función para rellenar los distritos
  const rellenarDistritos = (provincia) => {
    const distritos = provinciasYDistritos[provincia] || [];
    $distritoSelect.innerHTML = ""; // Limpiar distritos previos
    distritos.forEach((distrito) => {
      const option = document.createElement("option");
      option.value = distrito;
      option.textContent = distrito;
      $distritoSelect.appendChild(option);
    });
  };

  // Evento cuando cambia la provincia
  $provinciaSelect.addEventListener("change", (e) => {
    rellenarDistritos(e.target.value);
  });

  // Inicialmente llenar los distritos según la provincia seleccionada por defecto
  rellenarDistritos($provinciaSelect.value);

  return $register;
}
