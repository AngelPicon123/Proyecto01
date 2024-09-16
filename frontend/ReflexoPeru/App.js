import { Menu } from "./components/Menu/MenuComponent.js";
import { Router } from "./components/router.js";

export function App() {
  const $root = document.getElementById("root");
  const d = document;

  const $content = d.getElementById("content");
  if ($content) {
    $content.innerHTML = null;
  }

  if (!$root.querySelector(".menu")) {
    $root.appendChild(Menu());
  }
  Router();
}
