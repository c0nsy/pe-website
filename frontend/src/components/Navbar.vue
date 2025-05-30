<template>
  <nav class="nav-bar">
    <div class="left-aligned">
      <img src="../assets/logo.png" alt="Logo" width="100" height="100" />
    </div>
    <div class="center-aligned">
      <span class="welcome-text"
        >Welcome To Platinum Enterprise Group - A Step Above The Rest!</span
      >
    </div>
    <div class="right-aligned">
      <span class="nav-link" @click="handleNavigation('home')">Home</span>
      <span class="nav-link" @click="handleNavigation('about')">About</span>
      <span class="nav-link" @click="handleNavigation('services')"
        >Services</span
      >
      <button class="contact-button" @click="handleNavigation('contact')">
        Contact
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleNavigation = (section) => {
  // If we're not on the home page, navigate there first
  if (router.currentRoute.value.path !== "/") {
    router.push("/").then(() => {
      // After navigation, scroll to the section
      setTimeout(() => {
        scrollToSection(section);
      }, 500); // Increased delay to ensure page is fully loaded
    });
  } else {
    // If we're already on home page, just scroll
    scrollToSection(section);
  }
};

const scrollToSection = (section) => {
  let targetId;
  switch (section) {
    case "home":
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    case "about":
      targetId = "#about";
      break;
    case "services":
      targetId = "#services";
      break;
    case "contact":
      targetId = "#contact-form";
      break;
  }

  // More robust scroll handling
  const scrollToElement = () => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const yOffset = -165; // Adjust this value based on your navbar height
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    } else {
      // If element not found, try again after a short delay
      setTimeout(scrollToElement, 100);
    }
  };

  scrollToElement();
};
</script>

<style scoped>
.nav-bar {
  display: grid;
  grid-template-columns: 150px 1fr 250px;
  align-items: center;
  background-color: #000000;
  padding: 0 3rem;
  position: fixed;
  width: 100%;
  top: 35px;
  z-index: 9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
}

.left-aligned {
  display: flex;
  align-items: center;
  grid-column: 1;
}

.center-aligned {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
}

.welcome-text {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 500;
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0.5px;
  opacity: 0.9;
}

.right-aligned {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
  align-items: center;
  width: fit-content;
  grid-column: 3;
  position: relative;
  z-index: 1;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  opacity: 0.8;
}

.nav-link:hover {
  opacity: 1;
  transform: translateY(-1px);
}

.contact-button {
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  letter-spacing: 0.3px;
  font-size: 0.9rem;
}

.contact-button:hover {
  background-color: #f0f0f0;
  transform: translateY(-1px);
}

.left-aligned img {
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.left-aligned img:hover {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .nav-bar {
    grid-template-columns: 100px 1fr 120px;
    padding: 0 1rem;
  }

  .welcome-text {
    display: none;
  }

  .nav-link {
    font-size: 0.8rem;
  }

  .contact-button {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }
}
</style>
