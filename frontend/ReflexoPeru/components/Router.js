import { PacientsShow } from "./Pacients/PacientsComponent.js";
import { RegisterUser } from "./Registrar/RegistrarComponent.js";
import { getusers } from "./Pacients/Pacients-get.js";

export function Router() {
  let { hash } = location;
  const d = document,
    $root = d.getElementById("root");

  if (!hash || hash === "#/") {
    $root.appendChild(PacientsShow());
    getusers();
  } else if (hash === "#/register") {
    $root.appendChild(RegisterUser());
  }
}
