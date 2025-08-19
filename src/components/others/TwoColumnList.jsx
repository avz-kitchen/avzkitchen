import "../serviceSection/service.scss";

const TwoColumnList = ({ heading, description, items }) => (
  <section className="service-section">
    <div className="two-column-list">
      <div className="two-column-list-left">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
      <div className="two-column-list-right">
        <ul className="service-list">
          {items.map((item, idx) => (
            <li key={idx} className="service-list-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default TwoColumnList;