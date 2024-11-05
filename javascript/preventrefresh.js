$(window).on("unload", function () {
  $(window).scrollTop(0);
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
