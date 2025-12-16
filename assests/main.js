const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
new Swiper(".hero-swiper", {
  loop: true,
  effect: "fade",
  speed: 900,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
navigation: {
            nextEl: "[data-slider-button='2']",
            prevEl: "[data-slider-button='1']"
        }
});
let swiperProjects = new Swiper(".products-swiper", {
      spaceBetween: 20,
      slidesPerView: 3,
      allowTouchMove: false,
    simulateTouch: false,
      breakpoints: {
      320: { slidesPerView: 1.3 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
    },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".products-next",
        prevEl: ".products-prev",
      },
    });
    let swiperimgs = new Swiper(".product-imgs", {
      spaceBetween: 20,
      slidesPerView: 3,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
    },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: " .swiper-button-next",
        prevEl: " .swiper-button-prev",
      },
    });
    document.addEventListener("DOMContentLoaded", () => {
        const faqItems = document.querySelectorAll(".faq-item");

        faqItems.forEach((item) => {
          const header = item.querySelector(".faq-header");

          header.addEventListener("click", () => {
            if (item.classList.contains("active")) {
              item.classList.remove("active");
            } else {
              faqItems.forEach((i) => i.classList.remove("active"));
              item.classList.add("active");
            }
          });
        });
      });
      document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.testimonials-swiper', {
  loop: true, 
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
     0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
  }
});
});
document.getElementById("year").textContent = new Date().getFullYear()