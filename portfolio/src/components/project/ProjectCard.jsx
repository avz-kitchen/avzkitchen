/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../others/Button";

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
        <img  src={isHomePage ? project.logo : project.main}
alt={project.title} className="project-image" />
<p className="project-skill">
  ({Array.isArray(project.skills) ? project.skills.join(", ") : project.skills})
</p>{isHomePage ? (
  <h2 className="project-title">{project.title}</h2>
) : (
  <h3>{project.title}</h3>
)}
        <p className="project-subtitle">{project.subtitle}</p>
      <Button variant="secondary">View Project</Button>
      </Link>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string), 
    img: PropTypes.string.isRequired,
    isHomePage: PropTypes.bool,
  }).isRequired,
};

export default ProjectCard;
