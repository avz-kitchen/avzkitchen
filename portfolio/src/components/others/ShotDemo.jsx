/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import GridLayout from "./GridLayout";

const ShotDemo = ({ title, image, text, demo }) => {
  return (
    <>
      <h1>{title}</h1>
      <GridLayout columns={2}>
        {image && <img src={image} alt={image} />}
        <Link to={demo}> Figma Demo </Link>
      </GridLayout>
      <p>{text}</p>
    </>
  );
};

export default ShotDemo;
