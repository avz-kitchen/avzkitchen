import PropTypes from "prop-types";
import GridLayout from "../GridLayout";

const HeroSection = ({ title, img, altText = "Hero Image" }) => {
  return (
    <section>
      <GridLayout columns={3}>
        <h1 className="hero-title span-two-columns">{title}</h1>
        <img src={img} alt={altText} className="hero-image span-one-column" />
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
