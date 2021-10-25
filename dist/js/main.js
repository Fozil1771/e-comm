let navMenu = document.getElementById("nav-menu");
let navBarToggle = document.getElementById("nav-burger");
let navBurger = document.getElementById("nav-toggle-btn");

let anchorNav = document.querySelectorAll('#anchor');

navBarToggle.addEventListener("click", function () {
    navMenu.classList.toggle('menu-active')
    navBurger.classList.toggle("active");
});

anchorNav.forEach(link => {
    link.addEventListener('click', function (e) {

        navMenu.classList.toggle('menu-active')
        navBurger.classList.toggle("active");
    })
})
