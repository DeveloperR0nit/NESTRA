// Loader

window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 1100);
});

// Luxy

function initLuxy() {
  if (window.innerWidth > 992) {
    luxy.init({
      wrapper: "#luxy",
      targets: ".luxy-el",
      wrapperSpeed: 0.08,
    });
  }
}

// AOS

AOS.init({
  once: true,
});

window.addEventListener("load", initLuxy);

// Cursor

const cursor = document.querySelector(".cursor");
const cursorBorder = document.querySelector(".cursor-border");
const navbar = document.querySelector("header");
let pageX = 0;
let pageY = 0;
let cursorX = 0;
let cursorY = 0;
let newX = 0;
let newY = 0;

window.addEventListener("mousemove", (e) => {
  pageX = e.clientX;
  pageY = e.clientY;
});

function cursorMove() {
  cursorX += (pageX - cursorX) / 8;
  cursorY += (pageY - cursorY) / 8;
  newX += (pageX - newX) / 3;
  newY += (pageY - newY) / 3;
  cursor.style.transform = `translate(${newX}px, ${newY}px) translate(-50%, -50%)`;
  cursorBorder.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
  requestAnimationFrame(cursorMove);
}
cursorMove();

const hoverTargets = document.querySelectorAll(
  "a, button, .hover-target"
);

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    cursorBorder.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
    cursorBorder.classList.remove("hover");
  });
});

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
let lastScrollY = window.scrollY;
window.addEventListener("scroll", (e) => {
  let currentScrollY = window.scrollY;
  if (lastScrollY > 100) {
    // scrolling up
    if (currentScrollY < lastScrollY) {
      headerSearch.classList.add("header-bottom-show");
      headerSearch.classList.remove("header-hide");
    }
    // scrolling down
    else {
      headerSearch.classList.add("header-hide");
      headerSearch.classList.remove("header-bottom-show");
      dropdownMenu.classList.remove("show");
      dropdownItem.classList.remove("move-up");
      dropdownToggle.classList.remove("show");
    }
  } else {
    // scrolling up
    if (currentScrollY < lastScrollY) {
      headerSearch.classList.remove("header-hide");
      headerSearch.classList.remove("header-bottom-show");
    }
    // scrolling down
    else {
      headerSearch.classList.add("header-hide");
      dropdownMenu.classList.remove("show");
      dropdownItem.classList.remove("move-up");
      dropdownToggle.classList.remove("show");
    }
  }

  lastScrollY = currentScrollY;
});

// Scroll disable while navbar toggler is open

let scrollPosition = 0;
const navBar = document.querySelector(".offcanvas");

navBar.addEventListener("shown.bs.offcanvas", () => {
  scrollPosition = window.scrollY;
  document.body.style.top = `-${scrollPosition}px`;
  document.body.classList.add("no-scroll");
});

navbar.addEventListener("hidden.bs.offcanvas", () => {
  document.body.classList.remove("no-scroll");
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);
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
