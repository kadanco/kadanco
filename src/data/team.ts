// src/data/team.ts
//
// Team profile pages at /team/<slug>/ and /de/team/<slug>/. The business cards
// (November 2026) print a QR code to exactly these URLs, so never rename a slug.
//
// Source: each person's LinkedIn profile (PDF export, 2 November 2026). Titles
// match the business cards. Bios are the approved homepage texts (LiveFounders).
// Public links only: no email or phone anywhere on these pages (owner, against spam).
//
// Dates are 'YYYY-MM' (or 'YYYY' for education); `end` missing = ongoing.

export type Lang = 'en' | 'de';
type T = Record<Lang, string>;

export interface Role {
  title: T;
  start: string;
  end?: string;
  text?: T;
}

export interface Stop {
  org: string;
  orgNote?: T; // short line under the company name
  url?: string;
  roles: Role[]; // newest first
}

export interface Study {
  school: string;
  degree: T;
  start: string;
  end: string;
}

export interface Person {
  slug: string;
  name: string;
  first: string;
  photo: string;
  title: T;
  bio: T;
  links: { label: string; url: string }[];
  career: Stop[]; // ongoing first, then by end date, newest first
  education: Study[];
}

const karan: Person = {
  slug: 'karan',
  name: 'Karan Sharma',
  first: 'Karan',
  photo: 'https://assets.kadanco.com/public/karan.jpeg',
  title: { en: 'Operating Partner', de: 'Operating Partner' },
  bio: {
    en: 'B2B Go-to-Market & Outbound Lead based in Berlin. Karan works with B2B teams on positioning and outbound. He sharpens your audience and message, then builds the outbound that fills your pipeline.',
    de: 'B2B Go-to-Market & Outbound Lead in Berlin. Karan arbeitet mit B2B-Teams an Positionierung und Outbound. Er schärft Zielgruppe und Botschaft und baut dann das Outbound auf, das Ihre Pipeline füllt.',
  },
  links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/krnshrm/' }],
  career: [
    {
      org: 'Kadanco',
      roles: [
        {
          title: { en: 'Operating Partner', de: 'Operating Partner' },
          start: '2026-06',
          text: {
            en: 'Works with senior operators who have 15+ years in the market on product, marketing and sales for B2B companies.',
            de: 'Arbeitet mit erfahrenen Fachleuten mit über 15 Jahren Markterfahrung an Produkt, Marketing und Vertrieb für B2B-Unternehmen.',
          },
        },
      ],
    },
    {
      org: 'gtmWizards',
      roles: [
        {
          title: { en: 'GTM Advisor', de: 'GTM Advisor' },
          start: '2023-07',
          text: {
            en: 'Works with companies that have great products and services but lack marketing and sales skills in house.',
            de: 'Arbeitet mit Unternehmen, die starke Produkte und Leistungen haben, denen aber Marketing- und Vertriebskompetenz im eigenen Haus fehlt.',
          },
        },
      ],
    },
    {
      org: 'hubsell',
      orgNote: { en: 'Founder. B2B sales automation platform.', de: 'Gründer. Plattform für B2B-Vertriebsautomatisierung.' },
      roles: [
        {
          title: { en: 'Managing Director', de: 'Geschäftsführer' },
          start: '2026-08',
          text: { en: "Building a lean team to run hubsell's day to day.", de: 'Baut ein schlankes Team auf, das das Tagesgeschäft von hubsell führt.' },
        },
        {
          title: { en: 'CPMO & Managing Director', de: 'CPMO & Geschäftsführer' },
          start: '2024-09',
          end: '2026-07',
          text: {
            en: 'Led the complete relaunch of hubsell: new code base, new positioning, new design. Finished in July 2026 as a self-serve product that customers set up on their own.',
            de: 'Leitete den kompletten Relaunch von hubsell: neue Codebasis, neue Positionierung, neues Design. Abgeschlossen im Juli 2026 als Self-Service-Produkt, das Kunden selbst einrichten.',
          },
        },
        {
          title: { en: 'CSO & Managing Director', de: 'CSO & Geschäftsführer' },
          start: '2018-06',
          end: '2024-08',
          text: {
            en: 'Grew the team: recruited, trained and led SDRs, salespeople, customer success and support.',
            de: 'Baute das Team aus: stellte SDRs, Vertrieb, Customer Success und Support ein, schulte und führte sie.',
          },
        },
        {
          title: { en: 'CEO & Managing Director', de: 'CEO & Geschäftsführer' },
          start: '2016-02',
          end: '2018-05',
          text: { en: 'Grew revenue organically through founder-led sales.', de: 'Steigerte den Umsatz organisch durch Vertrieb aus der Gründerhand.' },
        },
        {
          title: { en: 'Co-Founder & Managing Director', de: 'Mitgründer & Geschäftsführer' },
          start: '2015-05',
          end: '2016-01',
          text: {
            en: 'Co-built the MVP before the company was founded, brought first customers from his network into a private beta and turned them into paying customers.',
            de: 'Entwickelte das MVP schon vor der Gründung mit, holte erste Kunden aus seinem Netzwerk in eine private Beta und machte sie zu zahlenden Kunden.',
          },
        },
      ],
    },
    {
      org: 'contentbird GmbH',
      roles: [
        {
          title: { en: 'International Business Development', de: 'International Business Development' },
          start: '2014-05',
          end: '2015-12',
          text: { en: 'Built the outbound playbook.', de: 'Baute das Outbound-Playbook auf.' },
        },
      ],
    },
  ],
  education: [
    { school: 'University of Amsterdam Business School', degree: { en: 'MSc, Business Science', de: 'MSc, Business Science' }, start: '2010', end: '2012' },
    { school: 'Universidade Nova de Lisboa', degree: { en: 'Erasmus programme', de: 'Erasmus-Programm' }, start: '2008', end: '2009' },
    { school: 'Amsterdam University of Applied Sciences', degree: { en: 'International Business Management (IBMS)', de: 'International Business Management (IBMS)' }, start: '2006', end: '2010' },
  ],
};

const maria: Person = {
  slug: 'maria',
  name: 'Maria Richter',
  first: 'Maria',
  photo: 'https://assets.kadanco.com/public/maria.jpeg',
  title: { en: 'Managing Director', de: 'Geschäftsführerin' },
  bio: {
    en: 'Senior Product Engineer & Design Director based in Berlin. Maria works as a strategic partner for B2B teams. She turns products into one consistent experience that helps you sell and grow your business.',
    de: 'Senior Product Engineer & Design Director in Berlin. Maria arbeitet als strategische Partnerin für B2B-Teams. Sie macht aus Produkten ein durchgängiges Erlebnis, das Ihnen hilft, mehr zu verkaufen und Ihr Unternehmen wachsen zu lassen.',
  },
  links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/miarichter/' }],
  career: [
    {
      org: 'Kadanco',
      roles: [
        {
          title: { en: 'Managing Director', de: 'Geschäftsführerin' },
          start: '2019-06',
          text: {
            en: 'Leads a team of senior operators with 15+ years in the market who plan and run product, marketing and sales for B2B companies, with no junior hand-offs.',
            de: 'Leitet ein Team erfahrener Fachleute mit über 15 Jahren Markterfahrung, die Produkt, Marketing und Vertrieb für B2B-Unternehmen planen und umsetzen, ohne Übergaben an Junioren.',
          },
        },
      ],
    },
    {
      org: 'hubsell',
      orgNote: { en: 'B2B sales automation platform.', de: 'Plattform für B2B-Vertriebsautomatisierung.' },
      roles: [
        {
          title: { en: 'Fractional CPO', de: 'Fractional CPO' },
          start: '2026-01',
          text: {
            en: 'Works with a team of sales engineers and designers on one clean, secure place where sales teams find reliable data and reach people without juggling a dozen tools.',
            de: 'Arbeitet mit einem Team aus Sales Engineers und Designern an einem aufgeräumten, sicheren Ort, an dem Vertriebsteams verlässliche Daten finden und Menschen erreichen, ohne ein Dutzend Tools zu jonglieren.',
          },
        },
        {
          title: { en: 'Head of Product Management', de: 'Head of Product Management' },
          start: '2018-04',
          end: '2025-12',
          text: {
            en: 'Led the redesign of the SaaS web app, which made the product simpler to use and sped up opportunity generation for its B2B sales teams.',
            de: 'Leitete das Redesign der SaaS-Web-App. Das Produkt wurde einfacher zu bedienen und die B2B-Vertriebsteams kamen schneller zu Verkaufschancen.',
          },
        },
      ],
    },
    {
      org: 'IAM MIA',
      url: 'https://iam-mia.de/',
      roles: [
        {
          title: { en: 'Head of Product', de: 'Head of Product' },
          start: '2007-08',
          text: {
            en: 'Helps B2B leaders turn complex software into consistent experiences their teams love to market and sell, as a flexible extension of their product team.',
            de: 'Hilft B2B-Verantwortlichen, komplexe Software in ein durchgängiges Erlebnis zu verwandeln, das ihre Teams gern vermarkten und verkaufen, als flexible Erweiterung ihres Produktteams.',
          },
        },
      ],
    },
    {
      org: 'XDi Experience Design Institut GmbH',
      roles: [
        {
          title: { en: 'AI Mentor & Trainer', de: 'KI-Mentorin & Trainerin' },
          start: '2023-07',
          end: '2026-10',
          text: {
            en: 'Trained 700+ future product professionals in product design (UX/UI), product management, product development and leadership, with AI tools.',
            de: 'Bildete über 700 angehende Produktfachleute in Produktdesign (UX/UI), Produktmanagement, Produktentwicklung und Führung aus, mit KI-Tools.',
          },
        },
      ],
    },
    {
      org: 'Sevenval Technologies',
      roles: [
        {
          title: { en: 'Senior User Experience Designer', de: 'Senior User Experience Designerin' },
          start: '2016-04',
          end: '2018-04',
          text: {
            en: 'Senior UX and interface design on large projects for clients such as Opel, Mercedes-Benz, Toyota and Postbank.',
            de: 'Senior UX- und Interface-Design in großen Projekten für Kunden wie Opel, Mercedes-Benz, Toyota und Postbank.',
          },
        },
      ],
    },
    {
      org: 'USEEDS° GmbH',
      roles: [
        {
          title: { en: 'User Experience Designer', de: 'User Experience Designerin' },
          start: '2015-09',
          end: '2016-03',
          text: {
            en: 'UX design and user research for Consorsbank, with a focus on trading.',
            de: 'UX-Design und Nutzerforschung für die Consorsbank, mit Schwerpunkt Trading.',
          },
        },
      ],
    },
    {
      org: 'Arvato',
      roles: [
        {
          title: { en: 'User Experience Designer', de: 'User Experience Designerin' },
          start: '2014-03',
          end: '2014-12',
          text: {
            en: 'Interactive interfaces and user studies at Omnidoo, a startup of the Arvato Group.',
            de: 'Interaktive Oberflächen und Nutzerstudien bei Omnidoo, einem Start-up der Arvato-Gruppe.',
          },
        },
      ],
    },
    {
      org: 'Rosendahl Borngräber',
      orgNote: { en: 'Brand design agency.', de: 'Agentur für Markendesign.' },
      roles: [
        {
          title: { en: 'User Interface Designer', de: 'User Interface Designerin' },
          start: '2012-02',
          end: '2014-02',
          text: {
            en: 'Interface design for brands such as ANH Immobilien, Cornelsen and minimum.',
            de: 'Interface-Design für Marken wie ANH Immobilien, Cornelsen und minimum.',
          },
        },
      ],
    },
  ],
  education: [
    { school: 'University of Portsmouth', degree: { en: 'Master of Arts, Graphic Design', de: 'Master of Arts, Grafikdesign' }, start: '2010', end: '2011' },
  ],
};

export const team: Person[] = [karan, maria];
