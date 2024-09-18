import { PacientsShow } from "./Pacients/PacientsComponent.js";
import { RegisterUser } from "./Pacients/PacientsComponent.js";
import { getusers } from "./Pacients/Pacients-get.js";
import { RegistrarUser } from "./Pacients/Pacients-get.js";

export function Router() {
  let { hash } = location;

  const d = document,
    $content = d.getElementById("content");

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
