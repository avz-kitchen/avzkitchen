import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSection";
import Portfolio from "./components/pages/Portfolio";
import ContactSection from "./components/contactSection/ContactSection";
import Footer from "./components/footer/Footer";
import portfolioData from "./data/data.json";
import ProjectSection from "./components/project/ProjectSection";
import ProjectDetail from "./components/pages/ProjectDetail";
import About from "./components/pages/About";
import ScrollToTop from "./components/others/ScrollToTop";
import "./App.scss";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/about" element={<About />} />{" "}
          {/* About 
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
      <Link to="/portfolio">
        <div className="button-p">
          <a href="/portfolio">Explore Portfolio</a>
          <img src="/public/mouse-pointer-heart_17490452.svg" />
        </div>
      </Link>
      <AboutSection isAboutPage={false} />
      <ContactSection />
    </>
  );
};

export default App;
