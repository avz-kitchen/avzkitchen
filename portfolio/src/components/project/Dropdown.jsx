/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ title, image, text, isFirst }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isFirst ? "first-dropdown-layout" : ""}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>{title}</h3>
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>+</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {isFirst ? (
            <div className="first-dropdown-layout">
              {image && (
                <div className="dropdown-image">
                  <img src={image} alt={title} />
                </div>
              )}
              <div className="dropdown-text">
                <p>{text}</p>
              </div>
            </div>
          ) : (
            <div className="dropdown-text">
              <p>{text}</p>

              {image && <img src={image} alt={title} />}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
