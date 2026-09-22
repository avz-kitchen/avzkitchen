import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Button from "../others/Button";
import portfolioData from "../../data/data.json";
import { getLocalizedPath } from "../../i18n/content";
import { getServiceLandingPageConfig } from "../../i18n/serviceLandingPageContent";
import "./ServiceLandingPage.scss";

const ServiceGraphic = ({ slug }) => {
  const palettes = {
    "quick-ux-audit": { base: "#f7efe8", accent: "#5a3f67", accent2: "#d8b18a", accent3: "#9bb182" },
    "shopify-ux-design": { base: "#edf4ee", accent: "#2f5f47", accent2: "#d6b98d", accent3: "#8ab08a" },
    "shopify-ux-audit": { base: "#f5efe9", accent: "#584b7a", accent2: "#d9b58d", accent3: "#b0c9a4" },
    "accessibility-audit": { base: "#f3f2ee", accent: "#3e4d70", accent2: "#d7bc9f", accent3: "#a7b9c9" },
    "landing-page-design": { base: "#f9f1ec", accent: "#5f4d54", accent2: "#d4a285", accent3: "#9bb7a0" },
  };

  const palette = palettes[slug] || palettes["quick-ux-audit"];

  return (
    <div className="service-graphic" aria-hidden="true">
      <svg viewBox="0 0 420 360" className="graphic-svg" role="img">
        <defs>
          <linearGradient id={`bg-${slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.base} />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        <rect x="20" y="22" width="380" height="316" rx="28" fill={`url(#bg-${slug})`} />
        <circle cx="110" cy="110" r="70" fill={palette.accent2} opacity="0.2" />
        <circle cx="315" cy="96" r="52" fill={palette.accent3} opacity="0.24" />
        <rect x="54" y="84" width="188" height="142" rx="18" fill="#ffffff" opacity="0.9" />
        <rect x="72" y="108" width="84" height="14" rx="7" fill={palette.accent} opacity="0.18" />
        <rect x="72" y="132" width="118" height="12" rx="6" fill={palette.accent} opacity="0.12" />
        <rect x="72" y="154" width="138" height="12" rx="6" fill={palette.accent} opacity="0.1" />
        <rect x="72" y="176" width="72" height="12" rx="6" fill={palette.accent} opacity="0.1" />

        <rect x="268" y="154" width="88" height="108" rx="16" fill={palette.accent} opacity="0.12" />
        <rect x="284" y="174" width="54" height="12" rx="6" fill={palette.accent} opacity="0.2" />
        <rect x="284" y="196" width="42" height="12" rx="6" fill={palette.accent} opacity="0.12" />
        <rect x="284" y="218" width="56" height="12" rx="6" fill={palette.accent} opacity="0.12" />
        <rect x="284" y="240" width="38" height="12" rx="6" fill={palette.accent3} opacity="0.5" />

        <path d="M36 250C92 212 118 214 152 244C182 272 210 278 246 246C280 216 314 210 360 228L360 296L36 296Z" fill={palette.accent3} opacity="0.24" />
        <path d="M212 82C232 60 258 54 281 70C304 86 308 120 289 139C270 158 236 161 215 142C192 122 194 97 212 82Z" fill={palette.accent2} opacity="0.25" />
        <path d="M118 246L158 206L200 246" fill="none" stroke={palette.accent} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        <circle cx="158" cy="206" r="11" fill={palette.accent} opacity="0.9" />
        <path d="M272 126L292 108L310 126L328 108L344 126" fill="none" stroke={palette.accent} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </svg>
    </div>
  );
};

const getSlugFromTitle = (title = "") => title.trim().replace(/\s+/g, "-").toLowerCase();

const ServiceLandingPage = ({ locale = "en", slug = "quick-ux-audit" }) => {
  const content = getServiceLandingPageConfig(locale, slug) || getServiceLandingPageConfig("en", "quick-ux-audit");

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    if (!revealItems.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [locale, slug]);

  const projectBuckets = {
    amazon: ["Amazon"],
    "shopify-ux-design": ["E-Commerce"],
    "shopify-ux-audit": ["E-Commerce"],
    "landing-page-design": ["E-Commerce", "Branding"],
    "accessibility-audit": ["App", "Branding", "E-Commerce"],
    "quick-ux-audit": ["App", "Branding", "E-Commerce", "Amazon"],
  };

  const relatedProjects = (portfolioData.portfolio || [])
    .filter((project) => (projectBuckets[slug] || []).includes(project.category))
    .slice(0, 3);

  return (
    <main className="service-landing-page">
      <Helmet>
        <title>{content.title} | AVZKITCHEN</title>
        <meta name="description" content={content.intro} />
        <link rel="canonical" href={`https://avzkitchen.com/services/${content.slug}`} />
      </Helmet>

      <section className="landing-hero reveal">
        <div className="landing-copy reveal">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="lead">{content.intro}</p>
          <p className="lead secondary">{content.subintro}</p>

          <div className="pill-row">
            {content.highlights.map((item, index) => (
              <span key={item} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>{item}</span>
            ))}
          </div>

          <div className="cta-row reveal" style={{ transitionDelay: "120ms" }}>
            <Button variant="primary" to={getLocalizedPath("/contact", locale)}>{content.cta}</Button>
            <Button variant="secondary" href="mailto:hello@avzkitchen.com?subject=Project%20Inquiry">
              hello@avzkitchen.com
            </Button>
          </div>
        </div>

        <div className="landing-panel reveal" aria-label="Service overview panel" style={{ transitionDelay: "150ms" }}>
          <div className="panel-card">
            <span className="panel-label">What we look for</span>
            <ul>
              {content.steps.map((step, index) => (
                <li key={step} className="reveal" style={{ transitionDelay: `${index * 90}ms` }}>{step}</li>
              ))}
            </ul>
          </div>
          <ServiceGraphic slug={slug} />
        </div>
      </section>

      <section className="landing-sections">
        {content.sections.map((section, index) => (
          <article className="info-block reveal" key={section.title} style={{ transitionDelay: `${index * 100}ms` }}>
            <span className="block-index">0{index + 1}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </article>
        ))}
      </section>

      {relatedProjects.length > 0 && (
        <section className="service-portfolio-showcase reveal" style={{ transitionDelay: "80ms" }}>
          <div className="showcase-header">
            <p className="eyebrow small">Selected work</p>
            <h2>Examples from the portfolio.</h2>
          </div>

          <div className="showcase-stack">
            {relatedProjects.map((project, index) => (
              <Link
                key={project.title}
                to={`/portfolio/${getSlugFromTitle(project.title)}`}
                className="showcase-feature reveal"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="showcase-media">
                  <img src={project.main} alt={project.title} />
                </div>

                <div className="showcase-copy">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.shortDesc || project.desc}</p>
                  <div className="showcase-meta">
                    {(Array.isArray(project.skills) ? project.skills : [project.skills]).filter(Boolean).slice(0, 3).map((skill) => (
                      <span key={`${project.title}-${skill}`} className="meta-pill">{skill}</span>
                    ))}
                  </div>

                  <span className="showcase-link">View project</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="landing-faq reveal" style={{ transitionDelay: "80ms" }}>
        <div className="faq-heading">
          <p className="eyebrow small">FAQ</p>
          <h2>Questions clients ask before they start.</h2>
        </div>

        <div className="faq-list">
          {content.faq.map((item, index) => (
            <details className="faq-item reveal" key={item.q} style={{ transitionDelay: `${index * 90}ms` }}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="landing-cta-band reveal" style={{ transitionDelay: "120ms" }}>
        <div className="cta-shell">
          <div>
            <p className="eyebrow small">Ready when you are</p>
            <h3>Bring more clarity, trust, and momentum to the experience.</h3>
          </div>

          <Button variant="primary" to={getLocalizedPath("/contact", locale)}>Request a quick UX audit</Button>
        </div>
      </section>
    </main>
  );
};

export default ServiceLandingPage;
