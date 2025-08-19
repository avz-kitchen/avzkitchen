import { Helmet } from "react-helmet";

const ProjectJSONLD = ({ project }) => {
  if (!project) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": `https://avzkitchen.com/portfolio/${project.url}`,
    "image": project.image || "https://avzkitchen.com/default-image.jpg",
    "author": {
      "@type": "Person",
      "name": "Angelica Valenzuela",
      "url": "https://avzkitchen.com"
    },
    "datePublished": project.date || new Date().toISOString()
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default ProjectJSONLD;
