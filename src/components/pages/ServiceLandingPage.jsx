import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Button from "../others/Button";
import portfolioData from "../../data/data.json";
import { getLocalizedPath } from "../../i18n/content";
import "./ServiceLandingPage.scss";

const pageConfigs = {
  en: {
    "quick-ux-audit": {
      slug: "quick-ux-audit",
      eyebrow: "Free quick UX audit",
      title: "Turn friction into conversion with a quick UX audit.",
      intro:
        "A clear, sustainable digital experience should feel effortless. If the customer journey is unclear, slow, or difficult to trust, the friction is already costing you growth.",
      subintro:
        "This quick review helps you spot the biggest blockers in your current experience — from clarity and flow to accessibility and conversion gaps.",
      highlights: ["UX friction review", "Accessibility scan", "Conversion blockers", "Quick wins"],
      sections: [
        {
          title: "What this review looks at",
          text:
            "I review the current experience through the lens of clarity, confidence, and conversion. That means looking at the journey from first impression to action — and identifying where customers hesitate, get lost, or lose trust.",
        },
        {
          title: "Where the biggest wins usually hide",
          text:
            "The strongest opportunities often live in the quiet details: unclear messaging, weak hierarchy, friction in the flow, inconsistent calls to action, or accessibility issues that make the experience harder to use than it needs to be.",
        },
      ],
      steps: [
        "Review the user journey and identify friction points",
        "Check clarity, hierarchy, trust, and accessibility",
        "Prioritize the highest-impact opportunities for quick wins",
      ],
      cta: "Request quick UX audit",
      faq: [
        { q: "What is included in a quick UX audit?", a: "A quick UX audit reviews the current experience, highlights the most important friction points, and identifies the highest-impact improvements for clarity, trust, and conversion." },
        { q: "Is this only for ecommerce brands?", a: "No. This works for ecommerce brands, service businesses, and product-led companies that want a clearer and more effective digital experience." },
        { q: "What happens after the review?", a: "You receive a clear summary of the main issues and a practical shortlist of what to improve first." },
      ],
    },
    "amazon": {
      slug: "amazon",
      eyebrow: "Amazon growth strategy",
      title: "Amazon A+ content and storefront design that turn browsing into buying.",
      intro:
        "On Amazon, trust and clarity are everything. The right visuals, structure, and messaging help shoppers understand the product faster and feel more confident before they buy.",
      subintro:
        "I design Amazon experiences that strengthen product storytelling, improve conversion, and make your brand feel more trustworthy across the shopper journey.",
      highlights: ["A+ premium content", "Amazon storefront design", "Conversion-focused landing pages", "More trust at product level"],
      sections: [
        {
          title: "Why Amazon needs a stronger story",
          text:
            "Amazon is crowded, fast, and highly competitive. If the listing feels generic, unclear, or visually weak, customers hesitate. Strong Amazon design helps the product stand out and speak to the value before the scroll ends.",
        },
        {
          title: "Built for clarity, trust, and action",
          text:
            "Every section is designed to improve understanding, lift confidence, and support faster buying decisions. That means refined product messaging, cleaner hierarchy, stronger visuals, and a more intentional customer journey.",
        },
      ],
      steps: [
        "Review the current listing and identify friction points",
        "Shape the product story around trust, value, and conversion",
        "Design A+ content and a storefront experience that feels clear and persuasive",
      ],
      cta: "Request Amazon growth support",
      faq: [
        { q: "What does Amazon optimization include?", a: "It can include A+ premium content, product page storytelling, storefront layout guidance, and conversion-focused landing page improvements tailored to the product and brand." },
        { q: "Is this only for bigger brands?", a: "No. This works especially well for growing brands that want stronger visibility, clearer product communication, and better conversion on Amazon." },
        { q: "How do you approach Amazon creative?", a: "I start with the product story, the customer’s buying intent, and the strongest conversion opportunities, then shape the visuals and structure around that." },
      ],
    },
    "shopify-ux-design": {
      slug: "shopify-ux-design",
      eyebrow: "Shopify UX design",
      title: "Custom Shopify storefronts built for clear, sustainable growth.",
      intro:
        "Your storefront should do more than look polished. It should guide the customer naturally, build trust, and support the path from curiosity to checkout with clarity and care.",
      subintro:
        "I design Shopify experiences that make the offer clearer, the customer journey smoother, and the brand feel more trustworthy and intentional at every step.",
      highlights: ["Custom storefront UX", "Conversion flow", "Product clarity", "Eco-conscious brand experience"],
      sections: [
        {
          title: "Why UX matters on Shopify",
          text:
            "A beautiful storefront still loses customers when the journey feels unclear, crowded, or inconsistent. The best Shopify experiences reduce friction, build trust, and make sustainable products feel easy to understand and easy to buy.",
        },
        {
          title: "Built for the customer, shaped for growth",
          text:
            "Every decision is designed to support clarity, trust, and momentum. That means better product storytelling, stronger hierarchy, more confident calls to action, and a smoother end-to-end experience that feels aligned with a value-driven brand.",
        },
      ],
      steps: [
        "Understand the business, audience, and customer journey",
        "Design a custom storefront around clarity, trust, and conversion",
        "Refine the experience until it feels polished, usable, and aligned with your brand values",
      ],
      cta: "Book a custom Shopify storefront consultation",
      faq: [
        { q: "Do I need a full redesign?", a: "Not always. Sometimes the biggest gains come from refining key flows, product storytelling, and the structure of the storefront." },
        { q: "What kind of businesses do you work with?", a: "I work with ecommerce brands that want a more thoughtful, conversion-focused, and trustworthy digital presence rooted in clarity, sustainability, and fair business values." },
        { q: "How do you approach Shopify UX?", a: "I start by understanding the customer journey and the business goals, then design a custom storefront around clarity, trust, and momentum." },
      ],
    },
    "shopify-ux-audit": {
      slug: "shopify-ux-audit",
      eyebrow: "Shopify UX audit",
      title: "A focused Shopify UX audit for smoother journeys and stronger conversion.",
      intro:
        "Even well-designed Shopify stores can hide friction in the details. The customer journey may feel smooth in theory, but not always in real life.",
      subintro:
        "This audit looks at the full store through the lens of customer confidence — from collection pages to product details, checkout flow, and trust signals.",
      highlights: ["Store journey review", "Conversion blockers", "Product flow analysis", "Quick wins"],
      sections: [
        {
          title: "What a Shopify UX audit uncovers",
          text:
            "I look at the structure, pacing, messaging, and flow of the storefront to find where customers hesitate, lose trust, or get confused. This often includes product clarity, call-to-action strength, and mobile experience friction.",
        },
        {
          title: "The goal is sharper conversion",
          text:
            "The objective is not just a prettier store. It is a more confident, fluid experience that helps customers make decisions faster and feel good about the purchase.",
        },
      ],
      steps: [
        "Review the shopping journey and identify friction points",
        "Examine product storytelling, hierarchy, and flow",
        "Recommend the highest-impact fixes and quick wins",
      ],
      cta: "Request a Shopify UX audit",
      faq: [
        { q: "What does the audit include?", a: "It covers the major journey points in your Shopify store, highlights conversion friction, and suggests where improvements will have the most impact." },
        { q: "Is this only for bigger stores?", a: "No. This works for early-stage and growing ecommerce brands that want clarity, easier decisions, and stronger conversion." },
      ],
    },
    "accessibility-audit": {
      slug: "accessibility-audit",
      eyebrow: "Accessibility review",
      title: "Accessibility review for clearer, more inclusive customer experiences.",
      intro:
        "A website is not truly useful if it excludes people or makes the process harder than it needs to be. Accessibility is part of good UX — and a stronger foundation for sustainable growth.",
      subintro:
        "This review helps identify the barriers in the current experience and shows where better structure, contrast, clarity, and flow can improve usability for more people.",
      highlights: ["Inclusive UX", "Accessibility barriers", "Usability review", "Trust & clarity"],
      sections: [
        {
          title: "Why accessibility matters",
          text:
            "Accessible design improves readability, flow, and clarity. It makes the customer journey easier to navigate and helps create a more confident, welcoming experience for all users.",
        },
        {
          title: "It supports business, not just compliance",
          text:
            "Better accessibility usually means better hierarchy, stronger labels, clearer structure, and improved usability — all of which strengthen trust and reduce friction.",
        },
      ],
      steps: [
        "Check structure, labels, and information flow",
        "Review contrast, interaction patterns, and keyboard use",
        "Highlight the biggest accessibility and usability improvements",
      ],
      cta: "Request an accessibility review",
      faq: [
        { q: "Why should I care about accessibility?", a: "Because good accessibility improves clarity, usability, and trust — and often exposes friction that affects everyone, not only users with disabilities." },
        { q: "Is this a full audit?", a: "This is a focused review designed to surface the most important accessibility improvements quickly and practically for brands that want more inclusive, usable experiences." },
      ],
    },
    "landing-page-design": {
      slug: "landing-page-design",
      eyebrow: "Landing page design",
      title: "Landing pages that guide attention and turn visitors into action.",
      intro:
        "A great landing page does not overwhelm. It focuses the message, clarifies the offer, and leads the visitor toward one clear decision.",
      subintro:
        "I design landing pages that sharpen the message, create momentum, and give the visitor a clear path from interest to action.",
      highlights: ["Message clarity", "Conversion focus", "Lead generation", "Clear CTA flow"],
      sections: [
        {
          title: "Why landing pages need precision",
          text:
            "A landing page is often where intent meets action. If the offer is confusing, the hierarchy is weak, or the CTA is unclear, the opportunity is lost before the user ever reaches the point of trust.",
        },
        {
          title: "The right structure creates momentum",
          text:
            "Strong landing pages guide the eye with intention. They build confidence quickly, clarify the value, and make the next step feel obvious and low-friction.",
        },
      ],
      steps: [
        "Understand the people you want to reach and the action you want them to take",
        "Shape the message, structure, and hierarchy around that objective",
        "Design a page that feels clear, honest, and ready to convert",
      ],
      cta: "Request a landing page review",
      faq: [
        { q: "Does every business need a dedicated landing page?", a: "Not always, but if a campaign or offer requires a clear call to action, a focused landing page can significantly improve results." },
        { q: "How do you know if a landing page is weak?", a: "Usually the message is unclear, the visual hierarchy is inconsistent, or the call to action is not strong enough to guide the visitor." },
      ],
    },
  },
  de: {
    "quick-ux-audit": {
      slug: "quick-ux-audit",
      eyebrow: "Kostenloses Quick UX Audit",
      title: "Wandle Reibung in Conversion um – mit einem schnellen UX-Review.",
      intro:
        "Ein hochwertiges digitales Erlebnis sollte sich leicht anfühlen. Wenn die Customer Journey unklar, langsam oder schwer nachvollziehbar ist, kostet dich genau diese Reibung bereits Wachstum.",
      subintro:
        "Dieser kurze Review hilft dir, die größten Blocker in deinem aktuellen Erlebnis zu erkennen – von Klarheit und Flow bis hin zu Accessibility und Conversion Gaps.",
      highlights: ["UX-Reibungsanalyse", "Accessibility-Check", "Conversion-Blocker", "Quick Wins"],
      sections: [
        { title: "Was dieser Review betrachtet", text: "Ich prüfe das aktuelle Erlebnis aus Sicht von Klarheit, Vertrauen und Conversion. Dabei geht es um die gesamte Reise von erster Wahrnehmung bis zur Handlung – und darum, wo Nutzer zögern, verloren gehen oder an Vertrauen verlieren." },
        { title: "Wo die größten Potenziale liegen", text: "Die größten Chancen stecken oft in kleinen Details: unklare Botschaften, schwache Hierarchie, Reibung im Flow, unklare Calls-to-Action oder Accessibility-Probleme, die das Erlebnis unnötig schwerer machen." },
      ],
      steps: ["Die Customer Journey prüfen und Reibungspunkte identifizieren", "Klarheit, Hierarchie, Vertrauen und Accessibility bewerten", "Die wichtigsten Maßnahmen für schnell sichtbare Verbesserungen priorisieren"],
      cta: "Quick UX Audit anfragen",
      faq: [
        { q: "Was ist in einem Quick UX Audit enthalten?", a: "Ein Quick UX Audit prüft das aktuelle Erlebnis, zeigt die wichtigsten Reibungspunkte auf und identifiziert die wirksamsten Verbesserungen für Klarheit, Vertrauen und Conversion." },
        { q: "Ist das nur für E-Commerce-Marken?", a: "Nein. Das funktioniert auch für Dienstleister, Service-Unternehmen und produktorientierte Marken, die eine klarere und stärker konvertierende digitale Erfahrung wollen." },
        { q: "Was passiert nach dem Review?", a: "Du erhältst eine klare Zusammenfassung der wichtigsten Probleme und eine praktische Priorisierung der nächsten Schritte." },
      ],
    },
    "amazon": {
      slug: "amazon",
      eyebrow: "Amazon Wachstum",
      title: "Amazon A+-Content und Storefront-Design, das Kaufentscheidungen stärkt.",
      intro:
        "Auf Amazon sind Vertrauen und Klarheit entscheidend. Die richtigen Visuals, Strukturen und Botschaften helfen Kunden, das Produkt schneller zu verstehen und sicherer zu kaufen.",
      subintro:
        "Ich gestalte Amazon-Erlebnisse, die Produktstorytelling stärken, die Conversion verbessern und die Marke im gesamten Shopper-Journey glaubwürdiger wirken lassen.",
      highlights: ["A+-Premium-Content", "Amazon Storefront-Design", "Konversionsstarke Landingpages", "Mehr Vertrauen auf Produktseite"],
      sections: [
        {
          title: "Warum Amazon eine stärkere Geschichte braucht",
          text:
            "Amazon ist dicht, schnell und sehr wettbewerbsintensiv. Wenn die Produktseite generisch, unklar oder visuell schwach wirkt, zögern Kunden. Starke Amazon-Designs helfen Produkten, schneller zu stehen und die Vorteile sofort verständlich zu machen.",
        },
        {
          title: "Auf Klarheit, Vertrauen und Handlung gebaut",
          text:
            "Jeder Abschnitt ist darauf ausgerichtet, Verständnis zu verbessern, Vertrauen zu stärken und Kaufentscheidungen zu beschleunigen. Dazu gehören stärkere Produktbotschaften, klarere Hierarchie, bessere Visuals und eine durchdachte Customer Journey.",
        },
      ],
      steps: [
        "Aktuelle Listings und Reibungspunkte analysieren",
        "Die Produktstory auf Vertrauen, Mehrwert und Conversion ausrichten",
        "A+-Content und Storefront-Erlebnisse klar, überzeugend und kauforientiert gestalten",
      ],
      cta: "Amazon-Wachstum anfragen",
      faq: [
        { q: "Was beinhaltet Amazon-Optimierung?", a: "Das kann A+-Premium-Content, Produktseiten-Storytelling, Storefront-Layouts und konversionsstarke Landingpages umfassen – je nach Produkt und Brand." },
        { q: "Ist das nur für größere Marken?", a: "Nein. Gerade wachsende Marken profitieren davon, stärker sichtbar zu werden, klarer zu kommunizieren und auf Amazon besser zu konvertieren." },
        { q: "Wie gehst du bei Amazon-Design vor?", a: "Ich beginne mit der Produktstory, der Kaufabsicht der Kunden und den stärksten Conversion-Möglichkeiten und gestalte dann die Inhalte und Struktur rund darum." },
      ],
    },
    "shopify-ux-design": {
      slug: "shopify-ux-design",
      eyebrow: "Shopify UX Design",
      title: "Shopify UX Design, das hochwertig wirkt und mit Klarheit konvertiert.",
      intro: "Dein Store sollte mehr als nur gut aussehen. Er sollte den Kunden natürlich durch die Reise führen, Vertrauen schaffen und den Weg von Interesse bis Checkout unterstützen.",
      subintro: "Ich gestalte Shopify-Erlebnisse, die die Botschaft klarer machen, die Customer Journey entspannter und die Marke auf jedem Touchpoint intentionaler wirken lassen.",
      highlights: ["Storefront-UX", "Conversion-Flow", "Produktklarheit", "Nachhaltiges E-Commerce-Erlebnis"],
      sections: [
        { title: "Warum UX auf Shopify wichtig ist", text: "Ein schöner Store verliert Kunden, wenn die Reise unklar, chaotisch oder inkonsistent wirkt. Die besten Shopify-Erlebnisse reduzieren Reibung und stärken Vertrauen im gesamten Kaufprozess." },
        { title: "Für den Kunden, entwickelt für Wachstum", text: "Jede Entscheidung dient Klarheit, Vertrauen und Momentum. Das bedeutet bessere Produktstorytelling, stärkere Hierarchien, klarere Calls-to-Action und ein flüssigeres Gesamtgefühl." },
      ],
      steps: ["Business, Zielgruppe und Customer Journey verstehen", "Den Store um Klarheit, Vertrauen und Conversion aufbauen", "Das Interface so verfeinern, dass das Erlebnis hochwertig und klar wirkt"],
      cta: "Shopify UX Review buchen",
      faq: [
        { q: "Brauche ich ein komplettes Redesign?", a: "Nicht immer. Oft kommen die größten Gewinne aus der Verfeinerung zentraler Flows, Produktstorytelling und der Struktur des Stores." },
        { q: "Mit welchen Unternehmen arbeite ich?", a: "Ich arbeite mit E-Commerce-Marken, die eine hochwertigere, überzeugendere und konversionsstärkere digitale Präsenz wollen." },
        { q: "Wie gehst du bei Shopify UX vor?", a: "Ich beginne mit dem Verständnis der Customer Journey und der Geschäftsziele und forme dann den Store rund um Klarheit, Vertrauen und Momentum." },
      ],
    },
    "shopify-ux-audit": {
      slug: "shopify-ux-audit",
      eyebrow: "Shopify UX Audit",
      title: "Ein fokussiertes Shopify UX Audit für flüssigere Journeys und mehr Conversion.",
      intro: "Selbst gut gemachte Shopify-Stores können im Detail Reibung verbergen. Die Customer Journey kann theoretisch gut funktionieren, in der Praxis jedoch nicht immer.",
      subintro: "Dieser Audit prüft den kompletten Store aus Sicht von Vertrauen und Klarheit – von Collection Pages über Produktdetails bis hin zu Checkout-Flow und Trust-Signalen.",
      highlights: ["Journey-Review", "Conversion-Blocker", "Produktflussanalyse", "Quick Wins"],
      sections: [
        { title: "Was ein Shopify UX Audit aufdeckt", text: "Ich prüfe Struktur, Rhythmus, Messaging und Flow des Stores, um dort nachzusehen, wo Kunden zaudern, an Vertrauen verlieren oder verwirrt werden. Das umfasst oft Produktklarheit, CTA-Stärke und mobile Reibungspunkte." },
        { title: "Das Ziel ist klarere Conversion", text: "Das Ziel ist kein hübscherer Store, sondern ein sichereres, flüssigeres Erlebnis, das Kunden schneller zu Entscheidungen führt und das Kaufgefühl stärkt." },
      ],
      steps: ["Die Shopping Journey prüfen und Reibungspunkte identifizieren", "Produktstorytelling, Hierarchie und Flow bewerten", "Die wichtigsten Maßnahmen und Quick Wins priorisieren"],
      cta: "Shopify UX Audit anfragen",
      faq: [
        { q: "Was beinhaltet der Audit?", a: "Er prüft die wichtigsten Punkte im Shopify Store, zeigt Conversion-Reibung auf und empfiehlt die wirksamsten Verbesserungen." },
        { q: "Ist das nur für größere Stores?", a: "Nein. Das funktioniert auch für junge und wachsende E-Commerce-Marken, die Klarheit und stärkere Conversion wollen." },
      ],
    },
    "accessibility-audit": {
      slug: "accessibility-audit",
      eyebrow: "Accessibility Review",
      title: "Accessibility Review für ein klareres und inklusiveres Kundenerlebnis.",
      intro: "Eine Website ist nicht wirklich hochwertig, wenn sie Menschen ausschließt oder den Prozess unnötig erschwert. Accessibility ist Teil von gutem UX und einer starken Geschäftsgrundlage.",
      subintro: "Dieser Review hilft dabei, die Barrieren im aktuellen Erlebnis zu erkennen und zeigt, wo bessere Struktur, Kontrast, Klarheit und Flow die Nutzung für mehr Menschen verbessern.",
      highlights: ["Inklusives UX", "Accessibility-Barrieren", "Usability Review", "Vertrauen & Klarheit"],
      sections: [
        { title: "Warum Accessibility wichtig ist", text: "Accessible Design verbessert Lesbarkeit, Flow und Klarheit. Es macht die Customer Journey leichter zu nutzen und schafft ein willkommeneres und selbstverständlicheres Erlebnis für alle Nutzer." },
        { title: "Es stärkt das Business, nicht nur die Compliance", text: "Bessere Accessibility bedeutet oft bessere Hierarchie, klarere Labels, stärkere Struktur und mehr Usability — alles Dinge, die Vertrauen und Conversion stärken." },
      ],
      steps: ["Struktur, Labels und Informationsfluss prüfen", "Kontrast, Interaktionsmuster und Tastaturnutzung bewerten", "Die wichtigsten Accessibility- und Usability-Maßnahmen herausarbeiten"],
      cta: "Accessibility Review anfragen",
      faq: [
        { q: "Warum sollte ich mich mit Accessibility beschäftigen?", a: "Weil gute Accessibility Klarheit, Usability und Vertrauen verbessert und oft auch die Reibung sichtbar macht, die alle Nutzer betrifft." },
        { q: "Ist das ein vollständiger Audit?", a: "Es ist ein fokussierter Review, der die wichtigsten Accessibility-Verbesserungen schnell und praktisch sichtbar macht." },
      ],
    },
    "landing-page-design": {
      slug: "landing-page-design",
      eyebrow: "Landingpage Design",
      title: "Landingpages, die Aufmerksamkeit lenken und Besucher in Aktion bringen.",
      intro: "Eine gute Landingpage ist nicht laut. Sie fokussiert die Botschaft, klärt das Angebot und führt den Besucher auf eine klare Entscheidung.",
      subintro: "Ich gestalte Landingpages, die die Message schärfen, den Flow verstärken und dem Besucher einen klaren Weg von Interesse zu Aktion geben.",
      highlights: ["Botschaftsklarheit", "Conversion-Fokus", "Lead-Generierung", "Klare CTA-Flow"],
      sections: [
        { title: "Warum Landingpages Präzision brauchen", text: "Eine Landingpage ist oft der Moment, in dem Absicht in Aktion übergeht. Wenn das Angebot unklar ist, die Hierarchie schwach wirkt oder der CTA nicht überzeugt, geht die Gelegenheit schon verloren, bevor Vertrauen entsteht." },
        { title: "Die richtige Struktur schafft Momentum", text: "Starke Landingpages lenken den Blick mit Absicht. Sie bauen schnell Vertrauen auf, klären den Mehrwert und machen den nächsten Schritt klar und leicht verständlich." },
      ],
      steps: ["Verstehen, wen du erreichen willst und welche Aktion du möchtest", "Botschaft, Struktur und Hierarchie auf das Ziel ausrichten", "Eine Landingpage gestalten, die hochwertig, klar und konversionsbereit wirkt"],
      cta: "Landingpage Review anfragen",
      faq: [
        { q: "Braucht jedes Unternehmen eine eigene Landingpage?", a: "Nicht immer, aber wenn ein Angebot oder eine Kampagne eine klare Handlung erfordert, kann eine fokussierte Landingpage die Ergebnisse deutlich verbessern." },
        { q: "Wie erkenne ich, dass eine Landingpage schwach ist?", a: "Meist ist die Message unklar, die visuelle Hierarchie inkonsistent oder der Call-to-Action nicht stark genug, um den Nutzer zu führen." },
      ],
    },
  },
};

const ServiceGraphic = ({ slug }) => {
  const palettes = {
    "quick-ux-audit": { base: "#f7efe8", accent: "#5a3f67", accent2: "#d8b18a", accent3: "#9bb182" },
    "shopify-ux-design": { base: "#edf4ee", accent: "#2f5f47", accent2: "#d6b98d", accent3: "#8ab08a" },
    "shopify-ux-audit": { base: "#f5efe9", accent: "#584b7a", accent2: "#d9b58d", accent3: "#b0c9a4" },
    "accessibility-audit": { base: "#f3f2ee", accent: "#3e4d70", accent2: "#d7bc9f", accent3: "#a7b9c9" },
    "landing-page-design": { base: "#f9f1ec", accent: "#5f4d54", accent2: "#d4a285", accent3: "#9bb7a0" },
  };

  const palette = palettes[slug] || palettes["quick-ux-audit"];

  return (
    <div className="service-graphic" aria-hidden="true">
      <svg viewBox="0 0 420 360" className="graphic-svg" role="img">
        <defs>
          <linearGradient id={`bg-${slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.base} />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        <rect x="20" y="22" width="380" height="316" rx="28" fill={`url(#bg-${slug})`} />
        <circle cx="110" cy="110" r="70" fill={palette.accent2} opacity="0.2" />
        <circle cx="315" cy="96" r="52" fill={palette.accent3} opacity="0.24" />
        <rect x="54" y="84" width="188" height="142" rx="18" fill="#ffffff" opacity="0.9" />
        <rect x="72" y="108" width="84" height="14" rx="7" fill={palette.accent} opacity="0.18" />
        <rect x="72" y="132" width="118" height="12" rx="6" fill={palette.accent} opacity="0.12" />
        <rect x="72" y="154" width="138" height="12" rx="6" fill={palette.accent} opacity="0.1" />
        <rect x="72" y="176" width="72" height="12" rx="6" fill={palette.accent} opacity="0.1" />

        <rect x="268" y="154" width="88" height="108" rx="16" fill={palette.accent} opacity="0.12" />
        <rect x="284" y="174" width="54" height="12" rx="6" fill={palette.accent} opacity="0.2" />
        <rect x="284" y="196" width="42" height="12" rx="6" fill={palette.accent} opacity="0.12" />
        <rect x="284" y="218" width="56" height="12" rx="6" fill={palette.accent} opacity="0.12" />
        <rect x="284" y="240" width="38" height="12" rx="6" fill={palette.accent3} opacity="0.5" />

        <path d="M36 250C92 212 118 214 152 244C182 272 210 278 246 246C280 216 314 210 360 228L360 296L36 296Z" fill={palette.accent3} opacity="0.24" />
        <path d="M212 82C232 60 258 54 281 70C304 86 308 120 289 139C270 158 236 161 215 142C192 122 194 97 212 82Z" fill={palette.accent2} opacity="0.25" />
        <path d="M118 246L158 206L200 246" fill="none" stroke={palette.accent} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        <circle cx="158" cy="206" r="11" fill={palette.accent} opacity="0.9" />
        <path d="M272 126L292 108L310 126L328 108L344 126" fill="none" stroke={palette.accent} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </svg>
    </div>
  );
};

const getSlugFromTitle = (title = "") => title.trim().replace(/\s+/g, "-").toLowerCase();

const ServiceLandingPage = ({ locale = "en", slug = "quick-ux-audit" }) => {
  const content = pageConfigs[locale]?.[slug] || pageConfigs.en[slug] || pageConfigs.en["quick-ux-audit"];

  const projectBuckets = {
    amazon: ["Amazon"],
    "shopify-ux-design": ["E-Commerce"],
    "shopify-ux-audit": ["E-Commerce"],
    "landing-page-design": ["E-Commerce", "Branding"],
    "accessibility-audit": ["App", "Branding", "E-Commerce"],
    "quick-ux-audit": ["App", "Branding", "E-Commerce", "Amazon"],
  };

  const relatedProjects = (portfolioData.portfolio || [])
    .filter((project) => (projectBuckets[slug] || []).includes(project.category))
    .slice(0, 3);

  return (
    <main className="service-landing-page">
      <Helmet>
        <title>{content.title} | AVZKITCHEN</title>
        <meta name="description" content={content.intro} />
        <link rel="canonical" href={`https://avzkitchen.com/services/${content.slug}`} />
      </Helmet>

      <section className="landing-hero">
        <div className="landing-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="lead">{content.intro}</p>
          <p className="lead secondary">{content.subintro}</p>

          <div className="pill-row">
            {content.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="cta-row">
            <Button variant="primary" to={getLocalizedPath("/contact", locale)}>{content.cta}</Button>
            <Button variant="secondary" href="mailto:hello@avzkitchen.com?subject=Project%20Inquiry">
              hello@avzkitchen.com
            </Button>
          </div>
        </div>

        <div className="landing-panel" aria-label="Service overview panel">
          <div className="panel-card">
            <span className="panel-label">What we look for</span>
            <ul>
              {content.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
          <ServiceGraphic slug={slug} />
        </div>
      </section>

      <section className="landing-sections">
        {content.sections.map((section, index) => (
          <article className="info-block" key={section.title}>
            <span className="block-index">0{index + 1}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </article>
        ))}
      </section>

      {relatedProjects.length > 0 && (
        <section className="service-portfolio-showcase">
          <div className="showcase-header">
            <p className="eyebrow small">Selected work</p>
            <h2>Examples from the portfolio.</h2>
          </div>

          <div className="showcase-stack">
            {relatedProjects.map((project) => (
              <Link
                key={project.title}
                to={`/portfolio/${getSlugFromTitle(project.title)}`}
                className="showcase-feature"
              >
                <div className="showcase-media">
                  <img src={project.main} alt={project.title} />
                </div>

                <div className="showcase-copy">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.shortDesc || project.desc}</p>
                  <div className="showcase-meta">
                    {(Array.isArray(project.skills) ? project.skills : [project.skills]).filter(Boolean).slice(0, 3).map((skill) => (
                      <span key={`${project.title}-${skill}`} className="meta-pill">{skill}</span>
                    ))}
                  </div>

                  <span className="showcase-link">View project</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="landing-faq">
        <div className="faq-heading">
          <p className="eyebrow small">FAQ</p>
          <h2>Questions clients ask before they start.</h2>
        </div>

        <div className="faq-list">
          {content.faq.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="landing-cta-band">
        <div className="cta-shell">
          <div>
            <p className="eyebrow small">Ready when you are</p>
            <h3>Bring more clarity, trust, and momentum to the experience.</h3>
          </div>

          <Button variant="primary" to={getLocalizedPath("/contact", locale)}>Request a quick UX audit</Button>
        </div>
      </section>
    </main>
  );
};

export default ServiceLandingPage;
