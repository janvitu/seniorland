// import Swiper, { Navigation } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";

// Swiper.use([Navigation]);

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  // freeMode: {
  //   enabled: true,
  //   sticky: true,
  // },
  slidesPerView: "auto",
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
