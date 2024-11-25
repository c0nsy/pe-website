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
  height: 400px; /* Adjust the height as needed */
  background-image: url("../assets/truck.jpg");
  background-size: cover; /* Cover the entire div */
  background-position: center; /* Center the background image */
  position: relative; /* Position relative for overlay */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  margin-top: 125px;
}

.description-bar {
  height: 80px; /* Set height */
  background-color: #000000; /* Black background */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Center text vertically */
  justify-content: center; /* Center text horizontally */
  color: #c1c1c0; /* Light gray text color */
  font-size: 1.5rem; /* Font size */
  text-align: center; /* Center text */
}

.overlay {
  background-color: rgba(
    0,
    0,
    0,
    0.7
  ); /* Dark overlay for better text visibility */
  padding: 2rem; /* Padding for the content */
  text-align: center; /* Center text */
  width: 80%;
  border-radius: 10px; /* Rounded corners for a modern feel */
}

.hero-text {
  color: #c1c1c0; /* Light gray text color */
  font-size: 2.5rem; /* Font size for the heading */
  margin-bottom: 1rem; /* Space below the heading */
}

.contact-button {
  background-color: #5b5a5a; /* Charcoal gray button background */
  color: #c1c1c0; /* Light gray text color */
  border: none; /* Remove border */
  border-radius: 4px; /* Rounded corners */
  padding: 0.5rem 1.5rem; /* Padding for the button */
  font-size: 1rem; /* Font size for the button */
  cursor: pointer; /* Change cursor on hover */
  transition: background-color 0.3s, color 0.3s; /* Smooth transitions */
}

.contact-button:hover {
  background-color: #838484; /* Medium gray on hover */
  color: #000000; /* Black text on hover */
}
</style>
