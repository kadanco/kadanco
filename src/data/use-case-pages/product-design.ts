// src/data/use-case-pages/product-design.ts
// Product Design (formerly Adoption Rescue). Content from
// design/261021_Kadanco_Use_Cases/use-case-product-adoption.html (guided first
// run, UI) plus the design system as single source of truth and the phases on
// iam-mia.de (prototypes, UI pattern library, integration with frameworks and
// component libraries). 4 steps, owner decision 2026-10-22. Web design and
// brand from the design file live in Website Production and Positioning and
// Brand; here they are extras. "X, not Y" lines rewritten (masterplan D29).
import type { UseCasePage } from './types';

export const productDesign: UseCasePage = {
  id: 'product-design',
  dept: 'product',
  icon: 'board',
  stepsLayout: 'ui',
  stepIcons: ['door', 'board', 'layers', 'rocket'],
  en: {
    meta: {
      title: 'Product Design: UX, Onboarding and a Design System Your Team Builds On | Kadanco',
      description: 'Product design for software teams: UX and onboarding, UI design, a design system and component library as the single source of truth, and a clean handover to your front-end. Run by senior operators.',
    },
    crumb: 'Product design',
    dept: 'Product · Marketing · Sales',
    h1a: 'A Product Users Get On Day One.',
    h1b: 'And A Design System Your Team Builds On.',
    lead: 'We fix the UX and onboarding where users drop off, design the screens, and build a design system with a component library your developers use as the single source of truth. New users reach value on their own, and every new screen ships faster.',
    ctaPrimary: 'Get A Free UX Audit',
    ctaSecondary: 'Book A Strategy Call',
    situation: {
      eyebrow: 'The situation',
      h2a: 'The Product Is Strong.',
      h2b: 'New Users Leave Before They See It.',
      lede: 'The first run is long and unclear, so every trial leans on a sales call. Inside the product, every screen looks a little different, because each feature was designed on its own.',
      problem: 'Users cannot tell what the product is for or how to get their first result. There is no shared library, so developers rebuild the same buttons and forms again and again, the interface drifts, and every new feature takes longer than it should.',
      solve: 'We rebuild the first run as a guided path, redesign the screens that matter most, and turn them into a design system with a component library. Your developers build from it, so the product stays consistent and new screens ship faster.',
    },
    inside: {
      eyebrow: "What's inside",
      h2: 'Four Steps From First Click To Shipped Code.',
      lede: 'Owned and shipped by the operators who scoped them, from the first flow chart to the components in your codebase.',
      steps: [
        { label: '01 · UX & onboarding', title: 'The guided first run', body: 'We map the path from signup to first result with flow charts, wireframes and clickable prototypes, test it with real users, and remove the steps where they drop off, so the product shows its value before anyone needs to talk to sales.' },
        { label: '02 · UI design', title: 'Screens that feel obvious', body: 'Interface, states and empty states that make the product feel finished and self-explanatory, so the next action is always clear without a tooltip tour.' },
        { label: '03 · Design system', title: 'One source of truth', body: 'Tokens, a style guide and a UI pattern library with documented components, so design and code share one language and every team builds the same button the same way.' },
        { label: '04 · Front-end handover', title: 'Built into your codebase', body: 'We integrate the components with your framework and component library, pair with your developers on the first screens, and stay through test and launch, so the design arrives in production as designed.' },
      ],
    },
    also: {
      eyebrow: 'Also included',
      h2: 'So The Whole Story Stays Consistent.',
      items: [
        { title: 'Onboarding emails and docs', body: 'Onboarding emails, in-app guidance and help docs that carry the same story from first touch to first result.' },
        { title: 'Site and brand that match', body: 'The promise on the website and the brand outside match what users get inside. We can run both as part of the same project.' },
        { title: 'Measured drop-off', body: 'Product analytics on the first run, so each improvement is based on where users actually stop.' },
      ],
      tagsHead: 'What we deliver',
      tags: ['UX audit', 'User journeys', 'Flow charts', 'Wireframes', 'Clickable prototypes', 'User testing', 'Onboarding', 'UI design', 'Design tokens', 'Style guide', 'UI pattern library', 'Component library', 'Front-end integration', 'Accessibility'],
    },
    outcomes: {
      eyebrow: 'What you get',
      h2: 'Users Who Reach Value On Their Own.',
      items: [
        { big: 'No sales call', text: 'Trials reach their first result without a person in the loop.' },
        { big: 'One library', text: 'A design system and component library that design and development both use.' },
        { big: 'Faster releases', text: 'New screens built from ready components, consistent from the first release.' },
      ],
    },
    operator: {
      eyebrow: 'Who does the work',
      h2a: 'Design And Engineering',
      h2b: 'In The Same Head.',
      body: 'Maria is a senior product engineer and design director. She designs the flows and screens, builds the design system and integrates it with your developers, so nothing gets lost between design and code. Karan makes sure the first run tells the same story as your marketing and sales.',
      link: 'Meet the operators',
    },
    timeline: {
      eyebrow: 'The first 90 days',
      h2a: 'Fix The First Run.',
      h2b: 'Then Build The System.',
      steps: [
        { n: '01', title: 'Map', body: 'We audit the product and the first run with real usage data, talk to users and sales, and agree where users drop off first.' },
        { n: '02', title: 'Build', body: 'We prototype and test the new first run, design the key screens and start the component library with the parts you need most.' },
        { n: '03', title: 'Ship', amp: '& improve', body: 'Work starts within two weeks. We ship with your developers, measure drop-off and grow the design system with every release.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Questions, Answered.',
      items: [
        { q: 'Do you only redesign screens?', a: 'We cover the whole path: UX, onboarding, UI, the design system and the handover into your code.' },
        { q: 'Do you write code?', a: 'Yes. We integrate the components with your framework and pair with your developers until the design runs in production.' },
        { q: 'We already have a design system. Can you work with it?', a: 'Yes. We build on what works, fill the gaps and document it, so your team actually uses it.' },
        { q: 'Will this match our existing brand?', a: 'If you have one, we build on it. If it pulls in different directions, we tighten it so brand, product and site say the same thing.' },
        { q: 'How long until the new first run is live?', a: 'Work starts within two weeks of kickoff. Then we run in cycles, measuring drop-off and improving with each release.' },
        { q: 'Who does the design work?', a: 'The operators who scope your engagement design and ship it. No handoff to a junior team.' },
      ],
    },
    cta: {
      h2a: 'Tell Us Where',
      h2b: 'New Users Drop Off.',
      lead: "We'll show you the few changes that get them to value on their own, then build them, along with the system your team keeps building on.",
      button: 'Get A Free UX Audit',
    },
  },
  de: {
    meta: {
      title: 'Produktdesign: UX, Onboarding und ein Designsystem, auf dem Ihr Team aufbaut | Kadanco',
      description: 'Produktdesign für Software-Teams: UX und Onboarding, UI-Design, ein Designsystem mit Komponentenbibliothek als zentrale Quelle und eine saubere Übergabe ans Frontend. Umgesetzt von erfahrenen Machern.',
    },
    crumb: 'Produktdesign',
    dept: 'Produkt · Marketing · Vertrieb',
    h1a: 'Ein Produkt, das Nutzer am ersten Tag verstehen.',
    h1b: 'Und ein Designsystem, auf dem Ihr Team aufbaut.',
    lead: 'Wir verbessern UX und Onboarding dort, wo Nutzer abspringen, gestalten die Screens und bauen ein Designsystem mit Komponentenbibliothek, das Ihre Entwickler als zentrale Quelle nutzen. Neue Nutzer kommen allein zum Ziel, und jeder neue Screen ist schneller fertig.',
    ctaPrimary: 'Kostenloses UX-Audit',
    ctaSecondary: 'Strategiegespräch buchen',
    situation: {
      eyebrow: 'Die Ausgangslage',
      h2a: 'Das Produkt ist stark.',
      h2b: 'Neue Nutzer gehen, bevor sie es merken.',
      lede: 'Der Einstieg ist lang und unklar, deshalb braucht jeder Test einen Vertriebstermin. Im Produkt sieht jeder Screen ein wenig anders aus, weil jedes Feature für sich gestaltet wurde.',
      problem: 'Nutzer erkennen nicht, wofür das Produkt da ist und wie sie zum ersten Ergebnis kommen. Es gibt keine gemeinsame Bibliothek, also bauen Entwickler dieselben Buttons und Formulare immer wieder neu, die Oberfläche driftet auseinander, und jedes neue Feature dauert länger als nötig.',
      solve: 'Wir bauen den Einstieg als geführten Weg neu, gestalten die wichtigsten Screens und machen daraus ein Designsystem mit Komponentenbibliothek. Ihre Entwickler bauen damit, das Produkt bleibt einheitlich, und neue Screens sind schneller fertig.',
    },
    inside: {
      eyebrow: 'Was dazugehört',
      h2: 'Vier Schritte vom ersten Klick bis zum fertigen Code.',
      lede: 'Verantwortet und umgesetzt von denselben Machern, die sie geplant haben, vom ersten Flowchart bis zu den Komponenten in Ihrer Codebasis.',
      steps: [
        { label: '01 · UX & Onboarding', title: 'Der geführte Einstieg', body: 'Wir bilden den Weg von der Registrierung bis zum ersten Ergebnis mit Flowcharts, Wireframes und klickbaren Prototypen ab, testen ihn mit echten Nutzern und entfernen die Schritte, an denen sie abspringen. So zeigt das Produkt seinen Nutzen, bevor jemand mit dem Vertrieb sprechen muss.' },
        { label: '02 · UI-Design', title: 'Screens, die sich selbst erklären', body: 'Oberflächen, Zustände und Leerzustände, die das Produkt fertig und selbsterklärend wirken lassen, damit der nächste Schritt immer klar ist, ganz ohne Tooltip-Tour.' },
        { label: '03 · Designsystem', title: 'Eine zentrale Quelle', body: 'Design-Tokens, ein Styleguide und eine UI-Pattern-Library mit dokumentierten Komponenten, damit Design und Code eine Sprache sprechen und jedes Team denselben Button gleich baut.' },
        { label: '04 · Frontend-Übergabe', title: 'Eingebaut in Ihre Codebasis', body: 'Wir integrieren die Komponenten in Ihr Framework und Ihre Komponentenbibliothek, arbeiten bei den ersten Screens mit Ihren Entwicklern zusammen und bleiben bis Test und Launch, damit das Design so in Produktion ankommt, wie es gedacht war.' },
      ],
    },
    also: {
      eyebrow: 'Ebenfalls enthalten',
      h2: 'Damit die ganze Geschichte stimmig bleibt.',
      items: [
        { title: 'Onboarding-Mails und Doku', body: 'Onboarding-Mails, Hinweise im Produkt und Hilfeseiten, die dieselbe Geschichte vom ersten Kontakt bis zum ersten Ergebnis erzählen.' },
        { title: 'Website und Marke, die passen', body: 'Das Versprechen auf der Website und die Marke nach außen passen zu dem, was Nutzer im Produkt erleben. Beides setzen wir auf Wunsch im selben Projekt um.' },
        { title: 'Gemessene Absprünge', body: 'Produkt-Analytics für den Einstieg, damit jede Verbesserung darauf beruht, wo Nutzer wirklich aufhören.' },
      ],
      tagsHead: 'Was wir liefern',
      tags: ['UX-Audit', 'User Journeys', 'Flowcharts', 'Wireframes', 'Klickbare Prototypen', 'Nutzertests', 'Onboarding', 'UI-Design', 'Design-Tokens', 'Styleguide', 'UI-Pattern-Library', 'Komponentenbibliothek', 'Frontend-Integration', 'Barrierefreiheit'],
    },
    outcomes: {
      eyebrow: 'Was Sie bekommen',
      h2: 'Nutzer, die allein zum Ergebnis kommen.',
      items: [
        { big: 'Ohne Vertriebstermin', text: 'Testnutzer erreichen ihr erstes Ergebnis ohne menschliche Hilfe.' },
        { big: 'Eine Bibliothek', text: 'Ein Designsystem mit Komponentenbibliothek, das Design und Entwicklung gemeinsam nutzen.' },
        { big: 'Schnellere Releases', text: 'Neue Screens aus fertigen Komponenten, einheitlich ab dem ersten Release.' },
      ],
    },
    operator: {
      eyebrow: 'Wer die Arbeit macht',
      h2a: 'Design und Engineering',
      h2b: 'in einem Kopf.',
      body: 'Maria ist Senior Product Engineer und Design Director. Sie gestaltet Abläufe und Screens, baut das Designsystem und integriert es mit Ihren Entwicklern, damit zwischen Design und Code nichts verloren geht. Karan sorgt dafür, dass der Einstieg dieselbe Geschichte erzählt wie Ihr Marketing und Vertrieb.',
      link: 'Die Macher kennenlernen',
    },
    timeline: {
      eyebrow: 'Die ersten 90 Tage',
      h2a: 'Erst der Einstieg.',
      h2b: 'Dann das System.',
      steps: [
        { n: '01', title: 'Verstehen', body: 'Wir prüfen Produkt und Einstieg mit echten Nutzungsdaten, sprechen mit Nutzern und Vertrieb und einigen uns darauf, wo Nutzer zuerst abspringen.' },
        { n: '02', title: 'Aufbauen', body: 'Wir prototypen und testen den neuen Einstieg, gestalten die wichtigsten Screens und beginnen die Komponentenbibliothek mit den Teilen, die Sie am dringendsten brauchen.' },
        { n: '03', title: 'Liefern', amp: '& verbessern', body: 'Die Arbeit startet innerhalb von zwei Wochen. Wir liefern gemeinsam mit Ihren Entwicklern, messen Absprünge und erweitern das Designsystem mit jedem Release.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Fragen, beantwortet.',
      items: [
        { q: 'Gestalten Sie nur Screens neu?', a: 'Wir decken den ganzen Weg ab: UX, Onboarding, UI, das Designsystem und die Übergabe in Ihren Code.' },
        { q: 'Schreiben Sie auch Code?', a: 'Ja. Wir integrieren die Komponenten in Ihr Framework und arbeiten mit Ihren Entwicklern, bis das Design in Produktion läuft.' },
        { q: 'Wir haben schon ein Designsystem. Arbeiten Sie damit?', a: 'Ja. Wir bauen auf dem auf, was funktioniert, schließen Lücken und dokumentieren es, damit Ihr Team es wirklich nutzt.' },
        { q: 'Passt das zu unserer bestehenden Marke?', a: 'Wenn Sie eine haben, bauen wir darauf auf. Wenn sie in verschiedene Richtungen zieht, ziehen wir sie zusammen, damit Marke, Produkt und Website dasselbe sagen.' },
        { q: 'Wann ist der neue Einstieg live?', a: 'Die Arbeit startet innerhalb von zwei Wochen nach dem Kickoff. Danach arbeiten wir in Zyklen, messen Absprünge und verbessern mit jedem Release.' },
        { q: 'Wer macht die Designarbeit?', a: 'Die Macher, die Ihr Mandat planen, gestalten und liefern es auch. Keine Übergabe an ein Junior-Team.' },
      ],
    },
    cta: {
      h2a: 'Sagen Sie uns, wo',
      h2b: 'neue Nutzer abspringen.',
      lead: 'Wir zeigen Ihnen die wenigen Änderungen, mit denen sie allein zum Ergebnis kommen, und bauen sie, zusammen mit dem System, auf dem Ihr Team weiterbaut.',
      button: 'Kostenloses UX-Audit',
    },
  },
};
