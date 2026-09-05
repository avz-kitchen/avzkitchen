import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./navbar.scss";

import { Link } from "react-router-dom";
import CircularGallery from "../others/CircularGallery";
import data from "../../data/data.json";

const navTabs = [
  { id: "/", label: "Visual Studio" },
  { id: "/portfolio", label: "Portfolio" },
  { id: "/bio", label: "Bio" },
  { id: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);

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
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("menu-open", !menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <>
      <div className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <div className="wrapper">
          <Link to="/">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="logo"
            >
              AVZKITCHEN
            </motion.span>
          </Link>
          
          {/* Desktop navigation */}
          <nav>
            {navTabs.map((tab) => (
              <NavLink
                key={tab.id}
                to={tab.id}
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
                <span className="nav-tab-label">{tab.label}</span>
              </NavLink>
            ))}
          </nav>
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
      <nav className={`corner-nav ${menuOpen ? "open" : ""}`}>
        {navTabs.map((tab) => (
          <div key={tab.id}>
            <NavLink
              to={tab.id}
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
              <span className="nav-tab-label">{tab.label}</span>
            </NavLink>
            
            {/* Show gallery after Portfolio tab */}
            {tab.id === "/portfolio" && featuredProjects.length > 0 && (
              <div className="corner-nav-gallery">
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
              </div>
            )}
          </div>
        ))}
        
        {/* Social links in mobile nav */}
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
      </nav>
    </>
  );
};

export default Navbar;
