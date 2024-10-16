/* eslint-disable no-undef */
import PropTypes from "prop-types";
import "./GridLayout.scss";
import React from "react";
const GridLayout = ({ columns, children, gap = 20 }) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return (
    <div className="grid-layout" style={gridStyle}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={`grid-item ${child.props.className || ""}`}>
          {child}
        </div>
      ))}
    </div>
  );
};

GridLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  gap: PropTypes.number,
};

export default GridLayout;
