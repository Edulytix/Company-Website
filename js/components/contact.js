export function renderContact() {
  return `
    <section id="contact" class="contact">
      <div class="container">
        <h2>Get in Touch</h2>
        <p class="contact-subtext">
          Have questions or ready to begin your study abroad journey? Our team is here to help you every step of the way.
        </p>
        
        <form class="contact-form">
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email Address" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  `;
}
