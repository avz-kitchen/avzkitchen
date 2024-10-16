/* eslint-disable react/prop-types */
import "./TextMedia.scss";

const TextImage = ({ image, text }) => {
  return (
    <div className="text-media-container">
      {image && <img src={image} alt={image} />}
      <p>{text}</p>
    </div>
  );
};

export default TextImage;
