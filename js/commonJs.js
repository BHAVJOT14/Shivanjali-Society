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
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

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
