/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./component.scss";
import Button from "./Button";
const ShotDemo = ({ title, image, subtitle, text, demo }) => {
  return (
    <div className="shot-demo">
      <h2>{title}</h2>
      <div className="shot-demo-content">
        {image && <img src={image} alt={image} />}
        <div >
          <h3>{subtitle}</h3>
          <p>{text}</p>
          <Button variant="tertiary" href={demo} target="_blank" rel="noopener noreferrer">
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShotDemo;
