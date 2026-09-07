import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../others/Button";
import ActionRow from "../others/ActionRow";
import SectionHeading from "../others/SectionHeading";
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
  const serviceContent = (
    <span className="unified-paragraph">
      I sift <span className="type-word w-1">insight ✐</span>,
      stir <span className="type-word w-2">identity ✦</span>,
      and shape <span className="type-word w-3">digital craft ☍</span>
      — cooking experiences that feel memorable, clear, and deeply alive ❋.
    </span>
  );

const tabs = [
  {
    id: "shopify",
    label: "Shopify",
    tag: "Recipe station",
    title: "Shopify storefront design & custom components",
    description:
      "We design and build conversion-focused Shopify storefronts with custom components, premium UX, and cleaner customer journeys that feel polished across every product and collection page.",
    bullets: ["Custom Shopify components", "Storefront UX", "Conversion-focused layout"],
    image: makePreview("Shopify", ["#EFD9EB", "#C9D9F5"]),
  },
  {
    id: "amazon",
    label: "Amazon",
    tag: "Brand pantry",
    title: "Amazon A+ content & cross-channel brand consistency",
    description:
      "We create Amazon A+ content, marketplace-ready visuals, and reusable templates that keep your brand consistent across channels, platforms, and product touchpoints while strengthening trust and clarity.",
    bullets: ["Amazon A+ content", "Cross-channel brand consistency", "Reusable templates"],
    image: makePreview("Amazon", ["#F4E6C9", "#D7E9E5"]),
  },
  {
    id: "fullstack",
    label: "Full stack",
    tag: "Kitchen lab",
    title: "Custom web apps & scalable digital product builds",
    description:
      "We turn early ideas into polished digital products with a clean front end, strong technical foundations, and a scalable structure built for growth and long-term performance.",
    bullets: ["Web app development", "Responsive builds", "Scalable systems"],
    image: makePreview("Full Stack", ["#D9E7F3", "#EAD8F0"]),
  },
  {
    id: "presence",
    label: "Digital presence",
    tag: "Atmosphere studio",
    title: "Brand identity, landing pages & digital presence strategy",
    description:
      "We refine the strategy, design, and digital atmosphere so your brand feels premium, consistent, and ready to hold attention across web, campaigns, and customer touchpoints.",
    bullets: ["Brand strategy", "Landing page design", "Platform consistency"],
    image: makePreview("Presence", ["#F5D6D8", "#CFE0F9"]),
  },
];

const process = [
  {
    step: "01",
    title: "Gather",
    text: "We identify the ingredients: audience, offer, and ambition, so the direction is grounded in real momentum.",
  },
  {
    step: "02",
    title: "Season",
    text: "I shape the tone, flow, and visual rhythm so the experience feels clear, confident, and unmistakably yours.",
  },
  {
    step: "03",
    title: "Serve",
    text: "The final product is refined, polished, and handed off ready to attract attention and turn it into action.",
  },
];


const proofPoints = ["Brand clarity", "Conversion focus", "Fast execution", "Premium design"];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("shopify");
  const [visibleCards, setVisibleCards] = useState([]);
  const activeService = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  useEffect(() => {
    const grid = document.querySelector(".process-grid");

    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry || !entry.isIntersecting) return;

        process.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }, index * 180);
        });

        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

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
            <h1>From ingredients to high-converting digital experiences.</h1>

            <ActionRow
              className="cta-row"
              actions={[
                { label: "Book a discovery call", to: "/contact", variant: "primary" },
                { label: "hello@avzkitchen.com", href: "mailto:hello@avzkitchen.com?subject=Project%20Inquiry", variant: "secondary" },
              ]}
            />


          </div>
                    
          <div className="hero-panel">
<video autoPlay loop muted playsInline
style={{ width: "500px", height: "500px", objectFit: "cover", borderRadius: "1.25rem" }}>
            <source src="/optimized/avz-ktichening.webm" type="video/webm" />
          </video>  
          </div>
        </GridLayout>

      </section>
           {/* <Richtext paragraph={serviceContent} tags={proofPoints} /> */}

      <section className="services-offers">
        <SectionHeading
          title="The ingredients behind premium Shopify design, Amazon content, and digital growth."
          align="center"
        />

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
        <SectionHeading
          title="A focused recipe for brand clarity, conversion, and momentum."
          align="center"
          className="narrow"
        />

        <div className="process-grid">
          {process.map(({ step, title, text }, index) => (
            <div
              key={step}
              className={`process-card ${visibleCards.includes(index) ? "is-visible" : ""}`}
              style={{ "--delay": `${index * 180}ms` }}
            >
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
