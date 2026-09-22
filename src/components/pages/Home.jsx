import { useRef } from "react";
import { Helmet } from "react-helmet";
import Button from "../others/Button";
import HeroNew from "./../animated/HeroNew";
import BlurText from "./../others/BlurText";
import GridLayout from "../others/GridLayout";
import Richtext from "../others/Richtext";
import ProjectSection from "../project/ProjectSection";
import ServiceSection from "../serviceSection/ServiceSection";
import ContactSection from "../contactSection/ContactSection";
import portfolioData from "../../data/data.json";
import { getLocalizedPath, getUiText } from "../../i18n/content";

const Home = ({ locale = "en" }) => {
  const videoRef = useRef(null);
  const projects = portfolioData.portfolio;
  const headerTags = getUiText(locale, "home", "tags");
  const headerContent = (
    <span className="unified-paragraph">
      {getUiText(locale, "home", "header")}
    </span>
  );

  return (
    <>
      <HeroNew videoRef={videoRef}>
        <div className="seated-hero-layout">
          <div className="hero-top-section">
            <GridLayout columns={4}>
              <div className="span-two-columns hide-mobile"></div>
              <div className="span-two-columns mission-container">
                <div className="mission-glass-card">
                  <p className="unified-mission-text">
                    {getUiText(locale, "home", "mission")}
                  </p>
                  <Button variant="primary" to={getLocalizedPath("/bio", locale)}>{getUiText(locale, "home", "bio")}</Button>
                </div>
              </div>
            </GridLayout>
          </div>

          <div className="giant-name-container">
            <div className="hero-video-shell" ref={videoRef}>
              <video
                className="hero-video"
                src="/optimized/avz-ktichening.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </HeroNew>

      <Richtext paragraph={headerContent} tags={headerTags} />

      <ProjectSection projects={projects || []} locale={locale} />
      <ServiceSection locale={locale} />
      <ContactSection locale={locale} />
            <Helmet>
        <title>Angelica Valenzuela (AVZ Kitchen) | Portfolio & Ecommerce Design</title>
        <meta name="description" content="Angelica Valenzuela (AVZ Kitchen) is a freelance product designer and developer creating UX/UI design, Shopify experiences, and digital product design for brands in Germany and Europe." />
        <meta name="keywords" content="Branding, Product Design, Code,Digital Product Designer, Developer ,  Web Design , Portfolio, Angelica , Angelica Valenzuela, AVZ Kitchen, UX, UI, Digital Products , Freelance, Front-End Development , Illustration ,  Amazon , Shopify ,  Elementor" />
        <link rel="canonical" href="https://avzkitchen.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Angelica Valenzuela",
            "alternateName": ["AVZ Kitchen", "AVZKITCHEN"],
            "url": "https://avzkitchen.com",
            "jobTitle": "Freelance Product Designer & Developer",
            "sameAs": [
              "https://www.linkedin.com/in/avzkitchen",
              "https://github.com/avz-kitchen",
              "https://www.instagram.com/artichoke.v",
              "https://www.twine.net/AngelicaValenzuela",
              "https://www.xing.com/profile/Angelica_Valenzuela032612",
              "https://www.behance.net/avzkitchen"
            ]
          })}
        </script>
      </Helmet>
    </>
  );
};

export default Home;