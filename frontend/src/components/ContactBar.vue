<template>
  <nav class="contact-bar">
    <div class="social-icons">
      <a
        href="https://www.facebook.com/profile.php?id=61566666094999"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://www.instagram.com/platinumeg.contracting/profilecard/?igsh=MTlpa2tyN3ZidDlyMw=="
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
    <div class="company-name">
      <strong>Platinum Enterprise Group</strong>
    </div>
    <div class="contact-info">
      <span>Primary: (548) 558-1970</span>
      <span>After Hours: (519) 498-4694</span>
      <span>Email: office@platinumeg.ca</span>
    </div>
  </nav>
</template>

<script setup></script>
<style scoped>
.contact-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #c1c1c0;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-icons a {
  color: #c1c1c0;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

/* Company Name */
.company-name {
  display: none; /* Hidden by default */
  color: #ffffff; /* White text */
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

/* Contact Info */
.contact-info {
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact-info span {
  display: block; /* Stack items vertically */
}

/* Show Company Name for Mobile Screens */
@media (max-width: 768px) {
  .company-name {
    display: block; /* Show company name for mobile */
  }
}

/* Adjust for Larger Screens */
@media (min-width: 768px) {
  .contact-bar {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .social-icons {
    margin-bottom: 0;
  }

  .contact-info {
    text-align: right;
    font-size: 0.9rem;
  }

  .contact-info span {
    display: inline; /* Inline for larger screens */
    margin-right: 1rem;
  }

  .contact-info span:last-child {
    margin-right: 0;
  }
}
</style>
