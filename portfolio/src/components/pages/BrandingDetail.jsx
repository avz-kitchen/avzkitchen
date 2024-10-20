/* eslint-disable react/prop-types */
import HeroSection from "../heroSection/HeroSection";
import TextMedia from "../others/TextMedia";
import TextImage from "../others/TextImage";
import PDFSlider from ".././others/PDFSlider";
import "./Portfolio.scss";

const BrandingDetail = ({ project }) => {
  console.log("PDF URL:", project.pdfUrl);
  console.log("Current project:", project);

  return (
    <div className="branding-detail-page">
      <HeroSection title={project.title} img="public/hero.png" />
      <TextMedia
        title={project.subtitle}
        image={project.main}
        text={project.desc}
      />
      {project.pdfUrl && project.pdfUrl.length > 0 ? (
        <PDFSlider pdfUrl={project.pdfUrl} />
      ) : (
        <p>No PDFs available for this project.</p>
      )}
      <TextImage image={project.flow} text={project.text} />
    </div>
  );
};

export default BrandingDetail;
