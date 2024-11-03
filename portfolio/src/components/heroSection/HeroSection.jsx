import PropTypes from "prop-types";
import GridLayout from "../others/GridLayout";
import styles from "./heroSection.module.scss";
const HeroSection = ({ title, img, altText = "Hero Image" }) => {
  return (
    <section className={styles["hero-section"]}>
      <GridLayout columns={6}>
        <h1 className={`${styles["hero-title"]} ${styles["span-two-columns"]}`}>
          {title}
        </h1>
        <img
          src={img}
          alt={altText}
          className={`${styles["hero-image"]} ${styles["span-one-column"]}`}
        />
      </GridLayout>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default HeroSection;
