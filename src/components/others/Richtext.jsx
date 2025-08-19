import React from "react";
import PropTypes from "prop-types";
import "./richtext.scss";

const Richtext = ({ paragraph, tags }) => (
  <section className="richtext">
    <p className="richtext-paragraph">{paragraph}</p>
    <div className="richtext-tags">
      {tags.map((tag, idx) => (
        <span className="richtext-tag" key={idx}>
          {tag}
        </span>
      ))}
    </div>
  </section>
);

Richtext.propTypes = {
  paragraph: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Richtext;