// Welcome swiper

var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  speed: 1600,
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

// Parallax JS

var scene = document.getElementById('scene');
var parallaxInstance = null;

function initParallax() {
  if (window.innerWidth > 992) {
    if (!parallaxInstance) {
      parallaxInstance = new Parallax(scene, {
        relativeInput: true
      });
    }
  } else {
    if (parallaxInstance) {
      parallaxInstance.destroy();
      parallaxInstance = null;
    }
  }
}

window.addEventListener("resize", initParallax);
initParallax();
