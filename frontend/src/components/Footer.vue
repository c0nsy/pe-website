<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-grid">
        <!-- Company Info -->
        <div class="footer-section company">
          <h3>Platinum Enterprise Group</h3>
          <p class="tagline">A Step Above The Rest</p>
          <p class="description">
            Your one-stop solution for property maintenance, landscaping, and contracting services across Southwestern Ontario.
          </p>
        </div>

        <!-- Contact Info -->
        <div class="footer-section contact">
          <h4>Contact Us</h4>
          <div class="contact-methods">
            <div class="contact-item">
              <span class="icon">📞</span>
              <div class="contact-details">
                <a href="tel:5485581970" class="phone-link">(548) 558-1970</a>
                <span class="label">Primary</span>
              </div>
            </div>
            <div class="contact-item">
              <span class="icon">📞</span>
              <div class="contact-details">
                <a href="tel:18662782610" class="phone-link">1-866-278-2610</a>
                <span class="label">After Hours</span>
              </div>
            </div>
            <div class="contact-item">
              <span class="icon">✉️</span>
              <div class="contact-details">
                <a href="mailto:office@platinumeg.ca" class="email-link">office@platinumeg.ca</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Locations -->
        <div class="footer-section locations">
          <h4>Our Locations</h4>
          <div class="location-list">
            <div class="location-item">
              <span class="icon">🏢</span>
              <div class="location-details">
                <h5>Office</h5>
                <address>
                  Platinum Enterprise Group<br>
                  10 Clemens Ave., Building 2<br>
                  Cambridge, Ontario N3C 3W2
                </address>
              </div>
            </div>
            <div class="location-item">
              <span class="icon">🚛</span>
              <div class="location-details">
                <h5>Yard</h5>
                <address>
                  859 Courtland Ave East<br>
                  Kitchener, Ontario N2C 1K4
                </address>
              </div>
            </div>
          </div>
        </div>

        <!-- Hours -->
        <div class="footer-section hours">
          <h4>Business Hours</h4>
          <div class="hours-list">
            <div class="hours-item">
              <span class="days">Monday - Friday</span>
              <span class="time">8:00 AM – 5:00 PM</span>
            </div>
            <div class="hours-item">
              <span class="days">Saturday</span>
              <span class="time">By Appointment</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; 2024 Platinum Enterprise Group. All rights reserved.</p>
          <p class="service-area">Serving Kitchener, Waterloo, Cambridge, Guelph, and greater Southwestern Ontario</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #000000;
  color: #ffffff;
  padding: 3rem 0 0 0;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
  font-weight: 700;
}

.footer-section h4 {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-family: 'Cinzel', serif;
  font-weight: 400;
}

.footer-section h5 {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-family: 'Cinzel', serif;
  font-weight: 400;
}

.tagline {
  color: #00FF66; /* Emerald Green */
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 1rem;
  font-weight: 600;
}

.description {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  font-family: 'Lora', serif;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-item .icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.phone-link, .email-link {
  color: #C0C0C0; /* Platinum Silver */
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.phone-link:hover, .email-link:hover {
  color: #9aa0a6; /* Darker platinum for hover */
}

.label {
  color: #999999;
  font-size: 0.85rem;
}

.location-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.location-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.location-item .icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.location-details address {
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.5;
  font-style: normal;
  margin: 0;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #333333;
}

.hours-item:last-child {
  border-bottom: none;
}

.days {
  color: #ffffff;
  font-weight: 500;
  font-size: 0.95rem;
}

.time {
  color: #cccccc;
  font-size: 0.95rem;
}

.footer-bottom {
  border-top: 1px solid #333333;
  padding: 1.5rem 0;
  margin-top: 2rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: #999999;
  font-size: 0.9rem;
  margin: 0;
}

.service-area {
  font-style: italic;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 0 0;
  }

  .footer-content {
    padding: 0 1rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .hours-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    gap: 1.5rem;
  }

  .footer-section h3 {
    font-size: 1.3rem;
  }

  .footer-section h4 {
    font-size: 1.1rem;
  }

  .contact-item, .location-item {
    gap: 0.5rem;
  }
}
</style>
