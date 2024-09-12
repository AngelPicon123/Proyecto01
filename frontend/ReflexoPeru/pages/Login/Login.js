const pass = document.getElementById("passwordInput"),
  iconShow = document.getElementById("eye-show"),
  iconHide = document.getElementById("eye-hide");

if (iconHide) {
  iconHide.addEventListener("click", (e) => {
    if (pass.type === "password") {
      pass.type = "text";
      iconHide.style.display = "none";
      iconShow.style.display = "inline";
    } else {
      pass.type = "password";
      iconHide.style.display = "inline";
      iconShow.style.display = "none";
    }
  });
}

if (iconShow) {
  iconShow.addEventListener("click", (e) => {
    if (pass.type === "password") {
      pass.type = "text";
      iconHide.style.display = "none";
      iconShow.style.display = "inline";
    } else {
      pass.type = "password";
      iconHide.style.display = "inline";
      iconShow.style.display = "none";
    }
  });
}
