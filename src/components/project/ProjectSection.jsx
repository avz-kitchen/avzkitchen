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
  const latestProjects = projects.filter((project) => project.isLatest);
  const featuredProjects = projects.filter((project) => project.isFeatured);
  // Clone first and last for infinite effect
  const infiniteProjects = [
    featuredProjects[featuredProjects.length - 1],
    ...featuredProjects,
    featuredProjects[0],
  ];
  const [activeIndex, setActiveIndex] = useState(1); // Start at first real slide
  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.firstChild?.offsetWidth || 0.5;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  return (
    <section >
      <GridLayout columns={4}>
          <h1 className="span-three-columns">Selected Works</h1>
          <h4>each a carefully plated experience from my visual kitchen.
          <br />
          <Button variant="secondary" to="/portfolio" >See Portfolio</Button>
          <br />
          </h4>

      </GridLayout>
     {/* Render all latest projects in a grid */}
      <div className="latest-projects-grid">
        {latestProjects.map((latestProject) => (
          <Link
            key={latestProject.id}
            to={`/portfolio/${latestProject.title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <div className="latest-project">
              {/* Right: Image + details */}
              <div className="latest-project-card-new">
                <p className="project-title">{latestProject.title}</p>
                <h2 className="project-subtitle">{latestProject.subtitle}</h2>
                <img
                  src={latestProject.shot}
                  alt={latestProject.title}
                  className="project-image"
                />
                <div className="latest-project-details">
                  <div className="project-skills">
                    {latestProject.skills &&
                      latestProject.skills.length > 0 &&
                      latestProject.skills.map((skill, idx) => (
                        <span key={idx} className="tag">
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Render featured projects */}  
<div className="featured-projects">
  <div
    className="featured-projects-slider"
    onScroll={handleScroll}
    tabIndex={0}
  >
    {infiniteProjects.map((project, idx) => (
      <div
        key={idx + '-' + (project?.id || 'clone')}
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
        onClick={() => {
          // Infinite loop logic
          if (idx === 0) {
            setActiveIndex(infiniteProjects.length - 2); // jump to last real
          } else if (idx === infiniteProjects.length - 1) {
            setActiveIndex(1); // jump to first real
          } else {
            setActiveIndex(idx);
          }
        }}
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
