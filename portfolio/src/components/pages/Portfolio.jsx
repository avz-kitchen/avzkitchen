/* eslint-disable react/prop-types */
import GridLayout from "../others/GridLayout";
import ProjectCard from "../project/ProjectCard"; // Assuming you have a ProjectCard component
import "./Portfolio.scss";

const Portfolio = ({ projects }) => {
  return (
    <section className="portfolio-section">
      <h1>Portfolio</h1>
      <div className="portfolio">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isBranding />
        ))}
        </div>
    </section>
  );
};

export default Portfolio;
