import PropTypes from "prop-types";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  const classes = ["section-heading", align === "left" ? "left" : "center", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2 className={titleClassName}>{title}</h2> : null}
      {description ? (
        <p className={`section-description ${descriptionClassName}`.trim()}>{description}</p>
      ) : null}
    </div>
  );
};

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(["left", "center"]),
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
};

export default SectionHeading;
