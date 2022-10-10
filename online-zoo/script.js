const burgerIcon = document.querySelector('.header-container__burger');
const burgerMenu = document.querySelector('.header-container__burger-menu');
const pageMask = document.querySelector('.page-mask');


burgerIcon.addEventListener('click', handlerBurgerMenu);
pageMask.addEventListener('click', closePageMask);


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

const arrowRight = document.querySelector('.pets2__arrow__right')
const arrowLeft = document.querySelector('.pets2__arrow__left')
const cards = document.querySelector('.pets-container__cards');
const cardsItems = document.querySelectorAll('.pets-container__card');

const wrapper = document.querySelector('.wrapper');


let counter = 0;

arrowRight.addEventListener('click', () => carousel('right'));
arrowLeft.addEventListener('click', () => carousel('left'));

function carousel(arrow) {
  console.log(counter);
  // if (counter >= -1 && counter <= 0) {
    if (arrow === 'right') {
      counter--
    }
    if (arrow === 'left') {
      counter++
    }
    // const cardsWidth = wrapper.offsetWidth;
    let value = 386 * counter;
    cards.style.left = `${value}px`;

  // cards.style.width = `${cardsWidth * 2}px`
  // if (arrow === 'right') {
  // let clone1 = cardsItems[0].cloneNode(true);
  // let clone2 = cardsItems[1].cloneNode(true);
  // let clone3 = cardsItems[2].cloneNode(true);
  // let clone4 = cardsItems[3].cloneNode(true);
  // let clone5 = cardsItems[4].cloneNode(true);
  // let clone6 = cardsItems[5].cloneNode(true);
  // cardsItems[0].remove()
  // cardsItems[1].remove()
  // cardsItems[2].remove()
  // cardsItems[3].remove()
  // cardsItems[4].remove()
  // cardsItems[5].remove()
  // cards.append(clone1)
  // cards.append(clone2)
  // cards.append(clone3)
  // cards.append(clone4)
  // cards.append(clone5)
  // cards.append(clone6)
  // }
}



// Testimonials
const slider = document.getElementById('slider');
const testimonials = document.querySelector('.testimonials__field__containers');
const testimonialsContainer = document.querySelector('.testimonials__field__container');
const testimonialOne = document.getElementById('one');

slider.addEventListener('input', (e) => testimonialsSlider(e));

function testimonialsSlider(e) {
  const counter = e.target.value;
  let value = ((-testimonialOne.offsetWidth - 30) * counter);
  console.log(value);
  testimonials.style.left = `${value}px`;
}


// pop-up
let allTestimonial = document.querySelectorAll('.testimonials__field__container');
const testimonialPopUp = document.querySelector('.pop-up');
const popUpClose = document.querySelector('.pop-up__close');
const popUpContainer = document.querySelector('.pop-up__container');


pageMask.addEventListener('click', closePageMask);
allTestimonial.forEach((item) => { item.addEventListener('click', (event) => openTestimonialPopUp(event)) })
popUpClose.addEventListener('click', closePageMask)

function openTestimonialPopUp(e) {
  const currentComment = e.currentTarget;
  popUpContainer.innerHTML = currentComment.innerHTML;
  testimonialPopUp.classList.add("show");
  pageMask.classList.add("show");
}

function closePageMask() {
  testimonialPopUp.classList.remove("show");
  pageMask.classList.remove("show");
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