const btnAbrirMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const btnFecharMenu = document.getElementById('btn-fechar');
const overlayMenu = document.getElementById('overlay-menu');

// Abrir o Menu Mobile
btnAbrirMenu.addEventListener('click', () => {
    menuMobile.classList.add('open');
    overlayMenu.classList.add('active');
});

// Fechar o Menu Mobile
btnFecharMenu.addEventListener('click', () => {
    menuMobile.classList.remove('open');
    overlayMenu.classList.remove('active');
});

overlayMenu.addEventListener('click', () => {
    menuMobile.classList.remove('open');
    overlayMenu.classList.remove('active');
});