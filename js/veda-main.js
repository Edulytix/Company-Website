import { renderNavbar } from './components/navbar.js';
import { renderVeda } from './components/veda.js';
import { renderFooter } from './components/footer.js';

console.log("VEDA MAIN JS LOADED");

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNavbar()}
    <main class="gradient-bg-top">
      ${renderVeda()}
    </main>
    <div class="gradient-bg-bottom">
      ${renderFooter()}
    </div>
  `;

  initializeCarousel();
  initializeImageModal();

  // Scroll shadow on navbar
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// === Carousel Logic ===
function initializeCarousel() {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const totalSlides = 12;
  const visibleSlides = 3;
  const maxSlideIndex = Math.ceil(totalSlides / visibleSlides) - 1;
  let currentSlide = 0;

  if (!track || !prevBtn || !nextBtn) {
    console.warn("Carousel elements not found.");
    return;
  }

  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + maxSlideIndex + 1) % (maxSlideIndex + 1);
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % (maxSlideIndex + 1);
    updateCarousel();
  });

  // Auto-scroll
  setInterval(() => {
    currentSlide = (currentSlide + 1) % (maxSlideIndex + 1);
    updateCarousel();
  }, 8000);
}

function initializeImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".modal-close");

  document.querySelectorAll(".carousel-slide img").forEach((img) => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.remove("hidden");
      modalImg.alt = img.alt || "Enlarged View";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalImg.src = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modalImg.src = "";
    }
  });
}
