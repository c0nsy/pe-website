import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    from_name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    // Initialize EmailJS
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          message: form.message,
          reply_to: form.email,
        }
      );

      console.log('Email sent successfully:', response);
      alert('Your message has been sent!');
      clearForm();
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  const clearForm = () => {
    setForm({
      from_name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-section" id="contact-form">
      <h1 className="section-title">
        Request a Free Quote - Property Maintenance Services in Cambridge, Kitchener & Waterloo
      </h1>
      <p className="section-description">
        Sick of chasing down contractors who vanish faster than your budget? Whether you manage properties in Cambridge, build them from the ground up in Kitchener, or run commercial sites in Waterloo that demand real results — you're in the right place. At Platinum Enterprise Group, we don't cut corners (unless it's grass). We show up, we handle business, and we make you look like a genius for hiring us. From 24/7 maintenance and snow removal to full-scale renovations and upgrades, we do it all — and we do it properly. Serving Cambridge, Kitchener, Waterloo, Waterloo Region, and throughout Southwestern Ontario. Fill out the form below and tell us what you need. No fluff. No excuses. Just professionals who actually pick up the phone, get the job done, and keep your properties running smoother than your tenant's excuses.
      </p>
      <form onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project or inquiry"
            rows="5"
          />
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

