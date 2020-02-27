$(document).ready(function () {
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change');
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });
});

 // Banner

       $('.banner-area').slick({
        autoplay: true,
        speed: 800,
        arrows: false,
        dots: true,
        fade: true

      });




