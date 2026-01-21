const hamMenu = document.querySelector(".ham__menu");

const navlinks = document.querySelector(".navbar__links");

hamMenu.addEventListener("click", () => {
    navlinks.classList.toggle("active");
})