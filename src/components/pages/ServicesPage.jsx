import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../others/Button";
import ActionRow from "../others/ActionRow";
import SectionHeading from "../others/SectionHeading";
import GridLayout from "../others/GridLayout";
import "./ServicesPage.scss";
import ContactSection from "../contactSection/ContactSection";

  const serviceContent = (
    <span className="unified-paragraph">
      I sift <span className="type-word w-1">insight ✐</span>,
      stir <span className="type-word w-2">identity ✦</span>,
      and shape <span className="type-word w-3">digital craft ☍</span>
      — cooking experiences that feel memorable, clear, and deeply alive ❋.
    </span>
  );

const PlatformLogo = ({ type }) => {
  const variants = {
    shopify: (
      <svg viewBox="0 0 64 64" className="platform-logo" aria-label="Shopify logo" role="img">
        <rect x="8" y="8" width="48" height="48" rx="14" fill="#95BF47" />
        <path d="M22 26L28 18L38 18L34 28L29 28L27 40L21 40L22 26ZM29 28H37L39 40H32L29 28Z" fill="#F7F8F3" />
        <path d="M40 22L48 24L45 34L39 32L40 22Z" fill="#D9F3A7" />
      </svg>
    ),
    amazon: (
      <svg viewBox="0 0 64 64" className="platform-logo" aria-label="Amazon logo" role="img">
        <rect x="8" y="8" width="48" height="48" rx="14" fill="#F3A847" />
        <path d="M18 36C22 29 27 25 34 25C39 25 43 27 46 31" stroke="#FFF8F0" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M22 42C27 45 32 47 39 47C43 47 46 45 49 42" stroke="#FFF8F0" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M32 20L40 30H24L32 20Z" fill="#FFF8F0" />
      </svg>
    ),
    fullstack: (
      <svg viewBox="0 0 64 64" className="platform-logo" aria-label="Full stack logo" role="img">
        <rect x="8" y="8" width="48" height="48" rx="14" fill="#4D5DFA" />
        <path d="M22 22L16 32L22 42" stroke="#EEF1FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M42 22L48 32L42 42" stroke="#EEF1FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M36 18L28 46" stroke="#EEF1FF" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    presence: (
      <svg viewBox="0 0 64 64" className="platform-logo" aria-label="Digital presence logo" role="img">
        <rect x="8" y="8" width="48" height="48" rx="14" fill="#D9718F" />
        <circle cx="22" cy="24" r="7" fill="#FFF4F7" />
        <circle cx="42" cy="24" r="7" fill="#FFF4F7" opacity="0.85" />
        <path d="M18 41C21 35 27 31 32 31C38 31 44 35 46 41" stroke="#FFF4F7" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    ),
  };

  return variants[type] || variants.shopify;
};

const ServiceMockup = ({ type }) => {
  const accentMap = {
    shopify: { header: "#95BF47", panel: "#F3F7EA", accent: "#E0F1BA" },
    amazon: { header: "#F3A847", panel: "#FFF2E0", accent: "#FDE3B4" },
    fullstack: { header: "#4D5DFA", panel: "#EEF1FF", accent: "#D9E2FF" },
    presence: { header: "#D9718F", panel: "#FFF2F6", accent: "#F8D5E1" },
  };

  const colors = accentMap[type] || accentMap.shopify;

  return (
    <svg className="service-mockup" viewBox="0 0 420 300" role="img" aria-label={`${type} service preview`}>
      <rect x="18" y="18" width="384" height="264" rx="24" fill="#F9F7F5" />
      <rect x="18" y="18" width="384" height="52" rx="24" fill={colors.header} opacity="0.18" />
      <rect x="36" y="35" width="72" height="18" rx="9" fill={colors.header} opacity="0.26" />
      <rect x="124" y="35" width="90" height="18" rx="9" fill={colors.header} opacity="0.12" />
      <rect x="226" y="35" width="120" height="18" rx="9" fill={colors.header} opacity="0.12" />

      <rect x="36" y="92" width="126" height="160" rx="16" fill={colors.panel} />
      <rect x="178" y="92" width="206" height="70" rx="16" fill={colors.accent} />
      <rect x="178" y="176" width="206" height="76" rx="16" fill="#FFFFFF" />
      <rect x="200" y="196" width="94" height="12" rx="6" fill="#D9DDE8" />
      <rect x="200" y="216" width="156" height="12" rx="6" fill="#EDF0F7" />

      <rect x="54" y="112" width="90" height="18" rx="9" fill={colors.header} opacity="0.2" />
      <rect x="54" y="142" width="90" height="12" rx="6" fill="#DDE3EF" />
      <rect x="54" y="164" width="80" height="12" rx="6" fill="#E7ECF5" />
      <rect x="54" y="186" width="90" height="12" rx="6" fill="#E7ECF5" />
      <rect x="54" y="208" width="74" height="12" rx="6" fill="#E7ECF5" />

      <circle cx="300" cy="128" r="20" fill="#FFFFFF" opacity="0.7" />
      <circle cx="322" cy="128" r="20" fill="#FFFFFF" opacity="0.5" />
      <path d="M272 128C285 114 301 112 312 126" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M260 146H338" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
};

const tabs = [
  {
    id: "shopify",
    label: "Shopify",
    tag: "Recipe station",
    title: "Shopify storefront design & custom components",
    description:
      "We design and build conversion-focused Shopify storefronts with custom components, premium UX, and cleaner customer journeys that feel polished across every product and collection page. We also audit the current experience to define quick wins and a practical rollout plan.",
    bullets: ["Custom Shopify components", "Storefront UX", "UX audit & quick wins"],
    platform: "shopify",
  },
  {
    id: "amazon",
    label: "Amazon",
    tag: "Brand pantry",
    title: "Amazon A+ content & cross-channel brand consistency",
    description:
      "We create Amazon A+ content, marketplace-ready visuals, and reusable templates that keep your brand consistent across channels, platforms, and product touchpoints while strengthening trust and clarity.",
    bullets: ["Amazon A+ content", "Cross-channel brand consistency", "Reusable templates"],
    platform: "amazon",
  },
  {
    id: "fullstack",
    label: "Full stack",
    tag: "Kitchen lab",
    title: "Custom web apps & scalable digital product builds",
    description:
      "We turn early ideas into polished digital products with a clean front end, strong technical foundations, and a scalable structure built for growth and long-term performance.",
    bullets: ["Web app development", "Responsive builds", "Scalable systems"],
    platform: "fullstack",
  },
  {
    id: "presence",
    label: "Digital presence",
    tag: "Atmosphere studio",
    title: "Brand identity, landing pages & digital presence strategy",
    description:
      "We refine the strategy, design, and digital atmosphere so your brand feels premium, consistent, and ready to hold attention across web, campaigns, and customer touchpoints. Through UX audits, we identify quick wins and shape a phased rollout that improves performance without the guesswork.",
    bullets: ["Brand strategy", "UX audits", "Quick wins & phased rollout"],
    platform: "presence",
  },
];

const process = [
  {
    step: "01",
    title: "Gather",
    text: "We gather the ingredients: your brand, audience, product story, and design system cues so the direction is grounded in what matters most.",
  },
  {
    step: "02",
    title: "Season",
    text: "We shape the code, UX flow, and visual rhythm so the experience feels refined, intuitive, and unmistakably premium across every touchpoint.",
  },
  {
    step: "03",
    title: "Serve",
    text: "We launch with clarity, polish, and momentum—ready to turn attention into trust, clicks, and conversion.",
  },
];


const proofPoints = ["Brand clarity", "Conversion focus", "Fast execution", "Premium design"];

const faqItems = [
  {
    question: "What services does AVZKITCHEN offer?",
    answer:
      "AVZKITCHEN offers brand strategy, Shopify storefront design, custom ecommerce experiences, Amazon content, landing page design, and digital product development to help businesses improve visibility, trust, and conversion across the customer journey.",
  },
  {
    question: "Why is custom Shopify design important for ecommerce growth?",
    answer:
      "Custom Shopify design helps brands create a more polished shopping experience, improve product clarity, strengthen brand perception, and guide customers more effectively from discovery to purchase. It is especially valuable for businesses that need a storefront that feels premium and performs well.",
  },
  {
    question: "What is Amazon A+ content and why does it matter?",
    answer:
      "Amazon A+ content is a way to improve product detail pages with stronger storytelling, clearer messaging, and more engaging visuals. It helps brands communicate value more effectively, build trust, and improve the customer experience on Amazon and other sales channels.",
  },
  {
    question: "How do you keep branding consistent across different channels?",
    answer:
      "We build scalable design systems and reusable templates so your brand stays consistent across Shopify, Amazon, landing pages, campaigns, and other digital touchpoints. This helps maintain clarity, improve recognition, and create a more cohesive customer experience.",
  },
  {
    question: "What is included in a UX audit and quick win plan?",
    answer:
      "A UX audit reviews the current customer journey, identifies friction points, and highlights improvements that can increase clarity, trust, and conversion. We define the most impactful quick wins first and then map them into a phased rollout plan so teams can improve the experience without disrupting the whole system.",
  },
  {
    question: "How do you approach a brand or digital project?",
    answer:
      "We begin by understanding the business goals, audience, and offer, then shape the strategy, design direction, and digital experience around those foundations. The result is a clearer, stronger, more conversion-focused experience that supports long-term growth.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

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
          content="AVZKITCHEN helps founders and businesses with Shopify storefront design, custom Shopify components, Amazon A+ content, and digital presence strategy for better conversion and brand consistency."
        />
        <link rel="canonical" href="https://avzkitchen.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="services-hero">
        <GridLayout columns={2} gap={32}>
          <div className="hero-copy">
            <h1 style={{  fontSize: "6rem" }}>From ingredients to high-converting digital experiences.</h1>

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
              <div className="platform-mark">
                <PlatformLogo type={activeService.platform} />
              </div>
              <ServiceMockup type={activeService.platform} />
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

      <section className="services-faq">
   <h3 style={{ marginBottom: "1rem" , width: "80%" ,textAlign: "left" }}>
     Frequently asked questions about Shopify, Amazon, and digital growth.
   </h3>

        <div className="faq-list">
          {faqItems.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default ServicesPage;
