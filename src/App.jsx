import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Preloader from "./components/loader/Preloader";
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
import ServicesPage from "./components/pages/ServicesPage";
import "./App.scss";
import DataPrivacy from "./components/pages/DataPrivacy";

const App = () => {
  const projects = portfolioData.portfolio;
const [isLoading, setIsLoading] = useState(true);

// Effect 1: Handle the Loading Logic
  useEffect(() => {
    const onPageLoad = () => {
      // Minimum time of 1.5s so the pancake actually flips!
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    // If the window is already loaded (common during local dev/hot reload)
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []); // Empty array: only runs once on mount

  // Effect 2: Handle Scroll Locking
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]); // Runs only when isLoading changes
  return (
    <>
    {isLoading && <Preloader />}
        <Helmet>
        <title>Angelica Valenzuela | Freelance Product Designer & Developer</title>
          <meta name="robots" content="index, follow" />

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
      <div className={`main-app-content ${!isLoading ? 'content-visible' : 'content-hidden'}`}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <div className="page-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio projects={projects} />} />
              <Route path="/portfolio/:projectUrl" element={<ProjectDetailRouter />} />
              <Route path="/bio" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/productdesign" element={<UXPortfolio />} />
              <Route path="/data" element={<DataPrivacy />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    
    </>
  );
};



export default App;
