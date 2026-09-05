/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import ProjectCard from "../project/ProjectCard"; // Assuming you have a ProjectCard component
import "./Portfolio.scss";
import ProjectJSONLD from "../structuredData/ProjectJSONLD";


import { useState, useEffect, useRef } from "react";

const TABS = [
  { label: "All", value: "All", hash: "" },
  { label: "Branding", value: "Branding", hash: "#branding" },
  { label: "UX/UI", value: "UX/UI", hash: "#uxui" },
  { label: "Web Development", value: "Web Development", hash: "#webdev" },
  { label: "Illustration", value: "Illustration", hash: "#illustration" },
  { label: "Amazon", value: "Amazon", hash: "#amazon" },
  { label: "E-Commerce", value: "E-Commerce", hash: "#e-commerce" },


];

const Portfolio = ({ projects }) => {

  const [selectedTab, setSelectedTab] = useState("All");
  const tabsRef = useRef(null);
  const dragState = useRef({ isDown: false, startX: 0, startScrollLeft: 0 });

  const handlePointerDown = (event) => {
    const node = tabsRef.current;
    if (!node || window.matchMedia("(pointer: fine)").matches) return;
    dragState.current = {
      isDown: true,
      startX: event.clientX,
      startScrollLeft: node.scrollLeft,
    };
    node.setPointerCapture?.(event.pointerId);
    node.classList.add("dragging");
  };

  const handlePointerMove = (event) => {
    const node = tabsRef.current;
    if (!dragState.current.isDown || !node) return;
    const delta = event.clientX - dragState.current.startX;
    node.scrollLeft = dragState.current.startScrollLeft - delta;
  };

  const stopDragging = (event) => {
    const node = tabsRef.current;
    if (!node) return;
    dragState.current.isDown = false;
    node.classList.remove("dragging");
    if (event?.pointerId !== undefined) {
      node.releasePointerCapture?.(event.pointerId);
    }
  };

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

  const normalizeFilterValue = (value) =>
    String(value ?? "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "");

  const tabKeywords = {
    All: [],
    Branding: ["branding", "brand", "identity"],
    "UX/UI": ["ux", "ui", "uxui", "userexperience", "userinterface", "design"],
    "Web Development": ["webdevelopment", "webdev", "frontend", "fullstack", "development", "react", "builderio"],
    Illustration: ["illustration", "visualdesign", "artdirection", "iconography"],
    Amazon: ["amazon", "a+content", "amazoncontent"],
    "E-Commerce": ["ecommerce", "commerce", "shopify"],
  };

  const matchesSelectedTab = (value) => {
    if (selectedTab === "All") return true;

    const targetValue = normalizeFilterValue(value);
    const selectedKeywords = tabKeywords[selectedTab] || [normalizeFilterValue(selectedTab)];

    return selectedKeywords.some((keyword) => {
      const normalizedKeyword = normalizeFilterValue(keyword);
      return normalizedKeyword && (targetValue.includes(normalizedKeyword) || normalizedKeyword.includes(targetValue));
    });
  };

  const filteredProjects = projects
    .map((project, idx) => ({ project, idx }))
    .filter(({ project }) => {
      if (selectedTab === "All") return true;

      const skillMatches = (project.skills || []).some((skill) => matchesSelectedTab(skill));
      const categoryMatches = matchesSelectedTab(project.category);
      const tagMatches = matchesSelectedTab(project.tag);

      return skillMatches || categoryMatches || tagMatches;
    })
    .sort((a, b) => b.idx - a.idx)
    .map(({ project }) => project);

  return (
    <section className="portfolio-page">
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
      <div
        ref={tabsRef}
        className="portfolio-tabs"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        onPointerCancel={stopDragging}
      >
        {TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            className={`tag${selectedTab === tab.value ? " active" : ""}`}
            aria-pressed={selectedTab === tab.value}
            onClick={() => {
              setSelectedTab(tab.value);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
