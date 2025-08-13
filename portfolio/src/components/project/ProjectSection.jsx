import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GridLayout from "../others/GridLayout";
import ProjectCard from "./ProjectCard";
import Button from "../others/Button";
import "../pages/Portfolio.scss";

const ProjectSection = ({ projects }) => {
  if (!Array.isArray(projects) || projects.length === 0) {
    return <p>No projects available.</p>;
  }

  // Find the latest project
  const latestProject = projects.find((project) => project.isLatest);
  const featuredProjects = projects.filter((project) => project.isFeatured);
const [activeIndex, setActiveIndex] = useState(
  Math.floor(featuredProjects.length / 6)
);
  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.firstChild?.offsetWidth || 0.5;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  return (
    <section className="project-section">
      <GridLayout columns={4}>
          <h1 className="span-three-columns">Selected Works</h1>
          <h4>A collection of my recent projects showcasing <br /> my skills in design and development.
          <br />
          <Button variant="secondary" to="/portfolio" >View All Projects</Button>
          <br />
          </h4>

      </GridLayout>
      {/* Render the latest project */}

{latestProject && (
  <Link to={`/portfolio/${latestProject.title.replace(/\s+/g, "-").toLowerCase()}`}>
  <div className="latest-project">
    {/* Left: Only the image */}
    <div className="latest-project-left-image">
      <img
        src={latestProject.main}
        alt={latestProject.title}
      />
    </div>
    {/* Right: Image + details */}
    <div className="latest-project-card">
      <img
        src={latestProject.cover}
        alt={latestProject.title}
        className="project-image"
      />
      <div className="latest-project-details">
                <span>({latestProject.skill})</span>

        <h2 className="project-title">
          {latestProject.title} 
        </h2>
        <p className="project-subtitle">{latestProject.shortDesc}</p>
        <Button variant="primary">View Project</Button>
      </div>
    </div>
  </div>
  </Link>
)}

      {/* Render featured projects */}  
<div className="featured-projects">
  <div
    className="featured-projects-slider"
    onScroll={handleScroll}
    tabIndex={0}
  >
    {featuredProjects.map((project, idx) => (
      <div
        key={project.id}
        className={`slider-card${idx === activeIndex ? " active" : ""}${
          Math.abs(idx - activeIndex) === 1 ? " adjacent" : ""
        }`}
        style={{
          opacity: idx === activeIndex ? 1 : 0.45,
          transform:
            idx === activeIndex
              ? "scale(1.00)"
              : "scale(0.82)",
        }}
        onClick={() => setActiveIndex(idx)}
      >
        <ProjectCard project={project} isHomePage={true} />
      </div>
    ))}
  </div>
</div>

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
