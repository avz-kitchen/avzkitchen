import { useEffect, useRef } from "react";
import ProjectCard from "../project/ProjectCard";
import PropTypes from "prop-types";

const HorizontalScroll = ({ featuredProjects }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const updateHeight = () => {
      section.style.height = `${track.scrollWidth}px`; // section height = track width
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    const onScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const maxScroll = section.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max((scrollY - sectionTop) / maxScroll, 0), 1);
      const totalScroll = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(-${progress * totalScroll}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div ref={sectionRef} className="horizontal-scroll-section">
      <div className="horizontal-scroll-sticky">
        <div ref={trackRef} className="horizontal-scroll-track">
          {featuredProjects.map((project) => (
            <div className="slider-card" key={project.id}>
              <ProjectCard project={project} isHomePage />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HorizontalScroll.propTypes = {
  featuredProjects: PropTypes.array.isRequired,
};

export default HorizontalScroll;
