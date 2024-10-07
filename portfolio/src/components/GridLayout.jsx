import PropTypes from "prop-types";
import "./GridLayout.scss"; // Import the corresponding SCSS file

const GridLayout = ({ columns, children, gap = 20 }) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return (
    <div className="grid-layout" style={gridStyle}>
      {children.map((child, index) => (
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
