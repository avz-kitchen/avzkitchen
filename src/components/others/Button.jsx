import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({ children, variant = "primary", to, href, className = "", type = "button", ...props }) => {
  const resolvedClassName = ["btn", variant, className].filter(Boolean).join(" ");

  if (to) {
    return (
      <Link to={to} className={resolvedClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={resolvedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={resolvedClassName} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;