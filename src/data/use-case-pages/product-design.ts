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
  heroVisual: 'morph',
  stepsLayout: 'ui',
  stepIcons: ['door', 'board', 'layers', 'rocket'],
  en: {
    meta: {
      title: 'Make your product understood instantly and get your users to the Aha moment faster | Kadanco',
      description: 'Product design for software teams: UX and onboarding, UI design, a design system and component library as the single source of truth, and a clean handover to your front-end. Run by senior operators.',
    },
    crumb: 'Product design',
    dept: 'Your Product Understood, Instantly',
    h1a: 'We Make Your Users Get To The',
    h1b: 'Aha Moment All By Themselves.',
    lead: 'We unlock the growth potential of your product by making your product obvious to understand and use. Your users reach the Aha moment faster, their time to value get shortened. The decision to buy becomes a no-brainer.',
    ctaPrimary: 'Get A Free UX Audit',
    ctaSecondary: 'See What You Get',
    ctaSecondaryHref: '#deliverables',
    check: {
      eyebrow: 'Where Do You Stand?',
      h2a: 'Do Your New Users Get Stuck?',
      h2b: 'What Is Keeping You From Fixing It?',
      lede: 'Tick what sounds familiar.',
      items: [
        'Most signups never come back after the first session.',
        'Trials only convert after a sales call or a demo.',
        'Support answers the same "how do I" questions every week.',
        'Each new feature looks a little different from the last.',
        'Developers rebuild the same buttons and forms for every screen.',
        'There is not single source of truth for your design system, so every team builds the same button the same way.',
      ],
      results: {
        none: { title: 'Looks healthy.', body: 'Your first run seems to work. If you want a second opinion, a short audit confirms it.' },
        some: { title: 'Worth a look.', body: 'One or two of these usually point to a single step where users stop. An audit finds it.' },
        many: { title: 'Time for a UX audit.', body: 'Several of these together mean users leave before they see the value. We show you where, and what to fix first.', cta: 'Get A Free UX Audit' },
      },
    },
    deliverables: {
      eyebrow: 'What you get',
      h2a: 'Five Steps From First Click To Shipped Code.',
      h2b: 'Each One Ends In Work You Keep.',
      lede: 'Run by the operators who scope them. Every step hands you files, prototypes or code your team keeps using.',
      tabs: [
        { key: 'audit', label: '01 · UX audit', title: 'Where users stop, and what to fix first', body: 'We map the path from signup to first result with your usage data and user interviews, and rank the fixes by impact.', points: ['Funnel from signup to first result', 'Drop-off at every step', 'Fixes ranked by impact', 'Onboarding emails and in-app guidance reviewed'] },
        { key: 'prototype', label: '02 · Onboarding', title: 'The guided first run, tested', body: 'We rebuild the first run with flow charts, wireframes and a clickable prototype, test it with real users and remove the steps where they drop off.', points: ['Flow charts and wireframes', 'A clickable prototype of every onboarding screen', 'Tested with real users', 'Shared with your team in workshops'] },
        { key: 'screens', label: '03 · UI design', title: 'Screens that feel obvious', body: 'Interface, states and empty states that make the product feel finished, so the next action is always clear without a tooltip tour.', points: ['Key screens in Figma', 'Loading, error and empty states', 'Desktop and mobile', 'In line with your site and brand'] },
        { key: 'system', label: '04 · Design system', title: 'One source of truth', body: 'Tokens, a style guide and documented components, so design and code share one language and every team builds the same button the same way.', points: ['Design tokens', 'Component library', 'Usage documentation', 'Accessibility checked'] },
        { key: 'code', label: '05 · Front-end handover', title: 'Built into your codebase', body: 'We build the components in your framework, pair with your developers on the first screens and stay through test and launch, so the design reaches production as designed.', points: ['Components in your framework', 'Pairing on the first screens', 'Product analytics on the first run', 'Support through test and launch'] },
      ],
    },
    measures: {
      eyebrow: 'What we measure',
      h2a: 'Every Change Is Measured.',
      h2b: 'Where Users Stop, What They Reach.',
      lede: 'We agree the numbers that matter at kickoff and track them with every release.',
      items: [
        { title: 'Activation rate', body: 'How many new users reach their first real result.', dir: 'up' },
        { title: 'Time to first result', body: 'How long it takes from signup to that result.', dir: 'down' },
        { title: 'Trial to paid', body: 'How many trials turn into customers without a sales call.', dir: 'up' },
        { title: 'Support tickets per new user', body: 'How often new users need help to get going.', dir: 'down' },
        { title: 'Time to ship a screen', body: 'How fast your team builds a new screen from the system.', dir: 'down' },
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
    stories: {
      eyebrow: 'Success stories',
      h2a: 'Products Users Get.',
      h2b: 'Teams That Ship Faster.',
      lede: 'What changed for the teams we worked with.',
      items: [
        { placeholder: true, client: '[Client name]', industry: '[Industry]', challenge: '[Where new users dropped off before.]', work: '[What we did: audit, onboarding, design system, handover.]', result: '[The result, with a figure the client approves.]', quote: '[A short quote from the client.]', who: '[Name, role, company]' },
        { placeholder: true, client: '[Client name]', industry: '[Industry]', challenge: '[Where new users dropped off before.]', work: '[What we did.]', result: '[The result, with a figure the client approves.]', quote: '[A short quote from the client.]', who: '[Name, role, company]' },
        { placeholder: true, client: '[Client name]', industry: '[Industry]', challenge: '[Where new users dropped off before.]', work: '[What we did.]', result: '[The result, with a figure the client approves.]', quote: '[A short quote from the client.]', who: '[Name, role, company]' },
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
      title: 'Machen Sie Ihr Produkt sofort verständlich und bringen Sie Nutzer schneller zum Aha-Moment | Kadanco',
      description: 'Produktdesign für Software-Teams: UX und Onboarding, UI-Design, ein Designsystem mit Komponentenbibliothek als zentrale Quelle und eine saubere Übergabe ans Frontend. Umgesetzt von erfahrenen Machern.',
    },
    crumb: 'Produktdesign',
    dept: 'Ihr Produkt, sofort verstanden',
    h1a: 'Ihre Nutzer erreichen den Aha-Moment',
    h1b: 'ganz von allein.',
    lead: 'Wir machen Ihr Produkt leicht zu verstehen und zu nutzen und heben so sein Wachstumspotenzial. Ihre Nutzer erreichen den Aha-Moment früher, die Zeit bis zum Nutzen wird kürzer, und die Kaufentscheidung fällt leicht.',
    ctaPrimary: 'Kostenloses UX-Audit',
    ctaSecondary: 'Leistungen ansehen',
    ctaSecondaryHref: '#deliverables',
    check: {
      eyebrow: 'Wo stehen Sie?',
      h2a: 'Bleiben Ihre neuen Nutzer hängen?',
      h2b: 'Was hält Sie davon ab, es zu lösen?',
      lede: 'Haken Sie ab, was Ihnen bekannt vorkommt.',
      items: [
        'Die meisten neuen Nutzer kommen nach der ersten Sitzung nicht wieder.',
        'Testphasen werden erst nach einem Vertriebsgespräch oder einer Demo zu Kunden.',
        'Der Support beantwortet jede Woche dieselben „Wie mache ich …“-Fragen.',
        'Jede neue Funktion sieht ein wenig anders aus als die letzte.',
        'Entwickler bauen für jeden Screen dieselben Buttons und Formulare neu.',
        'Es gibt keine zentrale Quelle für Ihr Designsystem, also baut jedes Team denselben Button anders.',
      ],
      results: {
        none: { title: 'Sieht gesund aus.', body: 'Ihr Einstieg scheint zu funktionieren. Wenn Sie eine zweite Meinung möchten, bestätigt ein kurzes Audit das.' },
        some: { title: 'Einen Blick wert.', body: 'Ein oder zwei dieser Punkte zeigen meist auf einen Schritt, an dem Nutzer aufhören. Ein Audit findet ihn.' },
        many: { title: 'Zeit für ein UX-Audit.', body: 'Mehrere dieser Punkte zusammen heißen: Nutzer gehen, bevor sie den Wert sehen. Wir zeigen Ihnen, wo, und was Sie zuerst ändern.', cta: 'Kostenloses UX-Audit' },
      },
    },
    deliverables: {
      eyebrow: 'Was Sie bekommen',
      h2a: 'Fünf Schritte vom ersten Klick bis zum fertigen Code.',
      h2b: 'Jeder endet mit Arbeit, die Ihnen bleibt.',
      lede: 'Umgesetzt von den Machern, die sie planen. Jeder Schritt liefert Dateien, Prototypen oder Code, mit denen Ihr Team weiterarbeitet.',
      tabs: [
        { key: 'audit', label: '01 · UX-Audit', title: 'Wo Nutzer aufhören und was zuerst zu tun ist', body: 'Wir bilden den Weg von der Anmeldung bis zum ersten Ergebnis mit Ihren Nutzungsdaten und Interviews ab und sortieren die Maßnahmen nach Wirkung.', points: ['Funnel von der Anmeldung bis zum ersten Ergebnis', 'Abbrüche bei jedem Schritt', 'Maßnahmen nach Wirkung sortiert', 'Onboarding-E-Mails und Hinweise im Produkt geprüft'] },
        { key: 'prototype', label: '02 · Onboarding', title: 'Der geführte Einstieg, getestet', body: 'Wir bauen den Einstieg mit Flowcharts, Wireframes und einem klickbaren Prototyp neu, testen ihn mit echten Nutzern und entfernen die Schritte, an denen sie abspringen.', points: ['Flowcharts und Wireframes', 'Ein klickbarer Prototyp jedes Onboarding-Screens', 'Mit echten Nutzern getestet', 'In Workshops mit Ihrem Team geteilt'] },
        { key: 'screens', label: '03 · UI-Design', title: 'Screens, die sich selbst erklären', body: 'Oberflächen, Zustände und Leerzustände, die das Produkt fertig wirken lassen, damit der nächste Schritt immer klar ist, ganz ohne Tooltip-Tour.', points: ['Wichtige Screens in Figma', 'Lade-, Fehler- und Leerzustände', 'Desktop und Mobil', 'Passend zu Website und Marke'] },
        { key: 'system', label: '04 · Designsystem', title: 'Eine zentrale Quelle', body: 'Tokens, ein Styleguide und dokumentierte Komponenten, damit Design und Code dieselbe Sprache sprechen und jedes Team denselben Button gleich baut.', points: ['Design-Tokens', 'Komponentenbibliothek', 'Dokumentation zur Nutzung', 'Barrierefreiheit geprüft'] },
        { key: 'code', label: '05 · Frontend-Übergabe', title: 'Direkt in Ihrer Codebasis', body: 'Wir bauen die Komponenten in Ihrem Framework, arbeiten bei den ersten Screens mit Ihren Entwicklern zusammen und bleiben bis Test und Launch, damit das Design so in Produktion kommt, wie es gestaltet ist.', points: ['Komponenten in Ihrem Framework', 'Pairing an den ersten Screens', 'Produktanalyse für den Einstieg', 'Begleitung bis Test und Launch'] },
      ],
    },
    measures: {
      eyebrow: 'Was wir messen',
      h2a: 'Jede Änderung wird gemessen.',
      h2b: 'Wo Nutzer aufhören, was sie erreichen.',
      lede: 'Zum Start legen wir die Zahlen fest, die zählen, und verfolgen sie mit jedem Release.',
      items: [
        { title: 'Aktivierungsrate', body: 'Wie viele neue Nutzer ihr erstes echtes Ergebnis erreichen.', dir: 'up' },
        { title: 'Zeit bis zum ersten Ergebnis', body: 'Wie lange es von der Anmeldung bis dahin dauert.', dir: 'down' },
        { title: 'Test zu Kunde', body: 'Wie viele Testphasen ohne Vertriebsgespräch zu Kunden werden.', dir: 'up' },
        { title: 'Support-Tickets pro neuem Nutzer', body: 'Wie oft neue Nutzer Hilfe brauchen, um loszulegen.', dir: 'down' },
        { title: 'Zeit pro neuem Screen', body: 'Wie schnell Ihr Team einen neuen Screen aus dem System baut.', dir: 'down' },
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
    stories: {
      eyebrow: 'Erfolgsgeschichten',
      h2a: 'Produkte, die Nutzer verstehen.',
      h2b: 'Teams, die schneller liefern.',
      lede: 'Was sich für die Teams verändert hat, mit denen wir gearbeitet haben.',
      items: [
        { placeholder: true, client: '[Kunde]', industry: '[Branche]', challenge: '[Wo neue Nutzer vorher abgesprungen sind.]', work: '[Was wir gemacht haben: Audit, Onboarding, Designsystem, Übergabe.]', result: '[Das Ergebnis, mit einer Zahl, die der Kunde freigibt.]', quote: '[Ein kurzes Zitat des Kunden.]', who: '[Name, Rolle, Unternehmen]' },
        { placeholder: true, client: '[Kunde]', industry: '[Branche]', challenge: '[Wo neue Nutzer vorher abgesprungen sind.]', work: '[Was wir gemacht haben.]', result: '[Das Ergebnis, mit einer Zahl, die der Kunde freigibt.]', quote: '[Ein kurzes Zitat des Kunden.]', who: '[Name, Rolle, Unternehmen]' },
        { placeholder: true, client: '[Kunde]', industry: '[Branche]', challenge: '[Wo neue Nutzer vorher abgesprungen sind.]', work: '[Was wir gemacht haben.]', result: '[Das Ergebnis, mit einer Zahl, die der Kunde freigibt.]', quote: '[Ein kurzes Zitat des Kunden.]', who: '[Name, Rolle, Unternehmen]' },
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
