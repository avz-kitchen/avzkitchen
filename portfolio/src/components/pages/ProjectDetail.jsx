import HeroSection from "../heroSection/HeroSection";
import Dropdown from "../project/Dropdown";
import TextMedia from "../others/TextMedia";
import TextImage from "../others/TextImage";
import ShotDemo from "../others/ShotDemo";

// Utility function to transform project title to URL format

const ProjectDetail = ({ project }) => {
  // Safeguard: Check if dropdowns exist before mapping
  const dropdowns = project.dropdowns || []; // Default to empty array if undefined

  return (
    <>
      <HeroSection
        title={project.title}
        img={project.img}
        category={project.category}
        year={project.year}
      />
      <TextMedia
        title={project.subtitle}
        image={project.main}
        text={project.desc}
      />
      {/* <h2 style={{ textAlign: "left" }}>Insights</h2> */}
      <div className="project-detail ">
        {dropdowns.length > 0 ? (
          dropdowns.map((item, index) => (
            <Dropdown
              key={index}
              title={item.title}
              image={item.image}
              text={item.text}
              isFirst={index === 0} // Pass this to handle different layout for the first dropdown
            />
          ))
        ) : (
          <div>No dropdown content available</div>
        )}
      </div>
      <TextImage image={project.flow} text={project.text} />
      <ShotDemo
        title={"Conclusion"}
        image={project.main}
        text={project.conclusion}
        demo={project.demo}
        subtitle={project.subtitle}
      />
    </>
  );
};

export default ProjectDetail;
