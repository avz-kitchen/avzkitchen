import PropTypes from "prop-types";
import Button from "./Button";

const ActionRow = ({ actions = [], className = "" }) => {
  if (!actions.length) return null;

  return (
    <div className={`action-row ${className}`.trim()}>
      {actions.map(({ label, variant = "primary", to, href, onClick, type = "button", ...props }, index) => {
        const key = `${label}-${index}`;

        if (to || href) {
          return (
            <Button key={key} variant={variant} to={to} href={href} onClick={onClick} {...props}>
              {label}
            </Button>
          );
        }

        return (
          <Button key={key} variant={variant} type={type} onClick={onClick} {...props}>
            {label}
          </Button>
        );
      })}
    </div>
  );
};

ActionRow.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
      to: PropTypes.string,
      href: PropTypes.string,
      onClick: PropTypes.func,
      type: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

export default ActionRow;
