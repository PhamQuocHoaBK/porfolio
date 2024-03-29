$(document).ready(() => {
  let theme = checkTheme();

  $(".textNav").click(function () {
    $(".textNav").removeClass("selected");
    $(this).addClass("selected");
    $(".textMenu").removeClass("selected");
    $(`#Menu${$(this).text()}`).addClass("selected");
  });

  $(".textMenu").click(function () {
    $(".textMenu").removeClass("selected");
    $(this).addClass("selected");
    $(".textNav").removeClass("selected");
    $(`#Nav${$(this).text()}`).addClass("selected");
  });

  $(".frameModeNav, .modeMenu").click(() => {
    if (theme == "light") {
      darkMode();
      theme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      lightMode();
      theme = "light";
      localStorage.setItem("theme", "light");
    }
  });
});

function checkTheme() {
  if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
    $(".bgNav").addClass("bgNavLight");
  } else if (localStorage.getItem("theme") == "light") {
    lightMode();
  } else {
    darkMode();
  }
  return localStorage.getItem("theme");
}

function darkMode() {
  headerDark();
  bodyDark();
  homeDark();
  aboutDark();
  cardSkillDark();
  quickContactDark();
  expDark();
}

function lightMode() {
  headerLight();
  bodyLight();
  homeLight();
  aboutLight();
  cardSkillLight();
  quickContactLight();
  expLight();
}

function actionSlider(positionLeft, text, bgColor) {
  $(".slider").animate({ left: positionLeft }, "fast");
  $(".slider").text(text);
  $(".slider").css("background-color", bgColor);
}

function actionModeModal(text, urlLogo, bgColor) {
  $(".textMode").text(text);
  $(".logoMode").attr("src", urlLogo);
  $(".menu-content").css("background-color", bgColor);
}

function headerDark() {
  actionSlider("23px", "LIGHT", "#111827");
  $(".slider").addClass("sliderDark");
  $(".slider").text("LIGHT");
  $(".bgNav").removeClass("bgNavLight");
  $(".bgNav").addClass("bgNavDark");
  actionModeModal("Change to light theme", "image/logoMoon.png", "#3c3c3c");
}

function headerLight() {
  actionSlider("4px", "DARK", "white");
  $(".slider").removeClass("sliderDark");
  $(".slider").text("DARK");
  $(".bgNav").removeClass("bgNavDark");
  $(".bgNav").addClass("bgNavLight");
  actionModeModal(
    "Change to dark theme",
    "image/logoSun.png",
    "rgb(248, 248, 248)"
  );
}

function homeDark() {
  $(".textHello, .textAm").css("color", "#94a6ab");
  $(".myCV").addClass("myCVDark");
}

function homeLight() {
  $(".textHello, .textAm").css("color", "black");
  $(".myCV").removeClass("myCVDark");
}

function bodyDark() {
  $("body").css("background-color", "#1e1e1e");
}

function bodyLight() {
  $("body").css("background-color", "white");
}

function aboutDark() {
  $(".normalAbout").css("color", "#94a6ab");
}

function aboutLight() {
  $(".normalAbout").css("color", "#31363F");
}

function expDark() {
  $(".titleExp").removeClass("titleExpLight");
  $(".normalExp").removeClass("normalExpLight");
  $(".arrowPath").removeClass("arrowPathLight");
}

function expLight() {
  $(".titleExp").addClass("titleExpLight");
  $(".normalExp").addClass("normalExpLight");
  $(".arrowPath").addClass("arrowPathLight");
}

function cardSkillDark() {
  // $(".cardSkill, .cardExp").css("box-shadow", ".2rem .2rem #4b4b4b");
  // $(".cardSkill, .cardExp").css("background-color", "#3c3c3c");
  // box-shadow: 0 .5rem 1rem #4b4b4b;
}

function quickContactDark() {
  $(".svgContact").css("stroke", "#94a6ab");
  $(".quickContactEnd").css("background-color", "#94a6ab");
  $(".quickEmailStart").css("background-color", "#94a6ab");
  $(".email").css("color", "#94a6ab");
  $(".email").hover(
    function () {
      $(this).css("color", "#14b8a6");
    },
    function () {
      $(this).css("color", "#94a6ab");
    }
  );
}

function quickContactLight() {
  $(".svgContact").css("stroke", "black");
  $(".quickContactEnd").css("background-color", "black");
  $(".quickEmailStart").css("background-color", "black");
  $(".email").css("color", "black");
  $(".email").hover(
    function () {
      $(this).css("color", "#14b8a6");
    },
    function () {
      $(this).css("color", "");
    }
  );
}

function cardSkillLight() {
  $(".cardSkill, .cardExp").css(
    "box-shadow",
    "0 .5rem 1rem rgba(0, 0, 0, .15)"
  );
  $(".cardSkill, .cardExp").css("background-color", "white");
  // box-shadow: 0 .5rem 1rem #4b4b4b;
}
