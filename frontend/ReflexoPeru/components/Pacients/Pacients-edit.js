
function editUser() {
  // Añadir el event listener aquí, después de que el contenido esté en el DOM
  const button = document.querySelector(".Buttons-general button");
  button.addEventListener("click", () => {
    const modal = document.getElementById("editUserModal");

    // Mostrar el modal
    if (modal) {
      modal.style.display = "block"; // Mostrar el modal
      modal.style.position = "fixed"; // Fijar la posición en la pantalla
      modal.style.top = "50%"; // Centrar verticalmente
      modal.style.left = "50%"; // Centrar horizontalmente
      modal.style.transform = "translate(-50%, -50%)"; // Ajustar para que se centre correctamente
    } else {
      console.error("El modal no se encontró en el DOM.");
    }
  });
}


export { editUser };