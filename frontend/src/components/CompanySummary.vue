<template>
  <div class="company-summary">
    <div class="summary-content">
      <h2>Platinum Enterprise Group</h2>
      <p class="tagline">A Step Above The Rest</p>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>Property Maintenance</h3>
          <p>Comprehensive year-round property care including lawn maintenance, landscaping, snow removal, and 24/7 weather monitoring to keep your property looking its best in every season.</p>
        </div>
        <div class="summary-item">
          <h3>Contract Services</h3>
          <p>Professional contracting solutions from fences and decks to roofing, painting, concrete work, and complete interior/exterior renovations with skilled craftsmanship.</p>
        </div>
        <div class="summary-item">
          <h3>Experience & Quality</h3>
          <p>Over a decade of excellence serving our community with attention to detail, reliable service, and a commitment to exceeding expectations on every project.</p>
        </div>
      </div>
      <div class="cta-section">
        <p>Ready to transform your property? Contact us today for a consultation.</p>
        <button class="cta-button" @click="scrollToContact">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollToContact = () => {
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.company-summary {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 4rem 2rem;
  margin: 2rem 0;
}

.summary-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  color: #000000;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
}

.tagline {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  font-style: italic;
  letter-spacing: 1px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.summary-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.summary-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.summary-item h3 {
  color: #000000;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
}

.summary-item p {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.cta-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.cta-section p {
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.cta-button {
  background: #000000;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-family: "Inter", sans-serif;
}

.cta-button:hover {
  background: #333333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .company-summary {
    padding: 3rem 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .tagline {
    font-size: 1.1rem;
  }

  .summary-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .summary-item {
    padding: 1.5rem;
  }

  .cta-section {
    padding: 1.5rem;
  }

  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}
</style> 