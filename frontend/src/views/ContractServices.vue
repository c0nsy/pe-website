<template>
  <div class="contract-services">
    <div class="content">
      <h1>Contract Services</h1>
      <p class="description">
        Our contracting services deliver professional solutions for both
        residential and commercial properties. With years of experience and
        skilled craftsmanship, we ensure quality workmanship and attention to
        detail in every project.
      </p>

      <div class="services-grid">
        <div class="service-item">
          <h3>Fences & Decks</h3>
          <p>Custom fence and deck design, installation, and repair</p>
        </div>
        <div class="service-item">
          <h3>Tree Removal</h3>
          <p>Professional tree removal and maintenance services</p>
        </div>
        <div class="service-item">
          <h3>Concrete Work</h3>
          <p>Complete concrete solutions for any project</p>
        </div>
        <div class="service-item">
          <h3>Shingle Roofing</h3>
          <p>Expert roofing installation and repair</p>
        </div>
        <div class="service-item">
          <h3>Interior/Exterior Painting</h3>
          <p>Professional painting services for all surfaces</p>
        </div>
        <div class="service-item">
          <h3>Parking Lot Painting</h3>
          <p>Line painting and maintenance for parking areas</p>
        </div>
        <div class="service-item">
          <h3>Outdoor Living Spaces</h3>
          <p>Custom outdoor space design and construction</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contract-services {
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
