/* eslint-disable react/prop-types */
import { useState } from "react";
import "./dropdown.scss";

const Dropdown = ({ title, image, text, isFirst , isLast }) => {
  const [isOpen, setIsOpen] = useState(true); // Default to closed

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* Dropdown Header */}
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h2>{title}</h2>
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>+</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          className={`dropdown-content `}
        >
          {/* Render Image and Text Based on Conditions */}
          {isFirst && (
            <div dangerouslySetInnerHTML={{ __html: text }} />
          )}
          {!isFirst && !isLast && (
            <div className="text-left-image-right">
              <div
                className="dropdown-text"
                dangerouslySetInnerHTML={{ __html: text }}
              />
              <div className="dropdown-image">
                <img src={image} alt={title} />
              </div>
            </div>
          )}
        {isLast && (
          <div className="dropdown-last-row">
            <div className="dropdown-image">
              <img src={image} alt={title} />
            </div>
            <div className="dropdown-text" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
