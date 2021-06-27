//Елена Берсенева
$('[data-target="#instructor_1"]').on('click', function (e) {
  e.preventDefault();
  $('#instructor_1').addClass('teacher-content__item_active');
  $('#schedule_1').removeClass('teacher-content__item_active');
  $('[data-target="#instructor_1"]').addClass('teacher-tabs__item_active');
  $('[data-target="#schedule_1"]').removeClass('teacher-tabs__item_active');
  $('#photoEB_2').removeClass('teacher__img_active');
  $('#photoEB_1').addClass('teacher__img_active');
});

$('[data-target="#schedule_1"]').on('click', function(e) {
  e.preventDefault();
  $('#schedule_1').addClass('teacher-content__item_active');
  $('#instructor_1').removeClass('teacher-content__item_active');
  $('[data-target="#schedule_1"]').addClass('teacher-tabs__item_active');
  $('[data-target="#instructor_1"]').removeClass('teacher-tabs__item_active');
  $('#photoEB_1').removeClass('teacher__img_active');
  $('#photoEB_2').addClass('teacher__img_active');
});

//Евгений Шестаков
$('[data-target="#instructor_2"]').on('click', function (e) {
  e.preventDefault();
  $('#instructor_2').addClass('teacher-content__item_active');
  $('#schedule_2').removeClass('teacher-content__item_active');
  $('[data-target="#instructor_2"]').addClass('teacher-tabs__item_active');
  $('[data-target="#schedule_2"]').removeClass('teacher-tabs__item_active');
  $('#photoESh_2').removeClass('teacher__img_active');
  $('#photoESh_1').addClass('teacher__img_active');
});

$('[data-target="#schedule_2"]').on('click', function(e) {
  e.preventDefault();
  $('#schedule_2').addClass('teacher-content__item_active');
  $('#instructor_2').removeClass('teacher-content__item_active');
  $('[data-target="#schedule_2"]').addClass('teacher-tabs__item_active');
  $('[data-target="#instructor_2"]').removeClass('teacher-tabs__item_active');
  $('#photoESh_1').removeClass('teacher__img_active');
  $('#photoESh_2').addClass('teacher__img_active');
});

//Мария Жулковская
$('[data-target="#instructor_3"]').on('click', function (e) {
  e.preventDefault();
  $('#instructor_3').addClass('teacher-content__item_active');
  $('#schedule_3').removeClass('teacher-content__item_active');
  $('[data-target="#instructor_3"]').addClass('teacher-tabs__item_active');
  $('[data-target="#schedule_3"]').removeClass('teacher-tabs__item_active');
  $('#photoMZh_2').removeClass('teacher__img_active');
  $('#photoMZh_1').addClass('teacher__img_active');
});

$('[data-target="#schedule_3"]').on('click', function(e) {
  e.preventDefault();
  $('#schedule_3').addClass('teacher-content__item_active');
  $('#instructor_3').removeClass('teacher-content__item_active');
  $('[data-target="#schedule_3"]').addClass('teacher-tabs__item_active');
  $('[data-target="#instructor_3"]').removeClass('teacher-tabs__item_active');
  $('#photoMZh_1').removeClass('teacher__img_active');
  $('#photoMZh_2').addClass('teacher__img_active');
});

//Светлана Уфимцева
$('[data-target="#instructor_4"]').on('click', function (e) {
  e.preventDefault();
  $('#instructor_4').addClass('teacher-content__item_active');
  $('#schedule_4').removeClass('teacher-content__item_active');
  $('[data-target="#instructor_4"]').addClass('teacher-tabs__item_active');
  $('[data-target="#schedule_4"]').removeClass('teacher-tabs__item_active');
  $('#photoSU_2').removeClass('teacher__img_active');
  $('#photoSU_1').addClass('teacher__img_active');
});

$('[data-target="#schedule_4"]').on('click', function(e) {
  e.preventDefault();
  $('#schedule_4').addClass('teacher-content__item_active');
  $('#instructor_4').removeClass('teacher-content__item_active');
  $('[data-target="#schedule_4"]').addClass('teacher-tabs__item_active');
  $('[data-target="#instructor_4"]').removeClass('teacher-tabs__item_active');
  $('#photoSU_1').removeClass('teacher__img_active');
  $('#photoSU_2').addClass('teacher__img_active');
});

//Людмила Тасун
$('[data-target="#instructor_5"]').on('click', function (e) {
  e.preventDefault();
  $('#instructor_5').addClass('teacher-content__item_active');
  $('#schedule_5').removeClass('teacher-content__item_active');
  $('[data-target="#instructor_5"]').addClass('teacher-tabs__item_active');
  $('[data-target="#schedule_5"]').removeClass('teacher-tabs__item_active');
  $('#photoLT_2').removeClass('teacher__img_active');
  $('#photoLT_1').addClass('teacher__img_active');
});

$('[data-target="#schedule_5"]').on('click', function(e) {
  e.preventDefault();
  $('#schedule_5').addClass('teacher-content__item_active');
  $('#instructor_5').removeClass('teacher-content__item_active');
  $('[data-target="#schedule_5"]').addClass('teacher-tabs__item_active');
  $('[data-target="#instructor_5"]').removeClass('teacher-tabs__item_active');
  $('#photoLT_1').removeClass('teacher__img_active');
  $('#photoLT_2').addClass('teacher__img_active');
});

//Дмитрий Коробин
$('[data-target="#instructor_6"]').on('click', function (e) {
  e.preventDefault();
  $('#instructor_6').addClass('teacher-content__item_active');
  $('#schedule_6').removeClass('teacher-content__item_active');
  $('[data-target="#instructor_6"]').addClass('teacher-tabs__item_active');
  $('[data-target="#schedule_6"]').removeClass('teacher-tabs__item_active');
  $('#photoDK_2').removeClass('teacher__img_active');
  $('#photoDK_1').addClass('teacher__img_active');
});

$('[data-target="#schedule_6"]').on('click', function(e) {
  e.preventDefault();
  $('#schedule_6').addClass('teacher-content__item_active');
  $('#instructor_6').removeClass('teacher-content__item_active');
  $('[data-target="#schedule_6"]').addClass('teacher-tabs__item_active');
  $('[data-target="#instructor_6"]').removeClass('teacher-tabs__item_active');
  $('#photoDK_1').removeClass('teacher__img_active');
  $('#photoDK_2').addClass('teacher__img_active');
});

//Анна Розенберг
$('[data-target="#instructor_7"]').on('click', function (e) {
  e.preventDefault();
  $('#instructor_7').addClass('teacher-content__item_active');
  $('#schedule_7').removeClass('teacher-content__item_active');
  $('[data-target="#instructor_7"]').addClass('teacher-tabs__item_active');
  $('[data-target="#schedule_7"]').removeClass('teacher-tabs__item_active');
  $('#photoAR_2').removeClass('teacher__img_active');
  $('#photoAR_1').addClass('teacher__img_active');
});

$('[data-target="#schedule_7"]').on('click', function(e) {
  e.preventDefault();
  $('#schedule_7').addClass('teacher-content__item_active');
  $('#instructor_7').removeClass('teacher-content__item_active');
  $('[data-target="#schedule_7"]').addClass('teacher-tabs__item_active');
  $('[data-target="#instructor_7"]').removeClass('teacher-tabs__item_active');
  $('#photoAR_1').removeClass('teacher__img_active');
  $('#photoAR_2').addClass('teacher__img_active');
});

//Артем Петров
$('[data-target="#instructor_8"]').on('click', function (e) {
  e.preventDefault();
  $('#instructor_8').addClass('teacher-content__item_active');
  $('#schedule_8').removeClass('teacher-content__item_active');
  $('[data-target="#instructor_8"]').addClass('teacher-tabs__item_active');
  $('[data-target="#schedule_8"]').removeClass('teacher-tabs__item_active');
  $('#photoAP_2').removeClass('teacher__img_active');
  $('#photoAP_1').addClass('teacher__img_active');
});

$('[data-target="#schedule_8"]').on('click', function(e) {
  e.preventDefault();
  $('#schedule_8').addClass('teacher-content__item_active');
  $('#instructor_8').removeClass('teacher-content__item_active');
  $('[data-target="#schedule_8"]').addClass('teacher-tabs__item_active');
  $('[data-target="#instructor_8"]').removeClass('teacher-tabs__item_active');
  $('#photoAP_1').removeClass('teacher__img_active');
  $('#photoAP_2').addClass('teacher__img_active');
});

//Маргарита Зинченко
$('[data-target="#instructor_9"]').on('click', function (e) {
  e.preventDefault();
  $('#instructor_9').addClass('teacher-content__item_active');
  $('#schedule_9').removeClass('teacher-content__item_active');
  $('[data-target="#instructor_9"]').addClass('teacher-tabs__item_active');
  $('[data-target="#schedule_9"]').removeClass('teacher-tabs__item_active');
  $('#photoMZ_2').removeClass('teacher__img_active');
  $('#photoMZ_1').addClass('teacher__img_active');
});

$('[data-target="#schedule_9"]').on('click', function(e) {
  e.preventDefault();
  $('#schedule_9').addClass('teacher-content__item_active');
  $('#instructor_9').removeClass('teacher-content__item_active');
  $('[data-target="#schedule_9"]').addClass('teacher-tabs__item_active');
  $('[data-target="#instructor_9"]').removeClass('teacher-tabs__item_active');
  $('#photoMZ_1').removeClass('teacher__img_active');
  $('#photoMZ_2').addClass('teacher__img_active');
});

//Маргарита Зинченко
$('[data-target="#instructor_10"]').on('click', function (e) {
  e.preventDefault();
  $('#instructor_10').addClass('teacher-content__item_active');
  $('#schedule_10').removeClass('teacher-content__item_active');
  $('[data-target="#instructor_10"]').addClass('teacher-tabs__item_active');
  $('[data-target="#schedule_10"]').removeClass('teacher-tabs__item_active');
  $('#photoUSh_2').removeClass('teacher__img_active');
  $('#photoUSh_1').addClass('teacher__img_active');
});

$('[data-target="#schedule_10"]').on('click', function(e) {
  e.preventDefault();
  $('#schedule_10').addClass('teacher-content__item_active');
  $('#instructor_10').removeClass('teacher-content__item_active');
  $('[data-target="#schedule_10"]').addClass('teacher-tabs__item_active');
  $('[data-target="#instructor_10"]').removeClass('teacher-tabs__item_active');
  $('#photoUSh_1').removeClass('teacher__img_active');
  $('#photoUSh_2').addClass('teacher__img_active');
});