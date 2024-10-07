import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSection";
import Portfolio from "./components/Portfolio";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import portfolioData from "./data.json";
import "./App.scss";
import ProjectSection from "./components/ProjectSection";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Render all sections */}
        <Route
          path="/portfolio"
          element={<Portfolio projects={portfolioData.portfolio} />}
        />{" "}
        {/* Portfolio page */}
        <Route path="/about" element={<AboutSection />} /> {/* About page */}
        <Route path="/contact" element={<ContactSection />} />{" "}
        {/* Contact page */}
      </Routes>
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
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default App;
