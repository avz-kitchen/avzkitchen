import { Helmet } from "react-helmet";
import Button from "../others/Button";
import { getLocalizedPath } from "../../i18n/content";
import "./ShopifyDesignPage.scss";

const benefits = [
  {
    title: "Speed",
    text: "Fast-loading storefronts and lean component structure keep the shopping experience smooth, responsive, and conversion-focused for European customers.",
  },
  {
    title: "Accessibility",
    text: "Clear hierarchy, readable contrast, structured interfaces, and intuitive product flows make your Shopify store easier to use for more people.",
  },
  {
    title: "Conversion UI",
    text: "Every section is designed to guide attention, reduce friction, and help visitors move from curiosity to purchase with confidence.",
  },
];

const techStack = ["Liquid", "React", "Tailwind", "Shopify OS 2.0", "Theme customization", "Frontend development"];

const ShopifyDesignPage = ({ locale = "en" }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Shopify UX Design & Development",
    name: "AVZ Kitchen",
    description:
      "Custom Shopify UX/UI design and frontend development for brands in Germany, Austria, Switzerland, and Europe.",
    provider: {
      "@type": "Organization",
      name: "AVZ Kitchen",
      url: "https://avzkitchen.com",
    },
    areaServed: ["Germany", "Austria", "Switzerland", "Europe"],
    url: "https://avzkitchen.com/services/shopify-design",
  };

  return (
    <main className="shopify-design-page">
      <Helmet>
        <title>Shopify UX/UI Designer Germany & DACH | AVZ Kitchen</title>
        <meta
          name="description"
          content="Custom Shopify design and frontend development for brands in Germany, Austria, Switzerland, and Europe. Built by AVZ Kitchen."
        />
        <link rel="canonical" href="https://avzkitchen.com/services/shopify-design" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="shopify-hero">
        <div className="hero-copy">
          <p className="eyebrow">Shopify UX/UI Design</p>
          <h1>Shopify UX/UI Design & E-Commerce Development in Germany & DACH</h1>
          <p className="lead">
            AVZ Kitchen designs custom Shopify storefronts and ecommerce experiences for brands in Germany,
            Austria, Switzerland, and across Europe. We help growing businesses create clearer customer
            journeys, stronger product storytelling, and more confident purchasing experiences that support
            long-term growth.
          </p>

          <div className="cta-row" aria-label="Primary calls to action for Shopify services">
            <Button variant="primary" to={getLocalizedPath("/contact", locale)}>
              Book a Shopify discovery call
            </Button>
            <Button variant="secondary" href="mailto:hello@avzkitchen.com?subject=Shopify%20Design%20Inquiry">
              hello@avzkitchen.com
            </Button>
          </div>
        </div>

        <div className="hero-panel" aria-label="Shopify storefront and product page overview">
          <div className="panel-card glass-card">
            <span className="panel-label">What your store needs</span>
            <ul>
              <li>Clear product storytelling</li>
              <li>Conversion-focused UX patterns</li>
              <li>European-friendly storefront setup</li>
              <li>Accessible, mobile-ready design</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="info-section glass-card">
        <h2>Custom Shopify Storefronts Built for European Brands</h2>
        <p>
          A strong Shopify storefront does more than look polished. It forms the foundation of your product
          experience and supports the way customers discover, compare, and buy. We design storefronts for
          businesses that want less friction, more trust, and a stronger brand presence across the customer
          journey.
        </p>
        <p>
          From collection pages to product detail flows, each section is shaped around usability, conversion,
          and brand clarity. We create ecommerce experiences tailored to your offer, your audience, and the
          standards expected by modern European consumers.
        </p>
      </section>

      <section className="info-section glass-card">
        <h2>DSGVO / GDPR Compliance & Localized Multi-Currency Setups</h2>
        <p>
          For European brands, a compliant and trustworthy ecommerce experience is essential. We help structure
          Shopify storefronts with the right attention to privacy, trust, and regional buying expectations,
          including localized UX patterns, multi-currency setups, and a smoother purchase flow in international
          markets.
        </p>
        <p>
          Whether you sell in Germany, across DACH, or to customers in wider Europe, a well-thought-out setup
          helps improve clarity, confidence, and conversion across local market differences.
        </p>
      </section>

      <section className="info-section glass-card">
        <h2>Serving Clients in Freiburg, Baden-Württemberg, DACH & Across Europe</h2>
        <p>
          AVZ Kitchen supports founders and brands based in Freiburg im Breisgau, throughout Baden-Württemberg,
          across Germany, and beyond into Austria, Switzerland, and wider Europe. We work with teams that want
          a more strategic and conversion-focused Shopify presence without sacrificing brand quality or user
          trust.
        </p>
        <p>
          Whether you are launching a new store, refining an existing one, or preparing for international growth,
          the goal is the same: a clearer, stronger storefront that helps people buy with confidence.
        </p>
      </section>

      <section className="benefits-section">
        <div className="section-heading">
          <p className="eyebrow small">Key benefits</p>
          <h2>Why custom Shopify design makes a difference</h2>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="glass-card benefit-card">
              <span className="benefit-index">0{benefits.indexOf(benefit) + 1}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="info-section glass-card">
        <h2>Tech Stack</h2>
        <div className="tech-stack" aria-label="Shopify technology stack used for design and frontend development">
          {techStack.map((item) => (
            <span key={item} className="tech-pill">
              {item}
            </span>
          ))}
        </div>
        <p>
          We combine Shopify-native structure with modern frontend flexibility to build storefronts that feel
          intentional, perform well, and scale with your growth. Liquid handles the storefront logic, while
          React and Tailwind support a more flexible and polished digital experience where needed.
        </p>
      </section>

      <section className="cta-band glass-card">
        <div>
          <p className="eyebrow small">Ready to grow</p>
          <h3>Build a sharper Shopify experience for your next stage of growth.</h3>
        </div>

        <Button variant="primary" to={getLocalizedPath("/contact", locale)}>
          Start your project
        </Button>
      </section>
    </main>
  );
};

export default ShopifyDesignPage;
