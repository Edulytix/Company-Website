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
