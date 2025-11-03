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
import lawn3 from '../assets/work/lawn3.jpg';
import lawncare from '../assets/work/lawncare.jpg';
import lawncare1 from '../assets/work/lawncare1.jpg';
// New images
import frontsteps from '../assets/work/frontsteps.jpg';
import propertymaintenance from '../assets/work/propertymaitenance.jpg';
import propertymaintenance2 from '../assets/work/propertymaitenance2.jpg';
import stonestepsgarden from '../assets/work/stonestepsgarden.jpg';

const selectedService = ref(null);

const services = ref([
  {
    id: 1,
    title: "Deck and Fencing",
    shortDescription: "Enhance your outdoor living space",
    description: "Enhance your outdoor living space through our top-notch construction of decks and fencing. Using either traditional woods or composite materials our builds represent the very best in property enhancement.",
    images: [
      contract1,
      contract2,
      hardscape
    ]
  },
  {
    id: 2,
    title: "Demolitions / Bin Rentals",
    shortDescription: "Safe and efficient demolition services",
    description: "Rely on our expert team for safe and efficient demolition services tailored to your project requirements. We offer the removal and disposal of waste or junk from residential and commercial properties. From simple trash collection to furniture, equipment hoards, to the removal of abandoned materials and appliances, we assure a timely site visit and offer haulage and disposal services.",
    images: [
      concretework,
      contract1,
      contract2
    ]
  },
  {
    id: 3,
    title: "Interior Renovations",
    shortDescription: "Transform your living or working space",
    description: "Transform your living or working space with our interior renovation expertise, ensuring modern, stylish and functional designs. From framing and drywall to painting and flooring, we handle all aspects of interior renovations with precision and quality craftsmanship.",
    images: [
      contract1,
      contract2,
      hardscape
    ]
  },
  {
    id: 4,
    title: "Exterior Renovations",
    shortDescription: "Enhance your property's curb appeal",
    description: "Enhance your property's curb appeal with our comprehensive exterior renovation services. From siding and roofing to windows and doors, we transform the exterior of your home or business to create lasting value and visual impact.",
    images: [
      contract1,
      contract2,
      hardscape
    ]
  },
  {
    id: 5,
    title: "Concrete",
    shortDescription: "Comprehensive concrete solutions",
    description: "From foundations to decorative concrete work, we offer comprehensive concrete solutions to meet your project needs. Our services include forming, pouring, finishing, colouring, and stamping. Please feel free to call if your needs relate to concrete repair, or parging.",
    images: [
      concretework,
      hardscape,
      hardscape2
    ]
  },
  {
    id: 6,
    title: "Roofing",
    shortDescription: "Comprehensive range of roofing services",
    description: "We offer a comprehensive range of roofing services tailored to meet the unique needs of our clients. With a focus on quality craftsmanship and superior materials, we specialize in the installation, repair, and maintenance of slate, cedar, asphalt shingles, and metal roofs.",
    images: [
      contract1,
      contract2,
      concretework
    ]
  },
  {
    id: 7,
    title: "Mobile Welding",
    shortDescription: "Welding technologies directly to your location",
    description: "Bringing the necessary welding technologies directly to the location allows for both efficiency and practicality through being onsite. Our mobile welding services provide convenient, professional welding solutions wherever you need them.",
    images: [
      contract1,
      contract2,
      hardscape
    ]
  },
  {
    id: 8,
    title: "Caulking",
    shortDescription: "Professional caulking and sealing services",
    description: "Professional caulking and sealing services to protect your property from water damage, air leaks, and weather elements. Our skilled technicians use high-quality materials and proven techniques to ensure long-lasting, effective sealing solutions for both interior and exterior applications.",
    images: [
      contract1,
      contract2,
      concretework
    ]
  },
  {
    id: 9,
    title: "Landscape Design",
    shortDescription: "Free consultation with our design professionals",
    description: "Free consultation with our design professionals to ensure that we transform vision into results, on time and within your budget. Whether it is rejuvenating an existing landscape or custom building your vision from the ground up.",
    images: [
      stonestepsgarden,
      hardscape,
      hardscape2
    ]
  },
  {
    id: 10,
    title: "Artificial Turf / Custom Putting Green Installation",
    shortDescription: "Premium artificial turf and custom putting greens",
    description: "Say goodbye to mowing, watering, and patchy grass. Our premium artificial turf delivers lush, green perfection all year round—without the maintenance. Ideal for high-traffic areas, shaded spaces, or properties dealing with water restrictions, our turf looks real, feels real, and stands up to whatever you throw at it. And for all the backyard BBQ kings rocking a dad bod—or raising the next John Daly—we offer custom backyard putting greens built to impress.",
    images: [
      lawncare,
      lawncare1,
      garden
    ]
  },
  {
    id: 11,
    title: "Tree Removal / Stump Grinding",
    shortDescription: "Expert tree removal and stump grinding services",
    description: "When it comes to removing trees, we don't just get the job done—we get it done right. Our expert team uses proven, industry-leading techniques and heavy-duty equipment to safely take down everything from dangerous overhanging limbs to massive problem trees. Then we grind stumps deep below the surface, wiping out any chance of regrowth and eliminating ugly, hazardous eyesores.",
    images: [
      garden,
      contract1,
      contract2
    ]
  },
  {
    id: 12,
    title: "Sod Installation",
    shortDescription: "Fast, professional sod installation for instant green lawns",
    description: "Fast, professional sod installation for instant green lawns—no waiting, no patches, no headaches. We prep the soil, lay high-quality sod, and provide simple care instructions so your new lawn takes root and thrives. Why choose sod over seed, you ask? Unless you're a retired old-timer with nothing better to do than sip a cold wobbly pop and stare at dirt all day, there's really no reason not to. Let's get it done right—and done fast.",
    images: [
      lawn,
      lawn2,
      lawn3
    ]
  },
  {
    id: 13,
    title: "Interlock Stone / Retaining Walls",
    shortDescription: "Precision-built, professionally installed stone work",
    description: "Precision-built, professionally installed, and designed to impress—our interlock stone and retaining wall services are the perfect way to upgrade any outdoor space. From stunning residential driveways and backyard patios to commercial walkways, entrances, and grade solutions, we deliver lasting results that boost both curb appeal and property value.",
    images: [
      hardscape,
      hardscape2,
      concretework
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
  background-color: #1B1B1B; /* Graphite Black - matching main page */
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
  font-weight: 700;
}

.description {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
  font-family: 'Lora', serif;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-item {
  background: #2a2a2a; /* Dark grey for cards */
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid #3a3a3a; /* Subtle border for definition */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  border-color: #4a4a4a; /* Slightly lighter border on hover */
}

.service-item h3 {
  color: #C0C0C0; /* Platinum Silver */
  margin-bottom: 0.5rem;
  font-family: 'Cinzel', serif;
  font-weight: 400;
}

.service-item p {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 0.9rem;
  line-height: 1.4;
  font-family: 'Lora', serif;
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
  background: #2a2a2a; /* Dark grey matching service cards */
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
  border: 1px solid #3a3a3a;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #C0C0C0; /* Platinum Silver */
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
  background-color: #3a3a3a;
  color: #ffffff;
}

.modal-header {
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid #3a3a3a; /* Dark border matching theme */
}

.modal-header h2 {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 2rem;
  margin: 0;
  font-family: 'Cinzel', serif;
  font-weight: 700;
}

.modal-body {
  padding: 1rem 2rem 2rem 2rem;
}

.service-description {
  margin-bottom: 2rem;
}

.service-description p {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  font-family: 'Lora', serif;
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
