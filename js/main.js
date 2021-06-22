var modalButton = $('[data-toggle="modal"]');
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.addClass('modal__overlay_active');
  modalDialog.addClass('modal__dialog_active');
};

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay_active');
  modalDialog.removeClass('modal__dialog_active');
};

$('.social-button').on('click', function (e) {
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
