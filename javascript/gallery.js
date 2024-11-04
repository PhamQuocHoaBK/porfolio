$(document).ready(() => {
  $(".imgProject").click(function () {
    $(".modal").show();
    $(".modal").click(() => {
      $(".modal").hide();
      $(".listImg").remove();
    });
    let initId = $(this).attr("id");

    let dataSlider =
      initId === "camxu"
        ? [
            "./image/Camxu1.png",
            "./image/Camxu2.png",
            "./image/Camxu3.png",
            "./image/Camxu4.png",
            "./image/Camxu5.png",
            "./image/Camxu6.png",
            "./image/Camxu7.png",
            "./image/Camxu8.png",
          ]
        : [
            "./image/ZNail1.png",
            "./image/ZNail2.png",
            "./image/ZNail3.png",
            "./image/ZNail4.png",
            "./image/ZNail5.png",
            "./image/ZNail6.png",
            "./image/ZNail7.png",
            "./image/ZNail8.png",
            "./image/ZNail9.png",
            "./image/ZNail10.png",
          ];
    $(".modal-content").prepend('<div class="listImg"></div>');
    dataSlider.forEach((item, index) =>
      $(".listImg").append(
        `<img src="${item}" class="mySlides" id="${initId + index}">`
      )
    );
    let slideIndex = 1;
    showSlides(slideIndex);
    function next() {
      showSlides((slideIndex += 1));
    }
    function prev() {
      showSlides((slideIndex -= 1));
    }
    function showSlides(n) {
      if (n > dataSlider?.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = dataSlider?.length;
      }
      dataSlider.forEach((item, index) => {
        console.log("index", index);
        $(`#${initId + index}`).hide();
      });
      $(`#${initId + (slideIndex - 1)}`).show();
    }
    $(".buttonNext").click((event) => {
      event.stopPropagation();
      next();
    });
    $(".buttonPrev").click((event) => {
      event.stopPropagation();
      prev();
    });
  });
});
