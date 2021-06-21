$('.social-button').on('click', function(e) {
  e.preventDefault();
  $('.social-button__burger').toggleClass('social-button__burger_active');
  $('.social-nav__link').toggleClass('social-nav__link_active');
});
$('.card-body__button_1').on('click', function(e) {
  e.preventDefault();
  $('.card-front_1').toggleClass('card-front_active');
  $('.card-back_1').toggleClass('card-back_active');
});
$('.card-body__button_2').on('click', function(e) {
  e.preventDefault();
  $('.card-front_2').toggleClass('card-front_active');
  $('.card-back_2').toggleClass('card-back_active');
});
$('.card-body__button_3').on('click', function(e) {
  e.preventDefault();
  $('.card-front_3').toggleClass('card-front_active');
  $('.card-back_3').toggleClass('card-back_active');
});
var mySwiper = new Swiper('.news-slider', {
  loop: true,
  simulateTouch: false,
  navigation: {
    nextEl: '.news-button_next',
  },
});
AOS.init();