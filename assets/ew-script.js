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
function openLightbox(src, isVideo = false) {
  document.getElementById('lightbox').style.display = "flex";

  if (isVideo) {
    document.getElementById('lightbox-img').style.display = "none";
    document.getElementById('lightbox-video').innerHTML = `<video controls autoplay><source src="${src}" type="video/mp4"></video>`;
  } else {
    document.getElementById('lightbox-video').innerHTML = "";
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-img').style.display = "block";
  }
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = "none";
  document.getElementById('lightbox-video').innerHTML = "";
}