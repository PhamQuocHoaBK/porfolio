$(document).ready(() => {
  var modal = $(".menu");

  $(".frameLogoMenu").click(() => {
    modal.show();
  });

  $(".aMenu, .close").click(() => {
    modal.hide();
  });

  $(window).on("click", function (e) {
    if ($(e.target).is(".menu")) {
      modal.hide();
    }
  });
});
