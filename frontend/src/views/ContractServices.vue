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

const selectedService = ref(null);

const services = ref([
  {
    id: 1,
    title: "Fences & Decks",
    shortDescription: "Custom fence and deck design, installation, and repair",
    description: "Professional fence and deck construction services tailored to your property's needs. We design and build durable, attractive fences and decks using high-quality materials and expert craftsmanship. From privacy fences to custom deck designs, we ensure lasting beauty and functionality.",
    images: [
      contract1,
      contract2,
      hardscape
    ]
  },
  {
    id: 2,
    title: "Tree Removal",
    shortDescription: "Professional tree removal and maintenance services",
    description: "Safe and efficient tree removal services for both residential and commercial properties. Our certified arborists handle everything from small tree trimming to large tree removal, stump grinding, and emergency storm damage cleanup with precision and care.",
    images: [
      garden,
      contract1,
      contract2
    ]
  },
  {
    id: 3,
    title: "Concrete Work",
    shortDescription: "Complete concrete solutions for any project",
    description: "Comprehensive concrete services including driveways, walkways, patios, foundations, and decorative concrete work. We use premium materials and advanced techniques to create durable, beautiful concrete surfaces that enhance your property's value and functionality.",
    images: [
      concretework,
      hardscape,
      hardscape2
    ]
  },
  {
    id: 4,
    title: "Shingle Roofing",
    shortDescription: "Expert roofing installation and repair",
    description: "Professional roofing services including new roof installation, repairs, maintenance, and emergency storm damage response. We work with all major roofing materials and provide comprehensive warranties to protect your investment.",
    images: [
      contract1,
      contract2,
      concretework
    ]
  },
  {
    id: 5,
    title: "Interior/Exterior Painting",
    shortDescription: "Professional painting services for all surfaces",
    description: "Complete interior and exterior painting services for residential and commercial properties. We provide surface preparation, quality paint application, and finishing touches to transform your spaces with lasting beauty and protection.",
    images: [
      contract1,
      contract2,
      hardscape
    ]
  },
  {
    id: 6,
    title: "Parking Lot Painting",
    shortDescription: "Line painting and maintenance for parking areas",
    description: "Professional parking lot striping and maintenance services for commercial properties. We provide clear, durable line painting, handicap space marking, directional arrows, and parking lot maintenance to ensure safety and compliance.",
    images: [
      concretework,
      contract1,
      contract2
    ]
  },
  {
    id: 7,
    title: "Outdoor Living Spaces",
    shortDescription: "Custom outdoor space design and construction",
    description: "Transform your outdoor area into a beautiful, functional living space. We design and build custom patios, pergolas, outdoor kitchens, fire pits, and landscaping features that create the perfect environment for outdoor entertainment and relaxation.",
    images: [
      hardscape,
      hardscape2,
      garden
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
