let slideIndex = 1;
changeSlides(slideIndex);

// let timerFunction = null;
// let timerFunction = 0;

function buttonNavigation(n) {
  changeSlides((slideIndex += n));
    // clearTimeout(timerFunction);
}

function changeSlides(n) {
  let i;

  let slides = document.getElementsByClassName("events-d");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  //   timerFunction = setTimeout(changeSlides, 1000);
  //   timerFunction = setInterval(changeSlides, 1000);
}