// src/data/use-case-pages/account-based-marketing.ts
// Account-Based Marketing. No design file exists for this use case; content
// drafted 2026-10-22 for owner review, in the same structure as the other
// Sales pages: pick the accounts, map the buying group, run campaigns and
// tailored pages, then outreach and handoff to sales.
import type { UseCasePage } from './types';

export const accountBasedMarketing: UseCasePage = {
  id: 'account-based-marketing',
  dept: 'sales',
  icon: 'network',
  stepsLayout: 'org',
  stepIcons: ['score', 'network', 'posts', 'calendar'],
  en: {
    meta: {
      title: 'Account-Based Marketing: Campaigns and Outreach Aimed at Your Target Accounts | Kadanco',
      description: 'Account-based marketing (ABM) run end to end: target account selection, buying group mapping, LinkedIn ads, tailored landing pages and coordinated outreach until meetings are booked. Reported by account.',
    },
    crumb: 'Account-based marketing',
    dept: 'Sales · Marketing · Product',
    h1a: 'Fewer Accounts.',
    h1b: 'More Of The Ones You Want.',
    lead: 'We pick the accounts you most want to win, map who decides in each one, and run ads, tailored pages and outreach to every person in the buying group until meetings are booked. Reported by account, so you see who is moving.',
    ctaPrimary: 'Get A Free ABM Audit',
    ctaSecondary: 'Book A Strategy Call',
    situation: {
      eyebrow: 'The situation',
      h2a: 'Your Campaigns Bring In Leads.',
      h2b: 'Just Not From The Accounts That Matter.',
      lede: 'Broad campaigns fill the CRM with contacts that never fit. Meanwhile the twenty companies that would change your year have never heard of you.',
      problem: 'Marketing chases volume, sales chases a short list, and the two never meet. Big deals involve six to ten people, and only one of them ever hears from you. Nobody can say which target accounts are warming up.',
      solve: 'We agree the target accounts with sales, map the buying group in each, and run coordinated ads, content, tailored pages and outreach to all of them, so whole accounts warm up together and sales gets meetings with the people who decide.',
    },
    inside: {
      eyebrow: "What's inside",
      h2: 'Four Steps From Target List To Booked Meetings.',
      lede: 'Marketing and sales work run as one, by the operators who scoped it.',
      steps: [
        { label: '01 · Account selection', title: 'The accounts worth winning', body: 'We build the target account list with you from fit, deal size and buying signals, and split it into tiers, so effort goes where the revenue is.', points: ['Scoring by fit and deal size', 'Buying signals', 'Account tiers'] },
        { label: '02 · Buying group', title: 'Everyone who decides', body: 'We map the decision makers, users and blockers in each account and write messaging for each role, so every person hears why it matters to them.', points: ['Decision makers, users and blockers', 'Messaging by role', 'Verified contact data'] },
        { label: '03 · Campaigns', title: 'Seen before the first call', body: 'LinkedIn ads aimed at the account list, content for each stage, and landing pages tailored to the top accounts or their industry, so the buying group knows you before sales reaches out.', points: ['LinkedIn ads to the account list', 'Content for each stage', 'Tailored landing pages'] },
        { label: '04 · Outreach & handoff', title: 'Meetings with the right people', body: 'Coordinated outreach by email, LinkedIn and phone, timed with the campaigns, and a clear handoff to sales with the context of every touch.', points: ['Email, LinkedIn and phone', 'Timed with the campaigns', 'Handoff with full context'] },
      ],
    },
    also: {
      eyebrow: 'Also included',
      h2: 'So You See Which Accounts Are Moving.',
      items: [
        { title: 'Reporting by account', body: 'Engagement, meetings and pipeline per target account, so sales knows where to push and marketing knows what works.' },
        { title: 'Events and dinners', body: 'Invitations to the events and roundtables where your target accounts already go, as part of the same plan.' },
        { title: 'Sales material per account', body: 'One-pagers, demos and business cases tailored to the top accounts, so the conversation continues where the campaign left off.' },
      ],
      tagsHead: 'What we run',
      tags: ['Target account list', 'Account tiers', 'Buying group mapping', 'Intent signals', 'Messaging by role', 'LinkedIn ads', 'Tailored landing pages', 'Personalised outreach', 'Direct mail', 'Account reporting', 'CRM integration'],
    },
    outcomes: {
      eyebrow: 'What you get',
      h2: 'Pipeline From The Accounts You Chose.',
      items: [
        { big: 'Your list', text: 'Marketing and sales working on the same target accounts.' },
        { big: 'Whole buying group', text: 'Every decision maker in an account hears from you, in their own terms.' },
        { big: 'By account', text: 'Reporting that shows which accounts are warming up and which have booked meetings.' },
      ],
    },
    operator: {
      eyebrow: 'Who does the work',
      h2a: 'Marketing And Sales',
      h2b: 'From The Same Two People.',
      body: 'Karan runs the account selection, the messaging and the outreach. Maria designs the tailored pages and the sales material, so every account sees a product story that fits. The two of them do the work themselves, so the campaigns and the outreach never drift apart.',
      link: 'Meet the operators',
    },
    timeline: {
      eyebrow: 'The first 90 days',
      h2a: 'Start With The First Tier.',
      h2b: 'Then Widen The List.',
      steps: [
        { n: '01', title: 'Map', body: 'We agree the target accounts and tiers with sales and map the buying group in the first tier.' },
        { n: '02', title: 'Build', body: 'We write the messaging by role, set up the ads and the tailored pages, and connect reporting to your CRM.' },
        { n: '03', title: 'Ship', amp: '& improve', body: 'Work starts within two weeks. Campaigns and outreach run together, and each month we move budget to the accounts that respond.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Questions, Answered.',
      items: [
        { q: 'How many accounts should we target?', a: 'It depends on deal size and team capacity. Most programmes start with a focused first tier and widen once the process works.' },
        { q: 'Do we need special ABM software?', a: 'Not to start. We work with LinkedIn, your CRM and the tools you have, and recommend more only when the programme needs it.' },
        { q: 'How is this different from outbound?', a: 'Outbound reaches individuals. ABM reaches the whole buying group of a chosen account with ads, content and outreach together. Many clients run both.' },
        { q: 'How do you measure success?', a: 'By account: engagement from the buying group, meetings booked and pipeline created, reported in your CRM.' },
        { q: 'Can sales and marketing both use it?', a: 'That is the point. Both work from the same list, the same messages and the same reporting.' },
        { q: 'Does this work in Germany?', a: 'Yes. We run ABM in English and native German, with messaging and pages built for DACH buyers.' },
      ],
    },
    cta: {
      h2a: 'Send Us The Accounts',
      h2b: 'You Most Want To Win.',
      lead: "We'll show you who decides in each one and how to reach them, then run the campaigns and outreach until meetings are booked.",
      button: 'Get A Free ABM Audit',
    },
  },
  de: {
    meta: {
      title: 'Account-Based Marketing: Kampagnen und Ansprache für Ihre Zielaccounts | Kadanco',
      description: 'Account-Based Marketing (ABM) End-to-End: Auswahl der Zielaccounts, Buying Center, LinkedIn-Anzeigen, eigene Landingpages und abgestimmte Ansprache, bis Termine stehen. Berichtet pro Account.',
    },
    crumb: 'Account-Based Marketing',
    dept: 'Vertrieb · Marketing · Produkt',
    h1a: 'Weniger Accounts.',
    h1b: 'Mehr von denen, die Sie wollen.',
    lead: 'Wir wählen die Accounts, die Sie am meisten gewinnen wollen, ermitteln, wer in jedem entscheidet, und spielen Anzeigen, eigene Seiten und Ansprache an jede Person im Buying Center aus, bis Termine stehen. Berichtet pro Account, damit Sie sehen, wer sich bewegt.',
    ctaPrimary: 'Kostenloses ABM-Audit',
    ctaSecondary: 'Strategiegespräch buchen',
    situation: {
      eyebrow: 'Die Ausgangslage',
      h2a: 'Ihre Kampagnen bringen Leads.',
      h2b: 'Nur nicht von den Accounts, die zählen.',
      lede: 'Breite Kampagnen füllen das CRM mit Kontakten, die nie passen. Währenddessen haben die zwanzig Unternehmen, die Ihr Jahr verändern würden, noch nie von Ihnen gehört.',
      problem: 'Das Marketing jagt Volumen, der Vertrieb eine kurze Liste, und beide treffen sich nie. An großen Deals sind sechs bis zehn Personen beteiligt, und nur eine hört je von Ihnen. Niemand kann sagen, welche Zielaccounts sich erwärmen.',
      solve: 'Wir legen die Zielaccounts mit dem Vertrieb fest, bilden das Buying Center in jedem ab und spielen abgestimmte Anzeigen, Inhalte, eigene Seiten und Ansprache an alle aus. So erwärmen sich ganze Accounts, und der Vertrieb bekommt Termine mit den Menschen, die entscheiden.',
    },
    inside: {
      eyebrow: 'Was dazugehört',
      h2: 'Vier Schritte von der Zielliste zum gebuchten Termin.',
      lede: 'Marketing- und Vertriebsarbeit aus einem Guss, umgesetzt von den Machern, die sie geplant haben.',
      steps: [
        { label: '01 · Account-Auswahl', title: 'Die Accounts, die sich lohnen', body: 'Wir erstellen mit Ihnen die Zielaccount-Liste nach Fit, Dealgröße und Kaufsignalen und teilen sie in Stufen, damit der Aufwand dorthin geht, wo der Umsatz ist.', points: ['Bewertung nach Fit und Dealgröße', 'Kaufsignale', 'Account-Stufen'] },
        { label: '02 · Buying Center', title: 'Alle, die entscheiden', body: 'Wir erfassen Entscheider, Nutzer und Bremser in jedem Account und schreiben Botschaften für jede Rolle, damit jede Person hört, warum es für sie zählt.', points: ['Entscheider, Nutzer und Bremser', 'Botschaften je Rolle', 'Geprüfte Kontaktdaten'] },
        { label: '03 · Kampagnen', title: 'Gesehen vor dem ersten Gespräch', body: 'LinkedIn-Anzeigen auf die Account-Liste, Inhalte für jede Phase und Landingpages für die Top-Accounts oder ihre Branche, damit das Buying Center Sie kennt, bevor der Vertrieb sich meldet.', points: ['LinkedIn-Anzeigen auf die Account-Liste', 'Inhalte für jede Phase', 'Eigene Landingpages'] },
        { label: '04 · Ansprache & Übergabe', title: 'Termine mit den richtigen Menschen', body: 'Abgestimmte Ansprache per E-Mail, LinkedIn und Telefon im Takt der Kampagnen und eine klare Übergabe an den Vertrieb mit dem Kontext jedes Kontakts.', points: ['E-Mail, LinkedIn und Telefon', 'Im Takt der Kampagnen', 'Übergabe mit vollem Kontext'] },
      ],
    },
    also: {
      eyebrow: 'Ebenfalls enthalten',
      h2: 'Damit Sie sehen, welche Accounts sich bewegen.',
      items: [
        { title: 'Reporting pro Account', body: 'Interaktion, Termine und Pipeline je Zielaccount, damit der Vertrieb weiß, wo er nachlegt, und das Marketing, was wirkt.' },
        { title: 'Events und Dinners', body: 'Einladungen zu den Events und Roundtables, auf denen Ihre Zielaccounts ohnehin sind, als Teil desselben Plans.' },
        { title: 'Unterlagen pro Account', body: 'One-Pager, Demos und Business Cases für die Top-Accounts, damit das Gespräch dort weitergeht, wo die Kampagne aufgehört hat.' },
      ],
      tagsHead: 'Was wir betreiben',
      tags: ['Zielaccount-Liste', 'Account-Stufen', 'Buying Center', 'Kaufsignale', 'Botschaften je Rolle', 'LinkedIn-Anzeigen', 'Eigene Landingpages', 'Persönliche Ansprache', 'Direct Mail', 'Account-Reporting', 'CRM-Anbindung'],
    },
    outcomes: {
      eyebrow: 'Was Sie bekommen',
      h2: 'Pipeline aus den Accounts, die Sie gewählt haben.',
      items: [
        { big: 'Ihre Liste', text: 'Marketing und Vertrieb arbeiten an denselben Zielaccounts.' },
        { big: 'Das ganze Buying Center', text: 'Jeder Entscheider in einem Account hört von Ihnen, in seiner Sprache.' },
        { big: 'Pro Account', text: 'Ein Reporting, das zeigt, welche Accounts sich erwärmen und welche Termine gebucht haben.' },
      ],
    },
    operator: {
      eyebrow: 'Wer die Arbeit macht',
      h2a: 'Marketing und Vertrieb',
      h2b: 'von denselben zwei Menschen.',
      body: 'Karan verantwortet Account-Auswahl, Botschaften und Ansprache. Maria gestaltet die eigenen Seiten und Vertriebsunterlagen, damit jeder Account eine passende Produktgeschichte sieht. Die beiden machen die Arbeit selbst, damit Kampagnen und Ansprache nie auseinanderlaufen.',
      link: 'Die Macher kennenlernen',
    },
    timeline: {
      eyebrow: 'Die ersten 90 Tage',
      h2a: 'Mit der ersten Stufe beginnen.',
      h2b: 'Dann die Liste erweitern.',
      steps: [
        { n: '01', title: 'Verstehen', body: 'Wir legen Zielaccounts und Stufen mit dem Vertrieb fest und bilden das Buying Center der ersten Stufe ab.' },
        { n: '02', title: 'Aufbauen', body: 'Wir schreiben Botschaften je Rolle, richten Anzeigen und eigene Seiten ein und verbinden das Reporting mit Ihrem CRM.' },
        { n: '03', title: 'Liefern', amp: '& verbessern', body: 'Die Arbeit startet innerhalb von zwei Wochen. Kampagnen und Ansprache laufen zusammen, und jeden Monat verschieben wir Budget zu den Accounts, die reagieren.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Fragen, beantwortet.',
      items: [
        { q: 'Wie viele Accounts sollten wir ansprechen?', a: 'Das hängt von Dealgröße und Teamkapazität ab. Die meisten Programme beginnen mit einer fokussierten ersten Stufe und wachsen, sobald der Prozess funktioniert.' },
        { q: 'Brauchen wir spezielle ABM-Software?', a: 'Für den Start nicht. Wir arbeiten mit LinkedIn, Ihrem CRM und Ihren Tools und empfehlen mehr nur, wenn das Programm es braucht.' },
        { q: 'Was ist der Unterschied zu Outbound?', a: 'Outbound erreicht Einzelne. ABM erreicht das ganze Buying Center eines gewählten Accounts mit Anzeigen, Inhalten und Ansprache zugleich. Viele Kunden machen beides.' },
        { q: 'Wie messen Sie den Erfolg?', a: 'Pro Account: Interaktion des Buying Centers, gebuchte Termine und entstandene Pipeline, berichtet in Ihrem CRM.' },
        { q: 'Können Vertrieb und Marketing beide damit arbeiten?', a: 'Genau darum geht es. Beide arbeiten mit derselben Liste, denselben Botschaften und demselben Reporting.' },
        { q: 'Funktioniert das in Deutschland?', a: 'Ja. Wir betreiben ABM auf Englisch und in muttersprachlichem Deutsch, mit Botschaften und Seiten für DACH-Käufer.' },
      ],
    },
    cta: {
      h2a: 'Schicken Sie uns die Accounts,',
      h2b: 'die Sie am meisten gewinnen wollen.',
      lead: 'Wir zeigen Ihnen, wer in jedem entscheidet und wie Sie ihn erreichen, und betreiben dann Kampagnen und Ansprache, bis Termine stehen.',
      button: 'Kostenloses ABM-Audit',
    },
  },
};
