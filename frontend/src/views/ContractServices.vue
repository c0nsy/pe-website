<template>
  <div class="additional-services">
    <div class="content">
      <h1>Additional Services</h1>
      <p class="description">
        Platinum Enterprise Group has expanded its service offerings to provide comprehensive property solutions.
        Through strategic partnerships and continuous growth, we have developed an expanded scope of related service
        offerings. Our additional services complement our core property maintenance and landscaping expertise,
        ensuring we can meet all your property needs under one roof.
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
// Import all contract images
import contract1 from '../assets/work/contract1.jpg';
import contract2 from '../assets/work/contract2.jpg';
import concretework from '../assets/work/concretework.jpg';
import hardscape from '../assets/work/hardscape.jpg';
import hardscape2 from '../assets/work/hardscape2.jpg';
import garden from '../assets/work/garden.jpg';
import lawn from '../assets/work/lawn.jpg';
import lawn2 from '../assets/work/lawn2.jpg';
// New images
import frontsteps from '../assets/work/frontsteps.jpg';
import propertymaintenance from '../assets/work/propertymaitenance.jpg';
import propertymaintenance2 from '../assets/work/propertymaitenance2.jpg';
import stonestepsgarden from '../assets/work/stonestepsgarden.jpg';

const selectedService = ref(null);

const services = ref([
  {
    id: 1,
    title: "Asphalt Maintenance – Repair",
    shortDescription: "Smooth and durable surface solutions",
    description: "Asphalt ensures a smooth and durable surface for driveways, parking lots and more. Our service includes the installation, maintenance, and repairs.",
    images: [
      concretework,
      contract1,
      contract2
    ]
  },
  {
    id: 2,
    title: "Interior Renovation",
    shortDescription: "Transform your living or working space",
    description: "Transform your living or working space with our interior renovation expertise, ensuring modern, stylish and functional designs.",
    images: [
      contract1,
      contract2,
      hardscape
    ]
  },
  {
    id: 3,
    title: "Painting",
    shortDescription: "Add a splash of colour and personality",
    description: "Add a splash of colour and personality to your spaces through our exceptional interior paint service team. Refresh your home or finalize your new build! Our service team will refresh both indoor and outdoor surfaces.",
    images: [
      frontsteps,
      contract1,
      contract2
    ]
  },
  {
    id: 4,
    title: "Framing",
    shortDescription: "Precision framing for residential and commercial projects",
    description: "Trust our skilled craftsmen to provide you with precision framing for residential and commercial projects.",
    images: [
      contract1,
      contract2,
      concretework
    ]
  },
  {
    id: 5,
    title: "Flooring – Tile",
    shortDescription: "Elevate the aesthetics and comfort of your floors",
    description: "Elevate the aesthetics and comfort of your floors with our diverse flooring and tile installation solutions.",
    images: [
      stonestepsgarden,
      contract1,
      contract2
    ]
  },
  {
    id: 6,
    title: "Demolition",
    shortDescription: "Safe and efficient demolition services",
    description: "Rely on our expert team for safe and efficient demolition services tailored to your project requirements.",
    images: [
      concretework,
      contract1,
      contract2
    ]
  },
  {
    id: 7,
    title: "Insulation – Vapor Barrier",
    shortDescription: "Optimized energy efficiency and comfort",
    description: "Gain the benefits of optimized energy efficiency and comfort with our insulation and Vapor barrier installation services.",
    images: [
      contract1,
      contract2,
      hardscape
    ]
  },
  {
    id: 8,
    title: "Drywall – Taping",
    shortDescription: "Seamless and polished walls",
    description: "Achieve seamless and polished walls with our professional drywall and taping services.",
    images: [
      contract1,
      contract2,
      concretework
    ]
  },
  {
    id: 9,
    title: "Mobile Welding Services",
    shortDescription: "Welding technologies directly to your location",
    description: "Bringing the necessary welding technologies directly to the location allows for both efficiency and practicality through being onsite.",
    images: [
      contract1,
      contract2,
      hardscape
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
.additional-services {
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
