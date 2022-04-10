const btn = document.querySelector(".nav-toggler");
const icon = document.querySelector("#imgId");
const navMenu = document.querySelector(".nav-menu");

let navIsToggled = false;

btn.addEventListener('click', () => {
    icon.src = "assets/images/icon-close.svg";
    navMenu.classList.toggle("show");


    navIsToggled = navIsToggled ? false : true;
});