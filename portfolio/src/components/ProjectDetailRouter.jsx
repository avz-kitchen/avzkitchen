import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandingDetail from "./pages/BrandingDetail";
import ProjectDetail from "./pages/ProjectDetail";
import portfolioData from "../data/data.json"; // Import directly from data.json

const transformToUrl = (title) => title.replace(/\s+/g, "-").toLowerCase();

const ProjectDetailRouter = () => {
  const { projectUrl } = useParams();
  const [project, setProject] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundProject = portfolioData.portfolio.find(
      (item) =>
        transformToUrl(item.title).toLowerCase() === projectUrl.toLowerCase()
    );

    if (foundProject) {
      setProject(foundProject);
    } else {
      setProject(null);
    }
  }, [projectUrl]);

  if (project === undefined) return <p>Loading...</p>;
  if (project === null) return <p>Project not found!</p>;

  return project.category === "Branding" ? (
    <BrandingDetail project={project} />
  ) : (
    <ProjectDetail project={project} />
  );
};

export default ProjectDetailRouter;
