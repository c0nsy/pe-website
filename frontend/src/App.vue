<template>
  <div>
    <!-- Contact Bar Component -->
    <ContactBar />
    <Navbar />
    <HeroSection />
    <Services />
    <Gallery />
    <ContactForm />
    <About />
  </div>
</template>

<script setup>
import ContactBar from "./components/ContactBar.vue";
import ContactForm from "./components/ContactForm.vue";
import Gallery from "./components/Gallery.vue";
import HeroSection from "./components/HeroSection.vue";
import Navbar from "./components/Navbar.vue";
import Services from "./components/Services.vue";
import About from "./components/About.vue";
</script>
