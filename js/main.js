import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderMission } from './components/mission.js';
import { renderOfferings } from './components/offerings.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${renderNavbar()}
  <div class="gradient-bg-top">
    ${renderHero()}
    ${renderAbout()}
  </div>

  ${renderMission()}

  <div class="gradient-bg-bottom">
    ${renderOfferings()}
    ${renderContact()}
    ${renderFooter()}
  </div>
`;

// Add scroll shadow to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Fade-in on scroll using IntersectionObserver
const faders = document.querySelectorAll(".fade-in-section");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.offering-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('appear')) {
          const index = [...cards].indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 100}ms`;
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  cards.forEach((card) => observer.observe(card));

  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      // Remove 'active' from all buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show only the matching tab-content
      tabContents.forEach(content => {
        if (content.id === target) {
          content.classList.add('active-tab');
        } else {
          content.classList.remove('active-tab');
        }
      });
    });
  });
});
