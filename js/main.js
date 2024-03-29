var tabsItem = $(".timetable-tabs__item");
var contentItem = $(".timetable-content__item");

tabsItem.on('click', function (event) {
  var activContent = $(this).attr('data-target');
  contentItem.removeClass('timetable-content__item_active');
  tabsItem.removeClass('timetable-tabs__item_active');
  $(activContent).addClass('timetable-content__item_active');
  $(this).addClass('timetable-tabs__item_active');
});


var tabsItemH = $(".hatha-tabs__item");
var contentItemH = $(".hatha-content__item");

tabsItemH.on('click', function (event) {
  var activContent = $(this).attr('data-target');
  contentItemH.removeClass('hatha-content__item_active');
  tabsItemH.removeClass('hatha-tabs__item_active');
  $(activContent).addClass('hatha-content__item_active');
  $(this).addClass('hatha-tabs__item_active');
});

var tabsItemA = $(".aiengar-tabs__item");
var contentItemA = $(".aiengar-content__item");

tabsItemA.on('click', function (event) {
  var activContent = $(this).attr('data-target');
  contentItemA.removeClass('aiengar-content__item_active');
  tabsItemA.removeClass('aiengar-tabs__item_active');
  $(activContent).addClass('aiengar-content__item_active');
  $(this).addClass('aiengar-tabs__item_active');
});

var tabsItemTC = $(".teacherCours-tabs__item");
var contentItemTC = $(".teacherCours-content__item");

tabsItemTC.on('click', function (event) {
  var activContent = $(this).attr('data-target');
  contentItemTC.removeClass('teacherCours-content__item_active');
  tabsItemTC.removeClass('teacherCours-tabs__item_active');
  $(activContent).addClass('teacherCours-content__item_active');
  $(this).addClass('teacherCours-tabs__item_active');
});

var tabsItemSM = $(".seminars-tabs__item");
var contentItemSM = $(".seminars-content__item");

tabsItemSM.on('click', function (event) {
  var activContent = $(this).attr('data-target');
  contentItemSM.removeClass('seminars-content__item_active');
  tabsItemSM.removeClass('seminars-tabs__item_active');
  $(activContent).addClass('seminars-content__item_active');
  $(this).addClass('seminars-tabs__item_active');
});


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

var newsSwiper = new Swiper('.news-slider', {
  loop: true,
  simulateTouch: false,
  navigation: {
    nextEl: '.news-button_next',
  },
});

var atcSwiper = new Swiper('.preview-slider', {
  loop: false,
  simulateTouch: true,
  pagination: {
    clickable: true,
    dynamicBullets: true,
    el: '.preview-pagination',
  },
});
AOS.init();