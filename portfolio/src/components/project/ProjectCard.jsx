/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Function to transform the title into a URL-friendly format
const transformToUrl = (title) => {
  const transformed = title.replace(/\s+/g, "-").toLowerCase();
  return transformed;
};

const ProjectCard = ({ project, isHomePage }) => {
  // Generate URL for the project and log it
  const projectUrl = transformToUrl(project.title);

  return (
    <div className="project-card">
      <Link to={`/portfolio/${projectUrl}`}>
        <img src={project.img} alt={project.title} className="project-image" />
        <p className="project-skill">{project.skill}</p>
        <h3 className="project-title">
          {project.title}
          : <br />
          {project.subtitle}
        </h3>
        {!isHomePage && <button className="underlined-b">View Project</button>}
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
