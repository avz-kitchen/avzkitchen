import "../serviceSection/service.scss";

const TwoColumnList = ({ heading, description, items, headingTag: HeadingTag = "h2" }) => (
  <section className="service-section" aria-label={heading}>
    <div className="two-column-list">
      <div className="two-column-list-left">
        <HeadingTag>{heading}</HeadingTag>
        {description && <p>{description}</p>}
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