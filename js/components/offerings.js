const products = [
  {
    title: "VEDA",
    description: "A holistic student counselling system with stages like VEDA Scorecard, Employment KPI, and Career Metrics — guiding you from ambition to achievement.",
    link: "veda.html"
  }
];

const services = [
  {
    title: "Test Guidance",
    description: "Expert guidance on test preparation strategies, resources, and timelines to help you excel."
  },
  {
    title: "Profile Building",
    description: "Assistance in building a strong academic and extracurricular profile to enhance your university applications."
  },
  {
    title: "Admission Platforms",
    description: "Explore options through platforms like VidyaSetu, ShikshaDwar, Admisio, Univera, GradReach and more — built for streamlined global applications."
  },
  {
    title: "Loan Assistance",
    description: "Partnering with DhanSetu, QuickCred, EduFundz, LoanLeap & more — we help you unlock funding with speed, clarity, and confidence."
  }
];

export function renderOfferings() {
  setTimeout(() => attachTabListeners(), 0);

  return `
    <section id="offerings" class="offerings-section">
      <div class="container">
        <h2 class="section-heading">Our Offerings</h2>
        <div class="tabs">
          <button class="tab-button active" data-tab="products">Products</button>
          <button class="tab-button" data-tab="services">Services</button>
        </div>
        <div id="products" class="tab-content active-tab">
          ${products.map(generateCard).join("")}
        </div>
        <div id="services" class="tab-content">
          ${services.map(generateCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function attachTabListeners() {
  const buttons = document.querySelectorAll('.tab-button');
  const tabs = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.tab;
      tabs.forEach(tab => {
        if (tab.id === target) {
          tab.classList.remove('hidden');
        } else {
          tab.classList.add('hidden');
        }
      });
    });
  });
}

function generateCard({ title, description, link }) {
  return `
    <a href="${link || '#'}" class="offering-card fade-in-card" title="${title}">
      <h3>${title}</h3>
      <p>${description || "Details coming soon."}</p>
    </a>
  `;
}

function generateTabContent(tabId, services) {
  return `
    <div class="tab-content${tabId === 'counselling' ? ' active-tab' : ''}" id="${tabId}">
      ${services.map(generateCard).join("")}
    </div>
  `;
}

// Tab interactivity
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab');

    // Toggle tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active-tab');
    });
    document.getElementById(target).classList.add('active-tab');

    // Toggle tab button highlight
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});

// Default tab set to Products
document.addEventListener('DOMContentLoaded', () => {
  const defaultTab = document.querySelector('.tab-button[data-tab="products-tab"]');
  if (defaultTab) defaultTab.click();
});
