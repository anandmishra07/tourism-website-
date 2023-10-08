var currentIndex1 = 0;
var currentIndex2 = 0;
var currentIndex3 = 0;
var currentIndex4 = 0;
var currentIndex5 = 0;
var currentIndex6 = 0;
var currentIndex7 = 0;
var currentIndex8 = 0;

function autoSlide(images, currentIndex, interval) {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  currentIndex++;

  if (currentIndex > images.length) {
    currentIndex = 1;
  }

  images[currentIndex - 1].style.display = "block";

  setTimeout(function () {
    autoSlide(images, currentIndex, interval);
  }, interval);
}

var images1 = document.querySelectorAll(".images img");
var images2 = document.querySelectorAll(".images2 img");
var images3 = document.querySelectorAll(".images3 img");
var images4 = document.querySelectorAll(".images4 img");
var images5 = document.querySelectorAll(".images5 img");
var images6 = document.querySelectorAll(".images6 img");
var images7 = document.querySelectorAll(".images7 img");
var images8 = document.querySelectorAll(".images8 img");

autoSlide(images1, currentIndex1, 2500);
autoSlide(images2, currentIndex2, 2500);
autoSlide(images3, currentIndex3, 2500);
autoSlide(images4, currentIndex4, 2500);
autoSlide(images5, currentIndex5, 2500);
autoSlide(images6, currentIndex6, 2500);
autoSlide(images7, currentIndex7, 2500);
autoSlide(images8, currentIndex8, 2500);
