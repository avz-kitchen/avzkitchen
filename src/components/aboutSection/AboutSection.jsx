/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import "../../App.scss";
import { motion, useInView } from "framer-motion";
import GridLayout from "../others/GridLayout";
import Button from "../others/Button";
import { Link } from "react-router-dom";
import { getUiText, getLocalizedPath } from "../../i18n/content";

const AboutSection = ({ isAboutPage, locale = "en" }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-80px" });
  const [currentRole, setCurrentRole] = useState(0);
  const roleLabels = getUiText(locale, "bio", "roles") || ["Designer", "Developer", "Illustrator"];
  const heroTitle = getUiText(locale, "bio", "heroTitle") || "The Chef Behind the Visual Kitchen — Angelica Valenzuela";
  const aboutButton = getUiText(locale, "bio", "aboutButton") || "About Me";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roleLabels.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roleLabels.length]);

  return (
    <section className="about-section">
      <GridLayout className="responsive-grid">
        <div>
          <div className="title title-stack">
            <h1 aria-label={heroTitle}>{heroTitle}</h1>
  
          </div>
          <div className="title">
            <h2 aria-label={roleLabels.join(", ")}>
              {getUiText(locale, "bio", "rolePrefix") || "a"} {"< "}
              <motion.b>{roleLabels[currentRole]}</motion.b> {">"}
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
            src="/about/avz-profile.png"
            alt="Portrait of Angelica Valenzuela (AVZ Kitchen)"
          />
          {!isAboutPage && (
            <Button variant="secondary" to={getLocalizedPath("/bio", locale)} style={{ justifySelf: "center" }}>
              {aboutButton}
            </Button>
          )}
        </div>
      </GridLayout>
    </section>
  );
};

export default AboutSection;
