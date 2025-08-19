/* eslint-disable react/prop-types */
import { useState } from "react";
import "./component.scss";

const PDFSlider = ({ pdfUrl }) => {
  const [currentIndex] = useState(0);

  return (
    <div className="pdf-slider">
      <iframe
        src={pdfUrl}
        title={`PDF ${currentIndex + 1}`}
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default PDFSlider;
