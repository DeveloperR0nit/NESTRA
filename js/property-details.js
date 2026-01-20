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

// Location Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
});
