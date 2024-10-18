<template>
  <div class="services-container" id="services">
    <button class="arrow left-arrow" @click="prevService">&#9664;</button>

    <div class="service" v-if="currentService">
      <h2 class="service-title">{{ currentService.title }}</h2>
      <p class="service-description">{{ currentService.description }}</p>
    </div>

    <button class="arrow right-arrow" @click="nextService">&#9654;</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Define the services
const services = ref([
  {
    title: "Landscaping",
    description:
      "Transform your outdoor space with expert landscaping services, tailored to your vision and needs. Our team ensures a stunning and functional design that enhances your property’s beauty.",
  },
  {
    title: "Snow Removal",
    description:
      "Stay safe during winter with our reliable snow removal services. We provide prompt and efficient snow clearing for driveways, sidewalks, and parking lots, keeping your property accessible and safe.",
  },
  {
    title: "Gardening",
    description:
      "Create a thriving garden with our gardening services. We offer planting, maintenance, and design to help you cultivate a beautiful and healthy outdoor environment.",
  },
  {
    title: "Roofing",
    description:
      "Protect your home with our high-quality roofing services. We specialize in roof installation, repairs, and inspections, ensuring your property is secure against the elements.",
  },
]);

const currentIndex = ref(0);

// Function to go to the next service
const nextService = () => {
  currentIndex.value = (currentIndex.value + 1) % services.value.length;
};

// Function to go to the previous service
const prevService = () => {
  currentIndex.value =
    (currentIndex.value - 1 + services.value.length) % services.value.length;
};

// Get the current service based on index
const currentService = computed(() => services.value[currentIndex.value]);
</script>

<style scoped>
.services-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  border-radius: 8px; /* Rounded corners */
  position: relative; /* Position for arrows */
  overflow: hidden; /* Ensure content stays within bounds */
  max-width: 800px; /* Maximum width for the service box */
  margin: 0 auto; /* Center the container */
}

.service {
  text-align: center; /* Center text */
}

.service-title {
  font-size: 2rem; /* Large title */
  margin-bottom: 1rem; /* Space below title */
  color: orange; /* Title color */
  font-weight: bold; /* Bold title */
}

.service-description {
  font-size: 1.2rem; /* Description size */
  color: orange; /* Description color */
}

.arrow {
  background: none; /* No background */
  border: none; /* No border */
  font-size: 2rem; /* Arrow size */
  cursor: pointer; /* Pointer on hover */
  color: orange; /* Arrow color */
  padding: 0 1rem; /* Space around arrows */
  user-select: none; /* Prevent text selection */
}

.arrow:hover {
  color: #ff7f50; /* Change color on hover */
}
</style>
