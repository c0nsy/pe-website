<template>
  <nav class="contact-bar">
    <div class="social-icons">
      <a
        href="https://www.facebook.com/profile.php?id=61566666094999"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:facebook" width="20" height="20" />
      </a>
      <a
        href="https://www.instagram.com/platinumenterprisegroup"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:instagram" width="20" height="20" />
      </a>
      <a href="mailto:office@platinumeg.ca" aria-label="Email">
        <Icon icon="mdi:email" width="20" height="20" />
      </a>
    </div>
    <div class="company-name">
      <strong>Platinum Enterprise Group</strong>
    </div>
    <div class="contact-info">
      <span>Primary: (548) 558-1970</span>
      <span>After Hours: 1-866-278-2610</span>
      <span>Email: office@platinumeg.ca</span>
    </div>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.contact-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  padding: 0.75rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Lora', serif;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.75rem;
}

.social-icons a {
  color: #ffffff;
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  opacity: 0.8;
}

.social-icons a[aria-label="Facebook"] {
  color: #1877f2;
}

.social-icons a[aria-label="Instagram"] {
  color: #E4405F;
}

.social-icons a[aria-label="Email"] {
  color: #ffffff;
}

.social-icons a:hover {
  opacity: 1;
  transform: translateY(-1px);
}

.company-name {
  display: none;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
  font-family: 'Cinzel', serif;
}

.contact-info {
  text-align: center;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #ffffff;
  font-weight: 400;
  letter-spacing: 0.3px;
}

.contact-info span {
  display: block;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .company-name {
    display: block;
  }
}

@media (min-width: 768px) {
  .contact-bar {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 2rem;
  }

  .social-icons {
    margin-bottom: 0;
  }

  .contact-info {
    text-align: right;
    font-size: 0.85rem;
  }

  .contact-info span {
    display: inline;
    margin-right: 1.5rem;
  }

  .contact-info span:last-child {
    margin-right: 0;
  }
}
</style>
