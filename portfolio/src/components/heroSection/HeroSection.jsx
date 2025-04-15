import PropTypes from "prop-types";
import GridLayout from "../others/GridLayout";
import styles from "./heroSection.module.scss";
const HeroSection = ({
  title,
  year,
  img,
  category,
  altText = "Hero Image",
}) => {
  return (
    <section className={styles["hero-section"]}>
      <GridLayout columns={6}>
        <div className={styles["span-two-columns"]}>
          {category && <span className={styles["tag"]}>{category}</span>}
          <h1 className={`${styles["hero-title"]} `}>{title}</h1>
          {year && <span className={styles["date"]}>Year : {year}</span>}{" "}
        </div>
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
