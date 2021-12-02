// navigation vars

let navMenu = document.getElementById("nav-menu");
let navBarToggle = document.getElementById("nav-burger");
let navBurger = document.getElementById("nav-toggle-btn");
let anchorNav = document.querySelectorAll('#anchor');


// responsive filter vars
let filterConfig = document.querySelector(".filter-config")
let filterClose = document.getElementById("close")
let filterBody = document.querySelector(".filter")



// navigation drop-down burger logic
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


// filter config body toggle
filterConfig.addEventListener('click', () => {
    filterBody.classList.add("active")
})

filterClose.addEventListener('click', () => {
    filterBody.classList.remove("active")
})


