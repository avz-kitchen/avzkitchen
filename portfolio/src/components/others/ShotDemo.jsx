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
          <div className="demoBanner">
            <p>{text}</p>
            <Link to={demo}>Demo App on Figma</Link>
          </div>
        </GridLayout>
      </div>
    </section>
  );
};

export default ShotDemo;
