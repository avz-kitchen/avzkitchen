import { useParams } from "react-router-dom";
import portfolioData from "../../data/data.json";
import HeroSection from "../heroSection/HeroSection";
import Dropdown from "../project/Dropdown";
import TextMedia from "../others/TextMedia";
import TextImage from "../others/TextImage";
import ShotDemo from "../others/ShotDemo";
const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.portfolio.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  // Safeguard: Check if dropdowns exist before mapping
  const dropdowns = project.dropdowns || []; // Default to empty array if undefined

  return (
    <>
      <HeroSection title={project.title} img={project.img} />
      <TextMedia
        title={project.subtitle}
        image={project.img}
        text={project.desc}
      />

      <div className="project-detail">
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
      <TextImage image={project.img} text={project.desc} />
      <ShotDemo
        title={"Conclusion"}
        image={project.img}
        text={project.conclusion}
      />
    </>
  );
};

export default ProjectDetail;
