import "./service.scss"
import GridLayout from "../others/GridLayout";

const services = [
      {
    title: "Brand Strategy – Selecting the Core Ingredients:",
    content: "Every successful product begins with clarity. I define your brand’s purpose, audience, and values to create a strong foundation that informs every design and product decision.",
  },
  {
    title: "Product Design – Blending Flavors:",
    content: "Interfaces and interactions are crafted with care, combining usability, visual storytelling, and thoughtful detail to create experiences that resonate with users.",
  },

  {
    title: "Coding – Bringing the Recipe to Life:",
    content: "Designs become tangible through clean, efficient code, delivering responsive, reliable, and high-performing digital products across all platforms.",
  },
    {
    title: "Design Systems - The Finishing Touch:",
    content: "The finishing touch brings harmony to the table. I develop reusable components, visual systems, and guidelines that keep your brand consistent, scalable, and instantly recognizable.",
  },
];

const ServiceSection = () => (
  <section className="service-section">
    <GridLayout columns={2}>
        <h1>Cooking Up <br/> Visual Experiences</h1>
      <div>
        <ul className="service-list">
          {services.map((service, idx) => (
            <li key={idx} className="service-list-item">
              <h2>{service.title}</h2>
              <p>{service.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </GridLayout>
  </section>
);

export default ServiceSection;