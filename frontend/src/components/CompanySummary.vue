<template>
  <div class="company-summary" id="services">
    <div class="summary-content">
      <h2>Platinum Enterprise Group</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>Property Maintenance</h3>
          <p>From grass to snow and everything in between—our team delivers full-service, year-round property care tailored for commercial clients, builders, and property managers who don't have time to chase contractors. We handle the lawn maintenance, landscaping, snow removal, and 24/7 weather monitoring—so you don't have to worry if it's going to be 30°C or a blizzard by breakfast. Your property stays sharp, safe, and looking its best—no matter what Mother Nature throws at it (and trust us, she's got an arm).</p>
        </div>
        <div class="summary-item">
          <h3>Additional Services</h3>
          <p>From custom fences and decks to roofing, painting, concrete work, and full-scale renovations—our team delivers quality craftsmanship with zero shortcuts and zero nonsense. Looking to upgrade your space? We specialize in interior and exterior transformations, and yes—we also build some of the most badass backyard golf greens this side of the PGA. Whether you're chasing curb appeal or working on your short game between barbecues, we've got you covered.</p>
        </div>
        <div class="summary-item">
          <h3>Experience & Quality</h3>
          <p>With over 25 years in the game, Troy—the man behind Platinum—didn't just fall into this industry; he built his path with grit, hustle, and a lawn mower before he was even old enough to drive. While still in high school, he launched Harley Landscaping, juggling classes by day and client yards by night. That same energy, pride, and eye for quality fuels everything we do at Platinum today. We're not just here to do the job—we're here to do it right and leave your property looking like a million bucks (without the million-dollar price tag).</p>
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
  padding: 2rem 1rem; /* Reduced excessive padding */
  margin: 2rem 0;
}

.summary-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 1rem; /* Added horizontal padding */
}

h2 {
  color: #000000; /* Black for better readability */
  font-size: 2.5rem;
  margin-bottom: 2rem; /* Added breathing room below title */
  margin-top: 0; /* Removed top margin */
  font-family: 'Cinzel', serif;
  font-weight: 700;
  letter-spacing: 1px; /* Added letter spacing for better appearance */
}


.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem; /* Reduced bottom margin */
  margin-top: 0; /* Removed top margin */
}

.summary-item {
  background: #1B1B1B; /* Graphite Black background */
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #C0C0C0; /* Platinum Silver border */
}

.summary-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.summary-item h3 {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
  font-weight: 400;
}

.summary-item p {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  font-family: 'Lora', serif;
  opacity: 0.9;
}

.cta-section {
  background: #1B1B1B; /* Graphite Black background */
  padding: 1.5rem; /* Reduced padding */
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #C0C0C0; /* Platinum Silver border */
}

.cta-section p {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-family: 'Lora', serif;
}

.cta-button {
  background: #C0C0C0; /* Platinum Silver */
  color: #000000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-family: 'Cinzel', serif;
}

.cta-button:hover {
  background: #9aa0a6; /* Darker platinum for hover */
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