document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
      type: "loop",
      perPage: 2,
      gap: 20,
      breakpoints: {
          768: { perPage: 1 } // Show 
      }
  }).mount();
});

// Lightbox Functionality
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
