// Header Top Sliding Text

var headerSwiper = new Swiper(".header-swiper", {
  spaceBetween: 24,
  direction: "vertical",
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Navbar Toggler

const navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.classList.remove("open");
navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("open");
});

// Navbar Dropdown

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItem = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const observer = new MutationObserver(() => {
  dropdownItem.classList.toggle(
    "move-up",
    dropdownMenu.classList.contains("show")
  );
});
observer.observe(dropdownMenu, {
  attributes: true,
  attributeFilter: ["class"],
});

// Header Hinding Mechanism While Scroll

const headerSearch = document.querySelector(".header-search-wrapper");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 100) {
    headerSearch.classList.add("header-animation");
    dropdownMenu.classList.remove("show");
    dropdownItem.classList.remove("move-up");
    dropdownToggle.classList.remove("show");
  } else {
    headerSearch.classList.remove("header-animation");
  }
});

// Search box popup animation

const searchBoxPm = document.querySelector(".search-box-pm");
const searchBoxSm = document.querySelector(".search-box-sm");
const searchBoxPopup = document.querySelector(".search-box-popup");
searchBoxPm.addEventListener("click", () => {
  searchBoxPm.classList.toggle("show");
  searchBoxPopup.classList.toggle("show");
  headerSearch.classList.toggle("height-increase");
});
searchBoxSm.addEventListener("click", () => {
  searchBoxSm.classList.toggle("show");
  searchBoxPopup.classList.toggle("show");
  headerSearch.classList.toggle("height-increase");
});

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search-inp");
const reset1 = document.querySelector(".reset-btn-1");
searchForm.addEventListener("submit", (s) => {
  s.preventDefault();
});
searchInput.addEventListener("input", () => {
  const length = searchInput.value.length;
  if (length >= 1) {
    reset1.classList.add("show");
  } else {
    reset1.classList.remove("show");
  }
});
reset1.addEventListener("click", () => {
  reset1.classList.remove("show");
});

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

// Our Clients Slider

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,
});

// Sign Up Section Form

const emailChecker = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const userFrom = document.querySelector(".sign-up-form");
const userEmail = document.querySelector("#email");
const reset2 = document.querySelector(".reset-btn-2");
const invalidError = document.querySelector(".invalid-submit-error");
const submitDone = document.querySelector(".submit-done-msg");
userFrom.addEventListener("submit", (event) => {
  event.preventDefault();
  invalidError.classList.remove("show");
  submitDone.classList.remove("show");
  void submitDone.offsetWidth;
  if (emailChecker.test(userEmail.value) == false) {
    invalidError.classList.add("show");
  } else {
    submitDone.classList.add("show");
  }
});
userEmail.addEventListener("input", () => {
  const length = userEmail.value.length;
  if (length >= 1) {
    reset2.classList.add("show");
  } else {
    reset2.classList.remove("show");
  }
});
reset2.addEventListener("click", () => {
  reset2.classList.remove("show");
});
