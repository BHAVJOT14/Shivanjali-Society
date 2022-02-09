//---------------------------------
//---------------------------------
//-- This File will be Common in --
//-- all the pages.              --
//---------------------------------
//---------------------------------
//-- It Contains code of Navbar  --
//---------------------------------
//---------------------------------

//------- navbar starts -------
const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
document.onclick = function (e) {
  if (
    e.target.id !== "header" &&
    e.target.id !== "toggle" &&
    e.target.id !== "navbar"
  ) {
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  }
};
toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 500) {
      $(".main_header").addClass("activeHeader");
    } else {
      $(".main_header").removeClass("activeHeader");
    }
  });
});
//------- navbar ends -------
