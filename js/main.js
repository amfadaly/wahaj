"use strict";

// blog header
let scroll = document.querySelector(".blog-header");

window.addEventListener(`scroll`, () => {
  if (this.scrollY >= 200) {
    scroll.classList.add("show-header");
  } else {
    scroll.classList.remove("show-header");
  }
});

$(`document`).ready(() => {
  // categories
  $(".categories .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav: true,
    navText: [
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      769: {
        items: 4,
      },
      1200: {
        items: 6,
      },
    },
  });
});

// AOS ANIMATION ON SCROLL
AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
});
