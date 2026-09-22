import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const routes = [
  '/',
  '/portfolio',
  '/bio',
  '/services',
  '/contact',
  '/de',
  '/de/portfolio',
  '/de/bio',
  '/de/services',
  '/de/contact',
  '/services/quick-ux-audit',
  '/services/amazon',
  '/services/shopify-ux-design',
  '/services/shopify-ux-audit',
  '/services/accessibility-audit',
  '/services/landing-page-design',
  '/de/services/quick-ux-audit',
  '/de/services/amazon',
  '/de/services/shopify-ux-design',
  '/de/services/shopify-ux-audit',
  '/de/services/accessibility-audit',
  '/de/services/landing-page-design'
];

const routeMeta = {
  '/': {
    title: 'Angelica Valenzuela (AVZ Kitchen) | Sustainable UX/UI Design & Green E-Commerce',
    description: 'AVZ Kitchen creates sustainable UX/UI design, Shopify storefronts, and eco-conscious digital experiences for brands across Germany, DACH, and Europe.',
    heading: 'AVZ Kitchen',
    intro: 'Sustainable UX/UI design, Shopify storefronts, and brand experiences for eco-conscious businesses.'
  },
  '/portfolio': {
    title: 'Portfolio | Sustainable UX/UI & E-Commerce | AVZ Kitchen',
    description: 'Explore AVZ Kitchen portfolio work in UX/UI design, Shopify storefronts, Amazon storefront design, and digital product experiences.',
    heading: 'Portfolio',
    intro: 'Selected work across sustainable UX/UI design, ecommerce experiences, and customer-focused digital product design.'
  },
  '/bio': {
    title: 'Bio | Angelica Valenzuela | AVZ Kitchen',
    description: 'Learn about Angelica Valenzuela, a freelance product designer and developer creating sustainable UX/UI design and impactful digital experiences.',
    heading: 'About Angelica Valenzuela',
    intro: 'I combine strategy, design, and code to create digital experiences that feel clear, intuitive, and memorable.'
  },
  '/services': {
    title: 'Services | Sustainable UX/UI & E-Commerce | AVZ Kitchen',
    description: 'AVZ Kitchen offers sustainable UX/UI design, Shopify design, Amazon storefront design, accessibility audits, and digital presence strategy.',
    heading: 'Services',
    intro: 'Design and development support for sustainable ecommerce growth, conversion-focused storefronts, and digital clarity.'
  },
  '/contact': {
    title: 'Contact | AVZ Kitchen | UX/UI & Amazon Storefront Design',
    description: 'Get in touch with Angelica Valenzuela for Shopify design, Amazon storefront design, UX/UI consulting, and digital product projects.',
    heading: 'Contact',
    intro: 'Share your goals and I’ll help shape a thoughtful, conversion-focused digital experience.'
  },
  '/de': {
    title: 'Angelica Valenzuela (AVZ Kitchen) | Nachhaltiges UX/UI Design & Green E-Commerce',
    description: 'AVZ Kitchen erstellt nachhaltiges UX/UI-Design, Shopify-Storefronts und ökologische digitale Erlebnisse für Marken in Deutschland, DACH und Europa.',
    heading: 'AVZ Kitchen',
    intro: 'Nachhaltiges UX/UI-Design, Shopify-Storefronts und digitale Erlebnisse für ökologische Marken.'
  },
  '/de/portfolio': {
    title: 'Portfolio | Nachhaltiges UX/UI & E-Commerce | AVZ Kitchen',
    description: 'Entdecke AVZ Kitchen Portfolio-Arbeiten in UX/UI Design, Shopify-Stores, Amazon Storefront Design und digitalen Produkt-Erlebnissen.',
    heading: 'Portfolio',
    intro: 'Ausgewählte Arbeiten im Bereich nachhaltiges UX/UI-Design und konversionsstarkes E-Commerce.'
  },
  '/de/bio': {
    title: 'Bio | Angelica Valenzuela | AVZ Kitchen',
    description: 'Erfahre mehr über Angelica Valenzuela, Produktdesignerin und Entwicklerin für nachhaltiges UX/UI Design und digitale Produkte.',
    heading: 'Über Angelica Valenzuela',
    intro: 'Ich kombiniere Strategie, Design und Code, um digitale Erlebnisse zu schaffen, die klar, intuitiv und einprägsam sind.'
  },
  '/de/services': {
    title: 'Leistungen | Nachhaltiges UX/UI & E-Commerce | AVZ Kitchen',
    description: 'AVZ Kitchen bietet nachhaltiges UX/UI-Design, Shopify-Design, Amazon Storefront Design, Accessibility Audits und digitale Präsenzstrategie an.',
    heading: 'Leistungen',
    intro: 'Design- und Entwicklungsunterstützung für nachhaltiges Wachstum, konversionsstarke Storefronts und digitale Klarheit.'
  },
  '/de/contact': {
    title: 'Kontakt | AVZ Kitchen | UX/UI & Amazon Storefront Design',
    description: 'Nimm Kontakt mit Angelica Valenzuela auf für Shopify-Design, Amazon Storefront Design, UX/UI-Beratung und digitale Produktprojekte.',
    heading: 'Kontakt',
    intro: 'Teile deine Ziele und ich helfe dir, ein durchdachtes, konversionsstarkes digitales Erlebnis zu gestalten.'
  },
  '/services/quick-ux-audit': {
    title: 'Quick UX Audit | AVZ Kitchen',
    description: 'Free quick UX audit for ecommerce brands needing better conversion, accessibility, and customer journey clarity.',
    heading: 'Quick UX Audit',
    intro: 'A first-pass review of the biggest friction points in your customer journey and most valuable conversion opportunities.'
  },
  '/services/amazon': {
    title: 'Amazon Storefront Design | AVZ Kitchen',
    description: 'Custom Amazon storefront and A+ content design for sustainable, eco-conscious brands selling on Amazon.de and European marketplaces.',
    heading: 'Amazon Storefront Design',
    intro: 'Clear product storytelling, stronger trust, and conversion-focused storefront layouts for Amazon and European channels.'
  },
  '/services/shopify-ux-design': {
    title: 'Shopify UX Design | AVZ Kitchen',
    description: 'Shopify UX design and ecommerce experiences for sustainable brands needing better conversion and clearer shopping journeys.',
    heading: 'Shopify UX Design',
    intro: 'Thoughtful storefront design with cleaner journeys, stronger trust signals, and a clearer path to conversion.'
  },
  '/services/shopify-ux-audit': {
    title: 'Shopify UX Audit | AVZ Kitchen',
    description: 'Shopify UX audit for conversion improvements, friction reduction, and a stronger customer journey across your storefront.',
    heading: 'Shopify UX Audit',
    intro: 'Identify the friction points in your purchase flow and turn them into measurable improvements.'
  },
  '/services/accessibility-audit': {
    title: 'Accessibility Audit | AVZ Kitchen',
    description: 'Accessibility audits for clearer, more usable digital experiences that improve trust, compliance, and customer inclusion.',
    heading: 'Accessibility Audit',
    intro: 'A focused review of keyboard flows, content clarity, and user experience fundamentals for more inclusive design.'
  },
  '/services/landing-page-design': {
    title: 'Landing Page Design | AVZ Kitchen',
    description: 'Landing page design focused on clarity, focus, and conversion for ecommerce, services, and sustainable digital brands.',
    heading: 'Landing Page Design',
    intro: 'Strong messaging, a clearer customer journey, and strategic structure to guide users to the next action.'
  }
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function renderRoute(route) {
  const basePath = route === '/' ? '/' : route.replace(/\/$/, '');
  const outputPath = route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, basePath, 'index.html');
  const dir = path.dirname(outputPath);
  ensureDir(dir);

  const shell = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const meta = routeMeta[route] || routeMeta['/'];
  const { title, description } = meta;

  const withTitle = shell.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  const withMeta = withTitle.replace(
    /<meta name="description" content="[^"]*"\s*\/>/i,
    `<meta name="description" content="${description}" />`
  );

  const withCanonical = withMeta.replace(
    /<head>/i,
    `<head>\n    <meta name="robots" content="index, follow" />\n    <link rel="canonical" href="https://avzkitchen.com${basePath === '/' ? '' : basePath}" />`
  );

  fs.writeFileSync(outputPath, withCanonical, 'utf8');
  console.log(`Prerendered ${route} -> ${outputPath}`);
}

for (const route of routes) {
  renderRoute(route);
}

console.log('Static prerender complete');
