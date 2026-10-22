// src/data/use-case-pages/event-lead-generation.ts
// Event Lead Generation (formerly Event pipeline). Combines
// design/261021_Kadanco_Use_Cases/use-case-event-pipeline.html (scoring,
// pre-event ABM, ROI report in 30 days) with the previous page (why events
// don't pay, dinners and roundtables, same-day follow-up, the runway before
// and after the event), 2026-10-22. "X, not Y" lines rewritten (masterplan D29).
import type { UseCasePage } from './types';

export const eventLeadGeneration: UseCasePage = {
  id: 'event-lead-generation',
  dept: 'sales',
  icon: 'stage',
  stepsLayout: 'bento',
  stepIcons: ['score', 'network', 'table', 'report'],
  en: {
    meta: {
      title: 'Event Lead Generation: Meetings Booked Before the Event, ROI Within 30 Days | Kadanco',
      description: 'Event lead generation for trade fairs and conferences: events scored by ICP fit, pre-event ABM, hosted dinners, same-day follow-up and a CFO-grade ROI report within 30 days. Run end to end by two senior operators.',
    },
    crumb: 'Event lead generation',
    dept: 'Sales · Marketing',
    h1a: 'Most Event Budgets Buy A Booth.',
    h1b: 'Yours Should Buy Meetings.',
    lead: 'We pick events on the numbers, warm the room for four weeks before anyone travels, book meetings into a held calendar and follow up the same day. Within 30 days you get an ROI report your CFO can read.',
    ctaPrimary: 'Get A Free Event Audit',
    ctaSecondary: 'Book A Strategy Call',
    situation: {
      eyebrow: 'The situation',
      h2a: 'You Spent On Events.',
      h2b: 'Nobody Could Prove They Worked.',
      lede: 'Booths, badges and travel went out the door. The pipeline they created was a guess, and finance noticed.',
      problem: 'Events chosen by gut feeling, no outreach before the doors opened, and no way to tie a booked meeting back to the spend. ROI was a story that changed with whoever told it.',
      solve: 'We score which events are worth it, run targeted campaigns so the right people arrive knowing you, book meetings into a held calendar, follow up the same day, and report ROI within 30 days with every meeting tagged.',
    },
    why: {
      eyebrow: "Why events don't pay",
      h2a: 'The Spend Is Committed.',
      h2b: 'The Pipeline Is Not.',
      items: [
        { title: 'The event was picked on feel', body: 'Chosen because a competitor sponsors it or someone went last year, without checking whether your buyers are actually in the room.' },
        { title: 'Nobody knew you were coming', body: 'The team lands with an empty calendar and hopes for traffic, so the best conversations happen by accident.' },
        { title: 'The follow-up goes cold', body: 'Badges sit in a spreadsheet for two weeks. By the time anyone reaches out, the room has forgotten the conversation.' },
      ],
    },
    inside: {
      eyebrow: "What's inside",
      h2: 'From Booth Spend To Measured Pipeline.',
      lede: 'The two days on the floor are the smallest part. We run the whole motion around them, before, during and after.',
      steps: [
        { label: '01 · Event scoring', title: 'Only the events worth it', body: 'Every event on your list scored by ICP overlap, persona density, cost and expected pipeline, so the budget goes where your buyers are and the rest gets cut.' },
        { label: '02 · Pre-event ABM', title: 'Attendees who already know you', body: 'LinkedIn and Meta campaigns aimed at the attendee list from four weeks out, plus direct outreach with calendar holds, so the room recognises you before anyone walks in.' },
        { label: '03 · Dinners & roundtables', title: 'Where real conversations happen', body: 'Hosted formats organised end to end: venue, invitations, the guest list and the run of show, so your best prospects spend an evening with you.' },
        { label: '04 · Follow-up & ROI', title: 'A number finance trusts', body: 'Enrichment, CRM sync and sequenced follow-up on the same day, every meeting tagged, and an ROI report within 30 days that ties pipeline back to the spend.' },
      ],
    },
    outcomes: {
      eyebrow: 'What you get',
      h2: 'Events Your CFO Signs Off On.',
      items: [
        { big: 'Pre-booked', text: 'A held calendar your team walks into, with meetings set before the doors open.' },
        { big: 'Same day', text: 'Follow-up while the conversation is fresh, synced to your CRM.' },
        { big: '30 days', text: 'An ROI report with every meeting traced to pipeline, so next year\'s budget is a decision.' },
      ],
    },
    timeline: {
      eyebrow: 'The runway',
      h2a: 'The Work Happens Before',
      h2b: 'And After The Event.',
      steps: [
        { n: '01', title: 'Score', body: 'We score the events you are considering and agree the few worth the spend, with a target account list for each.' },
        { n: '02', title: 'Warm', amp: '& book', body: 'From four weeks out, campaigns and outreach to the attendee list, invitations to dinners, and meetings booked into a held calendar.' },
        { n: '03', title: 'Follow up', amp: '& report', body: 'Same-day follow-up after every conversation, then an ROI report within 30 days of the event.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Questions, Answered.',
      items: [
        { q: 'Do you pick the events for us?', a: 'We score the options against buyer fit and expected pipeline and recommend, so the decision is backed by numbers.' },
        { q: 'What is pre-event ABM?', a: 'Targeted ads and outreach to the accounts attending, so the right people arrive already aware of you and open to a meeting.' },
        { q: 'How is ROI calculated?', a: 'We tag every booked meeting to the event and tie it to pipeline and spend, in a report finance can stand behind.' },
        { q: 'Do you staff the booth?', a: 'We run the pipeline work around the event. On-site support can be scoped if you need it.' },
        { q: 'Do you work with trade fairs in Germany?', a: 'Yes. We run event programmes in English and native German, including the big DACH trade fairs.' },
        { q: 'We have no events planned. Is this for us?', a: 'Yes. We can find the right events for your buyers, or host your own dinners and roundtables.' },
      ],
    },
    cta: {
      h2a: 'Which Events Are',
      h2b: 'Already Booked?',
      lead: "Send us the list. We'll score them, tell you which ones are worth the spend, then run the work around them.",
      button: 'Get A Free Event Audit',
    },
  },
  de: {
    meta: {
      title: 'Event-Leadgenerierung: Termine vor dem Event, ROI in 30 Tagen | Kadanco',
      description: 'Leadgenerierung auf Messen und Konferenzen: Events bewertet nach ICP-Fit, ABM vor dem Event, Dinners, Follow-up am selben Tag und ein ROI-Report innerhalb von 30 Tagen. End-to-End umgesetzt von zwei erfahrenen Machern.',
    },
    crumb: 'Event-Leadgenerierung',
    dept: 'Vertrieb · Marketing',
    h1a: 'Die meisten Event-Budgets kaufen einen Stand.',
    h1b: 'Ihres sollte Termine kaufen.',
    lead: 'Wir wählen Events nach Zahlen, wärmen den Raum vier Wochen vor der Anreise an, buchen Termine in einen reservierten Kalender und fassen am selben Tag nach. Innerhalb von 30 Tagen bekommen Sie einen ROI-Report, den Ihr CFO lesen kann.',
    ctaPrimary: 'Kostenloses Event-Audit',
    ctaSecondary: 'Strategiegespräch buchen',
    situation: {
      eyebrow: 'Die Ausgangslage',
      h2a: 'Sie haben in Events investiert.',
      h2b: 'Niemand konnte zeigen, ob es sich lohnt.',
      lede: 'Stand, Badges und Reisen haben Geld gekostet. Die Pipeline daraus war eine Schätzung, und das Controlling hat es gemerkt.',
      problem: 'Events nach Bauchgefühl gewählt, keine Ansprache vor Messebeginn und keine Möglichkeit, einen gebuchten Termin den Kosten zuzuordnen. Der ROI war eine Geschichte, die sich je nach Erzähler änderte.',
      solve: 'Wir bewerten, welche Events sich lohnen, schalten gezielte Kampagnen, damit die richtigen Leute Sie schon kennen, buchen Termine in einen reservierten Kalender, fassen am selben Tag nach und berichten den ROI innerhalb von 30 Tagen, jeder Termin zugeordnet.',
    },
    why: {
      eyebrow: 'Warum Events sich nicht rechnen',
      h2a: 'Das Budget ist fest.',
      h2b: 'Die Pipeline nicht.',
      items: [
        { title: 'Das Event wurde nach Gefühl gewählt', body: 'Ausgesucht, weil ein Wettbewerber dort sponsert oder jemand letztes Jahr da war, ohne zu prüfen, ob Ihre Käufer wirklich im Raum sind.' },
        { title: 'Niemand wusste, dass Sie kommen', body: 'Das Team landet mit leerem Kalender und hofft auf Laufkundschaft, die besten Gespräche entstehen zufällig.' },
        { title: 'Das Follow-up wird kalt', body: 'Die Kontakte liegen zwei Wochen in einer Tabelle. Bis sich jemand meldet, hat der Raum das Gespräch vergessen.' },
      ],
    },
    inside: {
      eyebrow: 'Was dazugehört',
      h2: 'Vom Standbudget zur messbaren Pipeline.',
      lede: 'Die zwei Tage auf der Messe sind der kleinste Teil. Wir betreiben die ganze Arbeit drumherum, davor, währenddessen und danach.',
      steps: [
        { label: '01 · Event-Bewertung', title: 'Nur die Events, die sich lohnen', body: 'Jedes Event auf Ihrer Liste bewertet nach ICP-Überschneidung, Personendichte, Kosten und erwarteter Pipeline, damit das Budget dorthin geht, wo Ihre Käufer sind, und der Rest gestrichen wird.' },
        { label: '02 · ABM vor dem Event', title: 'Teilnehmer, die Sie schon kennen', body: 'LinkedIn- und Meta-Kampagnen auf die Teilnehmerliste ab vier Wochen vorher, dazu direkte Ansprache mit Kalender-Slots, damit der Raum Sie kennt, bevor jemand hereinkommt.' },
        { label: '03 · Dinners & Roundtables', title: 'Wo echte Gespräche entstehen', body: 'Eigene Formate, komplett organisiert: Location, Einladungen, Gästeliste und Ablauf, damit Ihre besten Interessenten einen Abend mit Ihnen verbringen.' },
        { label: '04 · Follow-up & ROI', title: 'Eine Zahl, der das Controlling traut', body: 'Anreicherung, CRM-Sync und sequenziertes Follow-up am selben Tag, jeder Termin zugeordnet, und ein ROI-Report innerhalb von 30 Tagen, der die Pipeline mit den Kosten verbindet.' },
      ],
    },
    outcomes: {
      eyebrow: 'Was Sie bekommen',
      h2: 'Events, die Ihr CFO freigibt.',
      items: [
        { big: 'Vorgebucht', text: 'Ein reservierter Kalender, mit Terminen, die stehen, bevor die Türen öffnen.' },
        { big: 'Am selben Tag', text: 'Follow-up, solange das Gespräch frisch ist, synchronisiert mit Ihrem CRM.' },
        { big: '30 Tage', text: 'Ein ROI-Report, jeder Termin der Pipeline zugeordnet, damit das Budget im nächsten Jahr eine Entscheidung ist.' },
      ],
    },
    timeline: {
      eyebrow: 'Der Vorlauf',
      h2a: 'Die Arbeit passiert vor',
      h2b: 'und nach dem Event.',
      steps: [
        { n: '01', title: 'Bewerten', body: 'Wir bewerten die Events, die Sie erwägen, einigen uns auf die wenigen, die sich lohnen, und erstellen für jedes eine Zielaccount-Liste.' },
        { n: '02', title: 'Anwärmen', amp: '& buchen', body: 'Ab vier Wochen vorher Kampagnen und Ansprache auf die Teilnehmerliste, Einladungen zu Dinners und Termine im reservierten Kalender.' },
        { n: '03', title: 'Nachfassen', amp: '& berichten', body: 'Follow-up am selben Tag nach jedem Gespräch, dann ein ROI-Report innerhalb von 30 Tagen nach dem Event.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Fragen, beantwortet.',
      items: [
        { q: 'Wählen Sie die Events für uns aus?', a: 'Wir bewerten die Optionen nach Käufer-Fit und erwarteter Pipeline und geben eine Empfehlung, damit die Entscheidung auf Zahlen beruht.' },
        { q: 'Was ist ABM vor dem Event?', a: 'Gezielte Anzeigen und Ansprache für die teilnehmenden Accounts, damit die richtigen Leute Sie schon kennen und offen für einen Termin sind.' },
        { q: 'Wie wird der ROI berechnet?', a: 'Wir ordnen jeden gebuchten Termin dem Event zu und verbinden ihn mit Pipeline und Kosten, in einem Report, hinter dem das Controlling stehen kann.' },
        { q: 'Betreuen Sie den Stand?', a: 'Wir betreiben die Pipeline-Arbeit rund um das Event. Unterstützung vor Ort können wir bei Bedarf mit einplanen.' },
        { q: 'Arbeiten Sie auch auf Messen in Deutschland?', a: 'Ja. Wir betreiben Event-Programme auf Englisch und in muttersprachlichem Deutsch, auch auf den großen DACH-Messen.' },
        { q: 'Wir haben keine Events geplant. Passt das trotzdem?', a: 'Ja. Wir finden die richtigen Events für Ihre Käufer oder richten eigene Dinners und Roundtables aus.' },
      ],
    },
    cta: {
      h2a: 'Welche Events sind',
      h2b: 'schon gebucht?',
      lead: 'Schicken Sie uns die Liste. Wir bewerten sie, sagen Ihnen, welche das Geld wert sind, und betreiben dann die Arbeit drumherum.',
      button: 'Kostenloses Event-Audit',
    },
  },
};
