import "./service.scss"
import GridLayout from "../others/GridLayout";

const services = [
      {
    title: "Brand Strategy",
    content: "Defining product vision, roadmap, and user journeys.",
  },
  {
    title: "Product Design",
    content: "User experience and interface design for web and mobile apps.",
  },

  {
    title: "Coding",
    content: "Logo, color palette, and visual guidelines for your brand.",
  },
];

const ServiceSection = () => (
  <section className="service-section">
    <GridLayout columns={2}>
      <div>
        <h2>Services</h2>
      </div>
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