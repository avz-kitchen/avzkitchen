/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import GridLayout from "./GridLayout";
import "./component.scss";
const ShotDemo = ({ title, image, text, demo }) => {
  return (
    <section className="shot-demo">
      <h2>{title}</h2>
      <div className="demo">
        <GridLayout columns={2}>
          {image && <img src={image} alt={image} />}
          <Link to={demo}>Figma Demo </Link>
        </GridLayout>
      </div>
      <p>{text}</p>
    </section>
  );
};

export default ShotDemo;
