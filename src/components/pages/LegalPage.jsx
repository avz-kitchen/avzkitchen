import { Helmet } from "react-helmet";

const LegalPage = ({ locale = "en" }) => {
  const isGerman = locale === "de";

  const content = isGerman
    ? {
        title: "Rechtliche Hinweise & EU-Compliance",
        intro:
          "Diese Seite enthält die wichtigsten rechtlichen Informationen für AVZKITCHEN gemäß deutschem Recht und relevanter EU-Regelungen, insbesondere im Hinblick auf Transparenz, Verbraucherschutz und digitale Dienstleistungen.",
        companyTitle: "Impressum",
        company: [
          "AVZKITCHEN",
          "Angelica Valenzuela",
          "Deutschland",
          "E-Mail: hello@avzkitchen.com",
          "Website: avzkitchen.com",
        ],
        section1Title: "Unternehmerische Angaben",
        section1:
          "AVZKITCHEN betreibt diese Website als digitale Marken- und Designpraxis. Für geschäftliche Anfragen, Projektkooperationen und Servicevereinbarungen gelten die allgemeinen deutschen Vorschriften für Kaufleute und digitale Dienstleister.",
        section2Title: "Datenschutz & DSGVO",
        section2:
          "Die Verarbeitung personenbezogener Daten erfolgt ausschließlich auf Grundlage der gesetzlichen Grundlagen der DSGVO und des BDSG. Für weitere Details und die kompletten Informationen zum Datenschutz verweisen wir auf die separate Datenschutzseite dieser Website.",
        section3Title: "Widerrufsrecht & Verbraucherrechte",
        section3:
          "Verbraucherinnen und Verbraucher haben nach deutschem Recht bestimmte Rechte hinsichtlich der Bestellung digitaler Leistungen und Dienstleistungen. Wenn Sie Produkte oder Dienstleistungen über AVZKITCHEN erwerben, gelten die gesetzlichen Informationspflichten und Fristen nach dem BGB und der DSGVO.",
        section4Title: "EU-Compliance & digitale Dienstleistungen",
        section4:
          "AVZKITCHEN behandelt digitale Angebote, Projektabsprachen und Kommunikationsprozesse unter Beachtung der geltenden EU-Vorgaben, insbesondere im Bereich Transparenz, Datenverarbeitung, Informationspflichten und Verbraucherrechte. Die Website ist bewusst so gestaltet, dass sie klar, verständlich und leicht zugänglich ist.",
        section5Title: "Streitbeilegung & Anwendbares Recht",
        section5:
          "Für rechtliche Fragen und Streitigkeiten gilt deutsches Recht. Wenn Sie eine Streitbeilegung außerhalb der Gerichte anstreben, können Sie sich an die zuständigen Verbraucherschlichtungsstellen wenden. Für digitale Dienstleistungen und Projektverträge gilt die geltende deutsche und europäische Rechtslage.",
        section6Title: "Kontakt",
        section6:
          "Bei rechtlichen Fragen, Anfragen zu Datenschutz oder allgemeinen Anliegen kontaktieren Sie uns bitte per E-Mail: hello@avzkitchen.com.",
        footer:
          "Hinweis: Diese Seite dient allgemeinen rechtlichen Informationen und ersetzt keine individuelle rechtliche Beratung.",
      }
    : {
        title: "Legal Information & EU Compliance",
        intro:
          "This page contains the key legal information for AVZKITCHEN under German law and relevant EU rules, with a focus on transparency, consumer protection, and digital service obligations.",
        companyTitle: "Imprint",
        company: [
          "AVZKITCHEN",
          "Angelica Valenzuela",
          "Germany",
          "E-Mail: hello@avzkitchen.com",
          "Website: avzkitchen.com",
        ],
        section1Title: "Business Information",
        section1:
          "AVZKITCHEN operates this website as a digital brand and design practice. For business inquiries, project collaborations, and service agreements, the applicable German commercial and digital service requirements apply.",
        section2Title: "Privacy & GDPR",
        section2:
          "Personal data is processed only under the legal basis defined by the GDPR and applicable German data protection rules. For full details, please refer to the dedicated privacy page on this website.",
        section3Title: "Withdrawal Rights & Consumer Protections",
        section3:
          "Consumers may have certain rights under German and EU law regarding the purchase of digital services and related agreements. Any service or project engagement is subject to the applicable statutory consumer information rights and deadlines under German law.",
        section4Title: "EU Compliance & Digital Services",
        section4:
          "AVZKITCHEN aligns its digital offerings, project communications, and service terms with the relevant EU requirements on transparency, data handling, consumer information, and digital service obligations. The website is designed to be clear, accessible, and easy to understand.",
        section5Title: "Dispute Resolution & Governing Law",
        section5:
          "Legal matters are governed by German law. If you wish to pursue external dispute resolution, you may contact the relevant consumer mediation authority. In all cases, the applicable German and European legal framework applies to digital services and project contracts.",
        section6Title: "Contact",
        section6:
          "For legal inquiries, privacy questions, or general concerns, please contact us by email at hello@avzkitchen.com.",
        footer:
          "Note: This page is for general legal information only and does not replace individualized legal advice.",
      };

  return (
    <>
      <Helmet>
        <title>{`AVZKITCHEN | ${content.title}`}</title>
        <meta
          name="description"
          content={
            isGerman
              ? "Rechtliche Hinweise, Datenschutz- und EU-Compliance-Informationen für AVZKITCHEN gemäß deutschem Recht."
              : "Legal information and EU compliance details for AVZKITCHEN under German law and relevant EU regulations."
          }
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={isGerman ? "https://avzkitchen.com/de/legal" : "https://avzkitchen.com/legal"} />
      </Helmet>

      <section style={{ textAlign: "left", maxWidth: "900px", margin: "0 auto" }}>
        <h1>{content.title}</h1>
        <p style={{ marginTop: "1rem", marginBottom: "2rem" }}>{content.intro}</p>

        <h2>{content.companyTitle}</h2>
        <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
          {content.company.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <h3>{content.section1Title}</h3>
        <p>{content.section1}</p>

        <h3>{content.section2Title}</h3>
        <p>{content.section2}</p>

        <h3>{content.section3Title}</h3>
        <p>{content.section3}</p>

        <h3>{content.section4Title}</h3>
        <p>{content.section4}</p>

        <h3>{content.section5Title}</h3>
        <p>{content.section5}</p>

        <h3>{content.section6Title}</h3>
        <p>{content.section6}</p>

        <p style={{ marginTop: "2rem", fontStyle: "italic" }}>{content.footer}</p>
      </section>
    </>
  );
};

export default LegalPage;
