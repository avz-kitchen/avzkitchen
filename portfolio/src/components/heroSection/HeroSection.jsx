import PropTypes from "prop-types";
import GridLayout from "../GridLayout";
import "./HeroSection.scss";

const HeroSection = ({ title, img, altText = "Hero Image" }) => {
  return (
    <GridLayout columns={6}>
      <h1 className="hero-title span-four-columns">{title}</h1>
      <img src={img} alt={altText} className="hero-image span-two-columns" />
    </GridLayout>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default HeroSection;
