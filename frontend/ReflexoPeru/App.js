import { Menu } from "./components/Menu/MenuComponent.js";
import { Router } from "./components/router.js";

export function App() {
  const $root = document.getElementById("root");
  const d = document;

  // Solo limpiar el contenido dinámico, no el menú
  const $content = d.getElementById("content");
  if ($content) {
    $content.innerHTML = null;
  }

  // Asegúrate de que el menú solo se agrega una vez
  if (!$root.querySelector(".menu")) {
    $root.appendChild(Menu());
  }

  // Ejecutar el Router para cambiar el contenido dinámico
  Router();
}
