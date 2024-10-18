<template>
  <div class="gallery-container" id="gallery">
    <h1 class="gallery-header">At Work</h1>
    <div class="gallery-grid">
      <div class="gallery-item rectangular">
        <div class="placeholder">Placeholder Image</div>
      </div>
      <div class="gallery-item square">
        <div class="placeholder">Placeholder Image</div>
      </div>
      <div class="gallery-item rectangular">
        <div class="placeholder">Placeholder Image</div>
      </div>
      <div class="gallery-item square">
        <div class="placeholder">Placeholder Image</div>
      </div>
      <div class="gallery-item rectangular">
        <div class="placeholder">Placeholder Image</div>
      </div>
      <div class="gallery-item square">
        <div class="placeholder">Placeholder Image</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.gallery-container {
  text-align: center; /* Center the header text */
  margin: 2rem; /* Add margin around the container */
}

.gallery-header {
  color: orange; /* Orange text color for header */
  font-size: 2.5rem; /* Font size for the header */
  margin-bottom: 2rem; /* Space below the header */
}

.gallery-grid {
  display: flex; /* Use Flexbox for layout */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  gap: 1.5rem; /* Space between items */
}

.gallery-item {
  width: 40%; /* Set each item to 40% width */
  display: flex; /* Flexbox for centering placeholder text */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  border: 2px solid orange; /* Orange outline */
  border-radius: 8px; /* Slightly rounded corners */
  padding: 2rem; /* Padding inside the item */
}

.placeholder {
  color: orange; /* Color of the placeholder text */
  font-size: 1.5rem; /* Font size for placeholder text */
}
</style>
