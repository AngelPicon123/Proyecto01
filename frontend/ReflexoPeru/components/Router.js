import { PacientsShow } from "./Pacients/PacientsComponent.js";
import { RegisterUser } from "./Registrar/RegistrarComponent.js";
import { getusers } from "./Pacients/Pacients-get.js";
import { RegistrarUser } from "./Registrar/RegistrarJ.js";

export function Router() {
  let { hash } = location;

  const d = document,
    $content = d.getElementById("content");

  // Asegurarse de que el contenido dinámico está vacío antes de agregar algo
  $content.innerHTML = "";

  if (!hash || hash === "#/") {
    $content.appendChild(PacientsShow());
    getusers();
  } else if (hash === "#/register") {
    $content.innerHTML = "";
    $content.appendChild(RegisterUser());
    RegistrarUser();
  }
}
