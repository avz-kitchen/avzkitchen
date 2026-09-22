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
import QuickAuditPage from "./components/pages/QuickAuditPage";
import ServiceLandingPage from "./components/pages/ServiceLandingPage";
import ShopifyDesignPage from "./components/pages/ShopifyDesignPage";
import "./App.scss";
import DataPrivacy from "./components/pages/DataPrivacy";
import LegalPage from "./components/pages/LegalPage";
import { getLocaleFromPath, getLocalizedPath } from "./i18n/content";

export const AppRoutes = () => {
  const projects = portfolioData.portfolio;
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const currentLang = locale === "de" ? "de" : "en";
  const [isLoading, setIsLoading] = useState(typeof window === "undefined" ? false : true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';
  }, [isLoading]);
  return (
    <>
    {isLoading && <Preloader />}
        <Helmet htmlAttributes={{ lang: currentLang }}>
          <title>Angelica Valenzuela (AVZ Kitchen) | Sustainable UX/UI Design & Green E-Commerce</title>
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="AVZ Kitchen by Angelica Valenzuela is a digital visual studio specializing in sustainable UX/UI design, low-carbon Shopify development, and accessible digital products for eco-conscious brands across Germany, DACH, and Europe."
          />
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://avzkitchen.com/#person",
                  "name": "Angelica Valenzuela",
                  "alternateName": ["AVZ Kitchen", "AVZKITCHEN"],
                  "url": "https://avzkitchen.com",
                  "jobTitle": "Freelance Product Designer & Amazon Storefront Developer",
                  "description": "Angelica Valenzuela is the founder of AVZ Kitchen, a digital studio focused on sustainable UX/UI design, low-carbon ecommerce experiences, Amazon storefront development, and conversion-driven digital products for eco-conscious brands.",
                  "knowsAbout": [
                    "Amazon Storefront Design",
                    "Amazon A+ Content Design",
                    "Amazon Brand Registry",
                    "Sustainable E-Commerce",
                    "Eco-Friendly Brand Storytelling",
                    "UX/UI Design",
                    "Shopify Development",
                    "Frontend Development"
                  ],
                  "sameAs": [
                    "https://www.linkedin.com/in/avzkitchen",
                    "https://github.com/avz-kitchen",
                    "https://www.instagram.com/artichoke.v",
                    "https://www.twine.net/AngelicaValenzuela",
                    "https://www.xing.com/profile/Angelica_Valenzuela032612",
                    "https://www.behance.net/avzkitchen"
                  ],
                  "founderOf": {
                    "@id": "https://avzkitchen.com/#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://avzkitchen.com/#organization",
                  "name": "AVZ Kitchen",
                  "alternateName": "Angelica Valenzuela Digital Studio",
                  "url": "https://avzkitchen.com",
                  "founder": {
                    "@id": "https://avzkitchen.com/#person"
                  },
                  "description": "AVZ Kitchen is the digital studio founded by Angelica Valenzuela, specializing in sustainable UX/UI design, low-carbon Shopify development, Amazon storefront design, and accessible digital experiences for eco-conscious brands in Germany, DACH, and Europe.",
                  "areaServed": ["Germany", "Austria", "Switzerland", "Europe"],
                  "knowsAbout": [
                    "Sustainable Web Design",
                    "Low-Carbon Web Development",
                    "Green E-Commerce",
                    "Amazon Storefront Design",
                    "Amazon A+ Content Design",
                    "Shopify Development",
                    "UX/UI Design",
                    "Accessibility"
                  ],
                  "sameAs": [
                    "https://avzkitchen.com"
                  ]
                },
                {
                  "@type": "Service",
                  "name": "Sustainable Amazon Storefront & A+ Content Design",
                  "provider": {
                    "@id": "https://avzkitchen.com/#organization"
                  },
                  "areaServed": ["Germany", "Austria", "Switzerland", "Europe"],
                  "description": "Custom Amazon Brand Store layouts and A+ Content designed for sustainable, eco-conscious brands selling on Amazon.de and European marketplaces."
                }
              ]
            }`}
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
            <Route path="/services/quick-ux-audit" element={<QuickAuditPage locale={locale} />} />
            <Route path="/de/services/quick-ux-audit" element={<QuickAuditPage locale="de" />} />
            <Route path="/services/amazon" element={<ServiceLandingPage locale={locale} slug="amazon" />} />
            <Route path="/de/services/amazon" element={<ServiceLandingPage locale="de" slug="amazon" />} />
            <Route path="/services/shopify-design" element={<ShopifyDesignPage locale={locale} />} />
            <Route path="/de/services/shopify-design" element={<ShopifyDesignPage locale="de" />} />
            <Route path="/services/shopify-ux-design" element={<ServiceLandingPage locale={locale} slug="shopify-ux-design" />} />
            <Route path="/de/services/shopify-ux-design" element={<ServiceLandingPage locale="de" slug="shopify-ux-design" />} />
            <Route path="/services/shopify-ux-audit" element={<ServiceLandingPage locale={locale} slug="shopify-ux-audit" />} />
            <Route path="/de/services/shopify-ux-audit" element={<ServiceLandingPage locale="de" slug="shopify-ux-audit" />} />
            <Route path="/services/accessibility-audit" element={<ServiceLandingPage locale={locale} slug="accessibility-audit" />} />
            <Route path="/de/services/accessibility-audit" element={<ServiceLandingPage locale="de" slug="accessibility-audit" />} />
            <Route path="/services/landing-page-design" element={<ServiceLandingPage locale={locale} slug="landing-page-design" />} />
            <Route path="/de/services/landing-page-design" element={<ServiceLandingPage locale="de" slug="landing-page-design" />} />
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
      <AppRoutes />
    </Router>
  );
}
