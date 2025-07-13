export function renderNavbar() {
  return `
    <nav class="navbar">
      <div class="container nav-container">
        <div class="nav-logo">Edulytix</div>
        <ul class="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>

          <li class="dropdown">
            <a href="#offerings" class="dropdown-toggle">Our Offerings</a>
            <ul class="dropdown-menu">
              <li><a href="#">VEDA</a></li>
              <li><a href="#">GyanSetu</a></li>
              <li><a href="#">IAAS</a></li>
              <li><a href="#">Admission Platforms</a></li>
              <li><a href="#">Loan Assistance</a></li>
            </ul>
          </li>

          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}
