import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSection";
import Portfolio from "./components/pages/Portfolio";
import ContactSection from "./components/contactSection/ContactSection";
import Footer from "./components/footer/Footer";
import portfolioData from "./data/data.json";
import ProjectSection from "./components/project/ProjectSection";
import ProjectDetailRouter from "./components/ProjectDetailRouter";
import About from "./components/pages/About";
import ScrollToTop from "./components/others/ScrollToTop";
import "./App.scss";

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
          <Route path="/portfolio/:id" element={<ProjectDetailRouter />} />
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

const Home = () => {
  const projects = portfolioData.portfolio;

  return (
    <>
      <HeroSection title="Bit of pictogram, design ..." img="public/hero.png" />
      <ProjectSection projects={projects || []} />
      <Link to="/portfolio">
        <div className="button-p">
          Explore Portfolio
          <img src="/public/mouse-pointer-heart_17490452.svg" alt="Explore" />
        </div>
      </Link>
      <AboutSection isAboutPage={false} />
      <ContactSection />
    </>
  );
};

export default App;
