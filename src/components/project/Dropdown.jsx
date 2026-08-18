/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import AnimatedMedia from "../others/AnimatedMedia";
import "./dropdown.scss";

const Dropdown = ({ title, image, text, isFirst, isLast }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const isJsonAsset = typeof image === "string" && image.toLowerCase().endsWith(".json");

    if (!isJsonAsset) {
      setAnimationData(null);
      return;
    }

    let cancelled = false;

    const loadAnimation = async () => {
      try {
        const response = await fetch(image);
        if (!response.ok) {
          throw new Error("Failed to load animation JSON");
        }
        const json = await response.json();
        if (!cancelled) {
          setAnimationData(json);
        }
      } catch {
        if (!cancelled) {
          setAnimationData(null);
        }
      }
    };

    loadAnimation();

    return () => {
      cancelled = true;
    };
  }, [image]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h2>{title}</h2>
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>+</span>
      </div>

      {isOpen && (
        <div className="dropdown-content">
          {isFirst && <div dangerouslySetInnerHTML={{ __html: text }} />}

          {!isFirst && !isLast && (
            image ? (
              <div className="text-left-image-right">
                <div
                  className="dropdown-text"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
                <div className="dropdown-image">
                  <AnimatedMedia
                    image={image}
                    animationData={animationData}
                    alt={title}
                    className="dropdown-media"
                  />
                </div>
              </div>
            ) : (
              <div
                className="dropdown-text"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )
          )}

          {isLast && (
            <div className="dropdown-last-row">
              <div className="dropdown-image">
                <AnimatedMedia
                  image={image}
                  animationData={animationData}
                  alt={title}
                  className="dropdown-media"
                />
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
