/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProjectCard = ({ project, isHomePage }) => {
  return (
    <div className="project-card">
      <Link to={`/portfolio/${project.id}`}>
        <img src={project.img} alt={project.title} className="project-image" />
        <p className="project-skill">{project.skill}</p>
        <h3 className="project-title">{project.title}</h3>
        {!isHomePage && <button>View Project</button>}
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
    isHomePage: PropTypes.bool,
  }).isRequired,
};

export default ProjectCard;
