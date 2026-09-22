import "./service.scss"
import { Accordion, AccordionItem } from "@heroui/react";
import BlurText from "./../others/BlurText";
import GridLayout from "./../others/GridLayout";
import { getUiText } from "../../i18n/content";

const services = {
  en: [
    {
      key: "brand-strategy",
      title: "Brand Strategy – Selecting the Core Ingredients",
      content: "Every successful product begins with clarity. I define your brand's purpose, audience, and values to create a strong foundation that informs every design and product decision.",
    },
    {
      key: "product-design",
      title: "Product Design – Blending Flavors",
      content: "Interfaces and interactions are crafted with care, combining usability, visual storytelling, and thoughtful detail to create experiences that resonate with users.",
    },
    {
      key: "coding",
      title: "Coding – Bringing the Recipe to Life",
      content: "Designs become tangible through clean, efficient code, delivering responsive, reliable, and high-performing digital products across all platforms.",
    },
    {
      key: "design-systems",
      title: "Design Systems - The Finishing Touch",
      content: "The finishing touch brings harmony to the table. I develop reusable components, visual systems, and guidelines that keep your brand consistent, scalable, and instantly recognizable.",
    },
  ],
  de: [
    {
      key: "brand-strategy",
      title: "Brandstrategie – Die Kernzutaten auswählen",
      content: "Jedes erfolgreiche Produkt beginnt mit Klarheit. Ich definiere den Zweck, die Zielgruppe und die Werte deiner Marke, damit jede Design- und Produktentscheidung auf einer soliden Grundlage basiert.",
    },
    {
      key: "product-design",
      title: "Produktdesign – Aromen mischen",
      content: "Interfaces und Interaktionen entstehen mit viel Sorgfalt und verbinden Nutzbarkeit, visuelles Storytelling und durchdachte Details zu Erlebnissen, die bei Nutzerinnen und Nutzern wirklich ankommen.",
    },
    {
      key: "coding",
      title: "Coding – Das Rezept zum Leben erwecken",
      content: "Designs werden durch sauberen, effizienten Code greifbar und entstehen als responsive, zuverlässige und leistungsstarke digitale Produkte auf allen Plattformen.",
    },
    {
      key: "design-systems",
      title: "Designsysteme – Der letzte Schliff",
      content: "Der letzte Schliff bringt Harmonie auf den Tisch. Ich entwickle wiederverwendbare Komponenten, visuelle Systeme und Richtlinien, damit deine Marke konsistent, skalierbar und sofort erkennbar bleibt.",
    },
  ],
};

const ServiceSection = ({ locale = "en" }) => {
  const translatedServices = services[locale] || services.en;

  return (
    <section className="service-section">
      <GridLayout columns={2}>
        <BlurText
          text={getUiText(locale, "home", "serviceHeading")}
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
