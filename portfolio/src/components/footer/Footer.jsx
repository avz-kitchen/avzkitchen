import "./footer.scss";
import { Link } from "react-router-dom";
import GridLayout from "../others/GridLayout";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="span-three-column">
        <li>
          <h4>
            <Link to="/portfolio/">Pictogram</Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link to="/portfolio/">Design</Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link to="/portfolio/">Code</Link>
          </h4>
        </li>
      </ul>
      <div className="footer-content"></div>

      {/* Sitemap Grid */}
      <div className="sitemap">
        <div className="sitemap-category"> </div>
        <div className="sitemap-category">
          <Link to="/">
            <h3>Visual Studio</h3>
          </Link>
          <Link to="/about">About AVZ</Link>
          <Link to="/data">Data & Privacy</Link>
        </div>
        <div className="sitemap-category">
          <Link to="/portfolio">
            <h3>Portfolio</h3>
          </Link>
          <Link to="/portfolio/#branding">Branding</Link>
          <Link to="/portfolio/#uxui">UX/UI Design</Link>
          <Link to="/portfolio/#webdev">Web Development</Link>
        </div>

        <div className="sitemap-category">
          <Link to="/Contact">
            <h3>Contact</h3>
          </Link>
          <Link to="/contact">Contact Me</Link>
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
        </div>
      </div>

      <section className="copyright">
        <GridLayout columns={6}>
          <h4 className="vertical-text span-two-column">
            Some photos, <br /> some moving images
          </h4>
          <img src="/artichoke.png" className="span-four-column" />
        </GridLayout>
        <a
          href="https://www.instagram.com/artichoke.v/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2025 @artichoke.v
        </a>
      </section>
    </footer>
  );
};

export default Footer;
