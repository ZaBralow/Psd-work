$(function() {
  $('.menu-open').on('click', function() {
    $('.menu').toggleClass('menu-opened');
  });
  $('.menu-close').on('click', function() {
    $('.menu-open').click();
  });
});