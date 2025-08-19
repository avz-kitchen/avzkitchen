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

      <Header />
      <Richtext paragraph={headerText} tags={headerTags} />
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