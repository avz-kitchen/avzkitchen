import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import ContactSection from "./components/contactSection/ContactSection";
import Footer from "./components/footer/Footer";
import portfolioData from "./data/data.json";
import ProjectDetailRouter from "./components/ProjectDetailRouter";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import UXPortfolio from "./components/pages/uxportfolio";
import ScrollToTop from "./components/others/ScrollToTop";
import "./App.scss";
import DataPrivacy from "./components/pages/DataPrivacy";

const App = () => {
  const projects = portfolioData.portfolio;

  return (
    <>
        <Helmet>
        <title>Angelica Valenzuela | Freelance Product Designer & Developer</title>
        <meta
          name="description"
          content="Angelica Valenzuela – Freelance Product Designer & Developer creating digital products, e-commerce solutions, and brands that leave a lasting impression."
        />
        <script type="application/ld+json">
          {`
          {
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
          }
          `}
        </script>
      </Helmet>
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />}
          />
          <Route
            path="/portfolio/:projectUrl"
            element={<ProjectDetailRouter />}
          />
          <Route path="/bio" element={<About />} /> {/* About page */}
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/productdesign" element={<UXPortfolio />} />
          <Route path="/data" element={<DataPrivacy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  );
};



export default App;
