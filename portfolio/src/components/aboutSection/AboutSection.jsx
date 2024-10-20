/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./AboutSection.module.scss";
import { motion, useInView } from "framer-motion";
import GridLayout from "../others/GridLayout";
import { Link } from "react-router-dom";
const variants = {
  initial: {
    x: -500,
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

const AboutSection = ({ isAboutPage }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section className="about-section">
      <GridLayout columns={1}>
        <motion.div
          className="about-avz"
          ref={ref}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.div className="titleContainer" variants={variants}>
            <div className="title">
              <h1>
                Hello, {"I'm "}
                <motion.b>Ang Valenzuela</motion.b>
              </h1>
            </div>
            <div className="title">
              <h2>
                a {"<"}
                <motion.b whileHover={{ color: "blue" }}>Designer</motion.b>
                {">"}
              </h2>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="right-section">
          <img src="/public/content.png" alt="Some Image" />
          {!isAboutPage && (
            <Link to="/about">
              <button>About Me</button>
            </Link>
          )}
        </motion.div>
      </GridLayout>
    </section>
  );
};

export default AboutSection;
