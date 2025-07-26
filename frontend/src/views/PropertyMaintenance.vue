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
        <div 
          v-for="service in services" 
          :key="service.id"
          class="service-item"
          @click="openModal(service)"
        >
          <h3>{{ service.title }}</h3>
          <p>{{ service.shortDescription }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedService" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        <div class="modal-header">
          <h2>{{ selectedService.title }}</h2>
        </div>
        <div class="modal-body">
          <div class="service-description">
            <p>{{ selectedService.description }}</p>
          </div>
          <div class="service-gallery">
            <div 
              v-for="(image, index) in selectedService.images" 
              :key="index"
              class="gallery-item"
            >
              <img :src="image" :alt="`${selectedService.title} - Image ${index + 1}`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedService = ref(null);

const services = ref([
  {
    id: 1,
    title: "Lawn Care",
    shortDescription: "Professional lawn maintenance and care services",
    description: "Our comprehensive lawn care services include regular mowing, edging, fertilization, weed control, and seasonal maintenance. We ensure your lawn stays healthy and vibrant throughout the year with our expert care and attention to detail.",
    images: [
      "/src/assets/work/property1.jpg",
      "/src/assets/work/property2.jpg",
      "/src/assets/work/property3.jpg"
    ]
  },
  {
    id: 2,
    title: "Hardscape/Softscape",
    shortDescription: "Complete landscape design and implementation",
    description: "Transform your outdoor space with our hardscape and softscape design services. We create beautiful, functional landscapes that combine hard elements like patios and walkways with lush plantings and natural features.",
    images: [
      "/src/assets/work/property4.jpg",
      "/src/assets/work/property6.jpg",
      "/src/assets/work/property7.jpg"
    ]
  },
  {
    id: 3,
    title: "Interlock Stone",
    shortDescription: "Custom interlock stone installation and repair",
    description: "Professional interlock stone installation for driveways, walkways, patios, and retaining walls. We use high-quality materials and expert craftsmanship to create durable, beautiful stone surfaces that enhance your property's value and curb appeal.",
    images: [
      "/src/assets/work/property8.jpg",
      "/src/assets/work/property9.jpg",
      "/src/assets/work/property10.jpg"
    ]
  },
  {
    id: 4,
    title: "Spring/Fall Cleanups",
    shortDescription: "Seasonal property cleanup and preparation",
    description: "Prepare your property for each season with our comprehensive cleanup services. We remove debris, trim overgrowth, clean gutters, and ensure your property is ready for the changing seasons.",
    images: [
      "/src/assets/work/property11.jpg",
      "/src/assets/work/property1.jpg",
      "/src/assets/work/property2.jpg"
    ]
  },
  {
    id: 5,
    title: "Sod Installation",
    shortDescription: "Professional sod installation and maintenance",
    description: "Fast, professional sod installation for instant green lawns. We prepare the soil, install high-quality sod, and provide maintenance instructions to ensure your new lawn establishes properly and thrives.",
    images: [
      "/src/assets/work/property3.jpg",
      "/src/assets/work/property4.jpg",
      "/src/assets/work/property6.jpg"
    ]
  },
  {
    id: 6,
    title: "Fake Turf Installation",
    shortDescription: "High-quality artificial turf solutions",
    description: "Low-maintenance, year-round green with our premium artificial turf installation. Perfect for areas with high traffic, limited sunlight, or water restrictions. Our turf looks and feels natural while requiring minimal upkeep.",
    images: [
      "/src/assets/work/property7.jpg",
      "/src/assets/work/property8.jpg",
      "/src/assets/work/property9.jpg"
    ]
  },
  {
    id: 7,
    title: "Janitorial Services",
    shortDescription: "Comprehensive cleaning and maintenance",
    description: "Professional janitorial services for commercial and residential properties. We provide regular cleaning, sanitization, and maintenance to keep your spaces clean, safe, and welcoming for occupants and visitors.",
    images: [
      "/src/assets/work/property10.jpg",
      "/src/assets/work/property11.jpg",
      "/src/assets/work/property1.jpg"
    ]
  },
  {
    id: 8,
    title: "Junk/Graffiti Removal",
    shortDescription: "Professional removal and cleanup services",
    description: "Fast and thorough junk removal and graffiti cleanup services. We safely remove unwanted items and restore surfaces to their original condition, helping maintain your property's appearance and value.",
    images: [
      "/src/assets/work/property2.jpg",
      "/src/assets/work/property3.jpg",
      "/src/assets/work/property4.jpg"
    ]
  },
  {
    id: 9,
    title: "Snow Services",
    shortDescription: "Snow plowing, hauling, and ice control",
    description: "Reliable snow removal and ice control services to keep your property safe and accessible during winter weather. We provide 24/7 monitoring and rapid response to ensure your walkways, driveways, and parking areas remain clear.",
    images: [
      "/src/assets/work/property6.jpg",
      "/src/assets/work/property7.jpg",
      "/src/assets/work/property8.jpg"
    ]
  },
  {
    id: 10,
    title: "24/7 Weather Monitoring",
    shortDescription: "Round-the-clock weather monitoring and response",
    description: "Advanced weather monitoring systems that provide real-time alerts and automatic response protocols. We monitor weather conditions 24/7 to ensure proactive maintenance and emergency response when needed.",
    images: [
      "/src/assets/work/property9.jpg",
      "/src/assets/work/property10.jpg",
      "/src/assets/work/property11.jpg"
    ]
  }
]);

const openModal = (service) => {
  selectedService.value = service;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedService.value = null;
  document.body.style.overflow = 'auto';
};
</script>

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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  z-index: 1001;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.modal-close:hover {
  background-color: #f0f0f0;
  color: #333;
}

.modal-header {
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid #eee;
}

.modal-header h2 {
  color: #000000;
  font-size: 2rem;
  margin: 0;
  font-family: "Inter", sans-serif;
}

.modal-body {
  padding: 1rem 2rem 2rem 2rem;
}

.service-description {
  margin-bottom: 2rem;
}

.service-description p {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

.service-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
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

  .modal-overlay {
    padding: 1rem;
  }

  .modal-content {
    max-height: 95vh;
  }

  .modal-header {
    padding: 1.5rem 1.5rem 1rem 1.5rem;
  }

  .modal-body {
    padding: 1rem 1.5rem 1.5rem 1.5rem;
  }

  .modal-header h2 {
    font-size: 1.5rem;
  }

  .service-gallery {
    grid-template-columns: 1fr;
  }

  .gallery-item img {
    height: 200px;
  }
}
</style>
