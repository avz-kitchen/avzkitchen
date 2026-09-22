import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ActionRow from "../others/ActionRow";
import SectionHeading from "../others/SectionHeading";
import GridLayout from "../others/GridLayout";
import "./ServicesPage.scss";
import ContactSection from "../contactSection/ContactSection";
import { getLocalizedPath, getUiText } from "../../i18n/content";

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

const ServicesPage = ({ locale = "en" }) => {
  const [activeTab, setActiveTab] = useState("shopify");
  const [visibleCards, setVisibleCards] = useState([]);

  const serviceData = getUiText(locale, "services", "tabs");
  const processData = getUiText(locale, "services", "steps");
  const faqItems = getUiText(locale, "services", "faq");
  const activeServiceResolved = serviceData.find((tab) => tab.id === activeTab) || serviceData[0];

  useEffect(() => {
    const grid = document.querySelector(".process-grid");

    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry || !entry.isIntersecting) return;

        processData.forEach((_, index) => {
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
  }, [processData]);

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
            <h1 style={{ fontSize: "6rem" }}>{getUiText(locale, "services", "heroTitle")}</h1>

            <ActionRow
              className="cta-row"
              actions={[
                { label: getUiText(locale, "services", "heroPrimary"), to: getLocalizedPath("/contact", locale), variant: "primary" },
                { label: getUiText(locale, "services", "quickAuditCta"), to: getLocalizedPath("/services/quick-ux-audit", locale), variant: "secondary" },
              ]}
            />
          </div>

          <div className="hero-panel">
            <video autoPlay loop muted playsInline style={{ width: "500px", height: "500px", objectFit: "cover", borderRadius: "1.25rem" }}>
              <source src="/optimized/avz-ktichening.webm" type="video/webm" />
            </video>
          </div>
        </GridLayout>
      </section>

      <section className="services-offers">
        <SectionHeading title={getUiText(locale, "services", "sectionTitle")} align="center" />

        <div className="service-tabs" role="tablist" aria-label="Service categories">
          <div className="tab-list">
            {serviceData.map((tab) => (
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
              <p className="card-tag">{activeServiceResolved.tag}</p>
              <h3>{activeServiceResolved.title}</h3>
              <p className="tab-description">{activeServiceResolved.description}</p>

              <ul>
                {activeServiceResolved.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="tab-visual">
              <div className="platform-mark">
                <PlatformLogo type={activeTab} />
              </div>
              <ServiceMockup type={activeTab} />
            </div>
          </div>
        </div>
      </section>

      <section className="services-process">
        <SectionHeading title={getUiText(locale, "services", "processTitle")} align="center" className="narrow" />

        <div className="process-grid">
          {processData.map(({ title, text }, index) => (
            <div
              key={title}
              className={`process-card ${visibleCards.includes(index) ? "is-visible" : ""}`}
              style={{ "--delay": `${index * 180}ms` }}
            >
              <span className="step">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-faq">
        <h3 style={{ marginBottom: "1rem", width: "80%", textAlign: "left" }}>
          {getUiText(locale, "services", "faqTitle")}
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

      <ContactSection locale={locale} />
    </main>
  );
};

export default ServicesPage;
