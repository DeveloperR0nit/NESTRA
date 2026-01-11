// Shop By Category Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  freeMode: true,
  slidesOffsetBefore: 30,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    576: {
      slidesOffsetBefore: 50,
    },
  },
});

// Featured Section Slider

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    976: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    576: {
      spaceBetween: 24,
      slidesPerView: 2,
    },
  },
});

