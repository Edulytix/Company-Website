export function renderNavbar() {
  return `
    <nav class="navbar">
      <div class="container nav-container">
        <a href="index.html" class="nav-logo">
          <img src="/assets/images/logo.png" alt="Edulytix Logo" class="logo-image" />
        </a>
        <ul class="nav-links">
          <li><a href="index.html#hero">Home</a></li>
          <li><a href="index.html#about">About</a></li>

          <li class="dropdown">
            <a href="#offerings" class="dropdown-toggle">Our Offerings</a>
            <ul class="dropdown-menu">
              <li><a href="veda.html">VEDA</a></li>
              <li><a href="#">GyanSetu</a></li>
              <li><a href="#">IAAS</a></li>
              <li><a href="#">Admission Platforms</a></li>
              <li><a href="#">Loan Assistance</a></li>
            </ul>
          </li>

          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}
