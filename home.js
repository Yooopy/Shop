let logged;
let cook;

for (let i = 0; i < document.cookie.split(";").length; i++) {
  cook = document.cookie.split(";")[i].split("=")[0];
  if (cook.trim() === "username") {
    logged = true;
  }
}
// if (logged) {
// } else {
//   window.location.href = "index.html";   /////////Disabled for the testing !!!! font forget to enable it last time
// }

let slideIndex = 1;
showSlides(3);

function plusSides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-show");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.getElementById("right").addEventListener("click", function () {
  var sales = document.getElementsByClassName("sales")[0];
  var currentScrollLeft = sales.scrollLeft;
  var targetScrollLeft = currentScrollLeft + 150;

  function scrollAnimation(timestamp) {
    if (sales.scrollLeft < targetScrollLeft) {
      sales.scrollLeft += Math.min(10, targetScrollLeft - sales.scrollLeft);
      requestAnimationFrame(scrollAnimation);
    } else {
      sales.scrollLeft = targetScrollLeft;
    }
  }

  requestAnimationFrame(scrollAnimation);
});

document.getElementById("left").addEventListener("click", function () {
  var sales = document.getElementsByClassName("sales")[0];
  var currentScrollLeft = sales.scrollLeft;
  var targetScrollLeft = currentScrollLeft - 150;

  function scrollAnimation(timestamp) {
    if (sales.scrollLeft > targetScrollLeft) {
      sales.scrollLeft -= Math.min(10, sales.scrollLeft - targetScrollLeft);
      requestAnimationFrame(scrollAnimation);
    } else {
      sales.scrollLeft = targetScrollLeft;
    }
  }

  requestAnimationFrame(scrollAnimation);
});
