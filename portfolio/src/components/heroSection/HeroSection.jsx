import PropTypes from "prop-types";
import GridLayout from "../others/GridLayout";
import styles from "./heroSection.module.scss";
import Button from "../others/Button";

function HeroSection({ title, year, img, category, skills = [], altText = "Hero Image" }) {
  return (
    <section className={styles["hero-section"]}>
      <Button variant="secondary" link="/projects">
        Back to Projects
      </Button>
      <GridLayout columns={6}>
        <div className={styles["span-two-columns"]}>
          {category && <span className={styles["tag"]}>{category}</span>}
          <h1 className={styles["hero-title"]}>{title}</h1>
          {year && <span className={styles["date"]}>Year : {year}</span>}
          {skills.length > 0 && (
            <div className="spacing">
              {skills.map((skill, index) => (
                <span key={index} className="tag" >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
        <img
          src={img}
          alt={altText}
          className={`${styles["hero-image"]} ${styles["span-one-column"]}`}
        />
      </GridLayout>
    </section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  img: PropTypes.string.isRequired,
  category: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  altText: PropTypes.string,
};

export default HeroSection;
