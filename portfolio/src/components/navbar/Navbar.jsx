import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            AVZKitchen
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

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "textUc")}
            onClick={handleLinkClick}
          >
            Visual Studio
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/bio"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Bio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
