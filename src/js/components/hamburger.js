$('.hamburger').click(function () {
  $(this).toggleClass('is-active');
  $('html, .header-nav').toggleClass('is-active');
});
