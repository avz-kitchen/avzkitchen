import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";
import { Link } from "react-router-dom";

const navTabs = [
  { id: "/", label: "Visual Studio" },
  { id: "/portfolio", label: "Portfolio" },
  { id: "/bio", label: "Bio" },
  { id: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

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
  };

  return (
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
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "active" : ""}`}></div>
          <div className={`line ${menuOpen ? "active" : ""}`}></div>
          <div className={`line ${menuOpen ? "active" : ""}`}></div>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="close-button" onClick={toggleMenu}>
            &times;
          </div>

          {navTabs.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.id}
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
              <span className="nav-tab-label">{tab.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
