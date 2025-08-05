export function renderVeda() {
    return `
    <section class="veda-hero fade-in-section section-visible">
    <div class="container veda-hero-content">
        <div class="veda-hero-text">
          <h1 class="hero-heading">Introducing VEDA by Edulytix</h1>
          <p class="hero-subtext">
            Data-Driven Counselling for Smarter Study Abroad Decisions
          </p>
          <a href="#book-counselling" class="cta-button">Book Your Counselling</a>
        </div>
        <div class="veda-hero-image">
          <img src="assets/images/veda-hero.jpg" alt="VEDA Hero Image" />
        </div>
      </div>
    </section>

    <section class="veda-intro fade-in-section section-visible">
      <div class="container">
        <h2 class="section-heading">What is VEDA?</h2>
        <p class="section-description">
          VEDA is Edulytix’s flagship counselling product that leverages analytics and historic trends across student profiles to help you identify the most relevant academic paths.
        </p>
        <ul class="veda-features">
            <li>
                <i class="fas fa-user-graduate feature-icon"></i>
                <h4>Personalized Student Profiling</h4>
                <p>Understand your academic goals and learning style through data-driven profiling.</p>
            </li>
            <li>
                <i class="fas fa-chart-line feature-icon"></i>
                <h4>Analytics-Backed Recommendations</h4>
                <p>Receive university suggestions based on performance metrics from 1400+ profiles.</p>
            </li>
            <li>
                <i class="fas fa-university feature-icon"></i>
                <h4>Outcome-Based University Suggestions</h4>
                <p>Match with institutions where students with your profile have succeeded.</p>
            </li>
        </ul>
      </div>
    </section>
  `;
}

/* Carousel Section

    <section class="veda-carousel-section fade-in-section section-visible">
      <div class="container">
        <h2 class="section-heading">VEDA Insights in Action</h2>
        <p class="section-description">
          Sample analytics for students targeting <strong>Arizona State University</strong>
        </p>
        <div class="carousel-wrapper">
          <button class="carousel-btn left" id="prevBtn">&#10094;</button>
          <div class="carousel-track" id="carouselTrack">
            ${[...Array(12)].map((_, i) => `
              <div class="carousel-slide">
                <img src="/assets/images/veda-kpis/KPI-${i + 1}.png" alt="KPI ${i + 1}" />
              </div>
            `).join('')}
          </div>
          <button class="carousel-btn right" id="nextBtn">&#10095;</button>
        </div>
      </div>
    </section>

    <div id="imageModal" class="image-modal hidden">
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <img id="modalImage" src="" alt="Enlarged View" />
      </div>
    </div>
*/