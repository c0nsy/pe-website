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
    <div class="contact-info">
      <span>Primary: (548) 558-1970 |</span>
      <span>After Hours: (519) 498-4694 |</span>
      <span>office@platinumeg.ca</span>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.contact-bar {
  display: flex;
  justify-content: space-between; /* Separate social icons and contact info */
  align-items: center; /* Vertically align content */
  background-color: #000000; /* Black background for contrast */
  color: #c1c1c0; /* Light gray text color */
  padding: 0.5rem 1rem; /* Padding around the bar */
  margin: 0; /* Remove default margin */
  position: fixed; /* Stick to the top */
  width: 100%; /* Full width */
  height: 50px; /* Slightly taller for a modern navbar */
  top: 0; /* Position at the top */
  z-index: 10; /* Keep above other elements */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}

.social-icons {
  display: flex;
  gap: 1rem; /* Add more space between icons */
}

.social-icons a {
  color: #c1c1c0; /* Light gray for icons */
  font-size: 1.2rem; /* Slightly larger icons for emphasis */
  transition: color 0.3s ease, transform 0.3s ease; /* Smooth interactions */
}

.social-icons a:hover {
  color: #ff8c00; /* Orange highlight on hover */
  transform: scale(1.2); /* Slight scale effect on hover */
}

.contact-info {
  display: flex;
  align-items: center; /* Vertically align content */
  gap: 0.5rem; /* Add space between contact items */
  color: #c1c1c0; /* Light gray text for uniformity */
  font-size: 0.9rem; /* Slightly smaller font for subtlety */
}

.contact-info span {
  margin: 0; /* Remove default margin */
}

.contact-info span:not(:last-child)::after {
  content: "|"; /* Separator between contact info */
  margin-left: 0.5rem; /* Space between text and separator */
  color: #c1c1c0; /* Same as text color */
}

.contact-info span:last-child {
  font-weight: bold; /* Emphasize email for easy visibility */
}

@media (max-width: 768px) {
  .contact-bar {
    flex-direction: column; /* Stack content on smaller screens */
    align-items: flex-start; /* Align items to the left */
    padding: 0.75rem 1rem; /* Adjust padding for readability */
  }

  .social-icons {
    margin-bottom: 0.5rem; /* Add spacing between sections */
  }

  .contact-info {
    gap: 0.3rem; /* Reduce gap on smaller screens */
    font-size: 0.8rem; /* Adjust font size for readability */
  }
}
</style>
