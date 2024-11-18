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

    <!-- Additional Contact Information -->
    <div class="contact-info">
      <p>
        Serving Kitchener, Waterloo, Cambridge, Guelph, and greater Southwestern
        Ontario, our management team would enjoy hearing from you! We welcome
        all inquiries, from general questions to providing you with a cost
        estimate.
      </p>
      <div>
        <h3>Location</h3>
        <p>
          <strong>Office:</strong> Platinum Enterprise Group<br />10 Clemens
          Ave., Building 2, Cambridge, Ontario N3C 3W2
        </p>
        <p>
          <strong>Yard:</strong> 859 Courtland Ave East, Kitchener, Ontario N2C
          1K4
        </p>
      </div>
      <div>
        <h3>Telephone</h3>
        <p><strong>Primary:</strong> (548) 558-1970</p>
        <p><strong>After Hours:</strong> (519) 498-4694</p>
      </div>
      <div>
        <h3>Digital</h3>
        <p>
          <strong>Email: </strong>
          <a href="mailto:office@platinumeg.ca">office@platinumeg.ca</a>
        </p>
      </div>
      <div>
        <h3>Hours</h3>
        <p>Monday to Friday: 8:00 AM – 5:00 PM</p>
        <p>Saturday: By Appointment</p>
      </div>
    </div>
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
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
}

.form-header {
  text-align: center;
  color: orange;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: orange;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: orange;
}

textarea {
  resize: none;
}

.submit-button {
  background-color: orange;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #cc8400;
}

/* Contact Information Styles */
.contact-info {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #333;
}

.contact-info h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: orange;
}

.contact-info a {
  color: orange;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}
</style>
