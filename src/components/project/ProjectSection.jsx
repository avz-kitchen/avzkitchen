import { useState, useCallback, useEffect, Suspense, lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import GridLayout from "../others/GridLayout";
import Button from "../others/Button";
import BlurText from "../others/BlurText";
import data from "../../data/data.json";
import { getLocalizedPath, getUiText } from "../../i18n/content";
import "../pages/Portfolio.scss";

const CircularGallery = lazy(() => import("../others/CircularGallery"));

const ProjectSection = ({ projects, locale = "en" }) => {
  const navigate = useNavigate();
  const [showGallery, setShowGallery] = useState(() => typeof window !== "undefined" ? window.innerWidth > 768 : true);

  useEffect(() => {
    const handleResize = () => setShowGallery(window.innerWidth > 768);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!Array.isArray(projects) || projects.length === 0) {
    return <p>No projects available.</p>;
  }

  const handleProjectClick = useCallback((link) => {
    navigate(getLocalizedPath(link, locale));
  }, [navigate, locale]);

  const latestProjects = projects.filter((project) => project.isLatest);

  return (
    <section className="portfolio-section">
      <GridLayout columns={4}>
        <BlurText
          text={getUiText(locale, "home", "selectedWorks")}
          delay={200}
          animateBy="words"
          direction="top"
          className="xxl font-bold mb-8 span-three-columns"
        />
        <h4 className="">
          {getUiText(locale, "home", "portfolioIntro")}
          <br />
          <Button variant="secondary" to={getLocalizedPath("/portfolio", locale)} >{getUiText(locale, "home", "seePortfolio")}</Button>
          <br />
        </h4>
      </GridLayout>

      <div className="latest-projects-grid  z-100">
        {latestProjects.map((latestProject) => (
          <Link
            key={latestProject.id}
            to={getLocalizedPath(`/portfolio/${latestProject.title.replace(/\s+/g, "-").toLowerCase()}`, locale)}
          >
            <div className="latest-project" style={{ width: '100%', position: 'relative' }}>
              <div
                className="latest-project-card-new"
                style={{
                  backgroundImage: ` url(${latestProject.cover || latestProject.shot})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <h2 className="project-title">{latestProject.title}</h2>
                <p className="project-subtitle">{latestProject.subtitle}</p>
                <div className="latest-project-details">
                  <div className="project-skills">
                    {latestProject.skills &&
                      latestProject.skills.length > 0 &&
                      latestProject.skills.map((skill, idx) => (
                        <span key={idx} className="tag-light">
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

      {showGallery && (
        <div style={{ height: '640px', position: 'relative', zIndex: 50 }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '5%',
            height: '100%',
            background: 'linear-gradient(to right, #F2F2F2 0%, transparent 100%)',
            zIndex: 60,
            pointerEvents: 'none'
          }} />

          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '5%',
            height: '100%',
            background: 'linear-gradient(to left, #F2F2F2 0%, transparent 100%)',
            zIndex: 60,
            pointerEvents: 'none'
          }} />

          {data.portfolio && (
            <Suspense fallback={<div style={{ height: '100%', minHeight: '320px' }} />}>
              <CircularGallery
                items={data.portfolio
                  .filter(project => project.isFeatured)
                  .map(project => ({
                    image: project.logo || project.img || project.main,
                    text: project.title,
                    subtitle: project.subtitle || (project.skills && project.skills[0]),
                    link: `/portfolio/${project.title.replace(/\s+/g, "-").toLowerCase()}`
                  }))}
                bend={2}
                textColor="#292F5D"
                borderRadius={0.05}
                scrollSpeed={2}
                scrollEase={0.05}
                size={320}
                onItemClick={handleProjectClick}
              />
            </Suspense>
          )}
        </div>
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
