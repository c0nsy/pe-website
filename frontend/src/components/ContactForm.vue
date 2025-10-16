<template>
  <div class="contact-section" id="contact-form">
    <h2 class="section-title">Get in Touch</h2>
    <p class="section-description">
      Sick of chasing down contractors who vanish faster than your budget? Whether you manage properties, build them from the ground up, or run commercial sites that demand real results — you're in the right place. At Platinum Enterprise Group, we don't cut corners (unless it's grass). We show up, we handle business, and we make you look like a genius for hiring us. From 24/7 maintenance and snow removal to full-scale renovations and upgrades, we do it all — and we do it properly. Fill out the form below and tell us what you need. No fluff. No excuses. Just professionals who actually pick up the phone, get the job done, and keep your properties running smoother than your tenant's excuses.
    </p>
    <form @submit.prevent="sendEmail" class="contact-form">
      <div class="form-group">
        <label for="from_name">Name</label>
        <input
          type="text"
          id="from_name"
          name="user_name"
          v-model="form.from_name"
          required
          placeholder="Your name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
          v-model="form.email"
          required
          placeholder="Your email address"
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          v-model="form.message"
          required
          placeholder="Tell us about your project or inquiry"
          rows="5"
        ></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
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
.contact-section {
  max-width: 800px;
  margin: 100px auto;
  padding: 2rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
}

.section-title {
  text-align: center;
  color: #000000;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.section-description {
  text-align: center;
  color: #000000;
  opacity: 0.9;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.3px;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background-color: #000000;
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.contact-form:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.3px;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #ffffff;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 0.3px;
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: #f0f0f0;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .contact-section {
    margin: 80px 1rem;
    padding: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  input,
  textarea {
    font-size: 0.95rem;
  }
}
</style>
