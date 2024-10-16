import PropTypes from "prop-types";
import GridLayout from "../others/GridLayout";
import ProjectCard from "./ProjectCard";
import "../pages/Portfolio.scss"; // Import your CSS for styling

const ProjectSection = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <p>No projects available.</p>;
  }

  // Assuming the latest project is the first in the array
  const latestProject = projects.find((project) => project.isLatest); // Find the latest featured project
  const featuredProjects = projects.filter(
    (project) => project.isFeatured === true
  );

  return (
    <section className="project-section">
      <GridLayout columns={3}>
        <div className="span-one-column">
          <span>{latestProject.skill}</span>
          <h5 className="project-title span-one-column">
            {latestProject.title}
          </h5>
        </div>
        <img
          src={latestProject.img}
          alt={latestProject.title}
          className="project-image span-two-columns"
        />
      </GridLayout>

      <GridLayout columns={3}>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} isHomePage={true} />
        ))}
      </GridLayout>
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
    })
  ).isRequired,
};

export default ProjectSection;
