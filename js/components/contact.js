export function renderContact() {
  return `
    <section id="contact" class="contact fade-in-section">
      <div class="container">
        <h2>Get In Touch</h2>
        <p class="contact-subtext">We're here to help. Let us know what you're looking for.</p>

        <form class="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div class="contact-icons">
          <a href="https://www.instagram.com/HANDLE" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/PROFILE" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://wa.me/+919390545009" target="_blank" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  `;
}
