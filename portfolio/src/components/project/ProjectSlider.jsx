/* eslint-disable react/prop-types */
import { useState } from "react";
import "./component.scss";
const ProjectSlider = ({ data, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="process-findings-slider">
      <h2>{title}</h2>
      <button onClick={prevItem}>&lt;</button>
      <div className="item">
        <p>{data[currentIndex]}</p>
      </div>
      <button onClick={nextItem}>&gt;</button>
      <style jsx>{`
        .process-findings-slider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0;
        }
        .item {
          min-width: 300px; /* Adjust width as necessary */
          padding: 20px;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 10px;
          background-color: #f9f9f9;
          transition: all 0.3s ease;
        }
        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          margin: 0 10px;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ProjectSlider;
