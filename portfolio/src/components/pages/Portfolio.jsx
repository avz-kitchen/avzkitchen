/* eslint-disable react/prop-types */
import GridLayout from "../others/GridLayout";
import ProjectCard from "../project/ProjectCard"; // Assuming you have a ProjectCard component
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
