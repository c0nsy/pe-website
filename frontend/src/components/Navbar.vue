<template>
  <nav class="nav-bar">
    <div class="left-aligned">
      <img src="../assets/peg_logo_2.png" alt="Logo" width="100" height="100" />
    </div>
    <div class="right-aligned">
      <span class="nav-link" @click="scrollToSection('#services')"
        >Services</span
      >
      <span class="nav-link" @click="scrollToSection('#gallery')">Work</span>
      <button class="contact-button" @click="scrollToSection('#contact-form')">
        Contact
      </button>
      <router-link
        to="/about"
        class="nav-link"
        @click.prevent="scrollToSection('#about')"
        >About</router-link
      >
    </div>
  </nav>
</template>

<script setup>
const scrollToSection = (targetId) => {
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between; /* Space between left and right sections */
  align-items: center; /* Center items vertically */
  background-color: #000000; /* Black background */
  padding: 0.5rem 1rem; /* Padding for spacing */
  position: fixed; /* Fix the navbar below the ContactBar */
  width: 100%; /* Full width */
  top: 40px; /* Adjust to position below the ContactBar */
  z-index: 9; /* Ensure it’s on top of other elements but below ContactBar */
}

.left-aligned {
  display: flex;
  align-items: center;
}

.brand {
  font-weight: bold; /* Bold for brand name */
  color: #c1c1c0; /* Light gray for brand text */
}

.right-aligned {
  display: flex;
  gap: 1rem; /* Space between links and button */
}

.nav-link {
  color: #c1c1c0; /* Light gray text */
  text-decoration: none; /* Remove underline */
  cursor: pointer; /* Change cursor on hover */
  transition: color 0.3s; /* Smooth transition for hover effect */
}

.nav-link:hover {
  color: #838484; /* Medium gray on hover */
}

.contact-button {
  background-color: #5b5a5a; /* Charcoal gray background */
  color: #c1c1c0; /* Light gray text */
  border: none; /* Remove border */
  border-radius: 4px; /* Rounded corners */
  padding: 0.5rem 1rem; /* Padding for button */
  cursor: pointer; /* Change cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.contact-button:hover {
  background-color: #838484; /* Medium gray on hover */
  color: #000000; /* Black text */
}
</style>
