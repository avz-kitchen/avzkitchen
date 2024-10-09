import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <Link to={`/portfolio/${project.id}`}>
        <img src={project.img} alt={project.title} className="project-image" />
        <p className="project-skill">{project.skill}</p>
        <h3 className="project-title">{project.title}</h3>
        <button>View Project</button>
      </Link>
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
};

export default ProjectCard;
