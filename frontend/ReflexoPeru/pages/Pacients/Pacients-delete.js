 
window.deleteUser = function (userId) {
  axios
    .delete(
      `http://localhost/Proyecto01/Api/public/index.php/users/delete/${userId}`
    )
    .then((response) => {
      console.log("User deleted successfully:", response.data);
      getusers(); // Recargar la lista de usuarios después de eliminar uno
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
};
