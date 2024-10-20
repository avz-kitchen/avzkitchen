/* eslint-disable react/prop-types */
import PDFSlider from ".././others/PDFSlider";
import "./Portfolio.scss";

const BrandingDetail = ({ brandingData }) => {
  return (
    <div className="branding-detail-page">
      <h2>{brandingData.title}</h2>
      <p>{brandingData.description}</p>
      <PDFSlider pdfUrls={brandingData.pdfUrls} />
    </div>
  );
};

export default BrandingDetail;
