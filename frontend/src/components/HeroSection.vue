<template>
  <div>
    <div class="hero-section">
      <div class="overlay">
        <div class="button-container">
          <router-link to="/property-maintenance" class="hero-button">
            Property Maintenance
          </router-link>
          <router-link to="/contract-services" class="hero-button">
            Contract Services
          </router-link>
        </div>
      </div>
    </div>
    <div class="description-bar">
      <p>
        Platinum Enterprise Group has grown from a grassroots yard-scape venture into the multi-services property
        maintenance and landscaping enterprise it is recognized as today.
        <br><br>
        We're proud to be... <strong>A Step Above the Rest!</strong>
        <br><br>
        From its operations facility in Cambridge, Ontario, the company delivers a robust portfolio of professional services
        to a range of clientele who represent both residential and commercial markets. Regardless of the season, and no
        matter how big or how small, Platinum Enterprise Group is your turnkey, one-stop solution for all your property
        needs!
      </p>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  height: 500px;
  background-image: url("../assets/truck.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  padding: 20px;
}

.description-bar {
  height: auto;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
  padding: 1.5rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  letter-spacing: 0.3px;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 3rem;
  text-align: center;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  margin: 0 auto;
  transform: translateY(-100px);
}

.button-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.hero-button {
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  min-width: 200px;
  display: inline-block;
  text-align: center;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
}

.hero-button:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .overlay {
    padding: 2rem;
    width: 90%;
  }

  .button-container {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-button {
    width: 100%;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  .description-bar {
    font-size: 0.9rem;
    padding: 1rem;
  }
}
</style>
