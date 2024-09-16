const navContent = document.querySelector(".content-container");
const hamburgerbar = document.querySelector(".nav-btn");

hamburgerbar.addEventListener("click", () => {
    hamburgerbar.classList.toggle("active");
    navContent.classList.toggle("active");
});
