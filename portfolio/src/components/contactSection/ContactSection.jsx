/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import GridLayout from "../others/GridLayout";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.scss";

const ContactSection = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false); // Reset error on success
        },
        (error) => {
          setError(true);
          setSuccess(false); // Reset success on error
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="mail-to">
          <h1>Mail to:</h1>
          <a href="mailto:avzkitchen@gmail.com">avzkitchen@gmail.com</a>
        </div>

        <div className="formContainer">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            {error && <p className="error-message">Error sending message</p>}
            {success && (
              <p className="success-message">Message sent successfully!</p>
            )}
            <button>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
