import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandingDetail from "./pages/BrandingDetail";
import ProjectDetail from "./pages/ProjectDetail";

const ProjectDetailRouter = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProject = data.portfolio.find(
          (item) => item.id === parseInt(id)
        );
        setProject(foundProject);
      })
      .catch((error) => {
        console.error("Error loading the project data:", error);
      });
  }, [id]);

  if (!project) return <p>Project not found!</p>;

  if (project.category === "Branding") {
    return <BrandingDetail brandingData={project} />;
  }

  return <ProjectDetail project={project} />;
};

export default ProjectDetailRouter;
