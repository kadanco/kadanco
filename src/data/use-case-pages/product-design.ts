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
  heroVisual: 'app',
  stepsLayout: 'ui',
  stepIcons: ['door', 'board', 'layers', 'rocket'],
  en: {
    meta: {
      title: 'Product Design: UX, Onboarding and a Design System Your Team Builds On | Kadanco',
      description: 'Product design for software teams: UX and onboarding, UI design, a design system and component library as the single source of truth, and a clean handover to your front-end. Run by senior operators.',
    },
    crumb: 'Product design',
    dept: 'Product · Marketing · Sales',
    h1a: 'Users Get It Alone.',
    h1b: 'Your Team Ships Faster.',
    lead: 'We fix the onboarding and screens where new users drop off, prototype and test the new first run, and build the design system your developers ship from. Files and code you keep, from the first sprint.',
    ctaPrimary: 'Get A Free UX Audit',
    ctaSecondary: 'See What You Get',
    ctaSecondaryHref: '#deliverables',
    check: {
      eyebrow: 'Self-check',
      h2a: 'Do New Users Get Stuck?',
      h2b: 'Check In 30 Seconds.',
      lede: 'Tick what sounds familiar.',
      items: [
        'Most signups never come back after the first session.',
        'Trials only convert after a sales call or a demo.',
        'Support answers the same "how do I" questions every week.',
        'Each new feature looks a little different from the last.',
        'Developers rebuild the same buttons and forms for every screen.',
      ],
      results: {
        none: { title: 'Looks healthy.', body: 'Your first run seems to work. If you want a second opinion, a short audit confirms it.' },
        some: { title: 'Worth a look.', body: 'One or two of these usually point to a single step where users stop. An audit finds it.' },
        many: { title: 'Time for a UX audit.', body: 'Several of these together mean users leave before they see the value. We show you where, and what to fix first.', cta: 'Get A Free UX Audit' },
      },
    },
    situation: {
      eyebrow: 'The situation',
      h2a: 'The Product Is Strong.',
      h2b: 'New Users Leave Before They See It.',
      lede: 'The first run is long and unclear, so every trial leans on a sales call. And every screen looks a little different.',
      problem: 'Users cannot tell what the product is for or how to get their first result. Without a shared library, developers rebuild the same parts again and again, and every feature takes longer.',
      solve: 'We rebuild the first run as a guided path, redesign the screens that matter most and turn them into a design system your developers build from.',
    },
    deliverables: {
      eyebrow: 'What you get',
      h2a: 'Work You Can Open, Click And Ship.',
      h2b: 'From The First Sprint.',
      lede: 'Everything we make is yours: files, prototypes and code your team keeps using.',
      tabs: [
        { key: 'audit', label: 'UX audit', title: 'Where users stop, and what to fix first', body: 'A drop-off map from signup to first result, built from your usage data and user interviews, with fixes ranked by impact.', points: ['Funnel from signup to first result', 'Drop-off at every step', 'Fixes ranked by impact', 'Onboarding emails and in-app guidance reviewed'] },
        { key: 'screens', label: 'Screen designs', title: 'Every key screen, every state', body: 'The screens that matter most, designed in Figma with loading, error and empty states, so the product feels finished.', points: ['Key screens in Figma', 'Loading, error and empty states', 'Desktop and mobile', 'In line with your site and brand'] },
        { key: 'prototype', label: 'Clickable prototype', title: 'The new first run, tested', body: 'A clickable prototype of every onboarding screen, tested with real users before a line of code is written.', points: ['Every onboarding screen', 'Tested with real users', 'Test findings built in', 'Shared with your team in workshops'] },
        { key: 'system', label: 'Design system', title: 'One source of truth', body: 'Tokens, components and documentation, so design and code share one language and every team builds the same button the same way.', points: ['Design tokens', 'Component library', 'Usage documentation', 'Accessibility checked'] },
        { key: 'code', label: 'Front-end code', title: 'Built into your codebase', body: 'The components built in your framework, paired with your developers on the first screens, so the design reaches production as designed.', points: ['Components in your framework', 'Pairing on the first screens', 'Product analytics on the first run', 'Support through test and launch'] },
      ],
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
    measures: {
      eyebrow: 'What we measure',
      h2a: 'Every Change Is Measured.',
      h2b: 'Where Users Stop, What They Reach.',
      lede: 'We agree the numbers that matter at kickoff and track them with every release.',
      items: [
        { title: 'Activation rate', body: 'How many new users reach their first real result.' },
        { title: 'Time to first result', body: 'How long it takes from signup to that result.' },
        { title: 'Trial to paid', body: 'How many trials turn into customers without a sales call.' },
        { title: 'Support tickets per new user', body: 'How often new users need help to get going.' },
        { title: 'Time to ship a screen', body: 'How fast your team builds a new screen from the system.' },
      ],
    },
    ways: {
      eyebrow: 'Ways to work',
      h2a: 'Two Ways To Start.',
      h2b: 'Pick Your Pace.',
      options: [
        { tag: 'Sprint', title: 'First-run sprint', length: '4, 8 or 12 weeks', body: 'A fixed sprint that fixes the first run and lays the foundation of your design system.', points: ['UX audit and a ranked list of fixes', 'A tested prototype of every onboarding screen', 'The first components of your design system', 'Workshops with your team', 'Handover to your developers'], cta: 'Book A Sprint Call' },
        { tag: 'Ongoing', title: 'Product partnership', length: 'Quarterly, ongoing', body: 'Senior product operators inside your team, designing, shipping and measuring release after release.', points: ['Part of your product team', 'Ongoing design of the user journey', 'A roadmap of tests, run and measured', 'A design system that grows with every release'], cta: 'Book A Discovery Call' },
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
        { q: 'Do you only work with SaaS?', a: 'No. We work on software products in general, including customer portals and internal tools.' },
        { q: 'What do you need from us?', a: 'Access to the product and its usage data, a few users to talk to, and a developer contact for the handover.' },
      ],
    },
    cta: {
      h2a: 'Show Us Where Users Stop.',
      h2b: "We'll Fix The First Run.",
      lead: "We'll map the drop-off, show you the few changes that matter most, then design and build them.",
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
    h1a: 'Nutzer verstehen es allein.',
    h1b: 'Ihr Team liefert schneller.',
    lead: 'Wir verbessern Onboarding und Screens, wo neue Nutzer abspringen, testen den neuen Einstieg als Prototyp und bauen das Designsystem, mit dem Ihre Entwickler arbeiten. Dateien und Code gehören Ihnen, ab dem ersten Sprint.',
    ctaPrimary: 'Kostenloses UX-Audit',
    ctaSecondary: 'Leistungen ansehen',
    ctaSecondaryHref: '#deliverables',
    check: {
      eyebrow: 'Selbstcheck',
      h2a: 'Bleiben neue Nutzer hängen?',
      h2b: 'Prüfen Sie es in 30 Sekunden.',
      lede: 'Haken Sie ab, was Ihnen bekannt vorkommt.',
      items: [
        'Die meisten neuen Nutzer kommen nach der ersten Sitzung nicht wieder.',
        'Testphasen werden erst nach einem Vertriebsgespräch oder einer Demo zu Kunden.',
        'Der Support beantwortet jede Woche dieselben „Wie mache ich …“-Fragen.',
        'Jede neue Funktion sieht ein wenig anders aus als die letzte.',
        'Entwickler bauen für jeden Screen dieselben Buttons und Formulare neu.',
      ],
      results: {
        none: { title: 'Sieht gesund aus.', body: 'Ihr Einstieg scheint zu funktionieren. Wenn Sie eine zweite Meinung möchten, bestätigt ein kurzes Audit das.' },
        some: { title: 'Einen Blick wert.', body: 'Ein oder zwei dieser Punkte zeigen meist auf einen Schritt, an dem Nutzer aufhören. Ein Audit findet ihn.' },
        many: { title: 'Zeit für ein UX-Audit.', body: 'Mehrere dieser Punkte zusammen heißen: Nutzer gehen, bevor sie den Wert sehen. Wir zeigen Ihnen, wo, und was Sie zuerst ändern.', cta: 'Kostenloses UX-Audit' },
      },
    },
    situation: {
      eyebrow: 'Die Ausgangslage',
      h2a: 'Das Produkt ist stark.',
      h2b: 'Neue Nutzer gehen, bevor sie es merken.',
      lede: 'Der Einstieg ist lang und unklar, deshalb braucht jeder Test einen Vertriebstermin. Und jeder Screen sieht ein wenig anders aus.',
      problem: 'Nutzer erkennen nicht, wofür das Produkt da ist und wie sie zum ersten Ergebnis kommen. Ohne gemeinsame Bibliothek bauen Entwickler dieselben Teile immer wieder neu, und jede Funktion dauert länger.',
      solve: 'Wir bauen den Einstieg als geführten Weg neu, gestalten die wichtigsten Screens und machen daraus ein Designsystem, mit dem Ihre Entwickler bauen.',
    },
    deliverables: {
      eyebrow: 'Was Sie bekommen',
      h2a: 'Arbeit zum Öffnen, Klicken und Ausliefern.',
      h2b: 'Ab dem ersten Sprint.',
      lede: 'Alles, was wir machen, gehört Ihnen: Dateien, Prototypen und Code, mit denen Ihr Team weiterarbeitet.',
      tabs: [
        { key: 'audit', label: 'UX-Audit', title: 'Wo Nutzer aufhören und was zuerst zu tun ist', body: 'Eine Karte der Abbrüche von der Anmeldung bis zum ersten Ergebnis, aus Ihren Nutzungsdaten und Interviews, mit Maßnahmen nach Wirkung sortiert.', points: ['Funnel von der Anmeldung bis zum ersten Ergebnis', 'Abbrüche bei jedem Schritt', 'Maßnahmen nach Wirkung sortiert', 'Onboarding-E-Mails und Hinweise im Produkt geprüft'] },
        { key: 'screens', label: 'Screendesigns', title: 'Jeder wichtige Screen, jeder Zustand', body: 'Die wichtigsten Screens in Figma, mit Lade-, Fehler- und Leerzuständen, damit das Produkt fertig wirkt.', points: ['Wichtige Screens in Figma', 'Lade-, Fehler- und Leerzustände', 'Desktop und Mobil', 'Passend zu Website und Marke'] },
        { key: 'prototype', label: 'Klickbarer Prototyp', title: 'Der neue Einstieg, getestet', body: 'Ein klickbarer Prototyp jedes Onboarding-Screens, mit echten Nutzern getestet, bevor eine Zeile Code entsteht.', points: ['Jeder Onboarding-Screen', 'Mit echten Nutzern getestet', 'Erkenntnisse aus den Tests eingearbeitet', 'In Workshops mit Ihrem Team geteilt'] },
        { key: 'system', label: 'Designsystem', title: 'Eine zentrale Quelle', body: 'Tokens, Komponenten und Dokumentation, damit Design und Code dieselbe Sprache sprechen und jedes Team denselben Button gleich baut.', points: ['Design-Tokens', 'Komponentenbibliothek', 'Dokumentation zur Nutzung', 'Barrierefreiheit geprüft'] },
        { key: 'code', label: 'Frontend-Code', title: 'Direkt in Ihrer Codebasis', body: 'Die Komponenten in Ihrem Framework gebaut, gemeinsam mit Ihren Entwicklern an den ersten Screens, damit das Design so in Produktion kommt, wie es gestaltet ist.', points: ['Komponenten in Ihrem Framework', 'Pairing an den ersten Screens', 'Produktanalyse für den Einstieg', 'Begleitung bis Test und Launch'] },
      ],
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
    measures: {
      eyebrow: 'Was wir messen',
      h2a: 'Jede Änderung wird gemessen.',
      h2b: 'Wo Nutzer aufhören, was sie erreichen.',
      lede: 'Zum Start legen wir die Zahlen fest, die zählen, und verfolgen sie mit jedem Release.',
      items: [
        { title: 'Aktivierungsrate', body: 'Wie viele neue Nutzer ihr erstes echtes Ergebnis erreichen.' },
        { title: 'Zeit bis zum ersten Ergebnis', body: 'Wie lange es von der Anmeldung bis dahin dauert.' },
        { title: 'Test zu Kunde', body: 'Wie viele Testphasen ohne Vertriebsgespräch zu Kunden werden.' },
        { title: 'Support-Tickets pro neuem Nutzer', body: 'Wie oft neue Nutzer Hilfe brauchen, um loszulegen.' },
        { title: 'Zeit pro neuem Screen', body: 'Wie schnell Ihr Team einen neuen Screen aus dem System baut.' },
      ],
    },
    ways: {
      eyebrow: 'Zusammenarbeit',
      h2a: 'Zwei Wege zum Start.',
      h2b: 'Sie wählen das Tempo.',
      options: [
        { tag: 'Sprint', title: 'Einstiegs-Sprint', length: '4, 8 oder 12 Wochen', body: 'Ein fester Sprint, der den Einstieg verbessert und das Fundament Ihres Designsystems legt.', points: ['UX-Audit und priorisierte Maßnahmen', 'Ein getesteter Prototyp jedes Onboarding-Screens', 'Die ersten Komponenten Ihres Designsystems', 'Workshops mit Ihrem Team', 'Übergabe an Ihre Entwickler'], cta: 'Sprint besprechen' },
        { tag: 'Laufend', title: 'Produkt-Partnerschaft', length: 'Quartalsweise, laufend', body: 'Erfahrene Produkt-Macher in Ihrem Team, die Release für Release gestalten, ausliefern und messen.', points: ['Teil Ihres Produktteams', 'Laufende Gestaltung der Nutzerwege', 'Eine Roadmap aus Tests, umgesetzt und gemessen', 'Ein Designsystem, das mit jedem Release wächst'], cta: 'Erstgespräch buchen' },
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
        { q: 'Arbeiten Sie nur mit SaaS?', a: 'Nein. Wir arbeiten an Softwareprodukten allgemein, auch an Kundenportalen und internen Tools.' },
        { q: 'Was brauchen Sie von uns?', a: 'Zugang zum Produkt und zu den Nutzungsdaten, ein paar Nutzer für Gespräche und einen Ansprechpartner in der Entwicklung für die Übergabe.' },
      ],
    },
    cta: {
      h2a: 'Zeigen Sie uns, wo Nutzer aufhören.',
      h2b: 'Wir verbessern den Einstieg.',
      lead: 'Wir zeigen, wo Nutzer abspringen und welche wenigen Änderungen am meisten bringen. Dann gestalten und bauen wir sie.',
      button: 'Kostenloses UX-Audit',
    },
  },
};
