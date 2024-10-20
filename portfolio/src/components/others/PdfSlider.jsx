/* eslint-disable react/prop-types */
import { useState } from "react";
import "./component.scss";

const PDFSlider = ({ pdfUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pdfUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pdfUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="pdf-slider">
      <button onClick={handlePrev}>Previous</button>
      <iframe
        src={pdfUrls[currentIndex]}
        title={`PDF ${currentIndex + 1}`}
        width="100%"
        height="600px"
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PDFSlider;
