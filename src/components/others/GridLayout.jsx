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
  columns: PropTypes.number.isRequired, // Number of columns for the grid
  children: PropTypes.node.isRequired, // Grid items
  gap: PropTypes.number, // Gap between grid items
};

GridLayout.defaultProps = {
  columns: 2, // Default to 2 columns
  gap: 20, // Default gap of 20px
};

export default GridLayout;
