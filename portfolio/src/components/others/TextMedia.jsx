/* eslint-disable react/prop-types */
import "./component.scss";

const TextMedia = ({ title, image, text }) => {
  return (
    <div className="text-media-container">
      <h2>{title}</h2>
      {image && <img src={image} alt={title} />}
      <p>{text}</p>
    </div>
  );
};

export default TextMedia;
