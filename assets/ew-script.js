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

// Size Guide

document.addEventListener('DOMContentLoaded', () => {
  const lightboxButton = document.querySelector('[data-size-chart-lightbox]');
  const lightbox = document.querySelector('.ew-size-chart-lightbox');
  const lightboxImage = lightbox.querySelector('.ew-size-chart-image');
  const closeButton = lightbox.querySelector('.ew-size-chart-lightbox-close');

  lightboxButton.addEventListener('click', (e) => {
    const imageSrc = e.target.dataset.image;
    if (imageSrc) {
      lightboxImage.src = imageSrc;
      lightbox.removeAttribute('hidden'); // Show lightbox
    }
  });

  closeButton.addEventListener('click', () => {
    lightbox.setAttribute('hidden', true);
  });

  // Close on clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.setAttribute('hidden', true);
    }
  });
});
