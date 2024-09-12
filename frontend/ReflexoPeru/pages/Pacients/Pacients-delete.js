 
window.deleteUser = function (userId) {
  axios
    .delete(
      `http://localhost/Proyecto01/Api/public/index.php/users/delete/${userId}`
    )
    .then((response) => {
      console.log("User deleted successfully:", response.data);
      getusers(); 
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });

};



