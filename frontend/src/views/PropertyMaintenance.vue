<template>
  <div class="property-maintenance">
    <div class="content">
      <h1>Property Maintenance</h1>
      <p class="description">
        Specializing in year-round property maintenance, we provide
        comprehensive solutions to keep your property looking its best in every
        season. Our experienced team ensures your property receives the highest
        quality care and attention to detail.
      </p>

      <div class="services-grid">
        <div class="service-item">
          <h3>Lawn Care</h3>
          <p>Professional lawn maintenance and care services</p>
        </div>
        <div class="service-item">
          <h3>Hardscape/Softscape</h3>
          <p>Complete landscape design and implementation</p>
        </div>
        <div class="service-item">
          <h3>Interlock Stone</h3>
          <p>Custom interlock stone installation and repair</p>
        </div>
        <div class="service-item">
          <h3>Spring/Fall Cleanups</h3>
          <p>Seasonal property cleanup and preparation</p>
        </div>
        <div class="service-item">
          <h3>Sod Installation</h3>
          <p>Professional sod installation and maintenance</p>
        </div>
        <div class="service-item">
          <h3>Fake Turf Installation</h3>
          <p>High-quality artificial turf solutions</p>
        </div>
        <div class="service-item">
          <h3>Janitorial Services</h3>
          <p>Comprehensive cleaning and maintenance</p>
        </div>
        <div class="service-item">
          <h3>Junk/Graffiti Removal</h3>
          <p>Professional removal and cleanup services</p>
        </div>
        <div class="service-item">
          <h3>Snow Services</h3>
          <p>Snow plowing, hauling, and ice control</p>
        </div>
        <div class="service-item">
          <h3>24/7 Weather Monitoring</h3>
          <p>Round-the-clock weather monitoring and response</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.property-maintenance {
  padding-top: 165px;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #000000;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: "Inter", sans-serif;
}

.description {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
}

.service-item h3 {
  color: #000000;
  margin-bottom: 0.5rem;
  font-family: "Inter", sans-serif;
}

.service-item p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .content {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
