$(document).ready(function () {
  $("#openNewEmail").click(function () {
    console.log();
    const recipient = "phamquochoa240401@gmail.com";
    const gmailLink =
      "https://mail.google.com/mail/?view=cm&to=" +
      encodeURIComponent(recipient);
    window.open(gmailLink, "_blank");
  });
});
