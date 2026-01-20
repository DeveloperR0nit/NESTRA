// Properties dropdown open when Properties text is clicked

const dropdownMenu1 = document.querySelector(".dropdown-menu");
const dropdownItem1 = document.querySelector(".dropdown");
const dropdownToggle1 = document.querySelector(".dropdown-toggle");
const trigger = document.querySelector(".properties-nav-item");

trigger.addEventListener("click", (e) => {
  e.stopPropagation();

  dropdownItem1.classList.toggle("move-up");
  dropdownMenu1.classList.toggle("show");
  dropdownToggle1.classList.toggle("show");
});

// Range Bar in Col-3

const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");

priceRange.addEventListener("input", () => {
  const minPrice = 20;
  var maxPrice = priceRange.value;
  if (maxPrice >= 100) {
    maxPrice = maxPrice / 100;
    priceValue.textContent = `${minPrice} L - ${maxPrice} Cr`;
  } else {
    priceValue.textContent = `${minPrice} L - ${maxPrice} L`;
  }
});
const priceRange2 = document.getElementById("price-range2");
const priceValue2 = document.getElementById("price-value2");

priceRange2.addEventListener("input", () => {
  const minPrice = 20;
  var maxPrice2 = priceRange2.value;
  if (maxPrice2 >= 100) {
    maxPrice2 = maxPrice2 / 100;
    priceValue2.textContent = `${minPrice} L - ${maxPrice2} Cr`;
  } else {
    priceValue2.textContent = `${minPrice} L - ${maxPrice2} L`;
  }
});

// Page Buttons in col-9

const pageBtns = document.querySelectorAll(".page-btn");
const pageNextBtn = document.querySelector(".page-next-btn");
const pagePrevBtn = document.querySelector(".page-prev-btn");

const buttonsPerSlide = 2;
let currentSlide = 1;

const totalPageButtons = pageBtns.length;
const totalSlides = Math.ceil(totalPageButtons / buttonsPerSlide);

pagePrevBtn.classList.add("hide");

function slideUpdate() {
  // Hide all buttons
  pageBtns.forEach((btn) => {
    btn.classList.remove("show");
  });

  // Remove active
  pageBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });

  const start = buttonsPerSlide * (currentSlide - 1);
  const end = Math.min(start + buttonsPerSlide, totalPageButtons);

  // Show buttons safely
  for (let i = start; i < end; i++) {
    pageBtns[i].classList.add("show");
  }

  // Set active first button of slide
  pageBtns[start].classList.add("active-btn");

  // Toggle prev/next buttons
  pagePrevBtn.classList.toggle("hide", currentSlide === 1);
  pageNextBtn.classList.toggle("hide", currentSlide === totalSlides);
}

// Initial run
slideUpdate();

// Next slide
pageNextBtn.addEventListener("click", () => {
  if (currentSlide < totalSlides) {
    currentSlide++;
    slideUpdate();
  }
});

// Previous slide
pagePrevBtn.addEventListener("click", () => {
  if (currentSlide > 1) {
    currentSlide--;
    slideUpdate();
  }
});

// Manual active button
pageBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    pageBtns.forEach((b) => b.classList.remove("active-btn"));
    btn.classList.add("active-btn");
  });
});

// Properties Togller Mechanism

const propertiesToggler = document.querySelector(".properties-toggler");
const propertiesMenu = document.querySelector(".properties-menu-sm");
propertiesToggler.addEventListener("click", () => {
  propertiesToggler.classList.toggle("show");
  propertiesMenu.classList.toggle("slide");
});
