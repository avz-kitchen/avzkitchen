import React from "react";
import { Helmet } from "react-helmet";

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>AVZKITCHEN | Resume</title>
        <meta
          name="description"
          content="View Angelica Valenzuela's resume and experience in product design, UI/UX, branding, and digital product development."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avzkitchen.com/resume" />
      </Helmet>

      <div style={{ height: "100vh" }}>
        <iframe
          src="https://avzkitchen.notion.site/ebd/1ecee543e98380518252e8baac8a7d6e"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
          title="Angelica Valenzuela resume"
        />
      </div>
    </>
  );
};

export default Resume;
