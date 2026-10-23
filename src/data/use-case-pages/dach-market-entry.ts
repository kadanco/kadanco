// src/data/use-case-pages/dach-market-entry.ts
// Content: design/261021_Kadanco_Use_Cases/use-case-dach-market-entry.html,
// plus three sections kept from the previous page (route comparison, native
// operator, first 90 days), owner decision 2026-10-21. "X, not Y" lines from
// both sources were rewritten to meet the voice rules (masterplan D29).
import type { UseCasePage } from './types';

export const dachMarketEntry: UseCasePage = {
  id: 'dach-market-entry',
  dept: 'marketing',
  icon: 'pin',
  stepsLayout: 'map',
  stepIcons: ['pin', 'posts', 'growth'],
  en: {
    meta: {
      title: 'DACH Market Entry: A German-Language Presence and Pipeline, Run End to End | Kadanco',
      description: 'Enter the DACH market without hiring a local team. Native German positioning, content and pipeline, run end to end by two senior operators.',
    },
    crumb: 'DACH market entry',
    dept: 'Marketing · Sales · Product',
    h1a: 'Enter The DACH Market',
    h1b: 'Without Hiring A Local Team.',
    lead: 'A German-language presence that grows every week, your existing assets finally working in the market, and a pipeline your sales team does not have to run themselves. We own it end to end.',
    ctaPrimary: 'Get A Free Audit',
    ctaSecondary: 'Book A Strategy Call',
    situation: {
      eyebrow: 'The situation',
      h2a: 'You Have A Product That Sells At Home.',
      h2b: 'Germany Is A Different Market.',
      lede: 'Translating the website is only the start. DACH buyers expect native German, local proof and a sales process that fits how they buy.',
      problem: 'Your assets are in English, your pipeline depends on the founder, and every attempt to reach German buyers stalls because nobody owns it day to day. Hiring a local team takes months you do not have.',
      solve: 'We build and run your German-language presence ourselves: positioning, website, content and outbound, all in native German, so the market gets stronger every week without adding headcount.',
    },
    comparison: {
      eyebrow: 'Why DACH entry stalls',
      h2a: 'Going In Is Easy.',
      h2b: 'Landing Is Hard.',
      lead: 'Most B2B companies enter DACH one of these ways, and most leak in the same places: in German, in execution, or in who owns the pipeline.',
      cols: ['In German', 'Execution', 'Ownership'],
      solution: 'Solution',
      rows: [
        { route: 'Run it in English', why: 'Cheap and fast, but German buyers quietly pick the local vendor.', marks: ['gap', 'part', 'gap'] },
        { route: 'Translation agency', why: 'You get words without a presence or a pipeline anyone owns.', marks: ['part', 'gap', 'gap'] },
        { route: 'German marketing hire', why: 'In-language and experienced, but slow to ramp and one person deep.', marks: ['has', 'part', 'part'] },
        { route: 'Freelancers', why: 'Each runs a slice; positioning, content and follow-up never add up.', marks: ['part', 'part', 'gap'] },
      ],
      kad: { route: 'KADANCO', why: 'Native German, run end to end and owned by the two operators who do the work.' },
      legend: { has: 'Covered', part: 'Partial', gap: 'Gap' },
      cap: 'No single route covers all three. That is exactly what we run.',
    },
    inside: {
      eyebrow: "What's inside",
      h2: 'Three Moves. Run End To End.',
      lede: 'Each phase is owned and shipped by the operators who scoped it. No briefs handed off.',
      steps: [
        { label: '01 · Position', title: 'Native German positioning', body: 'We rewrite the story for German buyers from scratch. The message, offer and proof match how the DACH market actually evaluates and buys.' },
        { label: '02 · Publish', title: 'A presence that grows weekly', body: 'Website, landing pages and a steady content schedule in German, shipped by us, so your existing assets finally work in the market instead of sitting unused.' },
        { label: '03 · Pipeline', title: "Pipeline your team doesn't run", body: 'Targeted outbound and inbound feed a measurable pipeline, with meetings booked into a held calendar, so your sales team closes instead of prospecting cold.' },
      ],
    },
    outcomes: {
      eyebrow: 'What you get',
      h2: 'A Market That Gets Stronger Every Week.',
      items: [
        { big: '2 weeks', text: 'First German execution live after kickoff, with no months of hiring.' },
        { big: 'End to end', text: 'Positioning, site, content and outbound from one team.' },
        { big: 'Off the founder', text: 'A pipeline your sales team does not have to run.' },
      ],
    },
    operator: {
      eyebrow: 'Why Kadanco for DACH',
      h2a: 'A Native Operator.',
      h2b: 'Working In German From Day One.',
      body: 'Maria is a native German product and brand operator who has built for German companies. Karan runs growth and go-to-market. The two of them own your DACH presence and run it themselves: no junior hand-offs, no agency managing freelancers. You get the actual work, in German, from the people who own it.',
      link: 'Meet the operators',
    },
    timeline: {
      eyebrow: 'The first 90 days',
      h2a: 'Live Within Two Weeks.',
      h2b: 'Then It Keeps Building.',
      steps: [
        { n: '01', title: 'Map', body: 'We learn the German segment you are entering, your ICP and your numbers, then agree the few moves that open the market fastest.' },
        { n: '02', title: 'Build', body: 'We build the German-language presence ourselves: positioning, the content engine, LinkedIn and the first events. No briefs handed to a translator.' },
        { n: '03', title: 'Ship', amp: '& improve', body: 'First execution live within two weeks. Then we keep shipping into the market, and the presence gets stronger every month.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Questions, Answered.',
      items: [
        { q: 'Is the content real native German?', a: 'Yes. We write and run everything in native German, built for how DACH buyers evaluate. No machine translation.' },
        { q: 'Do we need a local entity first?', a: 'No. We start with positioning, presence and pipeline. A local entity is not a prerequisite to begin.' },
        { q: 'How fast do we see pipeline?', a: 'First execution is live within two weeks of kickoff, then we run in quarterly cycles that build on each other.' },
        { q: 'Who does the work?', a: 'The two operators who scope your engagement are the two who do it. No account layer, no junior delivery.' },
      ],
    },
    cta: {
      h2a: "Tell Us Where You're Trying To",
      h2b: 'Grow In DACH.',
      lead: "We'll show you the few moves that matter most for the German market, then make them.",
      button: 'Get A Free Audit',
    },
  },
  de: {
    meta: {
      title: 'DACH-Markteintritt: Deutschsprachige Präsenz und Pipeline, End-to-End betrieben | Kadanco',
      description: 'Treten Sie in den DACH-Markt ein, ohne ein lokales Team aufzubauen. Positionierung, Content und Pipeline auf Deutsch, von zwei erfahrenen Machern umgesetzt.',
    },
    crumb: 'DACH-Markteintritt',
    dept: 'Marketing · Vertrieb · Produkt',
    h1a: 'Treten Sie in den DACH-Markt ein,',
    h1b: 'ohne ein lokales Team aufzubauen.',
    lead: 'Eine deutschsprachige Präsenz, die jede Woche wächst, Ihre bestehenden Inhalte, die endlich im Markt wirken, und eine Pipeline, die Ihr Vertrieb nicht selbst betreiben muss. Wir verantworten alles von Anfang bis Ende.',
    ctaPrimary: 'Kostenloses Audit anfordern',
    ctaSecondary: 'Strategiegespräch buchen',
    situation: {
      eyebrow: 'Die Ausgangslage',
      h2a: 'Ihr Produkt verkauft sich im Heimatmarkt.',
      h2b: 'Deutschland ist ein anderer Markt.',
      lede: 'Die Website zu übersetzen ist nur der Anfang. Käufer in DACH erwarten muttersprachliches Deutsch, lokale Referenzen und einen Vertriebsprozess, der zu ihrer Art zu kaufen passt.',
      problem: 'Ihre Inhalte sind auf Englisch, Ihre Pipeline hängt am Gründer, und jeder Versuch, deutsche Käufer zu erreichen, stockt, weil sich niemand täglich darum kümmert. Ein lokales Team aufzubauen dauert Monate, die Sie nicht haben.',
      solve: 'Wir bauen und betreiben Ihre deutschsprachige Präsenz selbst: Positionierung, Website, Content und Outbound, alles in muttersprachlichem Deutsch, damit der Markt jede Woche stärker wird, ohne zusätzliches Personal.',
    },
    comparison: {
      eyebrow: 'Warum der DACH-Eintritt stockt',
      h2a: 'Hineingehen ist leicht.',
      h2b: 'Ankommen ist schwer.',
      lead: 'Die meisten B2B-Unternehmen gehen auf eine dieser Arten nach DACH, und die meisten verlieren an denselben Stellen: bei der Sprache, bei der Umsetzung oder bei der Verantwortung für die Pipeline.',
      cols: ['Auf Deutsch', 'Umsetzung', 'Verantwortung'],
      solution: 'Lösung',
      rows: [
        { route: 'Auf Englisch betreiben', why: 'Günstig und schnell, aber deutsche Käufer wählen still den lokalen Anbieter.', marks: ['gap', 'part', 'gap'] },
        { route: 'Übersetzungsagentur', why: 'Sie bekommen Wörter, aber keine Präsenz und keine Pipeline, die jemand verantwortet.', marks: ['part', 'gap', 'gap'] },
        { route: 'Deutsche Marketing-Einstellung', why: 'Sprachlich und fachlich stark, aber lange Einarbeitung und nur eine Person tief.', marks: ['has', 'part', 'part'] },
        { route: 'Freelancer', why: 'Jeder macht einen Teil, Positionierung, Content und Follow-up ergeben nie ein Ganzes.', marks: ['part', 'part', 'gap'] },
      ],
      kad: { route: 'KADANCO', why: 'Muttersprachlich, von Anfang bis Ende umgesetzt und verantwortet von den beiden Machern, die die Arbeit machen.' },
      legend: { has: 'Abgedeckt', part: 'Teilweise', gap: 'Lücke' },
      cap: 'Kein einzelner Weg deckt alle drei ab. Genau das betreiben wir.',
    },
    inside: {
      eyebrow: 'Was dazugehört',
      h2: 'Drei Schritte. Von Anfang bis Ende umgesetzt.',
      lede: 'Jede Phase wird von den Machern verantwortet und geliefert, die sie geplant haben. Keine Briefings, die weitergereicht werden.',
      steps: [
        { label: '01 · Positionieren', title: 'Muttersprachliche Positionierung', body: 'Wir schreiben Ihre Geschichte für deutsche Käufer neu. Botschaft, Angebot und Referenzen passen dazu, wie der DACH-Markt tatsächlich bewertet und kauft.' },
        { label: '02 · Veröffentlichen', title: 'Eine Präsenz, die jede Woche wächst', body: 'Website, Landingpages und ein verlässlicher Content-Plan auf Deutsch, von uns umgesetzt, damit Ihre bestehenden Inhalte endlich im Markt wirken, statt ungenutzt zu bleiben.' },
        { label: '03 · Pipeline', title: 'Eine Pipeline, die Ihr Team nicht betreiben muss', body: 'Gezieltes Outbound und Inbound füllen eine messbare Pipeline, mit Terminen in einem reservierten Kalender, damit Ihr Vertrieb abschließt, statt kalt zu akquirieren.' },
      ],
    },
    outcomes: {
      eyebrow: 'Was Sie bekommen',
      h2: 'Ein Markt, der jede Woche stärker wird.',
      items: [
        { big: '2 Wochen', text: 'Die erste Umsetzung auf Deutsch ist nach dem Start live, ohne monatelange Personalsuche.' },
        { big: 'Aus einer Hand', text: 'Positionierung, Website, Content und Outbound von einem Team.' },
        { big: 'Ohne den Gründer', text: 'Eine Pipeline, die Ihr Vertrieb nicht selbst betreiben muss.' },
      ],
    },
    operator: {
      eyebrow: 'Warum Kadanco für DACH',
      h2a: 'Muttersprachliche Umsetzung.',
      h2b: 'Auf Deutsch vom ersten Tag an.',
      body: 'Maria ist deutsche Muttersprachlerin und hat als Produkt- und Markenverantwortliche für deutsche Unternehmen gearbeitet. Karan verantwortet Growth und Go-to-Market. Die beiden übernehmen Ihre DACH-Präsenz und betreiben sie selbst: keine Übergabe an Junioren, keine Agentur, die Freelancer koordiniert. Sie bekommen die Arbeit selbst, auf Deutsch, von den Menschen, die sie verantworten.',
      link: 'Die Macher kennenlernen',
    },
    timeline: {
      eyebrow: 'Die ersten 90 Tage',
      h2a: 'Live innerhalb von zwei Wochen.',
      h2b: 'Danach wächst es weiter.',
      steps: [
        { n: '01', title: 'Verstehen', body: 'Wir lernen das deutsche Segment kennen, in das Sie eintreten, dazu Ihr ICP und Ihre Zahlen, und einigen uns auf die wenigen Hebel, die den Markt am schnellsten öffnen.' },
        { n: '02', title: 'Aufbauen', body: 'Wir bauen die deutschsprachige Präsenz selbst: Positionierung, Content-Produktion, LinkedIn und die ersten Events. Keine Briefings an eine Übersetzungsagentur.' },
        { n: '03', title: 'Liefern', amp: '& verbessern', body: 'Die erste Umsetzung ist innerhalb von zwei Wochen live. Danach liefern wir weiter in den Markt, und die Präsenz wird jeden Monat stärker.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Fragen, beantwortet.',
      items: [
        { q: 'Sind die Inhalte wirklich muttersprachliches Deutsch?', a: 'Ja. Wir schreiben und betreiben alles in muttersprachlichem Deutsch, passend dazu, wie Käufer in DACH bewerten. Keine maschinelle Übersetzung.' },
        { q: 'Brauchen wir zuerst eine lokale Gesellschaft?', a: 'Nein. Wir beginnen mit Positionierung, Präsenz und Pipeline. Eine lokale Gesellschaft ist keine Voraussetzung für den Start.' },
        { q: 'Wie schnell sehen wir Pipeline?', a: 'Die erste Umsetzung ist innerhalb von zwei Wochen nach dem Start live. Danach arbeiten wir in Quartalszyklen, die aufeinander aufbauen.' },
        { q: 'Wer macht die Arbeit?', a: 'Die beiden Macher, die Ihr Mandat planen, sind die beiden, die es umsetzen. Keine Account-Ebene, keine Junior-Umsetzung.' },
      ],
    },
    cta: {
      h2a: 'Sagen Sie uns, wo Sie',
      h2b: 'in DACH wachsen wollen.',
      lead: 'Wir zeigen Ihnen die wenigen Hebel, die für den deutschen Markt am wichtigsten sind, und setzen sie dann um.',
      button: 'Kostenloses Audit anfordern',
    },
  },
};
