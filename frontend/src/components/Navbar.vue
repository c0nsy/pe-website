<template>
  <nav class="nav-bar">
    <div class="left-aligned">
      <span class="brand">Platinum Group</span>
    </div>
    <div class="right-aligned">
      <span class="nav-link" @click="scrollToServices">Services</span>
      <span class="nav-link" @click="scrollToWork">Work</span>

      <button class="contact-button" @click="scrollToContactForm">
        Contact
      </button>
    </div>
  </nav>
</template>

<script setup>
const scrollToSection = (event) => {
  event.preventDefault(); // Prevent default anchor click behavior
  const targetId = event.currentTarget.getAttribute("data-target");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToServices = () => {
  const targetElement = document.querySelector("#services");

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToWork = () => {
  const targetElement = document.querySelector("#gallery");

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToContactForm = () => {
  const targetElement = document.querySelector("#contact-form");

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
  background-color: white; /* White background */
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
  color: black; /* Black text */
}

.right-aligned {
  display: flex;
  gap: 1rem; /* Space between links and button */
}

.nav-link {
  color: black; /* Black text */
  text-decoration: none; /* Remove underline */
  cursor: pointer; /* Change cursor on hover */
  transition: color 0.3s; /* Smooth transition for hover effect */
}

.nav-link:hover {
  color: #ff8c00; /* Change to orange on hover */
}

.contact-button {
  background-color: #ff8c00; /* Orange background */
  color: white; /* White text */
  border: none; /* Remove border */
  border-radius: 4px; /* Rounded corners */
  padding: 0.5rem 1rem; /* Padding for button */
  cursor: pointer; /* Change cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.contact-button:hover {
  background-color: black; /* Change to black on hover */
}
</style>
