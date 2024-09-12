import { Menu } from "./components/Menu/MenuComponent.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");

  $root.appendChild(Menu());
}
