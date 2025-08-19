/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import ProjectCard from "../project/ProjectCard"; // Assuming you have a ProjectCard component
import "./Portfolio.scss";
import ProjectJSONLD from "../structuredData/ProjectJSONLD";

const Portfolio = ({ projects }) => {
  return (
    <section className="portfolio-section">
      <Helmet>
        <title>AVZKITCHEN Portfolio | Angelica Valenzuela's Projects Freelance Product Design & Development</title>
        <meta name="description" content="Explore Angelica Valenzuela's portfolio of digital product designs and development projects, featuring web apps, mobile experiences, and creative solutions." />
        <meta name="keywords" content="Branding, Product Design, Code, Portfolio, Angelica Valenzuela, UX, UI, Digital Products , Freelance, Front-End Development , Illustration , Amazon , Shopify" />
              <link rel="canonical" href="https://avzkitchen.com/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio",
            "url": "https://avzkitchen.com/portfolio",
            "creator": {
              "@type": "Person",
              "name": "Angelica Valenzuela",
              "url": "https://avzkitchen.com"
            },
            "hasPart": projects.map(project => ({
              "@type": "CreativeWork",
              "name": project.title,
              "url": `https://avzkitchen.com/portfolio/${project.url}`,
              "description": project.description
            }))
          })}
        </script>
      </Helmet>
      <h1>Portfolio</h1>
      <div className="portfolio">
        {projects.map((project) => (
          <div key={project.id}>
          <ProjectJSONLD project={project} />
          <ProjectCard key={project.id} project={project} isBranding />
        </div>
        ))}
        </div>
    </section>
  );
};

export default Portfolio;
