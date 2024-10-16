import "./slider.module.scss";
import PropTypes from "prop-types";

const Slider = ({
  beforeContent,
  afterContent,
  beforeLabel = "Before",
  afterLabel = "After",
}) => {
  const handleMouseMove = (e) => {
    const slider = document.getElementById("slider");
    const bounds = slider.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const percent = (mouseX / bounds.width) * 100;

    slider.style.setProperty("--slider-position", `${percent}%`);
  };

  return (
    <div id="slider" className="slider-container" onMouseMove={handleMouseMove}>
      <div className="slider-content left">
        <h2>{beforeLabel}</h2>
        <div>{beforeContent}</div> {/* Dynamic Before Content */}
      </div>
      <div className="slider-content right">
        <h2>{afterLabel}</h2>
        <div>{afterContent}</div> {/* Dynamic After Content */}
      </div>
      <div className="slider-handle"></div>
    </div>
  );
};

Slider.propTypes = {
  beforeContent: PropTypes.node.isRequired,
  afterContent: PropTypes.node.isRequired,
  beforeLabel: PropTypes.string,
  afterLabel: PropTypes.string,
};

export default Slider;
