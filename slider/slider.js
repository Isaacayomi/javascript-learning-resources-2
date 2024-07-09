const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const rightBtn = document.querySelector(".slider__btn--right");
const leftBtn = document.querySelector(".slider__btn--left");
let curSlide = 0;
let maxSlide = slides.length - 1;
slider.style.overflow = "hidden";

slides.forEach(function (slide, i) {
  slide.style.transform = `translateX(${100 * i}%)`;
});

const goTo = function () {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
};

const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goTo();
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  goTo();
};

rightBtn.addEventListener("click", nextSlide);

leftBtn.addEventListener("click", prevSlide);

// Implementing a keydown event

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});
