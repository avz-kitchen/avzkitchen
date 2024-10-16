import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/about" element={<About />} /> {/* About page */}
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
      <AboutSection isAboutPage={false} />
      <ContactSection />
    </>
  );
};

export default App;
