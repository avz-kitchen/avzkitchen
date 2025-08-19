/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import ProjectCard from "../project/ProjectCard"; // Assuming you have a ProjectCard component
import "./Portfolio.scss";

const Portfolio = ({ projects }) => {
  return (
    <section className="portfolio-section">
      <Helmet>
        <title>AVZKITCHEN Portfolio | Angelica Valenzuela's Projects Freelance Product Design & Development</title>
        <meta name="description" content="Explore Angelica Valenzuela's portfolio of digital product designs and development projects, featuring web apps, mobile experiences, and creative solutions." />
        <meta name="keywords" content="Branding, Product Design, Code, Portfolio, Angelica Valenzuela, UX, UI, Digital Products , Freelance, Front-End Development , Illustration , Amazon , Shopify" />
      </Helmet>
      <h1>Portfolio</h1>
      <div className="portfolio">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isBranding />
        ))}
        </div>
    </section>
  );
};

export default Portfolio;
