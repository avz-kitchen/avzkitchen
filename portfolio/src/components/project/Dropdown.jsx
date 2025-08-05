/* eslint-disable react/prop-types */
import { useState } from "react";
import "./dropdown.scss";

const Dropdown = ({ title, image, text, isFirst }) => {
  const [isOpen, setIsOpen] = useState(true); // Default to closed

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* Dropdown Header */}
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>{title}</h3>
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>+</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          className={`dropdown-content ${
            isFirst ? "image-left-text-right" : "image-right-text-left"
          }`}
        >
          {/* Render Image and Text Based on Conditions */}
          {isFirst && (
            <>
              <div className="dropdown-image">
                <img src={image} alt={title} />
              </div>
              <div className="dropdown-text">
                <p>{text}</p>
              </div>
            </>
          )}
          {!isFirst && (
            <>
              <div className="dropdown-text">
                <p>{text}</p>
              </div>
              <div className="dropdown-image">
                <img src={image} alt={title} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
