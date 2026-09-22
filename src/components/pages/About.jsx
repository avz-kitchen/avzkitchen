import { Helmet } from "react-helmet";
import TechStack from "../aboutSection/TechStack";
import AboutSection from "../aboutSection/AboutSection";
import Richtext from "../others/Richtext";
import TwoColumnList from "../others/TwoColumnList";
import { getUiText } from "../../i18n/content";

const About = ({ locale = "en" }) => {
  const aboutText = getUiText(locale, "bio", "summary") || "Based in Freiburg im Breisgau, Baden-Württemberg, I work with impact-driven brands across Germany, the DACH region, and Europe as a Product Designer and Frontend Developer. At AVZ Kitchen, I blend strategy, design, and clean code to create sustainable UX/UI systems, high-converting Shopify experiences, and customer-first digital products that feel thoughtful, ethical, and built to last.";
  const headerTags = getUiText(locale, "bio", "tags") || ["Product Designer", "Frontend Developer", "Freiburg", "DACH", "Europe"];
  const pillars = getUiText(locale, "bio", "pillars") || [
    {
      title: "Sustainable Digital Design",
      text: "I build low-carbon web apps, lightweight storefronts, and energy-efficient digital products with performance-first thinking and a smaller digital footprint.",
    },
    {
      title: "E-Commerce Excellence",
      text: "From custom Shopify OS 2.0 themes to Amazon Storefront and A+ Content design for Amazon.de and European marketplaces, every experience is shaped for trust, clarity, and conversion.",
    },
    {
      title: "Ethical & Accessible UX",
      text: "I design human-centered journeys with accessibility at the core, aligning with WCAG principles and creating transparent, inclusive interactions for real people.",
    },
  ];

  return (
    <main aria-label={getUiText(locale, "bio", "sectionLabel") || "About Angelica Valenzuela and AVZ Kitchen"}>
      <Helmet>
        <title>{getUiText(locale, "bio", "metaTitle") || "About Angelica Valenzuela | Freelance UX/UI Designer & Developer | AVZ Kitchen"}</title>
        <meta
          name="description"
          content={getUiText(locale, "bio", "metaDescription") || "Meet Angelica Valenzuela, founder of AVZ Kitchen—a digital visual studio near Freiburg im Breisgau specializing in sustainable UX/UI design, Shopify development, and Amazon storefronts for eco-conscious DACH & European brands."}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={locale === "de" ? "https://avzkitchen.com/de/bio" : "https://avzkitchen.com/bio"} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "name": locale === "de" ? "Über Angelica Valenzuela" : "About Angelica Valenzuela",
            "url": locale === "de" ? "https://avzkitchen.com/de/bio" : "https://avzkitchen.com/bio",
            "description": locale === "de"
              ? "Angelica Valenzuela ist die Gründerin von AVZ Kitchen, einem digitalen Visual Studio in Freiburg im Breisgau, das sich auf nachhaltiges UX/UI-Design, Shopify-Entwicklung und Amazon-Storefronts für öko-conscious Marken in DACH und Europa spezialisiert."
              : "Angelica Valenzuela is the founder of AVZ Kitchen, a digital visual studio near Freiburg im Breisgau specializing in sustainable UX/UI design, Shopify development, and Amazon storefronts for eco-conscious DACH and European brands.",
            "mainEntity": {
              "@type": "Person",
              "name": "Angelica Valenzuela",
              "jobTitle": locale === "de" ? "Product Designer & Frontend Developer" : "Product Designer & Frontend Developer",
              "url": "https://avzkitchen.com",
              "description": locale === "de"
                ? "Angelica Valenzuela ist Product Designer und Frontend Developer aus Freiburg im Breisgau, Deutschland. Sie entwickelt nachhaltige digitale Erlebnisse für ökologische Marken in DACH und Europa."
                : "Angelica Valenzuela is a product designer and frontend developer based in Freiburg im Breisgau, Germany, creating sustainable digital experiences for eco-conscious brands across DACH and Europe.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Freiburg im Breisgau",
                "addressLocality": "Freiburg im Breisgau",
                "addressRegion": "Baden-Württemberg",
                "postalCode": "79098",
                "addressCountry": "DE"
              },
              "sameAs": [
                "https://www.linkedin.com/in/avzkitchen",
                "https://github.com/avz-kitchen",
                "https://www.instagram.com/artichoke.v",
                "https://www.behance.net/avzkitchen"
              ],
              "worksFor": {
                "@type": "ProfessionalService",
                "name": "AVZ Kitchen",
                "url": "https://avzkitchen.com",
                "description": locale === "de"
                  ? "AVZ Kitchen ist das digitale Visu-Studio von Angelica Valenzuela mit Fokus auf nachhaltiges UX/UI-Design, Shopify-Entwicklung und Amazon Storefront Design für Marken in DACH und Europa."
                  : "AVZ Kitchen is the digital visual studio founded by Angelica Valenzuela, specializing in sustainable UX/UI design, Shopify development, and Amazon storefront design for DACH and European brands.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Freiburg im Breisgau",
                  "addressLocality": "Freiburg im Breisgau",
                  "addressRegion": "Baden-Württemberg",
                  "postalCode": "79098",
                  "addressCountry": "DE"
                },
                "areaServed": ["Germany", "Austria", "Switzerland", "Europe"],
                "sameAs": [
                  "https://avzkitchen.com"
                ]
              }
            }
          })}
        </script>
      </Helmet>

      <AboutSection isAboutPage={true} locale={locale} />

      <section aria-label={getUiText(locale, "bio", "sectionLabel") || "Angelica Valenzuela story and design philosophy"}>
        <Richtext paragraph={<p>{aboutText}</p>} tags={headerTags} />
      </section>

      <TwoColumnList
        heading={getUiText(locale, "bio", "corePillars") || "Core Pillars"}
        description={getUiText(locale, "bio", "corePillarsDescription") || "Thoughtful design for sustainable growth, digital clarity, and meaningful customer experiences."}
        items={pillars}
        headingTag="h2"
      />

      <TechStack />
    </main>
  );
};

export default About;
