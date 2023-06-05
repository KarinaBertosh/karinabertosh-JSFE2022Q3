const burgerIcon = document.querySelector(".header-container__burger");
const burgerMenu = document.querySelector(".header-container__burger-menu");
const pageMask = document.querySelector(".page-mask");

burgerIcon.addEventListener("click", handlerBurgerMenu);
pageMask.addEventListener("click", closePageMask);

function handlerBurgerMenu() {
  burgerIcon.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burgerMenu.classList.toggle("show");
  burgerIcon.classList.toggle("show");
  pageMask.classList.toggle("show");
}

function closePageMask() {
  burgerMenu.classList.remove("show");
  burgerIcon.classList.remove("show");
  burgerIcon.classList.remove("active");
  pageMask.classList.remove("show");
  testimonialPopUp.classList.remove("show");
}

//_________________carousel

const arrowRight = document.querySelector(".pets2__arrow__right");
const arrowLeft = document.querySelector(".pets2__arrow__left");
const cards = document.querySelector(".pets-container__cards");
const cardsItems = document.querySelectorAll(".pets-container__card");

const wrapper = document.querySelector(".wrapper");

let counter = 0;

arrowRight.addEventListener("click", () => carousel("right"));
arrowLeft.addEventListener("click", () => carousel("left"));

let windowWidth = window.innerWidth;
let itemWidth = 306;
setInterval(function () {
  return (windowWidth = window.innerWidth);
}, 1000);

if (windowWidth > 640 && windowWidth < 999.9) {
  itemWidth = 310;
} else if (windowWidth > 1000 && windowWidth < 1599.9) {
  itemWidth = 315;
} else if (windowWidth > 1600) {
  itemWidth = 380;
}

function carousel(arrow) {
  if (arrow === "right") {
    counter--;
  }
  if (arrow === "left") {
    counter++;
  }
  let value = `${itemWidth}` * counter;
  cards.style.left = `${value}px`;
}

// Testimonials
const slider = document.getElementById("slider");
const testimonials = document.querySelector(".testimonials__field__containers");
const testimonialsContainer = document.querySelector(
  ".testimonials__field__container"
);
const testimonialOne = document.getElementById("one");

slider.addEventListener("input", (e) => testimonialsSlider(e));

function testimonialsSlider(e) {
  const counter = e.target.value;
  let value = (-testimonialOne.offsetWidth - 30) * counter;
  testimonials.style.left = `${value}px`;
}

// pop-up
let allTestimonial = document.querySelectorAll(
  ".testimonials__field__container"
);
const testimonialPopUp = document.querySelector(".pop-up");
const popUpClose = document.querySelector(".pop-up__close");
const popUpContainer = document.querySelector(".pop-up__container");

allTestimonial.forEach((item) => {
  item.addEventListener("click", (event) => openTestimonialPopUp(event));
});
popUpClose.addEventListener("click", closePageMask);

function openTestimonialPopUp(e) {
  const currentComment = e.currentTarget;
  popUpContainer.innerHTML = currentComment.innerHTML;
  testimonialPopUp.classList.add("show");
  pageMask.classList.add("show");
}
