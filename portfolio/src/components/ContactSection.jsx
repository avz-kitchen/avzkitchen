import { motion } from "framer-motion";
import GridLayout from "./GridLayout";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef();
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
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <section className="contact-section">
      <GridLayout>
        <motion.h4 className="vertical-text" whileHover={{ scale: 1.1 }}>
          Have an Idea?
        </motion.h4>

        <div>
          <h1>Mail to:</h1>
          <a href="mailto:contact@avzkitchen.com">contact@avzkitchen.com</a>
        </div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
        <ul>
          <li>
            <a href="/portfolio/">Pictogram</a>
          </li>
          <li>
            <a href="/portfolio/">Design</a>
          </li>
          <li>
            Code
            <a href="/portfolio/">Code</a>
          </li>
        </ul>
      </GridLayout>
    </section>
  );
};

export default ContactSection;
