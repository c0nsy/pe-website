<template>
  <nav class="contact-bar">
    <div class="social-icons">
      <a href="#" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
    <div class="contact-info">
      <span>519 444 1920 | </span>
      <span>test@email.com</span>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.contact-bar {
  display: flex;
  justify-content: space-between; /* Space between the social icons and contact info */
  align-items: center; /* Center items vertically */
  background-color: #ff8c00; /* Orange background */
  color: white; /* White text */
  padding: 0.5rem 1rem; /* Remove left/right padding */
  margin: 0; /* Remove any default margin */
  position: fixed; /* Fix the navbar to the top */
  width: 100%; /* Full width */
  height: 40px; /* Set a fixed height */
  top: 0; /* Position at the top */
  z-index: 10; /* Ensure it’s on top of other elements */
}

.social-icons {
  display: flex;
  gap: 0.75rem; /* Space between icons */
}

.social-icons a {
  color: white; /* Ensure icons are white */
}

.contact-info {
  display: flex;
  align-items: center; /* Center contact info vertically */
  color: white; /* Make sure the contact info is white */
}
</style>
