import { Helmet } from "react-helmet";
import HeroSection from "../heroSection/HeroSection";
import Dropdown from "../project/Dropdown";
import TextMedia from "../others/TextMedia";
import ShotDemo from "../others/ShotDemo";

// Utility function to transform project title to URL format

const ProjectDetail = ({ project }) => {
  // Safeguard: Check if dropdowns exist before mapping
  const dropdowns = project.dropdowns || []; // Default to empty array if undefined

  return (
    <div className="project-detail-wrapper">
            <Helmet>
        <title>AVZKITCHEN | Portfolio Projects </title>
        <meta name="description" content="Explore AVZ's portfolio of digital product designs and development projects, featuring web apps, mobile experiences, and creative solutions." />
        <meta name="keywords" content="product design projects, UI/UX work, front-end development portfolio, web apps ,Branding, Product Design, Code, Portfolio, Angelica, UX, UI, Digital Products , Freelance, Front-End Development , Illustration , Amazon" />
      </Helmet>
      <HeroSection
        title={project.title}
        img={project.main}
        category={project.category}
        year={project.year}
        skills={project.skills}
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
              isLast={index === dropdowns.length - 1} // Pass this to handle different layout for the last dropdown
            />
          ))
        ) : (
          <div>No dropdown content available</div>
        )}
      </div>
      {/* <TextImage image={project.flow} text={project.text} /> */}
      <ShotDemo
        title={"Reflection"}
        image={project.main}
        text={project.conclusion}
        demo={project.demo}
        subtitle={project.subtitle}
      />
    </div>
  );
};

export default ProjectDetail;
