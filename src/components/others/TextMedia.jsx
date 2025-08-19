/* eslint-disable react/prop-types */
import "./component.scss";

const TextMedia = ({ title, image, text }) => {
  return (
    <div className="text-media-container ">
      <h2>{title}</h2>
      <p className="rich-text">{text}</p>
    </div>
  );
};

export default TextMedia;
