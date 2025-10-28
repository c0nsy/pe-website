<template>
  <div class="property-maintenance">
    <div class="content">
      <h1>Property Maintenance</h1>
      <p class="description">
        Allowing us to deliver you with the exceptional workmanship Platinum Enterprise Group is known for, our service
        professionals bring you the talent and skills that are held by experienced property management professionals.
        Our inventory of trucks, machinery, and specialized tools give compliment and support of our people assets.
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
// Import all property images
import lawn from '../assets/work/lawn.jpg';
import lawn2 from '../assets/work/lawn2.jpg';
import lawn3 from '../assets/work/lawn3.jpg';
import lawncare from '../assets/work/lawncare.jpg';
import lawncare1 from '../assets/work/lawncare1.jpg';
import hardscape from '../assets/work/hardscape.jpg';
import hardscape2 from '../assets/work/hardscape2.jpg';
import garden from '../assets/work/garden.jpg';
import snow from '../assets/work/snow.jpg';
import snowremoval from '../assets/work/snowremoval.jpg';
import concretework from '../assets/work/concretework.jpg';
import contract1 from '../assets/work/contract1.jpg';
import contract2 from '../assets/work/contract2.jpg';
// New images
import frontsteps from '../assets/work/frontsteps.jpg';
import propertymaintenance from '../assets/work/propertymaitenance.jpg';
import propertymaintenance2 from '../assets/work/propertymaitenance2.jpg';
import stonestepsgarden from '../assets/work/stonestepsgarden.jpg';

const selectedService = ref(null);

const services = ref([
  {
    id: 1,
    title: "Lawn / Landscape",
    shortDescription: "Professional lawn care and landscape maintenance",
    description: "Let's be real - first impressions start at the curb. Whether it's your home or your business, a messy lawn screams, \"I've given up.\" Lucky for you, we haven't. Our residential services keep your home lawn looking like it belongs in a magazine (or at least makes your neighbours jealous), while our commercial maintenance ensures your property sends the right message before anyone even walks through the door. We handle both with military-grade precision.",
    images: [
      lawn,
      lawn2,
      lawn3
    ]
  },
  {
    id: 2,
    title: "Hardscape / Softscape",
    shortDescription: "Harmonious balance between soft and hard elements",
    description: "A well-designed landscape often incorporates a harmonious balance between soft-scape and hard-scape elements. This can include the construction of retaining walls, inter-lock brick, custom stone masonry or just incorporating rock into florals and greenery.",
    images: [
      hardscape,
      hardscape2,
      garden
    ]
  },
  {
    id: 3,
    title: "Spring / Fall Cleanups",
    shortDescription: "Get your property ready for the season",
    description: "Get your property ready for the season—without lifting a finger. Our spring and fall cleanup services handle all the heavy lifting and disposal so you don't have to. We remove debris, trim back overgrowth, clear gutters, and prep your outdoor space for whatever the weather brings next. Leave the dirty work to us—your weekends deserve better.",
    images: [
      garden,
      lawncare,
      lawncare1
    ]
  },
  {
    id: 4,
    title: "Snow and Ice Management",
    shortDescription: "24/7 snow removal and ice control solutions",
    description: "At Platinum, snow and ice control isn't just a service—it's our specialty. We provide reliable, around-the-clock snow removal solutions tailored to the needs of retail centers, logistics hubs, healthcare facilities, plazas, and industrial properties. From large-scale commercial sites to smaller high-traffic areas, we handle it all with precision and urgency. With 24/7 weather monitoring and rapid response capabilities, we ensure your property remains safe, accessible, and fully operational throughout the winter season. Big or small—we plow them all.",
    images: [
      snow,
      snowremoval,
      contract1
    ]
  },
  {
    id: 5,
    title: "Janitorial Services",
    shortDescription: "State of the art equipment and green solutions",
    description: "State of the art equipment and green solutions for the highest quality at affordable prices. Whether you need your home cleaned or you have an office or business you'd like to shine, we have the skilled staff to make it happen. Our services fulfill the needs of business, retail, commercial and industrial environments.",
    images: [
      contract1,
      contract2,
      concretework
    ]
  },
  {
    id: 6,
    title: "Junk / Graffiti Removal",
    shortDescription: "Fast, discreet, and thorough removal services",
    description: "Illegal dumping and graffiti are ongoing challenges for commercial property owners and managers—especially in high-traffic areas like plazas, retail centres, and industrial sites. These issues don't just affect appearance—they impact property value, tenant satisfaction, and liability. Our team provides fast, discreet, and thorough removal services tailored to commercial properties. Whether it's clearing out illegally dumped debris or professionally restoring defaced surfaces, we handle the headaches so you don't have to.",
    images: [
      contract1,
      contract2,
      concretework
    ]
  },
  {
    id: 7,
    title: "Asphalt Maintenance / Repair",
    shortDescription: "Comprehensive asphalt solutions",
    description: "From foundations to decorative concrete work, we offer comprehensive concrete solutions to meet your project needs. Our services include forming, pouring, finishing, colouring, and stamping. Please feel free to call if your needs relate to concrete repair, or parging.",
    images: [
      concretework,
      hardscape,
      hardscape2
    ]
  },
  {
    id: 8,
    title: "Irrigation Water Systems",
    shortDescription: "Professional irrigation installation and maintenance",
    description: "At Platinum Enterprise Group, we install and maintain irrigation systems for both residential and commercial properties. From professional system installation to seasonal openings and closings, we make sure your lawn stays healthy and your system runs efficiently—year after year. No overwatering, no dry spots, no hassle. Just reliable service, done right.",
    images: [
      garden,
      lawncare,
      lawncare1
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
