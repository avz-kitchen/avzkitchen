import { useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../others/Button";
import { getLocalizedPath, uiContent } from "../../i18n/content";
import "./QuickAuditPage.scss";

const initialFormState = {
  name: "",
  email: "",
  website: "",
  message: "",
};

const QuickAuditPage = ({ locale = "en" }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [formStatus, setFormStatus] = useState("");

  const quickAuditContent = uiContent[locale]?.quickAudit || uiContent.en.quickAudit;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(quickAuditContent.emailSubject || "Quick UX Audit Request");
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Website: ${formData.website}`,
        "",
        `Project goal: ${formData.message || "I would like a free quick UX and accessibility review."}`,
        "",
        "Please send me a quick UX audit / accessibility review for this website.",
      ].join("\n")
    );

    window.location.href = `mailto:hello@avzkitchen.com?subject=${subject}&body=${body}`;
    setFormStatus(quickAuditContent.successMessage);
    setFormData(initialFormState);
  };

  return (
    <main className="quick-audit-page">
      <Helmet>
        <title>Quick UX Audit | AVZKITCHEN</title>
        <meta
          name="description"
          content="Request a free quick UX audit or accessibility review for your website and get actionable conversion feedback from AVZKITCHEN."
        />
        <link rel="canonical" href="https://avzkitchen.com/services/quick-ux-audit" />
      </Helmet>

      <section className="audit-hero">
        <div className="audit-copy">
          <h1>{quickAuditContent.title}</h1>
          <p className="subtitle">{quickAuditContent.subtitle}</p>

          <ul className="trust-pills" aria-label="Audit benefits">
            {quickAuditContent.pills.map((pill) => (
              <li key={pill}>{pill}</li>
            ))}
          </ul>

          <div className="audit-actions">
            <Button variant="primary" href="#audit-request-form">
              {quickAuditContent.primaryCta}
            </Button>
            <Button variant="secondary" href="mailto:hello@avzkitchen.com?subject=Quick%20UX%20Audit%20Request">
              {quickAuditContent.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="audit-visual" aria-label="UX audit summary card">
          <div className="visual-card">
            <span className="card-label">{quickAuditContent.visualLabel}</span>
            <div className="metric-grid">
              <div>
                <strong>3–5</strong>
                <span>{quickAuditContent.metricOne}</span>
              </div>
              <div>
                <strong>2x</strong>
                <span>{quickAuditContent.metricTwo}</span>
              </div>
            </div>
            <ul>
              {quickAuditContent.visualList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="audit-benefits">
        <div className="section-heading narrow">
          <h2>{quickAuditContent.benefitsTitle}</h2>
        </div>

        <div className="benefit-grid">
          {quickAuditContent.benefits.map((item) => (
            <article key={item.title} className="benefit-card">
              <span className="benefit-index">0{quickAuditContent.benefits.indexOf(item) + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="audit-request" id="audit-request-form">
        <div className="request-card">
          <div className="request-copy">
            <h2>{quickAuditContent.formTitle}</h2>
            <p>{quickAuditContent.formIntro}</p>
          </div>

          <form className="audit-form" onSubmit={handleSubmit}>
            <div className="field-row two-up">
              <label>
                <span>{quickAuditContent.nameLabel}</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={quickAuditContent.namePlaceholder}
                  required
                />
              </label>

              <label>
                <span>{quickAuditContent.emailLabel}</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={quickAuditContent.emailPlaceholder}
                  required
                />
              </label>
            </div>

            <label>
              <span>{quickAuditContent.websiteLabel}</span>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder={quickAuditContent.websitePlaceholder}
                required
              />
            </label>

            <label>
              <span>{quickAuditContent.messageLabel}</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder={quickAuditContent.messagePlaceholder}
              />
            </label>

            {formStatus && (
              <p className="form-status" role="status" aria-live="polite">
                {formStatus}
              </p>
            )}

            <Button type="submit" variant="primary" className="audit-submit">
              {quickAuditContent.submit}
            </Button>
          </form>
        </div>

        <aside className="audit-sidebar">
          <h3>{quickAuditContent.sidebarTitle}</h3>
          <ul>
            {quickAuditContent.sidebarList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="sidebar-note">
            <strong>{quickAuditContent.noteTitle}</strong>
            <p>{quickAuditContent.noteText}</p>
          </div>
          <Button variant="secondary" to={getLocalizedPath("/contact", locale)}>
            {quickAuditContent.contactCta}
          </Button>
        </aside>
      </section>
    </main>
  );
};

export default QuickAuditPage;
