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
//------- navbar ends -------

//------- slider starts -------
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dotActive", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dotActive";
  setTimeout(showSlides, 3000); // Change image every 5 seconds
}
//------- slider ends -------

//------- owlCarousel starts -------
jQuery(document).ready(function ($) {
  "use strict";
  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });
});
//------- owlCarousel Ends -------

//------- ourImpact Section starts -------
// green-boxes-counter
// volunteer box
var counter = document.getElementById("volunteers");
var count = 0;
setInterval(() => {
  if (count < 105) {
    count++;
    counter.innerText = count + "+";
  }
}, 180);

// food kits-box
var counter1 = document.getElementById("distributed");
var count1 = 0;
setInterval(() => {
  if (count1 < 997) {
    count1++;
    counter1.innerText = count1 + "+";
  }
}, 20);

// winter kits box
var counter2 = document.getElementById("winter-kits");
var count2 = 0;
setInterval(() => {
  if (count2 < 57) {
    count2++;
    counter2.innerText = count2 + "+";
  }
}, 320);

// donors
var counter3 = document.getElementById("donors");
var count3 = 0;
setInterval(() => {
  if (count3 < 89) {
    count3++;
    counter3.innerText = count3 + "+";
  }
}, 230);
//------- ourImpact Section ends -------
