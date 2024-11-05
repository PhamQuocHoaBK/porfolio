$(document).ready(() => {
  const delta = 400;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if ($(window).width() > 768) {
      if (st > delta) {
        $(".goToTop").fadeIn();
      } else {
        $(".goToTop").fadeOut();
      }
    }
  });
  $(".goToTop").click(() => {
    $("html, body").animate({ scrollTop: 0 }, 200);
  });
});
