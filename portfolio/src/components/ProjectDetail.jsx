// src/components/ProjectDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import portfolioData from "../data.json";
import HeroSection from "./heroSection/HeroSection";
import Dropdown from "./project/Dropdown";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.portfolio.find((p) => p.id === parseInt(id));

  // Check if project is undefined
  if (!project) {
    return <div>Project not found</div>;
  }

  // Check if key findings, redesign goals, and research process are defined
  const keyFindings = project.keyFindings || [];
  const redesignGoals = project.redesignGoals || [];
  const researchProcess = project.researchProcess || [];

  return (
    <>
      <HeroSection title={project.title} />
      <div className="project-detail">
        <h2>Overview</h2>
        <p>{project.overview}</p>

        <h2>Key Findings</h2>
        <Dropdown title="View Key Findings" items={keyFindings} />

        <h2>Redesign Goals</h2>
        <Dropdown title="View Redesign Goals" items={redesignGoals} />

        <h2>Research Process</h2>
        <Dropdown title="View Research Process" items={researchProcess} />
      </div>
    </>
  );
};

export default ProjectDetail;
