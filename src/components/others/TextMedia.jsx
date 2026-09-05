/* eslint-disable react/prop-types */
import "./component.scss";

const TextMedia = ({ title, image, text }) => {
  const hasImage = Boolean(image && image.trim());

  return (
      <div className="text-media-copy">
        <h2>{title}</h2>
        <p className="rich-text">{text}</p>
      </div>
  );
};

export default TextMedia;
