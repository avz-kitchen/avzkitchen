/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import ProjectCard from "../project/ProjectCard"; // Assuming you have a ProjectCard component
import "./Portfolio.scss";
import ProjectJSONLD from "../structuredData/ProjectJSONLD";


import { useState, useEffect } from "react";

const TABS = [
  { label: "All", value: "All", hash: "" },
  { label: "UX/UI", value: "UX/UI", hash: "#uxui" },
  { label: "Web Development", value: "Web Development", hash: "#webdev" },
  { label: "Illustration", value: "Illustration", hash: "#illustration" },
  { label: "Branding", value: "Branding", hash: "#branding" },
];

const Portfolio = ({ projects }) => {

  const [selectedTab, setSelectedTab] = useState("All");

  // Set tab from hash on mount and when hash changes

  useEffect(() => {
    // Normalize hash: remove any leading slash before #
    let hash = window.location.hash.toLowerCase();
    if (hash.startsWith("/#")) {
      hash = hash.replace("/#", "#");
    }
    const found = TABS.find(tab => tab.hash === hash);
    if (found) {
      setSelectedTab(found.value);
    } else if (hash === "") {
      setSelectedTab("All");
    }
  }, []);

  // Listen for hash changes (if user navigates via browser)
  useEffect(() => {
    const onHashChange = () => {
      let hash = window.location.hash.toLowerCase();
      if (hash.startsWith("/#")) {
        hash = hash.replace("/#", "#");
      }
      const found = TABS.find(tab => tab.hash === hash);
      if (found) {
        setSelectedTab(found.value);
      } else if (hash === "") {
        setSelectedTab("All");
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Filtering logic: checks project.skills or project.category or project.tags
  const filteredProjects = selectedTab === "All"
    ? projects
    : projects
        .map((project, idx) => ({ project, idx }))
        .filter(({ project }) => {
          const skills = project.skills || [];
          const category = project.category || "";
          const tag = project.tag || "";
          return (
            skills.includes(selectedTab) ||
            category === selectedTab ||
            tag === selectedTab
          );
        })
        .sort((a, b) => a.idx - b.idx)
        .map(({ project }) => project);

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
            "hasPart": filteredProjects.map(project => ({
              "@type": "CreativeWork",
              "name": project.title,
              "url": `https://avzkitchen.com/portfolio/${project.url}`,
              "description": project.description
            }))
          })}
        </script>
      </Helmet>
      <h1 className="xxl">Portfolio</h1>
      <div className="portfolio-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            className={`tag${selectedTab === tab.value ? " active" : ""}`}
            onClick={() => {
              setSelectedTab(tab.value);
              if (tab.hash) {
                window.location.hash = tab.hash;
              } else {
                window.location.hash = "";
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="portfolio">
        {filteredProjects.length === 0 ? (
          <p>No projects found for this category.</p>
        ) : (
          filteredProjects.map((project) => (
            <div key={project.id}>
              <ProjectJSONLD project={project} />
              <ProjectCard key={project.id} project={project} isBranding />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Portfolio;
