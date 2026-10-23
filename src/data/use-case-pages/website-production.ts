// src/data/use-case-pages/website-production.ts
// Website Production (formerly Conversion rebuild). Combines the design file
// design/261021_Kadanco_Use_Cases/use-case-web-design.html (responsive, CMS,
// security, SEO and hosting) with the previous page (positioning first, where
// the funnel leaks, lifecycle, first 90 days), owner decision 2026-10-22.
// Keywords: website design and development, website copy, CMS, SEO, hosting.
// Sales collateral moved to Content Production.
import type { UseCasePage } from './types';

export const websiteProduction: UseCasePage = {
  id: 'website-production',
  dept: 'product',
  icon: 'assets',
  stepsLayout: 'web',
  stepIcons: ['posts', 'board', 'seo'],
  en: {
    meta: {
      title: 'Website Production: Design, Copy, Code and Hosting From One Team | Kadanco',
      description: 'Website design and development from scratch: positioning, copy, design, responsive build, CMS, SEO, security and hosting, run by one senior team. Work starts within two weeks.',
    },
    crumb: 'Website production',
    dept: 'Product · Marketing · Sales',
    h1a: 'Your New Website.',
    h1b: 'Built End To End By One Team.',
    lead: 'Design, copy, code and hosting from one team. We write the story, design every page, build it, host it and keep it fast and safe, so the site brings in leads and your team can run it.',
    ctaPrimary: 'Get A Free Website Audit',
    ctaSecondary: 'Book A Strategy Call',
    situation: {
      eyebrow: 'The situation',
      h2a: 'The Traffic Is Fine.',
      h2b: 'The Website Lets It Down.',
      lede: 'Visitors arrive and the site still sells the company you used to be. It breaks on phones, loads slowly, and every change waits for a developer. A new look alone will not fix that, because the leak sits in the story and in the build.',
      problem: 'The copy describes an older version of the business. Layouts break on smaller screens, pages are slow, every text change needs a developer, and nobody owns security, so forms, plugins and the CMS are a standing risk. Nobody measures where visitors give up.',
      solve: 'We start with the story, then design and code a new site around it: responsive on every screen, on a CMS your team runs, with security, speed and tracking built in from the first line. Then we host it and keep improving it.',
    },
    funnel: {
      eyebrow: 'Where it leaks',
      h2a: 'Four Places Visitors Leave.',
      h2b: 'Before Sales Sees Them.',
      stages: [
        { label: 'Traffic arrives', leak: 'The page does not match the ad or the search' },
        { label: 'The page makes its case', leak: 'The story describes the old company, or breaks on a phone' },
        { label: 'The form gets filled', leak: 'Slow pages, long forms, and nobody follows up fast' },
        { label: 'A real lead' },
      ],
      end: 'What you wanted all along',
    },
    inside: {
      eyebrow: "What's inside",
      h2: 'Story First. Then Design, Code And Launch.',
      lede: 'Three phases, owned and shipped by the operators who scoped them. No briefs handed to another agency.',
      steps: [
        { label: '01 · Plan', title: 'The story and the structure', body: 'Positioning for the company you are today, a site map, a content plan and an SEO plan. Then we write the copy, so every page makes one clear case before anything is designed.' },
        { label: '02 · Design & build', title: 'Every screen, by design', body: 'Wireframes, a design system and full page designs, then a responsive build that adapts to real phones, tablets and desktops. Set up on a CMS your marketing team can edit without a developer.' },
        { label: '03 · Launch & run', title: 'Fast, safe and measured', body: 'Testing on real devices, security and speed checks, then go-live. We host it, keep it patched and backed up, and track the funnel, so each improvement is based on data.' },
      ],
    },
    also: {
      eyebrow: 'Also included',
      h2: 'So The Site Keeps Working After Launch.',
      items: [
        { title: 'SEO, GEO & accessibility', body: 'Clean markup, metadata and structured content, so search engines and AI answers find you. Contrast and keyboard focus that work for everyone.' },
        { title: 'Hosting & maintenance', body: 'Reliable hosting, backups, updates and monitoring, so the site stays fast, patched and online without you chasing anyone.' },
        { title: 'After the form', body: 'Lead routing, quick follow-up and nurture emails that run on time, so a filled form turns into a conversation.' },
      ],
      tagsHead: 'Everything a website needs',
      tags: ['Positioning', 'Site map', 'Content plan', 'Copywriting', 'Wireframes', 'Design system', 'Custom imagery', 'Animation', 'Responsive build', 'CMS setup', 'SEO & GEO', 'Analytics', 'Security', 'Hosting'],
    },
    outcomes: {
      eyebrow: 'What you get',
      h2: 'A Site That Matches You And Keeps Improving.',
      items: [
        { big: 'Current story', text: 'A site that describes the company today, so sales stops apologising for it on calls.' },
        { big: 'Every screen', text: 'Responsive, fast and secure on phones, tablets and desktops from day one.' },
        { big: 'Yours to run', text: 'A CMS your team edits daily, plus the design system, source files and a measured funnel.' },
      ],
    },
    operator: {
      eyebrow: 'Who builds it',
      h2a: 'Design And Code',
      h2b: 'From The Same People.',
      body: 'Maria is a senior product engineer and design director: she designs the site and builds it. Karan sharpens the positioning and the copy, and connects the site to your marketing and sales. They do the work themselves, with no hand-offs between a design agency, a copywriter and a developer.',
      link: 'Meet the operators',
    },
    timeline: {
      eyebrow: 'The first 90 days',
      h2a: 'Fix The Story.',
      h2b: 'Then Ship.',
      steps: [
        { n: '01', title: 'Map', body: 'We audit the current site and funnel with real numbers, talk to customers and sales, and agree the story the new site should tell.' },
        { n: '02', title: 'Build', body: 'We write, design and code the pages that carry the story first, with tracking in place from day one.' },
        { n: '03', title: 'Ship', amp: '& improve', body: 'Work starts within two weeks. After launch we keep improving the site against what the funnel shows.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Questions, Answered.',
      items: [
        { q: 'Do you build from scratch or redesign?', a: 'Usually from scratch: story, copy, design, code and hosting. If parts of your current site work, we keep them and rebuild the rest.' },
        { q: 'Which CMS do you use?', a: 'We pick the CMS that fits your team and stack. The goal is that people without a developer background can publish safely.' },
        { q: 'What if our positioning needs work first?', a: 'Then we start there. The story comes before the design on every site we build, so positioning is part of the project.' },
        { q: 'Responsive or adaptive?', a: 'Both. Fluid layouts handle every size in between, and adaptive breakpoints tune the key devices, so nothing just shrinks.' },
        { q: 'What does "security built in" mean?', a: 'HTTPS, validated and rate-limited forms, no exposed keys, hardened headers, and dependencies kept up to date.' },
        { q: 'What do we own at the end?', a: 'The live site, the design system, the source files, the SEO and analytics setup, and short documentation for your team.' },
      ],
    },
    cta: {
      h2a: 'Tell Us Where',
      h2b: 'Your Website Falls Short.',
      lead: "We'll audit the story, the build and the funnel, show you where visitors drop off, then rebuild what's holding the site back.",
      button: 'Get A Free Website Audit',
    },
  },
  de: {
    meta: {
      title: 'Website-Produktion: Design, Text, Code und Hosting aus einem Team | Kadanco',
      description: 'Webdesign und Website-Entwicklung von Grund auf: Positionierung, Texte, Design, responsive Umsetzung, CMS, SEO, Sicherheit und Hosting aus einem erfahrenen Team. Start innerhalb von zwei Wochen.',
    },
    crumb: 'Website-Produktion',
    dept: 'Produkt · Marketing · Vertrieb',
    h1a: 'Ihre neue Website.',
    h1b: 'Komplett aus einem Team.',
    lead: 'Design, Text, Code und Hosting aus einem Team. Wir schreiben die Geschichte, gestalten jede Seite, bauen sie, hosten sie und halten sie schnell und sicher, damit die Website Leads bringt und Ihr Team sie selbst pflegen kann.',
    ctaPrimary: 'Kostenloses Website-Audit',
    ctaSecondary: 'Strategiegespräch buchen',
    situation: {
      eyebrow: 'Die Ausgangslage',
      h2a: 'Der Traffic stimmt.',
      h2b: 'Die Website lässt ihn liegen.',
      lede: 'Besucher kommen an, und die Website verkauft noch das Unternehmen von früher. Auf dem Smartphone bricht sie, sie lädt langsam, und jede Änderung wartet auf einen Entwickler. Ein neuer Look allein löst das nicht, denn das Leck steckt in der Geschichte und im Code.',
      problem: 'Die Texte beschreiben eine ältere Version des Unternehmens. Layouts brechen auf kleinen Bildschirmen, Seiten laden langsam, jede Textänderung braucht einen Entwickler, und niemand verantwortet die Sicherheit. Formulare, Plugins und das CMS sind ein Dauerrisiko. Niemand misst, wo Besucher abspringen.',
      solve: 'Wir beginnen mit der Geschichte und gestalten und programmieren dann eine neue Website darum herum: responsiv auf jedem Bildschirm, mit einem CMS, das Ihr Team selbst bedient, und mit Sicherheit, Geschwindigkeit und Tracking ab der ersten Zeile. Dann hosten wir sie und verbessern sie laufend.',
    },
    funnel: {
      eyebrow: 'Wo es leckt',
      h2a: 'Vier Stellen, an denen Besucher gehen.',
      h2b: 'Bevor der Vertrieb sie sieht.',
      stages: [
        { label: 'Besucher kommen an', leak: 'Die Seite passt nicht zur Anzeige oder zur Suche' },
        { label: 'Die Seite überzeugt', leak: 'Die Geschichte beschreibt das alte Unternehmen oder bricht auf dem Smartphone' },
        { label: 'Das Formular wird ausgefüllt', leak: 'Langsame Seiten, lange Formulare und kein schnelles Follow-up' },
        { label: 'Ein echter Lead' },
      ],
      end: 'Das, was Sie eigentlich wollten',
    },
    inside: {
      eyebrow: 'Was dazugehört',
      h2: 'Erst die Geschichte. Dann Design, Code und Launch.',
      lede: 'Drei Phasen, verantwortet und umgesetzt von denselben Machern, die sie geplant haben. Keine Briefings an eine weitere Agentur.',
      steps: [
        { label: '01 · Planen', title: 'Geschichte und Struktur', body: 'Positionierung für das Unternehmen, das Sie heute sind, eine Sitemap, ein Content-Plan und ein SEO-Plan. Dann schreiben wir die Texte, damit jede Seite eine klare Aussage macht, bevor irgendetwas gestaltet wird.' },
        { label: '02 · Gestalten & bauen', title: 'Jeder Bildschirm, bewusst gestaltet', body: 'Wireframes, ein Designsystem und ausgestaltete Seiten, dann eine responsive Umsetzung für echte Smartphones, Tablets und Desktops. Eingerichtet auf einem CMS, das Ihr Marketing ohne Entwickler bearbeiten kann.' },
        { label: '03 · Launch & Betrieb', title: 'Schnell, sicher und messbar', body: 'Tests auf echten Geräten, Sicherheits- und Geschwindigkeitschecks, dann Go-live. Wir hosten die Website, halten sie aktuell und gesichert und messen den Funnel, damit jede Verbesserung auf Daten beruht.' },
      ],
    },
    also: {
      eyebrow: 'Ebenfalls enthalten',
      h2: 'Damit die Website nach dem Launch weiterarbeitet.',
      items: [
        { title: 'SEO, GEO & Barrierefreiheit', body: 'Sauberes Markup, Metadaten und strukturierte Inhalte, damit Suchmaschinen und KI-Antworten Sie finden. Kontraste und Tastaturbedienung, die für alle funktionieren.' },
        { title: 'Hosting & Wartung', body: 'Zuverlässiges Hosting, Backups, Updates und Monitoring, damit die Website schnell, aktuell und online bleibt, ohne dass Sie jemandem hinterherlaufen.' },
        { title: 'Nach dem Formular', body: 'Lead-Routing, schnelles Follow-up und Nurture-Mails, die pünktlich laufen, damit aus einem Formular ein Gespräch wird.' },
      ],
      tagsHead: 'Alles, was eine Website braucht',
      tags: ['Positionierung', 'Sitemap', 'Content-Plan', 'Texte', 'Wireframes', 'Designsystem', 'Eigene Bildwelten', 'Animation', 'Responsive Umsetzung', 'CMS-Einrichtung', 'SEO & GEO', 'Analytics', 'Sicherheit', 'Hosting'],
    },
    outcomes: {
      eyebrow: 'Was Sie bekommen',
      h2: 'Eine Website, die zu Ihnen passt und besser wird.',
      items: [
        { big: 'Aktuelle Story', text: 'Eine Website, die das heutige Unternehmen beschreibt, damit sich der Vertrieb in Gesprächen nicht mehr für sie entschuldigt.' },
        { big: 'Jeder Bildschirm', text: 'Responsiv, schnell und sicher auf Smartphone, Tablet und Desktop ab dem ersten Tag.' },
        { big: 'In Ihrer Hand', text: 'Ein CMS, das Ihr Team täglich nutzt, dazu Designsystem, Quelldateien und ein messbarer Funnel.' },
      ],
    },
    operator: {
      eyebrow: 'Wer sie baut',
      h2a: 'Design und Code',
      h2b: 'von denselben Menschen.',
      body: 'Maria ist Senior Product Engineer und Design Director: Sie gestaltet die Website und baut sie. Karan schärft Positionierung und Texte und verbindet die Website mit Ihrem Marketing und Vertrieb. Sie machen die Arbeit selbst, ohne Übergaben zwischen Designagentur, Texter und Entwickler.',
      link: 'Die Macher kennenlernen',
    },
    timeline: {
      eyebrow: 'Die ersten 90 Tage',
      h2a: 'Erst die Geschichte.',
      h2b: 'Dann live.',
      steps: [
        { n: '01', title: 'Verstehen', body: 'Wir prüfen die aktuelle Website und den Funnel mit echten Zahlen, sprechen mit Kunden und Vertrieb und legen die Geschichte fest, die die neue Website erzählen soll.' },
        { n: '02', title: 'Aufbauen', body: 'Wir schreiben, gestalten und programmieren zuerst die Seiten, die die Geschichte tragen, mit Tracking ab dem ersten Tag.' },
        { n: '03', title: 'Liefern', amp: '& verbessern', body: 'Die Arbeit startet innerhalb von zwei Wochen. Nach dem Launch verbessern wir die Website laufend anhand dessen, was der Funnel zeigt.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Fragen, beantwortet.',
      items: [
        { q: 'Bauen Sie neu oder überarbeiten Sie?', a: 'Meist von Grund auf: Geschichte, Texte, Design, Code und Hosting. Wenn Teile Ihrer Website gut funktionieren, behalten wir sie und bauen den Rest neu.' },
        { q: 'Welches CMS nutzen Sie?', a: 'Wir wählen das CMS, das zu Ihrem Team und Ihrer Technik passt. Ziel ist, dass auch Menschen ohne Entwicklerwissen sicher veröffentlichen können.' },
        { q: 'Und wenn unsere Positionierung erst Arbeit braucht?', a: 'Dann fangen wir dort an. Bei jeder Website, die wir bauen, kommt die Geschichte vor dem Design, die Positionierung gehört also zum Projekt.' },
        { q: 'Responsiv oder adaptiv?', a: 'Beides. Flexible Layouts decken alle Größen dazwischen ab, und adaptive Breakpoints stimmen die wichtigsten Geräte ab, damit nichts einfach nur schrumpft.' },
        { q: 'Was heißt „Sicherheit von Anfang an“?', a: 'HTTPS, geprüfte und begrenzte Formulare, keine offenen Schlüssel, gehärtete Header und aktuelle Abhängigkeiten.' },
        { q: 'Was gehört uns am Ende?', a: 'Die Live-Website, das Designsystem, die Quelldateien, das SEO- und Analytics-Setup und eine kurze Dokumentation für Ihr Team.' },
      ],
    },
    cta: {
      h2a: 'Sagen Sie uns, wo',
      h2b: 'Ihre Website zu kurz greift.',
      lead: 'Wir prüfen Geschichte, Umsetzung und Funnel, zeigen Ihnen, wo Besucher abspringen, und bauen dann neu, was die Website ausbremst.',
      button: 'Kostenloses Website-Audit',
    },
  },
};
