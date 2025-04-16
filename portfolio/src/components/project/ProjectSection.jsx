import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GridLayout from "../others/GridLayout";
import ProjectCard from "./ProjectCard";
import "../pages/Portfolio.scss";

const ProjectSection = ({ projects }) => {
  if (!Array.isArray(projects) || projects.length === 0) {
    return <p>No projects available.</p>;
  }

  // Find the latest project
  const latestProject = projects.find((project) => project.isLatest);
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section className="project-section">
      {/* Render the latest project */}
      {latestProject && (
        <div className="latest-project">
          <Link
            to={`/portfolio/${latestProject.title
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            <div className="latest-project-card">
              <div className="latest-project-details">
                <span>{latestProject.skill}</span>
                <h3 className="project-title">
                  {latestProject.title} : <br />
                  {latestProject.subtitle}
                </h3>
              </div>
              <img
                src={latestProject.img}
                alt={latestProject.title}
                className="project-image"
              />
            </div>
          </Link>
        </div>
      )}

      {/* Render featured projects */}
      {featuredProjects.length > 0 ? (
        <GridLayout columns={3}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isHomePage={true} />
          ))}
        </GridLayout>
      ) : (
        <p>No featured projects available.</p>
      )}
    </section>
  );
};

ProjectSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      skill: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      isFeatured: PropTypes.bool,
      isLatest: PropTypes.bool,
      main: PropTypes.string, // Added main property to PropTypes
    })
  ).isRequired,
};

export default ProjectSection;
