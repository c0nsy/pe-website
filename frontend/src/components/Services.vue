<template>
  <div>
    <!-- First Services Container -->
    <h1>Services</h1>
    <div class="services-container" id="services">
      <button class="arrow left-arrow" @click="prevService1">&#9664;</button>

      <div class="service" v-if="currentService1">
        <h2 class="service-title">{{ currentService1.title }}</h2>
        <p class="service-description">{{ currentService1.description }}</p>
      </div>

      <button class="arrow right-arrow" @click="nextService1">&#9654;</button>
    </div>
    <h1>Home</h1>
    <!-- Second Services Container -->
    <div class="services-container" id="services">
      <button class="arrow left-arrow" @click="prevService2">&#9664;</button>

      <div class="service" v-if="currentService2">
        <h2 class="service-title">{{ currentService2.title }}</h2>
        <p class="service-description">{{ currentService2.description }}</p>
      </div>

      <button class="arrow right-arrow" @click="nextService2">&#9654;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// First set of services (original)
const services1 = ref([
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

const currentIndex1 = ref(0);

// Second set of services (new data)
const services2 = ref([
  {
    title: "Asphalt Maintenance – Repair",
    description:
      "Asphalt ensures a smooth and durable surface for driveways, parking lots and more. Our service includes the installation, maintenance, and repairs.",
  },
  {
    title: "Interior Renovation",
    description:
      "Transform your living or working space with our interior renovation expertise, ensuring modern, stylish and functional designs.",
  },
  {
    title: "Painting",
    description:
      "Add a splash of colour and personality to your spaces through our exceptional interior paint service team. Refresh your home or finalize your new build! Our service team will refresh both indoor and outdoor surfaces.",
  },
  {
    title: "Framing",
    description:
      "Trust our skilled craftsmen to provide you with precision framing for residential and commercial projects.",
  },
  {
    title: "Flooring – Tile",
    description:
      "Elevate the aesthetics and comfort of your floors with our diverse flooring and tile installation solutions.",
  },
  {
    title: "Demolition",
    description:
      "Rely on our expert team for safe and efficient demolition services tailored to your project requirements.",
  },
  {
    title: "Insulation – Vapor Barrier",
    description:
      "Gain the benefits of optimized energy efficiency and comfort with our insulation and vapor barrier installation services.",
  },
  {
    title: "Drywall – Taping",
    description:
      "Achieve seamless and polished walls with our professional drywall and taping services.",
  },
  {
    title: "Mobile Welding Services",
    description:
      "Bringing the necessary welding technologies directly to the location allows for both efficiency and practicality through being onsite.",
  },
]);

const currentIndex2 = ref(0);

// Function to go to the next service for the first set
const nextService1 = () => {
  currentIndex1.value = (currentIndex1.value + 1) % services1.value.length;
};

// Function to go to the previous service for the first set
const prevService1 = () => {
  currentIndex1.value =
    (currentIndex1.value - 1 + services1.value.length) % services1.value.length;
};

// Function to go to the next service for the second set
const nextService2 = () => {
  currentIndex2.value = (currentIndex2.value + 1) % services2.value.length;
};

// Function to go to the previous service for the second set
const prevService2 = () => {
  currentIndex2.value =
    (currentIndex2.value - 1 + services2.value.length) % services2.value.length;
};

// Get the current service based on index for the first set
const currentService1 = computed(() => services1.value[currentIndex1.value]);

// Get the current service based on index for the second set
const currentService2 = computed(() => services2.value[currentIndex2.value]);
</script>

<style scoped>
/* Styling for the Services and Home Titles */
h1 {
  font-size: 2.5rem; /* Larger font for titles */
  color: #333; /* Dark color for better readability */
  font-weight: bold; /* Bold for emphasis */
  text-align: center; /* Center align the titles */
  margin: 2rem 0; /* Add spacing above and below */
  text-transform: uppercase; /* All caps for a more professional look */
  letter-spacing: 2px; /* Slightly increase the letter spacing for a modern look */
}

/* Services container styling */
.services-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
}

/* Service box styling */
.service {
  text-align: center;
}

/* Service title styling */
.service-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: rgb(103, 99, 99);
  font-weight: bold;
}

/* Service description styling */
.service-description {
  font-size: 1.2rem;
  color: black;
}

/* Arrow button styling */
.arrow {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: black;
  padding: 0 1rem;
  user-select: none;
}

/* Arrow button hover effect */
.arrow:hover {
  color: #838484;
}
</style>
