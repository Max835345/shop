var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.list_navb');
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
})