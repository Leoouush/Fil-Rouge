const menu = document.querySelector('nav');
const burger = document.querySelector('.burger');
const liens = document.querySelectorAll('nav a');

burger.addEventListener('click', () => {
    menu.classList.toggle('nav-open');
});

liens.forEach((lien) => {
    lien.addEventListener('click', () => {
        menu.classList.remove('nav-open');
    });
});