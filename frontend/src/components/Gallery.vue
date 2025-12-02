<template>
  <div class="gallery-container" id="gallery">
    <h1 class="gallery-header">At Work</h1>
    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        :class="{ rectangular: index % 2 === 0, square: index % 2 !== 0 }"
        @click="openLightbox(image, index)"
      >
        <img :src="image" alt="Work Image" class="gallery-image" />
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">&times;</button>
      <button class="lightbox-nav lightbox-prev" @click.stop="prevImage" v-if="images.length > 1">
        &#8249;
      </button>
      <button class="lightbox-nav lightbox-next" @click.stop="nextImage" v-if="images.length > 1">
        &#8250;
      </button>
      <div class="lightbox-content" @click.stop>
        <img :src="currentImage" alt="Work Image" class="lightbox-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = ref([]);
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);
const currentImage = ref("");

const importAllImages = async () => {
  const imageModules = import.meta.glob("../assets/work/*.{png,jpg,jpeg,svg}");
  for (const path in imageModules) {
    const image = await imageModules[path]();
    images.value.push(image.default);
  }
};

const openLightbox = (image, index) => {
  currentImage.value = image;
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = "auto";
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
  currentImage.value = images.value[currentImageIndex.value];
};

const prevImage = () => {
  currentImageIndex.value =
    currentImageIndex.value === 0
      ? images.value.length - 1
      : currentImageIndex.value - 1;
  currentImage.value = images.value[currentImageIndex.value];
};

const handleKeyPress = (e) => {
  if (!lightboxOpen.value) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
};

onMounted(() => {
  importAllImages();
  window.addEventListener("keydown", handleKeyPress);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyPress);
  document.body.style.overflow = "auto";
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
  overflow: hidden; /* Ensure images don't overflow their container */
  transition: transform 0.3s, box-shadow 0.3s; /* Add smooth hover effects */
  cursor: pointer; /* Indicate images are clickable */
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

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 2rem;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 3rem;
  cursor: pointer;
  color: #ffffff;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  z-index: 2001;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 3rem;
  cursor: pointer;
  color: #ffffff;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  z-index: 2001;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-prev {
  left: 2rem;
}

.lightbox-next {
  right: 2rem;
}

@media (max-width: 768px) {
  .lightbox-close {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    font-size: 2rem;
  }

  .lightbox-nav {
    width: 50px;
    height: 50px;
    font-size: 2rem;
  }

  .lightbox-prev {
    left: 1rem;
  }

  .lightbox-next {
    right: 1rem;
  }
}
</style>
