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
  const headerTags = ["Branding", "Product Design", "Code"];
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
          {/* TOP SECTION: Mission Statement on the Right */}
          <div className="hero-top-section">
            <GridLayout columns={4}>
              <div className="span-two-columns hide-mobile"></div>
              <div className="span-two-columns mission-container">
                <p className="unified-mission-text">
HI, I’M ANGELICA. I OPERATE A DIGITAL KITCHEN WHERE 
    <span className="emphasize"> CODE MEETS CRAFT.</span><br />
    I DON’T JUST BUILD INTERFACES; I ENGINEER 
    <span className="emphasize"> BALANCE</span>—ELIMINATING THE EXCESS 
    TO CREATE SOLUTIONS THAT ARE INTUITIVE BY DESIGN 
    AND RIGOROUS BY NATURE. <Button variant="primary" to="/bio"> ❋ BIO</Button>
                </p>
              </div>
            </GridLayout>
          </div>

          {/* BOTTOM SECTION: The Massive "AVZKITCHEN"
          <div className="hero-bottom-section">
            <div className="stats-row">
              <span>BRANDING</span>
              <span>PRODUCT DESIGN</span>
              <span>CODE</span>
            </div> */}
            {/* We use a div here if BlurText is causing squashing issues */}
          <div className="giant-name-container">
            <h1 className="giant-hero-text">
              <span className="morphing-prefix">aVz</span>
              <span className="static-suffix">KITCHEN</span>
            </h1>
          </div>
          </div>        
          {/* </div>   */}
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