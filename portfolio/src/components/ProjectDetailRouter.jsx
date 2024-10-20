import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandingDetail from "./pages/BrandingDetail";
import ProjectDetail from "./pages/ProjectDetail";

const ProjectDetailRouter = () => {
  const { id } = useParams();
  const [project, setProject] = useState(undefined); // Initialize as undefined to differentiate loading state

  useEffect(() => {
    console.log("Fetching data from JSON...");
    fetch("/src/data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data loaded:", data);
        const foundProject = data.portfolio.find(
          (item) => item.id === parseInt(id)
        );
        console.log("Found project:", foundProject);
        setProject(foundProject || null); // Set to null if project not found
      })
      .catch((error) => {
        console.error("Error loading the project data:", error);
        setProject(null); // Handle error case, set project to null
      });
  }, [id]);

  if (project === undefined) return <p>Loading...</p>; // Show loading while fetching
  if (project === null) return <p>Project not found!</p>; // If project is not found

  if (project.category === "Branding") {
    return <BrandingDetail brandingData={project} />;
  }

  return <ProjectDetail project={project} />;
};

export default ProjectDetailRouter;
