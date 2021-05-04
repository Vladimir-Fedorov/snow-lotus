$('.social-button').on('click', function(e) {
  e.preventDefault();
  $('.social-button__burger').toggleClass('social-button__burger_active');
  $('.social-nav__link').toggleClass('social-nav__link_active');
});