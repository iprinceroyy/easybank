const btn = document.querySelector(".nav-toggler");
const icon = document.querySelector("#imgId");
const navMenu = document.querySelector(".nav-menu");

let navIsToggled = false;

btn.addEventListener('click', () => {

    if (!navIsToggled) {
        icon.src = "assets/images/icon-close.svg";
        navMenu.classList.add("show");
    } else {
        navMenu.classList.remove("show");
        icon.src = "assets/images/icon-hamburger.svg";
    }

    navIsToggled = navIsToggled ? false : true;
});

window.addEventListener('resize', function() {
    if (this.innerWidth > 992) {
        this.document.body.style.overflowY = 'auto';
    }
});