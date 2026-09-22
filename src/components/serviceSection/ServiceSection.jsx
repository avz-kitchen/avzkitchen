import "./service.scss"
import { Accordion, AccordionItem } from "@heroui/react";
import BlurText from "./../others/BlurText";
import GridLayout from "./../others/GridLayout";
import { getUiText } from "../../i18n/content";

const services = {
  en: [
    {
      key: "brand-strategy",
      title: "Brand Strategy – Selecting Ethical & Sustainable Ingredients",
      content: "Defining brand values, sustainable messaging, and transparent UX foundations for brands that want to grow with clarity, trust, and a lower-carbon digital footprint across Freiburg, Baden-Württemberg, DACH, and Europe.",
    },
    {
      key: "product-design",
      title: "Product & UX Design – Blending Conscious Flavors",
      content: "Crafting accessible, low-energy digital interfaces, design systems, and intuitive user flows that balance usability, sustainability, and conversion for modern ecommerce and product brands.",
    },
    {
      key: "coding",
      title: "E-Commerce & Coding – Bringing the Recipe to Life",
      content: "Building lightweight, fast-loading Shopify webshops and sustainable web apps with clean frontend tech, thoughtful UX, and performance-first development for scalable growth.",
    },
    {
      key: "design-systems",
      title: "Amazon Storefronts & A+ Content – Plating for Global Marketplaces",
      content: "Designing high-converting Amazon Brand Stores and A+ Content for eco-friendly brands on Amazon.de and European marketplaces, with clear storytelling, trust-building layouts, and conversion-focused product presentation.",
    },
  ],
  de: [
    {
      key: "brand-strategy",
      title: "Brandstrategie – Ethik und nachhaltige Zutaten auswählen",
      content: "Markenwerte, nachhaltige Messaging-Strategien und transparente UX-Grundlagen definieren, damit Marken mit Klarheit, Vertrauen und einem niedrigeren digitalen Fußabdruck in Freiburg, Baden-Württemberg, DACH und Europa wachsen.",
    },
    {
      key: "product-design",
      title: "Produkt- & UX-Design – Bewusste Aromen mischen",
      content: "Barrierefreie, energieeffiziente digitale Interfaces, Designsysteme und intuitive Nutzerflüsse entwickeln, die Nutzbarkeit, Nachhaltigkeit und Conversion in Einklang bringen.",
    },
    {
      key: "coding",
      title: "E-Commerce & Coding – Das Rezept zum Leben erwecken",
      content: "Leichte, schnell ladende Shopify-Webshops und nachhaltige Web-Apps mit sauberer Frontend-Technologie, durchdachter UX und performanceorientierter Entwicklung für skalierbares Wachstum bauen.",
    },
    {
      key: "design-systems",
      title: "Amazon Storefronts & A+-Content – Für globale Märkte anrichten",
      content: "Hochkonvertierende Amazon Brand Stores und A+-Content für nachhaltige Marken auf Amazon.de und europäischen Märkten gestalten – mit klarer Storytelling, vertrauensbildenden Layouts und konversionsorientierter Produktpräsentation.",
    },
  ],
};

const ServiceSection = ({ locale = "en" }) => {
  const translatedServices = services[locale] || services.en;

  return (
    <section className="service-section">
      <GridLayout columns={2}>
        <BlurText
          text={"Cooking Up Sustainable Visual Experiences & Digital Products"}
          delay={200}
          animateBy="words"
          direction="top"
          className="xxl font-bold mb-8 "
        />

        <Accordion defaultExpandedKeys={["brand-strategy"]} className="w-full max-w-2xl">
          {translatedServices.map((service) => (
            <AccordionItem
              key={service.key}
              aria-label={service.title}
              title={service.title}
            >
              {service.content}
            </AccordionItem>
          ))}
        </Accordion>
      </GridLayout>
    </section>
  );
};

export default ServiceSection;
