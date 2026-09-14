/* eslint-disable react/prop-types */
import "./component.scss";

const TextImage = ({ image, text }) => {
  return (
    <div className="text-media-container text-image-container">
      {image && <img className="text-image-visual" src={image} alt={text || "Project visual"} />}
      <p>{text}</p>
    </div>
  );
};

export default TextImage;
