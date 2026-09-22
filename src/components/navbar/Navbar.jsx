import { useState, useEffect, useMemo, useCallback, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./navbar.scss";

import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { getUiText, getLocalizedPath } from "../../i18n/content";

const CircularGallery = lazy(() => import("../others/CircularGallery"));

const navTabs = [
  { id: "/", labelKey: "home" },
  { id: "/portfolio", labelKey: "portfolio" },
  { id: "/bio", labelKey: "bio" },
  { id: "/services", labelKey: "services" },
  { id: "/contact", labelKey: "contact" },
];

const subheaderNavTabs = [
  { id: "/portfolio", labelKey: "portfolio" },
  { id: "/services", labelKey: "services" },
  { id: "/bio", labelKey: "bio" },
  { id: "/contact", labelKey: "contact" },
];

const Navbar = ({ locale = "en" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname.replace(/^\/de/, "") || "/");

  const handleLanguageToggle = () => {
    const targetLocale = locale === "de" ? "en" : "de";
    const nextPath = getLocalizedPath(location.pathname, targetLocale);
    navigate(nextPath);
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  // Get featured projects for gallery
  const featuredProjects = useMemo(() => {
    return data.portfolio.filter(project => project.isFeatured).map(project => ({
      text: project.title,
      image: project.main || project.img,
      link: `/portfolio/${project.title.replace(/\s+/g, "-").toLowerCase()}`
    }));
  }, []);

  const handleProjectClick = useCallback((link) => {
    navigate(link);
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  }, [navigate]);

  useEffect(() => {
    const normalizedPath = location.pathname.replace(/^\/de/, "") || "/";

    let nextActiveTab = normalizedPath;

    if (normalizedPath.startsWith("/portfolio")) {
      nextActiveTab = "/portfolio";
    } else if (normalizedPath.startsWith("/services")) {
      nextActiveTab = "/services";
    }

    setActiveTab(nextActiveTab);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollTop > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    const nextOpenState = !menuOpen;
    setMenuOpen(nextOpenState);
    document.body.classList.toggle("menu-open", nextOpenState);
    document.body.style.overflow = nextOpenState ? "hidden" : "auto";
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <>
      <div className={`navbar ${menuOpen ? "menu-open" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <div className="wrapper">
          <div className="brand-stack">
            <Link to={getLocalizedPath("/", locale)}>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="logo"
              >
                AVZKITCHEN
              </motion.span>
            </Link>

            <div className="subheader-row">
              <nav className="subheader-nav" aria-label="Main navigation">
                {subheaderNavTabs.map((tab) => (
                  <NavLink
                    key={tab.id}
                    to={getLocalizedPath(tab.id, locale)}
                    onClick={handleLinkClick}
                    className="nav-tab"
                    style={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId="bubble"
                        className="active-indicator"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="nav-tab-label">{getUiText(locale, "nav", tab.labelKey)}</span>
                  </NavLink>
                ))}
              </nav>

              <a href="mailto:hello@avzkitchen.com" className="nav-mail">
                {getUiText(locale, "nav", "email")}
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <motion.div
          className="nav-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMenu}
        />
      )}

      {/* Corner menu toggle */}
      <div className={`corner-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "active" : ""}`}></div>
        <div className={`line ${menuOpen ? "active" : ""}`}></div>
        <div className={`line ${menuOpen ? "active" : ""}`}></div>
      </div>


      {/* Corner nav menu */}
      <nav className={`corner-nav ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
        <div className="corner-nav-inner">
          {navTabs.map((tab) => (
            <div key={tab.id}>
              <NavLink
                to={getLocalizedPath(tab.id, locale)}
                onClick={handleLinkClick}
                className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="mobile-bubble"
                    className="active-indicator"
                    style={{ borderRadius: 4 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="nav-tab-label">{getUiText(locale, "nav", tab.labelKey)}</span>
              </NavLink>

              {tab.id === "/portfolio" && featuredProjects.length > 0 && (
                <div className="corner-nav-gallery">
                  <Suspense fallback={<div className="corner-nav-gallery-placeholder" />}>
                    <CircularGallery
                      items={featuredProjects}
                      bend={1}
                      textColor="#ffffff"
                      borderRadius={0.05}
                      font="bold 28px"
                      size={160}
                      scrollSpeed={2}
                      scrollEase={0.05}
                      onItemClick={handleProjectClick}
                    />
                  </Suspense>
                </div>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={handleLanguageToggle}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#f3efe8",
              borderRadius: "999px",
              padding: "0.5rem 0.9rem",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              width: "3.25rem",
              minWidth: "3.25rem",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {getUiText(locale, "nav", "languageToggle")}
          </button>

          <div className="social-links">
            <a
              href="https://github.com/avz-kitchen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/avz-kitchen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/artichoke.v/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
