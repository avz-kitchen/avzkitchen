import { useParams } from "react-router-dom";
import portfolioData from "../data.json";
import HeroSection from "./heroSection/HeroSection";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.portfolio.find((p) => p.id === parseInt(id)); // Find the project based on the ID

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <HeroSection title={project.title} />
      <div className="project-detail">
        <p>{project.skill}</p>
        <p>{project.description}</p>
        <img src={project.img} alt={project.title} />
      </div>
      <section>
        <div className="richtext">Hipster ipsum tattooed brunch baby.</div>
      </section>
    </>
  );
};

export default ProjectDetail;
