/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../others/Button";
import { getUiText } from "../../i18n/content";
import "./ContactSection.scss";

const ContactSection = ({ locale = "en" }) => {
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
            <Helmet>
        <title>AVZKITCHEN | Contact Angelica Valenzuela Freelance Digital Product Designer & Developer</title>
        <meta name="description" content="Get in touch with Angelica Valenzuela for design and development projects, collaborations, or freelance opportunities." />
        <meta name="keywords" content="Angelica Valenzuela , contact digital designer, hire UI/UX developer,  hire designer , amazon specialist , Branding, Product Design, Code, Portfolio, Angelica, UX, UI, Digital Products , Front End Development , Amazon ,  Shopify , Elementor" />
      </Helmet>
      <div className="contact-container">
   
                  <h1>{getUiText(locale, "contact", "heading")}</h1>
          <p>{getUiText(locale, "contact", "intro")}</p>
                  <a href="mailto:hello@avzkitchen.com">{getUiText(locale, "contact", "email")}</a>

        <div className="formContainer">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <input type="text" required placeholder={getUiText(locale, "contact", "name")} name="name" />
            <input type="email" required placeholder={getUiText(locale, "contact", "emailField")} name="reply_to" />
            <select name="subject" defaultValue="" required>
              <option value="" disabled>{getUiText(locale, "contact", "projectType")}</option>
              {getUiText(locale, "contact", "options").map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <textarea rows={8} required placeholder={getUiText(locale, "contact", "message")} name="message" />
            {error && <p className="error-message">{getUiText(locale, "contact", "error")}</p>}
            {success && (
              <p className="success-message">{getUiText(locale, "contact", "success")}</p>
            )}
            <Button variant="primary" type="submit">{getUiText(locale, "contact", "send")}</Button>
          </motion.form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
