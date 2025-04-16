/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import GridLayout from "./GridLayout";
import "./component.scss";
const ShotDemo = ({ title, image, subtitle, text, demo }) => {
  return (
    <section className="shot-demo">
      <h2>{title}</h2>
      <GridLayout columns={2}>
        {image && <img src={image} alt={image} />}
        <div className="demoBanner">
          <h2>{subtitle}</h2>
          <p>{text}</p>
          <Link to={demo}>Discover</Link>
        </div>
      </GridLayout>
    </section>
  );
};

export default ShotDemo;
