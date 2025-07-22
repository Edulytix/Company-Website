const counsellingServices = [
  { 
    title: "VEDA", 
    description: "A holistic student counselling system with stages like VEDA Scorecard, Employment KPI, and Career Metrics — guiding you from ambition to achievement.",
    link: "veda.html"
  },
  { 
    title: "GyanSetu", 
    description: "A lifelong learning companion offering access to the latest internship & job insights across countries and fields — even post-admission." 
  },
  { 
    title: "IAAS", 
    description: "“Intelligence As A Service” — a smart analytics layer that powers personalised recommendations for better university, visa, and job decisions." 
  },
];

const testPrepServices = [
  { 
    title: "Test Guidance", 
    description: "Expert guidance on test preparation strategies, resources, and timelines to help you excel." 
  },
  { 
    title: "Profile Building", 
    description: "Assistance in building a strong academic and extracurricular profile to enhance your university applications." 
  },
];

const valueAddedServices = [
  { 
    title: "Admission Platforms", 
    description: "Explore options through platforms like VidyaSetu, ShikshaDwar, Admisio, Univera, GradReach and more — built for streamlined global applications." 
  },
  { 
    title: "Loan Assistance", 
    description: "Partnering with DhanSetu, QuickCred, EduFundz, LoanLeap & more — we help you unlock funding with speed, clarity, and confidence." 
  },
];

export function renderOfferings() {
  setTimeout(() => attachTabListeners(), 0); // Important to wait until DOM is rendered

  return `
    <section id="offerings" class="offerings-section">
      <div class="container">
        <h2 class="section-heading">Our Services</h2>
        <div class="tabs">
          <button class="tab-button active" data-tab="counselling">Counselling Services</button>
          <button class="tab-button" data-tab="testprep">Test Prep</button>
          <button class="tab-button" data-tab="valueadded">Value Added Services</button>
        </div>
        ${generateTabContent("counselling", counsellingServices)}
        ${generateTabContent("testprep", testPrepServices)}
        ${generateTabContent("valueadded", valueAddedServices)}
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