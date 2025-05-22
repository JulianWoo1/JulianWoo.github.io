document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("mySidebar");
    const mainContent = document.getElementById("main");
    const openBtn = document.querySelector(".openbtn");

    sidebar.style.width = "200px";


    openBtn.addEventListener("click", () => {
        const isOpen = sidebar.style.width === "200px";
        sidebar.style.width = isOpen ? "0" : "200px";
    });
});


function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 




