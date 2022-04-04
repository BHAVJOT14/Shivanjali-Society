let x = 0;

document.getElementById("projectGist-1").style.display = "block";
document.getElementById("projectTimeLine-1").style.display = "block";
document.getElementById("projectButton-1").classList.add("activeButton");

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 150) {
      $(".projectButtons_mainDiv").addClass(
        "bottomFixedProjectButtons_mainDiv"
      );
      $(".projectButton").addClass("bottomFixedProjectButtons");
    } else {
      $(".projectButtons_mainDiv").removeClass(
        "bottomFixedProjectButtons_mainDiv"
      );
      $(".projectButton").removeClass("bottomFixedProjectButtons");
    }

    if ($(window).scrollTop() >= 750) {
      $(".projectButtons_mainDiv").removeClass(
        "bottomFixedProjectButtons_mainDiv"
      );
      $(".projectButton").removeClass("bottomFixedProjectButtons");
    }
  });
});

function changeSlide(x) {
  if (x == 1) {
    document.getElementById("projectGist-1").style.display = "block";
    document.getElementById("projectGist-2").style.display = "none";
    document.getElementById("projectGist-3").style.display = "none";
    document.getElementById("projectGist-4").style.display = "none";

    document.getElementById("projectTimeLine-1").style.display = "block";
    document.getElementById("projectTimeLine-2").style.display = "none";
    document.getElementById("projectTimeLine-3").style.display = "none";
    document.getElementById("projectTimeLine-4").style.display = "none";

    document
      .getElementById("projectButton-1")
      .classList.add("activeButton");

    document
      .getElementById("projectButton-2")
      .classList.remove("activeButton");
    document
      .getElementById("projectButton-3")
      .classList.remove("activeButton");

    document
      .getElementById("projectButton-4")
      .classList.remove("activeButton");
  } else if (x == 2) {
    document.getElementById("projectGist-1").style.display = "none";
    document.getElementById("projectGist-2").style.display = "block";
    document.getElementById("projectGist-3").style.display = "none";
    document.getElementById("projectGist-4").style.display = "none";

    document.getElementById("projectTimeLine-1").style.display = "none";
    document.getElementById("projectTimeLine-2").style.display = "block";
    document.getElementById("projectTimeLine-3").style.display = "none";
    document.getElementById("projectTimeLine-4").style.display = "none";

    document
      .getElementById("projectButton-1")
      .classList.remove("activeButton");

    document
      .getElementById("projectButton-2")
      .classList.add("activeButton");
    document
      .getElementById("projectButton-3")
      .classList.remove("activeButton");

    document
      .getElementById("projectButton-4")
      .classList.remove("activeButton");
  } else if (x == 3) {
    document.getElementById("projectGist-1").style.display = "none";
    document.getElementById("projectGist-2").style.display = "none";
    document.getElementById("projectGist-3").style.display = "block";
    document.getElementById("projectGist-4").style.display = "none";

    document.getElementById("projectTimeLine-1").style.display = "none";
    document.getElementById("projectTimeLine-2").style.display = "none";
    document.getElementById("projectTimeLine-3").style.display = "block";
    document.getElementById("projectTimeLine-4").style.display = "none";

    document
      .getElementById("projectButton-1")
      .classList.remove("activeButton");

    document
      .getElementById("projectButton-2")
      .classList.remove("activeButton");
    document
      .getElementById("projectButton-3")
      .classList.add("activeButton");

    document
      .getElementById("projectButton-4")
      .classList.remove("activeButton");
  } else if (x == 4) {
    document.getElementById("projectGist-1").style.display = "none";
    document.getElementById("projectGist-2").style.display = "none";
    document.getElementById("projectGist-3").style.display = "none";
    document.getElementById("projectGist-4").style.display = "block";

    document.getElementById("projectTimeLine-1").style.display = "none";
    document.getElementById("projectTimeLine-2").style.display = "none";
    document.getElementById("projectTimeLine-3").style.display = "none";
    document.getElementById("projectTimeLine-4").style.display = "block";

    document
      .getElementById("projectButton-1")
      .classList.remove("activeButton");

    document
      .getElementById("projectButton-2")
      .classList.remove("activeButton");
    document
      .getElementById("projectButton-3")
      .classList.remove("activeButton");

    document
      .getElementById("projectButton-4")
      .classList.add("activeButton");
  } else {
    document.getElementById("projectGist-1").style.display = "block";
    document.getElementById("projectGist-2").style.display = "none";
    document.getElementById("projectGist-3").style.display = "none";
    document.getElementById("projectGist-4").style.display = "none";

    document.getElementById("projectTimeLine-1").style.display = "block";
    document.getElementById("projectTimeLine-2").style.display = "none";
    document.getElementById("projectTimeLine-3").style.display = "none";
    document.getElementById("projectTimeLine-4").style.display = "none";

    document
      .getElementById("projectButton-1")
      .classList.add("activeButton");

    document
      .getElementById("projectButton-2")
      .classList.remove("activeButton");
    document
      .getElementById("projectButton-3")
      .classList.remove("activeButton");

    document
      .getElementById("projectButton-4")
      .classList.remove("activeButton");
  }
}