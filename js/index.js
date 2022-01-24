// navbar
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

// slider
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

// owl-caraousel
jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
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

// green-boxes-counter

// volunteer box
var counter = document.getElementById("volunteers");
var count = 0;
setInterval(() => {
  if (count < 105) {
    count++;
    counter.innerText = count + "+";
  }
}, 100);

// food kits-box
var counter1 = document.getElementById("distributed");
var count1 = 0;
setInterval(() => {
  if (count1 < 997) {
    count1++;
    counter1.innerText = count1 + "+";
  }
}, 10);

// winter kits box
var counter2 = document.getElementById("winter-kits");
var count2 = 0;
setInterval(() => {
  if (count2 < 57) {
    count2++;
    counter2.innerText = count2 + "+";
  }
}, 150);

// donors
var counter3 = document.getElementById("donors");
var count3 = 0;
setInterval(() => {
  if (count3 < 89) {
    count3++;
    counter3.innerText = count3 + "+";
  }
}, 110);
