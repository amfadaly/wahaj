"use strict";

// blog header
let scrollHeader = document.querySelector(".header");
window.addEventListener(`scroll`, () => {
  if (this.scrollY >= 200) {
    scrollHeader.classList.add("show-header");
  } else {
    scrollHeader.classList.remove("show-header");
  }
});

let scrollUp = document.querySelector(".scroll-up");
window.addEventListener(`scroll`, () => {
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-up");
  } else {
    scrollUp.classList.remove("show-up");
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

// download system -----------

document.addEventListener("DOMContentLoaded", function () {
  const androidLink = "https://play.google.com/store/apps/details?id=com.wahaj.app";
  const iosLink = "https://apps.apple.com/us/app/wahaj-%D9%88%D9%87%D8%AC/id6499275613";

  function detectOS() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return androidLink;
    } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
      return iosLink;
    } else {
      return androidLink;
    }
  }

  const downloadLink = detectOS();
  const downloadButtons = document.querySelectorAll(".downloadButton");

  downloadButtons.forEach((button) => {
    button.href = downloadLink;
  });
});
