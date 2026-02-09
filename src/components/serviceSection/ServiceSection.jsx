import "./service.scss"
import { Accordion, AccordionItem } from "@heroui/react";
import BlurText from "./../others/BlurText";
import GridLayout from "./../others/GridLayout";

const services = [
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
];

const ServiceSection = () => (
  <section className="service-section">
<GridLayout columns={2}>      
  
  <BlurText 
        text="Cooking Up Visual Experiences"
        delay={200}
        animateBy="words"
        direction="top"
        className="xxl font-bold mb-8 "
      />
      <Accordion defaultExpandedKeys={["brand-strategy"]}
      className="w-full max-w-2xl">
        {services.map((service) => (
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

export default ServiceSection;
