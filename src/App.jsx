import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
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
import LegalPage from "./components/pages/LegalPage";
import { getLocaleFromPath, getLocalizedPath } from "./i18n/content";

const App = () => {
  const projects = portfolioData.portfolio;
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const currentLang = locale === "de" ? "de" : "en";
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
        <Helmet htmlAttributes={{ lang: currentLang }}>
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
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ScrollToTop />
        <Navbar locale={locale} />
        <main id="main-content" className="page-wrapper" tabIndex="-1">
          <Routes>
            <Route path="/" element={<Home locale={locale} />} />
            <Route path="/de" element={<Home locale="de" />} />
            <Route path="/portfolio" element={<Portfolio projects={projects} locale={locale} />} />
            <Route path="/de/portfolio" element={<Portfolio projects={projects} locale="de" />} />
            <Route path="/portfolio/:projectUrl" element={<ProjectDetailRouter locale={locale} />} />
            <Route path="/de/portfolio/:projectUrl" element={<ProjectDetailRouter locale="de" />} />
            <Route path="/bio" element={<About locale={locale} />} />
            <Route path="/de/bio" element={<About locale="de" />} />
            <Route path="/services" element={<ServicesPage locale={locale} />} />
            <Route path="/de/services" element={<ServicesPage locale="de" />} />
            <Route path="/contact" element={<ContactSection locale={locale} />} />
            <Route path="/de/contact" element={<ContactSection locale="de" />} />
            <Route path="/resume" element={<Resume locale={locale} />} />
            <Route path="/de/resume" element={<Resume locale="de" />} />
            <Route path="/productdesign" element={<UXPortfolio locale={locale} />} />
            <Route path="/de/productdesign" element={<UXPortfolio locale="de" />} />
            <Route path="/data" element={<DataPrivacy locale={locale} />} />
            <Route path="/de/data" element={<DataPrivacy locale="de" />} />
            <Route path="/legal" element={<LegalPage locale={locale} />} />
            <Route path="/de/legal" element={<LegalPage locale="de" />} />
          </Routes>
        </main>
        <Footer locale={locale} />
      </div>
    
    </>
  );
};



export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
