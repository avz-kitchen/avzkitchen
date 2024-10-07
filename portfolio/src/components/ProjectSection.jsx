/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import GridLayout from "./GridLayout";
import portfolio from "../data.json";
import "./Portfolio.scss";
const ProjectSection = ({
  title,
  skill,
  img,
  projects = portfolio.projects,
}) => {
  if (!projects || projects.length === 0) {
    return <p>No projects available.</p>;
  }

  return (
    <section className="project-section">
      <GridLayout columns={6}>
        <div className=" span-two-columns">
          <span>{skill}</span>
          <h5 className="project-title span-two-columns">{title}</h5>
        </div>
        <img
          src={img}
          alt="WDR App"
          className="project-image span-four-columns"
        />
      </GridLayout>

      <GridLayout columns={3}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </GridLayout>
    </section>
  );
};

ProjectSection.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
};

export default ProjectSection;
