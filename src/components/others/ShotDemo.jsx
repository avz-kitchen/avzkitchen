/* eslint-disable react/prop-types */
import "./component.scss";
import Button from "./Button";

const ShotDemo = ({ title, image, subtitle, text, demo }) => {
  const hasImage = Boolean(image && image.trim());

  return (
    <div className="shot-demo">
      <h2>{title}</h2>
      <div className={`shot-demo-content ${hasImage ? "has-image" : "no-image"}`}>
        {hasImage && (
          <div className="shot-demo-image">
            <img src={image} alt={subtitle || title || "Project preview"} />
          </div>
        )}

        <div className="shot-demo-copy">
          {subtitle && <h3>{subtitle}</h3>}
          {text && <p>{text}</p>}
          {demo && (
            <Button variant="tertiary" href={demo} target="_blank" rel="noopener noreferrer">
              View Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShotDemo;
