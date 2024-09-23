import { PacientsShow } from "./Pacients/PacientsComponent.js";
import { RegisterUser } from "./Pacients/PacientsComponent.js";
import { getusersPatients } from "./Pacients/Pacients-get.js";
import { getusersTherapist } from "./Terapeutas/Therapist.js";
import { RegistrarUserPatients } from "./Pacients/Pacients-get.js";
import {
  therapistsShow,
  RegisterViewTherapist,
} from "./Terapeutas/TherapistComponent.js";
import { RegistrarUserTherapist } from "./Terapeutas/Therapist.js";

export function Router() {
  let originalTitle = document.title;

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      document.title = "¡VUELVE OE😡!";
    } else {
      document.title = originalTitle;
    }
  });

  let { hash } = location;

  const d = document,
    $content = d.getElementById("content");

  $content.innerHTML = "";

  if (!hash || hash === "#/") {
    $content.appendChild(PacientsShow());
    getusersPatients();
  } else if (hash === "#/register-pacient") {
    $content.innerHTML = "";
    $content.appendChild(RegisterUser());
    RegistrarUserPatients();
  } else if (hash === "#/list-therapists") {
    $content.innerHTML = "";
    $content.appendChild(therapistsShow());
    getusersTherapist();
  } else if (hash === "#/register-therapist") {
    $content.innerHTML = "";
    $content.appendChild(RegisterViewTherapist());
    RegistrarUserTherapist();
  }
}
