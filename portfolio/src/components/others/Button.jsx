import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({ children, variant = "primary", to, href, ...props }) => {
  const className = `btn ${variant}`;

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  to: PropTypes.string,
  href: PropTypes.string,
};

export default Button;