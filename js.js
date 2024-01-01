const header = document.querySelector("header");
const menuIcon = document.getElementById("menu-icon");
const navmenu = document.querySelector('.navmenu');
const productsLink = document.getElementById('products-link');

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
});


