import React from "react";
import PropTypes from "prop-types";
import "./richtext.scss";

const Richtext = ({ paragraph, tags }) => (
  <section className="richtext">
    {/* By wrapping {paragraph} in a p tag, it will render strings or components correctly */}
    <div className="richtext-paragraph">{paragraph}</div>
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
  // node allows anything that can be rendered: numbers, strings, elements, or arrays
  paragraph: PropTypes.node.isRequired, 
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Richtext;