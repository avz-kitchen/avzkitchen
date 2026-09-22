import "./footer.scss";
import { Link } from "react-router-dom";
import { getLocalizedPath, getUiText } from "../../i18n/content";

const Footer = ({ locale = "en" }) => {
  const year = new Date().getFullYear();
  const rightsText = getUiText(locale, "footer", "rights").replace("{year}", year);

  return (
    <footer className="footer">
      <div className="footer-content"></div>
      <h1 className="xxxl">AVZKITCHEN</h1>

      <div className="sitemap">
        <Link to={getLocalizedPath("/bio", locale)}>{getUiText(locale, "footer", "bio")}</Link>
        <Link to={getLocalizedPath("/portfolio", locale)}>{getUiText(locale, "footer", "portfolio")}</Link>
        <Link to={getLocalizedPath("/portfolio", locale)}>{getUiText(locale, "footer", "branding")}</Link>
        <Link to={getLocalizedPath("/portfolio", locale)}>{getUiText(locale, "footer", "uxui")}</Link>
        <Link to={getLocalizedPath("/portfolio", locale)}>{getUiText(locale, "footer", "webdev")}</Link>
      </div>

      <div className="contact-links">
        <span className="social-links">
          <a href="https://github.com/avz-kitchen" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="https://www.linkedin.com/in/avz-kitchen/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/artichoke.v/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </span>
        <a href="mailto:hello@avzkitchen.com">hello@avzkitchen.com</a>
      </div>

      <div className="copyright">
        <Link to={getLocalizedPath("/data", locale)}>{getUiText(locale, "footer", "privacy")}</Link>
        <a href="https://www.instagram.com/artichoke.v/" target="_blank" rel="noopener noreferrer">
          {rightsText}
        </a>
        <Link to={getLocalizedPath("/services", locale)}>{getUiText(locale, "footer", "legal")}</Link>
      </div>
    </footer>
  );
};

export default Footer;
