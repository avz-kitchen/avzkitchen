/* eslint-disable react/prop-types */
import GridLayout from "./GridLayout";
import ProjectCard from "./ProjectCard"; // Assuming you have a ProjectCard component
import "./Portfolio.scss";

const Portfolio = ({ projects }) => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">Portfolio</h1>
      <GridLayout columns={3}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isBranding />
        ))}
      </GridLayout>
    </div>
  );
};

export default Portfolio;
