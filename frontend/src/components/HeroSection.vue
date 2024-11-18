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
  background-image: url("https://preview.redd.it/orange-green-abstract-3840x2160-v0-7ou7b1l3jwea1.jpg?width=1080&crop=smart&auto=webp&s=a28644710abd4cba3e374865799039cb6b2992dd");
  background-size: cover; /* Cover the entire div */
  background-position: center; /* Center the background image */
  position: relative; /* Position relative for overlay */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
}

.description-bar {
  height: 80px; /* Set height */
  background-color: #ff8c00; /* Orange background */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Center text vertically */
  justify-content: center; /* Center text horizontally */
  color: white; /* White text color */
  font-size: 1.5rem; /* Font size */
  text-align: center; /* Center text */
}

.overlay {
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Dark overlay for better text visibility */
  padding: 2rem; /* Padding for the content */
  text-align: center; /* Center text */
  width: 80%;
}

.hero-text {
  color: white; /* White text color */
  font-size: 2.5rem; /* Font size for the heading */
  margin-bottom: 1rem; /* Space below the heading */
}

.contact-button {
  background-color: black; /* Black button background */
  color: white; /* White text color */
  border: none; /* Remove border */
  border-radius: 4px; /* Rounded corners */
  padding: 0.5rem 1.5rem; /* Padding for the button */
  font-size: 1rem; /* Font size for the button */
  cursor: pointer; /* Change cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.contact-button:hover {
  background-color: #333; /* Darker black on hover */
}
</style>
