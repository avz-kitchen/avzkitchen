/* eslint-disable react/prop-types */
import "./TextMedia.scss";

const TextMedia = ({ title, image, text }) => {
  return (
    <div className="text-media-container">
      <h1>{title}</h1>
      {image && <img src={image} alt={title} />}
      <p>{text}</p>
    </div>
  );
};

export default TextMedia;
