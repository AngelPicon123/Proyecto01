document.addEventListener("DOMContentLoaded", () => {
searchUser();
});


function searchUser() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const tableBody = document.getElementById("userTableBody");
    const rows = tableBody.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {      
        const cells = rows[i].getElementsByTagName("td");
        let found = false;
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent.toLowerCase();
            if (cellText.includes(searchTerm)) {
                found = true;
                break;
            }
        }
        if (found) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
