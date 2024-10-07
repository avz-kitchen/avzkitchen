import PropTypes from "prop-types";
import "./GridLayout.scss"; // Import the corresponding SCSS file

const GridLayout = ({ columns, children }) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
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
};

export default GridLayout;
