<template>
  <div>
    <div class="hero-section">
      <div class="overlay">
        <h1 class="hero-text">We’re proud to be... A Step Above the Rest!</h1>
        <button class="contact-button" @click="scrollToContactForm">
          Contact
        </button>
        <p>
          From its operations facility in Cambridge, Ontario, the company
          delivers a robust portfolio of professional services to a range of
          clientele who represent both residential and commercial markets.
          Regardless of the season, and no matter how big or how small, Platinum
          Enterprise Group is your turnkey, one-stop solution for all your
          property needs!
        </p>
      </div>
    </div>
    <div class="description-bar">
      <p>
        Platinum Enterprise Group has grown from a grassroots yard-scape venture
        into the multi-services property maintenance and landscaping enterprise
        it is recognized as today.
      </p>
    </div>
  </div>
</template>

<script setup>
const scrollToContactForm = () => {
  const targetElement = document.querySelector("#contact-form");

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.hero-section {
  height: auto; /* Allow content to adjust dynamically */
  background-image: url("../assets/truck.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 125px;
  padding: 20px; /* Add padding for smaller screens */
}

.description-bar {
  height: auto; /* Adjust dynamically for content */
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c1c1c0;
  font-size: 1rem; /* Smaller font size for mobile */
  text-align: center;
  padding: 10px; /* Add padding for better spacing */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem; /* Adjust padding for smaller screens */
  text-align: center;
  width: 100%; /* Use full width for mobile */
  border-radius: 10px;
}
.overlay p {
  color: #ffffff; /* Set the text color to black */
}

.hero-text {
  color: #c1c1c0;
  font-size: 1.8rem; /* Smaller font size for mobile */
  margin-bottom: 1rem;
  word-wrap: break-word; /* Ensure text wraps properly */
}

.contact-button {
  background-color: #5b5a5a;
  color: #c1c1c0;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem; /* Adjust font size */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.contact-button:hover {
  background-color: #838484;
  color: #000000;
}

@media (max-width: 768px) {
  .overlay {
    margin-top: 25px;
  }
  .hero-text {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }

  .contact-button {
    font-size: 0.8rem; /* Adjust button font size */
    padding: 0.4rem 0.8rem; /* Reduce padding */
  }

  .overlay {
    padding: 1rem; /* Reduce padding */
    width: 90%; /* Use a slightly narrower width */
  }

  .description-bar {
    font-size: 0.9rem; /* Smaller font for better readability */
    padding: 5px; /* Reduce padding */
  }
}
</style>
