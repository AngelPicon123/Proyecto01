import { PacientsShow } from "./Pacients/PacientsComponent.js";
import { RegisterUser } from "./Pacients/PacientsComponent.js";
import { getusersPatients } from "./Pacients/Pacients-get.js";
import { RegistrarUserPatients } from "./Pacients/Pacients-get.js";
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
    getusersPatients ();
  } else if (hash === "#/register-pacient") {
    $content.innerHTML = "";
    $content.appendChild(RegisterUser());
    RegistrarUser();
  } else if (hash === "#/list-therapists") {
    $content.innerHTML = "";
    $content.appendChild(therapistsShow());
  } else if (hash === "#/register-therapist") {
    $content.innerHTML = "";
    $content.appendChild(RegisterTherapist());
  }
}
