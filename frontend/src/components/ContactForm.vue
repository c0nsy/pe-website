<template>
  <form @submit.prevent="sendEmail" id="contact-form" class="contact-form">
    <div class="form-group">
      <label for="from_name">Name:</label>
      <input
        type="text"
        id="from_name"
        name="user_name"
        v-model="form.from_name"
        required
      />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="user_email"
        v-model="form.email"
        required
      />
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea
        id="message"
        name="message"
        v-model="form.message"
        required
      ></textarea>
    </div>
    <button type="submit" class="submit-button">Send Message</button>
  </form>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      form: {
        from_name: "",
        email: "",
        message: "",
      },
    };
  },
  mounted() {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  },
  methods: {
    sendEmail() {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your actual service ID
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your actual template ID
          {
            from_name: this.form.from_name,
            message: this.form.message,
            reply_to: this.form.email,
          }
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            alert("Your message has been sent!");
            this.clearForm();
          },
          (error) => {
            console.error("Failed to send email:", error);
            alert("Oops! Something went wrong. Please try again.");
          }
        );
    },
    clearForm() {
      this.form.from_name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #444;
  border-radius: 8px;
  background-color: #1e1e1e; /* Dark background for the form */
  color: #fff; /* Light text for contrast */
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #ccc; /* Lighter grey for labels */
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333; /* Dark background for inputs */
  color: #fff; /* White text in inputs */
}

textarea {
  resize: none;
}

.submit-button {
  background-color: #444; /* Dark button background */
  color: #fff; /* White text */
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #555; /* Slightly lighter on hover */
}
</style>
