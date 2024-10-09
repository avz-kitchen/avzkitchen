/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import GridLayout from "./GridLayout";
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
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
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
      <GridLayout columns={3}>
        <motion.h4 className="vertical-text" whileHover={{ scale: 1.1 }}>
          Have an Idea?
        </motion.h4>

        <div>
          <h1>Mail to:</h1>
          <a href="mailto:contact@avzkitchen.com">contact@avzkitchen.com</a>
        </div>

        <div className="formContainer">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Submit</button>
            {error && <p className="error-message">Error sending message</p>}
            {success && (
              <p className="success-message">Message sent successfully</p>
            )}
          </motion.form>
        </div>
      </GridLayout>
    </section>
  );
};

export default ContactSection;
