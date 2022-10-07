const burgerIcon = document.querySelector('.header-container__burger');
const burgerMenu = document.querySelector('.header-container__burger-menu');
const pageMask = document.querySelector('.page-mask');
// const arrowRight = document.querySelector('.pets2__arrow__right');
// const arrowLeft = document.querySelector('.pets2__arrow__left');
// const petsCards = document.querySelector('.pets-container__cards');

// console.log(arrowRight);

burgerIcon.addEventListener('click', handlerBurgerMenu);
pageMask.addEventListener('click', closePageMask);
// arrowRight.addEventListener('click', carousel);
// arrowLeft.addEventListener('click', carousel);


function handlerBurgerMenu() {
  burgerIcon.classList.toggle('active');
  burgerMenu.classList.toggle('active');
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

//_________________carousel

// function carousel() {
//     petsCards.classList.toggle("show-right");
//     petsCards.classList.toggle("show-left");
// }

let arrowRight = document.querySelector('.pets2__arrow__right')
let arrowLeft = document.querySelector('.pets2__arrow__left')
let cards = document.querySelector('.pets-container__cards');

let counter = 0;

arrowRight.addEventListener('click', () => carousel('right'));
arrowLeft.addEventListener('click', () => carousel('left'));

function carousel(arrow) {
  if (arrow === 'right') {
    counter--
  }
  if (arrow === 'left'){
    counter++
  }
  let value = 386 * counter;
  cards.style.left = `${value}px`;
}

// function carouselLeft() {
//   counter--;
//   let value = 370 * counter;
//   cards.style.left = `${value}px`;
// }

function nextSlide() {
  if (counter < 5) {
    counter++;
    let value = -480 * counter;
    lineOneSlide.style.transition = '0.5s';
    lineTwoSlide.style.transition = '0.5s';

    lineOneSlide.style.left = `${value}px`;
    lineTwoSlide.style.left = `${value}px`;
    //console.log(counter);

  }
}



























// ABOUT EVENT TARGET

// arrowRight.addEventListener('click', (event) => carousel(event));
// arrowLeft.addEventListener('click', (event) => carousel(event));

// function carousel(e) {
//   console.log(e.target);
//   // e.target - html element
//   if (e.target.classList.contains('pets2__arrow__right')) {
//     counter--;
//   }
//   if (e.target.classList.contains('pets2__arrow__left')) {
//     counter++;
//   }
//   // if (e.target === arrowRight){
//   //   counter--
//   // }   
//   // if (e.target === arrowLeft){
//   //   counter++
//   // }
//   console.log(counter);
//   let value = 370 * counter;
//   cards.style.left = `${value}px`;
// }