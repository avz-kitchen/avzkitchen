import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/AboutSection";
import Portfolio from "./components/Portfolio";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import portfolio from "./data.json"; // Import your project data
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Render all sections */}
        <Route
          path="/portfolio"
          element={<Portfolio projects={portfolio.projects} />}
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
  return (
    <>
      <HeroSection />
      <Portfolio projects={portfolio.projects} />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default App;
