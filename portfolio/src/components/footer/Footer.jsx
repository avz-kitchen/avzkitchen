import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-content"></div>
            <h1 className="xxxl">AVZKITCHEN</h1>

      {/* Sitemap Grid */}
      <div className="sitemap">
          <Link to="/bio">Bio</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/portfolio/#branding">Branding</Link>
          <Link to="/portfolio/#uxui">UX/UI Design</Link>
          <Link to="/portfolio/#webdev">Web Development</Link>
          <Link to="/resume">Resume</Link>
</div>

        <div className="contact-links">
  <span className="social-links">
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
          </span>
                    <a href="mailto:avzkitchen@gmail.com">avzkitchen@gmail.com</a>

        </div>
      <div className="copyright">
          <Link to="/data">Data & Privacy</Link>

        <a
          href="https://www.instagram.com/artichoke.v/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © {year} avzkitchen. All rights reserved.
        </a>
      <Link to="/legal">Legal</Link>

      </div>
    </footer>
  );
};

export default Footer;
