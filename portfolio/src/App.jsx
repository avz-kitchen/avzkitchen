import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSection";
import Portfolio from "./components/Portfolio";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import portfolioData from "./data.json";
import ProjectSection from "./components/ProjectSection";
import ProjectDetail from "./components/ProjectDetail";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Render all sections */}
          <Route
            path="/portfolio"
            element={<Portfolio projects={portfolioData.portfolio} />}
          />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          {/* Portfolio page */}
          <Route path="/about" element={<AboutSection />} /> {/* About page */}
          <Route path="/contact" element={<ContactSection />} />{" "}
          {/* Contact page */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

const Home = () => {
  // Extract latest project and branding projects

  return (
    <>
      <HeroSection title="Bit of pictogram, design ..." img="public/hero.png" />
      <ProjectSection projects={portfolioData.portfolio} />
      <div className="button-p">
        <h2>
          <a href="/portfolio">Explore Portfolio</a>{" "}
          <div className="icon-container">
            <img
              src="/public/mouse-pointer-heart_17490452.svg"
              alt="arrow icon"
            />
          </div>
        </h2>
      </div>
      <lr />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default App;
