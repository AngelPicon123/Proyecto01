document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".list__item--click");
  
    listItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        const listShow = item.querySelector(".list__show");
        const arrow = item.querySelector(".list__arrow");
  
        // Prevent the click event from bubbling up to the parent element
        if (event.target.closest(".list__show")) {
          return;
        }
  
        // Desactivate all active menus
        listItems.forEach((otherItem) => {
          const otherListShow = otherItem.querySelector(".list__show");
          const otherArrow = otherItem.querySelector(".list__arrow");
  
          if (otherListShow.classList.contains("active") && otherItem !== item) {
            otherListShow.classList.remove("active");
            otherArrow.style.transform = "rotate(0deg)";
          }
        });
  
        // Toggle the clicked menu
        if (listShow.classList.contains("active")) {
          listShow.classList.remove("active");
          arrow.style.transform = "rotate(0deg)";
        } else {
          listShow.classList.add("active");
          arrow.style.transform = "rotate(180deg)";
        }
      });
    });
  });
  