import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <motion.h2 whileHover={{ scale: 1.1 }}>Have an Idea?</motion.h2>
      <p>Feel free to reach out via:</p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:contact@avzkitchen.com">contact@avzkitchen.com</a>
        </li>
        <li>LinkedIn</li>
        <li>GitHub</li>
      </ul>
    </section>
  );
};

export default ContactSection;
