const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
	slidesPerView: 'auto',
	grabCursor: 'true',
});
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
	slidesPerView: 'auto',
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiper3 = new Swiper('.swiper3', {
  direction: 'vertical',
});
