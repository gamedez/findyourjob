const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector('.navbar');
const closeMenuButon = document.querySelector(".close-button");
const toggleMenu = (event) => {
    menu.classList.toggle("is-open");
};

menuButton.addEventListener("click", (event) => {
    menu.classList.toggle("is-open");
});
closeMenuButon.addEventListener("click", );