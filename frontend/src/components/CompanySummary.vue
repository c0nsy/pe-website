<template>
  <div class="company-summary" id="services">
    <div class="summary-content">
      <h2>Platinum Enterprise Group</h2>
      <p class="tagline">A Step Above The Rest</p>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>Property Maintenance</h3>
          <p>From grass to snow and everything in between—our team delivers full-service, year-round property care tailored for commercial clients, builders, and property managers who don't have time to chase contractors. We handle the lawn maintenance, landscaping, snow removal, and 24/7 weather monitoring—so you don't have to worry if it's going to be 30°C or a blizzard by breakfast. Your property stays sharp, safe, and looking its best—no matter what Mother Nature throws at it (and trust us, she's got an arm).</p>
          <div class="services-list">
            <ol>
              <li>Lawn / Landscape</li>
              <li>Hardscape / Softscape</li>
              <li>Spring / Fall Cleanups</li>
              <li>Snow and Ice Management</li>
              <li>Janitorial Services</li>
              <li>Junk / Graffiti Removal</li>
              <li>Asphalt Maintenance / Repair</li>
              <li>Irrigation Water Systems</li>
            </ol>
          </div>
        </div>
        <div class="summary-item">
          <h3>Additional Services</h3>
          <p>From custom fences and decks to roofing, painting, concrete work, and full-scale renovations—our team delivers quality craftsmanship with zero shortcuts and zero nonsense. Looking to upgrade your space? We specialize in interior and exterior transformations, and yes—we also build some of the most badass backyard golf greens this side of the PGA. Whether you're chasing curb appeal or working on your short game between barbecues, we've got you covered.</p>
          <div class="services-list">
            <ol>
              <li>Landscape Design</li>
              <li>Deck and Fencing</li>
              <li>Artificial Turf / Custom Putting Green Installation</li>
              <li>Tree Removal / Stump Grinding</li>
              <li>Sod Installation</li>
              <li>Interlock Stone / Retaining Walls</li>
              <li>Demolitions / Bin Rentals</li>
              <li>Interior Renovations</li>
              <li>Exterior Renovations</li>
              <li>Concrete</li>
              <li>Roofing</li>
              <li>Mobile Welding</li>
              <li>Caulking</li>
            </ol>
          </div>
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
  margin: 0 0 1rem 0;
}

.services-list {
  margin-top: 1rem;
  text-align: left;
}

.services-list ol {
  margin: 0;
  padding-left: 1.5rem;
  color: #333;
  font-size: 0.9rem;
  line-height: 1.5;
}

.services-list li {
  margin-bottom: 0.3rem;
  font-weight: 500;
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