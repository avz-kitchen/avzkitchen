import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandingDetail from "./pages/BrandingDetail";
import ProjectDetail from "./pages/ProjectDetail";

const ProjectDetailRouter = () => {
  const { id } = useParams();
  const [project, setProject] = useState(undefined); // Initialize as undefined to differentiate loading state

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        const foundProject = data.portfolio.find(
          (item) => item.id === parseInt(id)
        );
        console.log("Found project:", foundProject);
        setProject(foundProject || null);
      })
      .catch((error) => {
        console.error("Error loading project data:", error);
        setProject(null);
      });
  }, [id]);

  if (project === undefined) return <p>Loading...</p>; // Show loading while fetching
  if (project === null) return <p>Project not found!</p>; // If project is not found

  return project.category === "Branding" ? (
    <BrandingDetail project={project} />
  ) : (
    <ProjectDetail project={project} />
  );
};

export default ProjectDetailRouter;
