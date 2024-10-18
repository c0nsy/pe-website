<template>
  <div class="contact-form" id="contact-form">
    <h2 class="form-header">Contact Us</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="subject" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" rows="6" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const handleSubmit = () => {
  // Handle form submission logic here (e.g., sending data to an API)
  console.log({
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  });
};
</script>

<style scoped>
.contact-form {
  max-width: 600px; /* Limit form width */
  margin: 0 auto; /* Center the form */
  padding: 2rem; /* Padding around the form */
  border: 1px solid #ccc; /* Border around the form */
  border-radius: 8px; /* Rounded corners */
  background-color: white; /* White background */
}

.form-header {
  text-align: center; /* Center header text */
  color: orange; /* Orange text for the header */
  margin-bottom: 1.5rem; /* Space below the header */
}

.form-group {
  margin-bottom: 1.5rem; /* Space between form groups */
}

label {
  display: block; /* Make labels block elements */
  margin-bottom: 0.5rem; /* Space below labels */
  color: orange; /* Orange text for labels */
}

input,
textarea {
  width: 100%; /* Full width inputs */
  padding: 0.5rem; /* Padding inside inputs */
  border: 1px solid #ccc; /* Border for inputs */
  border-radius: 4px; /* Slightly rounded corners */
  color: orange; /* Orange text for inputs */
}

textarea {
  resize: none; /* Prevent resizing of textarea */
}

.submit-button {
  background-color: orange; /* Orange button */
  color: white; /* White text color */
  border: none; /* Remove border */
  border-radius: 4px; /* Rounded corners */
  padding: 0.75rem 1.5rem; /* Padding for the button */
  cursor: pointer; /* Change cursor on hover */
  transition: background-color 0.3s; /* Smooth transition */
}

.submit-button:hover {
  background-color: #cc8400; /* Darker orange on hover */
}
</style>
