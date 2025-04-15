import HeroSection from "../heroSection/HeroSection";
import TextMedia from "../others/TextMedia";
import TextImage from "../others/TextImage";
import PDFSlider from ".././others/PDFSlider";
import "./Portfolio.scss";

const BrandingDetail = ({ project }) => {
  return (
    <div className="branding-detail-page">
      <HeroSection
        title={project.title}
        img={project.main}
        category={project.category}
        year={project.year}
      />
      <TextMedia
        title={project.subtitle}
        image={project.main}
        text={project.desc}
      />
      <h2>{project.title2}</h2>
      <div className="two-images">
        <img src={project.img} />
        <img src={project.img2} />
      </div>
      <img src={project.design} className="full-image" />

      <TextImage image={project.flow} text={project.text} />
    </div>
  );
};

export default BrandingDetail;
