import { Helmet } from "react-helmet";
import Header from "../others/Header";
import Button from "../others/Button";
import HeroNew from "./../animated/HeroNew";
import BlurText from "./../others/BlurText";
import GridLayout from "../others/GridLayout";
import Richtext from "../others/Richtext";
import ProjectSection from "../project/ProjectSection";
import ServiceSection from "../serviceSection/ServiceSection";
import ContactSection from "../contactSection/ContactSection";
import portfolioData from "../../data/data.json";

const Home = () => {
  const projects = portfolioData.portfolio;
  const headerTags = ["Branding", "Product Design", "Code", "E-commerce"];
  const headerContent = (
    <span className="unified-paragraph">
      I harvest <span className="type-word w-1">insights ✐</span>, 
      craft <span className="type-word w-2">designs ✦</span>, 
      and develop <span className="type-word w-3">tech ☍</span> 
      — plating digital products and brands that leave a lasting taste ❋.
    </span>
  );

  return (
    <>
      <HeroNew>
        <div className="seated-hero-layout">
          <div className="hero-top-section">
            <GridLayout columns={4}>
              <div className="span-two-columns hide-mobile"></div>
              <div className="span-two-columns mission-container">
                <div className="mission-glass-card">
                  <p className="unified-mission-text">
                    I build bold digital experiences with a personal touch — blending strategy,
                    design, and code into brands and products that feel memorable and convert.
                  </p>
                  <Button variant="primary" to="/bio">❋ Bio</Button>
                </div>
              </div>
            </GridLayout>
          </div>

          <div className="giant-name-container">

          </div>
        </div>
      </HeroNew>

      <Richtext paragraph={headerContent} tags={headerTags} />

      <ProjectSection projects={projects || []} />
      <ServiceSection/>
      <ContactSection />
            <Helmet>
        <title>AVZKITCHEN | Angelica Valenzuela's Portfolio – Freelance Digital Product Designer & Developer</title>
        <meta name="description" content="Angelica Valenzuela – Freelance Product Designer & Developer. Blending design, insights, and technology to craft digital products, e-commerce solutions, and brands that leave a lasting impression." />
        <meta name="keywords" content="Branding, Product Design, Code,Digital Product Designer, Developer ,  Web Design , Portfolio, Angelica , Angelica Valenzuela, UX, UI, Digital Products , Freelance, Front-End Development , Illustration ,  Amazon , Shopify ,  Elementor" />
        <link rel="canonical" href="https://avzkitchen.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Angelica Valenzuela",
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