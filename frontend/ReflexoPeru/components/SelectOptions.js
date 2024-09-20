// Función que devuelve el array de provincias
export function getProvincias() {
  return [
    "Lima",
    "Arequipa",
    "Piura",
    "Tacna",
    "Cajamarca",
    "Callao",
    "Loreto",
    "Moquegua",
    "Ayacucho",
    "Ancash",
    "Lambayeque",
    "Huanuco",
    "Cusco",
    "Puno",
    "Madre de Dios",
  ];
}

// Función que devuelve el objeto de distritos
export function getDistritos() {
  return {
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
}

// Función que inicializa los elementos de provincias y distritos
export function initializeProvincesAndDistricts(
  provinciaElement,
  distritoElement
) {
  const provincias = getProvincias();
  const distritos = getDistritos();

  function selectOptions(array, element) {
    if (!element) return;
    let elements = "<option selected disabled> --Seleccionar--</option>";
    array.forEach((option) => {
      elements += `<option value="${option}">${option}</option>`;
    });
    element.innerHTML = elements;
  }

  selectOptions(provincias, provinciaElement);

  provinciaElement.addEventListener("change", (e) => {
    let value = provinciaElement.value;
    if (!distritoElement) return; // Agrega una verificación para evitar el error
    distritoElement.innerHTML = `<option selected disabled>--Seleccionar--</option>`;
    if (distritos[value]) {
      distritos[value].forEach((distrito) => {
        distritoElement.innerHTML += `<option value="${distrito}">${distrito}</option>`;
      });
    }
  });
}
