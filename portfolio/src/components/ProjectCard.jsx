import PropTypes from "prop-types";

const ProjectCard = ({ project, isBranding }) => {
  return (
    <div className={`project-card ${isBranding ? "branding" : ""}`}>
      <img src={project.img} alt={project.title} className="project-image" />
      <p className="project-skill">{project.skill}</p>
      <h3 className="project-title">{project.title}</h3>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  isBranding: PropTypes.bool,
};

export default ProjectCard;
