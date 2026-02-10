import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import GridLayout from "../others/GridLayout";
import Button from "../others/Button";
import BlurText from "../others/BlurText";
import CircularGallery from "../others/CircularGallery";
import data from "../../data/data.json";
import "../pages/Portfolio.scss";

const ProjectSection = ({ projects }) => {
  const navigate = useNavigate();
  
  if (!Array.isArray(projects) || projects.length === 0) {
    return <p>No projects available.</p>;
  }

  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  const handleProjectClick = useCallback((link) => {
    navigate(link);
  }, [navigate]);

  // Find the latest project
  const latestProjects = projects.filter((project) => project.isLatest);
  const featuredProjects = projects.filter((project) => project.isFeatured);
;

  return (
    <section className="portfolio-section">
      <GridLayout columns={4}>

          <BlurText
          text="Selected Works"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="xxl font-bold mb-8 span-three-columns padding-side"
        />
          <h4 className="padding-side">each a carefully plated experience from my visual kitchen.
          <br />
          <Button variant="secondary" to="/portfolio" >See Portfolio</Button>
          <br />
          </h4>

      </GridLayout>
     {/* Render all latest projects in a grid */}
      <div className="latest-projects-grid padding-side z-100">
        {latestProjects.map((latestProject) => (
          <Link
            key={latestProject.id}
            to={`/portfolio/${latestProject.title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <div className="latest-project" style={{ width: '100%', position: 'relative' }}>
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

<div style={{ height: '600px', position: 'relative', zIndex: 50 }}>
  {data.portfolio && (
    <CircularGallery 
   items={data.portfolio
  .filter(project => project.isFeatured)
  .map(project => ({
    image: project.logo || project.img || project.main,
    text: "",
    subtitle: project.subtitle || (project.skills && project.skills[0]),
    link: `/portfolio/${project.title.replace(/\s+/g, "-").toLowerCase()}`
      }))}
      bend={1}
      textColor="#292F5D"
      borderRadius={0.05}
      scrollSpeed={2}
      scrollEase={0.05}
      size={320}

      onItemClick={handleProjectClick}
    />
  )}
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
