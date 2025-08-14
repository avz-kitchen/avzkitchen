import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/others/Header";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSection";
import Portfolio from "./components/pages/Portfolio";
import ServiceSection from "./components/serviceSection/ServiceSection";
import ContactSection from "./components/contactSection/ContactSection";
import Footer from "./components/footer/Footer";
import portfolioData from "./data/data.json";
import ProjectSection from "./components/project/ProjectSection";
import ProjectDetailRouter from "./components/ProjectDetailRouter";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import UXPortfolio from "./components/pages/uxportfolio";
import ScrollToTop from "./components/others/ScrollToTop";
import "./App.scss";
import DataPrivacy from "./components/pages/DataPrivacy";
import Richtext from "./components/others/Richtext";

const App = () => {
  const projects = portfolioData.portfolio;

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Render all sections */}
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
  );
};

const Home = () => {
const projects = portfolioData.portfolio;
const headerTags = ["Branding", "Product Design", "Code"];
const headerText = "As a creative digital nomad, I draw from travel, culture, and human connection, turning those influences into immersive websites, memorable brand systems, and conversion-driven brand strategies.";
  return (
    <>
      <Header />
      <Richtext paragraph={headerText} tags={headerTags} />
      <ProjectSection projects={projects || []} />
      <ServiceSection/>
      <ContactSection />
    </>
  );
};

export default App;
