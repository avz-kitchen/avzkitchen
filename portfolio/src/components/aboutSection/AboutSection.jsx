/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import '../../app.scss';
import { motion, useInView } from "framer-motion";
import GridLayout from "../others/GridLayout";
import { Link } from "react-router-dom";
const variants = {
  initial: {
    x: -300,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const roles = ["Designer", "Developer", "Illustrator"];

const AboutSection = ({ isAboutPage }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-80px" });
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="about-section">
      <GridLayout className="responsive-grid">
        <div>
          <div className="title">
            <h1>
              Hello, {"I'm "}
              <motion.b>Ang Valenzuela</motion.b>
            </h1>
          </div>
          <div className="title">
            <h2>
              a {"< "}
              <motion.b>{roles[currentRole]}</motion.b> {">"}
            </h2>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            style={{ width: "85%" }}
            src="/about/avz-anime.gif"
            alt="animated illustration of av"
          />
          {!isAboutPage && (
            <Link to="/about">
              <button
                style={{
                  justifySelf: "center",
                }}
              >
                About Me
              </button>
            </Link>
          )}
        </div>
      </GridLayout>
    </section>
  );
};

export default AboutSection;
