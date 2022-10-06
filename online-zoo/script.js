const burgerIcon = document.querySelector('.header-container__burger');
const burgerMenu = document.querySelector('.header-container__burger-menu');
const pageMask = document.querySelector('.page-mask');


burgerIcon.addEventListener('click', openBurgerIcon);
burgerIcon.addEventListener('click', handlerBurgerMenu);
pageMask.addEventListener('click', closePageMask);


function openBurgerIcon() {
    burgerIcon.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}

function handlerBurgerMenu() {
    burgerMenu.classList.toggle("show");
    burgerIcon.classList.toggle("show");
    pageMask.classList.toggle("show");
}

function closePageMask() {
    burgerMenu.classList.remove("show");
    burgerIcon.classList.remove("show");
    burgerIcon.classList.remove('active');
    pageMask.classList.remove("show");
}








