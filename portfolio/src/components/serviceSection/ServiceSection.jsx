import "./service.scss"
import GridLayout from "../others/GridLayout";

const services = [
      {
    title: "Brand Strategy & Identity",
    content: "I help brands find their voice and visual language, creating cohesive identities that tell a story and connect deeply with their audience. From logos and typography to color systems and messaging, I ensure every element reflects the brand’s purpose and values.",
  },
  {
    title: "Product Design",
    content: "User experience and designing accessible interfaces that prioritize usability for all users and scalable systems that ensure consistency across digital products",
  },

  {
    title: "Coding",
    content: "Bringing designs to life with HTML, CSS, JavaScript, React, and Next.js, ensuring responsive and high-performing websites.",
  },
    {
    title: "Design Systems",
    content: "Creating design systems that ensure consistency and scalability across products, enabling teams to deliver cohesive user experiences efficiently.",
  },
];

const ServiceSection = () => (
  <section className="service-section">
    <GridLayout columns={2}>
        <h2>What I do</h2>
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