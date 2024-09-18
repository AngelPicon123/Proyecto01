export function Menu() {
  const $menu = document.createElement("div");
  $menu.classList.add("menu");
  $menu.innerHTML = `
        <div class="logo">
          <img src="./assets/img/Logo Reflexo.jpg" alt="" />
        </div>
        <nav class="nav">
          <ul class="list">
            <!-- CITAS -->
            <li class="list__item list__item--click">
              <div class="list__button list__button--click">
                <img
                  src="./assets/img/citas.png"
                  class="img_citas"
                />
                <a class="nav__link">CITAS</a>
                <img
                  src="./assets/img/arrow-down.png"
                  class="list__arrow img_citas"
                />
              </div>
              <ul class="list__show">
                <li class="list__inside">
                  <a href="#/register-pacient" class="nav__link nav__link--inside"
                    >Crear Cliente</a
                  >
                </li>
                <li class="list__inside">
                  <a href="#/" class="nav__link nav__link--inside"
                    >Ver todos los Clientes</a
                  >
                </li>
              </ul>
            </li>
            <!-- GESTIONAR -->
            <li class="list__item list__item--click">
              <div class="list__button list__button--click">
                <img
                  src="./assets/img/gestionar-icon.png"
                  class="img_citas"
                />
                <a class="nav__link">GESTIONAR</a>
                <img
                  src="./assets/img/arrow-down.png"
                  class="list__arrow img_citas"
                />
              </div>
              <ul class="list__show">
                <li class="list__inside">
                  <a href="#/" class="nav__link nav__link--inside"
                    >Gestion de Pacientes</a
                  >
                </li>
                <li class="list__inside">
                  <a href="#/list-therapists" class="nav__link nav__link--inside"
                    >Gestion de Terapeutas</a
                  >
                </li>
              </ul>
            </li>
            <!-- NOTIFICACIONES -->
            <li class="list__item">
              <div class="list__button">
                <img
                  src="./assets/img/notificaciones.png"
                  class="img_citas img_citas"
                />
                <a class="nav__link">NOTIFICACIONES</a>
              </div>
            </li>

            <!-- CONFIGURACIONES -->
            <li class="list__item list__item--click">
              <div class="list__button list__button--click">
                <img
                  src="./assets/img/configuraciones.png"
                  class="img_citas"
                />
                <a class="nav__link">CONFIGURACIONES</a>
                <img
                  src="./assets/img/arrow-down.png"
                  class="list__arrow img_citas"
                />
              </div>
              <ul class="list__show">
                <li class="list__inside">
                  <a href="#" class="nav__link nav__link--inside"
                    >Gestion de Citas</a
                  >
                </li>
                <li class="list__inside">
                  <a href="#" class="nav__link nav__link--inside"
                    >Gestion de Citas</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>
  `;

  return $menu;
}
