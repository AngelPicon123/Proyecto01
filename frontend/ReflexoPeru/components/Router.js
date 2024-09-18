import { PacientsShow } from "./Pacients/PacientsComponent.js";
import { RegisterUser } from "./Pacients/PacientsComponent.js";
import { getusers } from "./Pacients/Pacients-get.js";
import { RegistrarUser } from "./Pacients/Pacients-get.js";
import {
  therapistsShow,
  RegisterTherapist,
} from "./Terapeutas/PacientsComponent.js";

export function Router() {
  let { hash } = location;

  const d = document,
    $content = d.getElementById("content");

  $content.innerHTML = "";

  if (!hash || hash === "#/") {
    $content.appendChild(PacientsShow());
    getusers();
  } else if (hash === "#/register-pacient") {
    RegistrarUser();
    $content.innerHTML = "";
    $content.appendChild(RegisterUser());
  } else if (hash === "#/list-therapists") {
    $content.innerHTML = "";
    $content.appendChild(therapistsShow());
  } else if (hash === "#/register-therapist") {
    $content.innerHTML = "";
    $content.appendChild(RegisterTherapist());
  }
}
