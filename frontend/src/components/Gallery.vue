<template>
  <div class="gallery-container" id="gallery">
    <h1 class="gallery-header">At Work</h1>
    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        :class="{ rectangular: index % 2 === 0, square: index % 2 !== 0 }"
      >
        <img :src="image" alt="Work Image" class="gallery-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = ref([]);

const importAllImages = async () => {
  const imageModules = import.meta.glob("../assets/work/*.{png,jpg,jpeg,svg}");
  for (const path in imageModules) {
    const image = await imageModules[path]();
    images.value.push(image.default);
  }
};

onMounted(() => {
  importAllImages();
});
</script>
<style scoped>
/* Overall Container */
.gallery-container {
  text-align: center; /* Center the header text */
  margin: 2rem auto; /* Add margin around the container and center it */
  max-width: 1200px; /* Limit the width for better layout */
}

/* Header Styling */
.gallery-header {
  color: #C0C0C0; /* Platinum Silver */
  font-size: 2.5rem; /* Font size for the header */
  font-family: 'Cinzel', serif; /* Clean and readable font */
  font-weight: 700; /* Make the header stand out */
  margin-bottom: 2rem; /* Space below the header */
  border-bottom: 2px solid #C0C0C0; /* Platinum Silver for the bottom border */
  display: inline-block; /* Ensure the border is centered under the text */
  padding-bottom: 0.5rem; /* Space between the text and the border */
}

/* Grid Layout */
.gallery-grid {
  display: grid; /* Use CSS Grid for layout */
  grid-template-columns: repeat(3, 1fr); /* 3 columns with equal width */
  gap: 1.5rem; /* Space between grid items */
}

/* Grid Item Styling */
.gallery-item {
  overflow: hidden; /* Ensure images don’t overflow their container */
  transition: transform 0.3s, box-shadow 0.3s; /* Add smooth hover effects */
}

/* Image Styling */
.gallery-image {
  display: block; /* Ensure images are block-level for proper alignment */
  width: 100%; /* Make images fill their container */
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px; /* Slightly rounded corners for a modern look */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: transform 0.3s; /* Smooth scaling effect on hover */
}

/* Hover Effects for Images */
.gallery-item:hover .gallery-image {
  transform: scale(1.05); /* Slightly enlarge on hover */
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
}

/* Responsive Design */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr; /* 1 column for smaller screens */
  }
}
</style>
