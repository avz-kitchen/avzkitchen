import { Helmet } from "react-helmet";
import Header from "../others/Header";
import Richtext from "../others/Richtext";
import ProjectSection from "../project/ProjectSection";
import ServiceSection from "../serviceSection/ServiceSection";
import ContactSection from "../contactSection/ContactSection";
import portfolioData from "../../data/data.json";

const Home = () => {
  const projects = portfolioData.portfolio;
  const headerTags = ["Branding", "Product Design", "Code"];
  const headerText = "I gather insights ✐, design ✦, and tech ☍ - blending them into digital products & brands that leave a lasting taste ❋.";
  return (
    <>
      <Helmet>
        <title>AVZKITCHEN | Angelica Valenzuela's Portfolio – Freelance Digital Product Designer & Developer</title>
        <meta name="description" content="Angelica Valenzuela – Freelance Product Designer & Developer. Blending design, insights, and technology to craft digital products, e-commerce solutions, and brands that leave a lasting impression." />
        <meta name="keywords" content="Branding, Product Design, Code, Portfolio, Angelica Valenzuela, UX, UI, Digital Products , Freelance, Front-End Development , Illustration ,  Amazon , Shopify ,  Elementor" />
      </Helmet>
      <Header />
      <Richtext paragraph={headerText} tags={headerTags} />
      <ProjectSection projects={projects || []} />
      <ServiceSection/>
      <ContactSection />
    </>
  );
};

export default Home;