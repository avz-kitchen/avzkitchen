import { useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../others/Button";
import GridLayout from "../others/GridLayout";
import "./ServicesPage.scss";
import ContactSection from "../contactSection/ContactSection";

const makePreview = (title, colors) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="640" viewBox="0 0 900 640">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${colors[0]}"/>
          <stop offset="100%" stop-color="${colors[1]}"/>
        </linearGradient>
      </defs>
      <rect width="900" height="640" fill="#F2F2F2"/>
      <rect x="40" y="40" width="820" height="560" rx="28" fill="url(#bg)"/>
      <rect x="90" y="100" width="220" height="24" rx="12" fill="rgba(255,255,255,0.75)"/>
      <rect x="90" y="145" width="140" height="18" rx="9" fill="rgba(255,255,255,0.6)"/>
      <rect x="90" y="210" width="300" height="200" rx="20" fill="rgba(255,255,255,0.18)"/>
      <rect x="430" y="210" width="320" height="160" rx="20" fill="rgba(255,255,255,0.18)"/>
      <rect x="430" y="390" width="320" height="90" rx="18" fill="rgba(255,255,255,0.12)"/>
      <rect x="90" y="440" width="520" height="18" rx="9" fill="rgba(255,255,255,0.52)"/>
      <rect x="90" y="470" width="440" height="18" rx="9" fill="rgba(255,255,255,0.38)"/>
      <text x="90" y="650" font-family="DM Sans, sans-serif" font-size="32" fill="rgba(41,47,93,0.9)" font-weight="700">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const tabs = [
  {
    id: "shopify",
    label: "Shopify",
    tag: "Kitchen station",
    title: "Shopify design & setup",
    description:
      "We build a storefront that feels premium, easy to trust, and smooth to shop—so the experience keeps the appetite going and the cart moving.",
    bullets: ["Store design", "Collection pages", "Conversion fixes"],
    image: makePreview("Shopify", ["#EFD9EB", "#C9D9F5"]),
  },
  {
    id: "amazon",
    label: "Amazon",
    tag: "Kitchen station",
    title: "Amazon storefronts",
    description:
      "We shape the brand story and storefront experience so your offer feels clearer, stronger, and more memorable from the first glance.",
    bullets: ["Brand presentation", "Page structure", "Visual consistency"],
    image: makePreview("Amazon", ["#F4E6C9", "#D7E9E5"]),
  },
  {
    id: "fullstack",
    label: "Full stack",
    tag: "Kitchen station",
    title: "Full stack development",
    description:
      "We turn ideas into functioning digital products with a polished front end and a strong technical base behind the scenes.",
    bullets: ["Web apps", "Responsive build", "Technical execution"],
    image: makePreview("Full Stack", ["#D9E7F3", "#EAD8F0"]),
  },
  {
    id: "presence",
    label: "Digital presence",
    tag: "Kitchen station",
    title: "Brand identity & digital presence",
    description:
      "We season the strategy, design, and digital experience so your brand feels clear, premium, and ready to win attention.",
    bullets: ["Brand strategy", "UX design", "Landing pages"],
    image: makePreview("Presence", ["#F5D6D8", "#CFE0F9"]),
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "We lock in your audience, offer, and goals so the project is built around real business outcomes.",
  },
  {
    step: "02",
    title: "Design",
    text: "I shape the visual language, messaging, and product flow so the experience feels clear and premium.",
  },
  {
    step: "03",
    title: "Launch",
    text: "Your site or product is built, refined, and handed off with clear next steps to convert more attention into leads.",
  },
];

const proofPoints = ["Brand clarity", "Conversion focus", "Fast execution", "Premium design"];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("shopify");
  const activeService = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <main className="services-page">
      <Helmet>
        <title>Services | AVZKITCHEN – Design & Development for High-Converting Digital Products</title>
        <meta
          name="description"
          content="AVZKITCHEN helps founders and businesses turn ideas into clear, premium digital experiences that attract leads and convert attention into action."
        />
        <link rel="canonical" href="https://avzkitchen.com/services" />
      </Helmet>

      <section className="services-hero">
        <GridLayout columns={2} gap={32}>
          <div className="hero-copy">
            <h1>We turn ingredients into digital experiences that sell.</h1>
            <p className="hero-text">
              We harvest the ingredients—strategy, design, code, and clarity—then plate a digital presence that feels
              premium, reads clearly, and converts attention into action.
            </p>

            <div className="cta-row">
              <Button to="/contact">Book a discovery call</Button>
              <a href="mailto:hello@avzkitchen.com?subject=Project%20Inquiry" className="inline-link">
                hello@avzkitchen.com
              </a>
            </div>

            <ul className="proof-list">
              {proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <p className="panel-label">The recipe</p>
              <ul>
                <li>Clear positioning so your offer makes sense at a glance</li>
                <li>Design and UX that guide people toward the next step</li>
                <li>Digital experiences built to feel premium and convert</li>
                <li>Technical execution that keeps the experience polished and reliable</li>
              </ul>
              <div className="mini-cta">
                <span>Ready to start cooking?</span>
                <Button to="/contact" variant="secondary">Send a brief</Button>
              </div>
            </div>
          </div>
        </GridLayout>
      </section>

      <section className="services-offers">
        <div className="section-heading">
          <p className="eyebrow">What’s on the menu</p>
          <h2>Everything needed to turn a good idea into a strong digital presence.</h2>
        </div>

        <div className="service-tabs" role="tablist" aria-label="Service categories">
          <div className="tab-list">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-panel" role="tabpanel" aria-live="polite">
            <div className="tab-copy">
              <p className="card-tag">{activeService.tag}</p>
              <h3>{activeService.title}</h3>
              <p className="tab-description">{activeService.description}</p>

              <ul>
                {activeService.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="tab-visual">
              <img src={activeService.image} alt={activeService.title} />
            </div>
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="section-heading narrow">
          <p className="eyebrow">The process</p>
          <h2>A focused recipe for momentum.</h2>
        </div>

        <div className="process-grid">
          {process.map(({ step, title, text }) => (
            <div key={step} className="process-card">
              <span className="step">{step}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

<ContactSection />
    </main>
  );
};

export default ServicesPage;
