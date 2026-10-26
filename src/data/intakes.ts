// src/data/intakes.ts
//
// Audit intake forms, one per department, rendered by src/components/AuditIntake.astro
// on their own full-screen pages (src/pages/ux-audit.astro and so on). Built from
// design/Forms & CTAs/ (the UX audit intake), in our brand and voice.
// UX audit (Product) is done; Marketing and Sales intakes follow the same shape.
//
// Question types: text, url, email, long (multi-line), single (pick one, moves on),
// multi (pick one or more). `required: false` marks a question as optional.
// The finished brief is sent to /api/contact with `type` set to the intake id.

export type QuestionType = 'text' | 'url' | 'email' | 'long' | 'single' | 'multi';
export interface Question {
  id: string; type: QuestionType; title: string; help?: string; placeholder?: string; required: boolean;
  options?: { v: string; d?: string }[];
  label: string;          // short label for the review screen and the brief
  missing?: string;       // "Add your goal to continue."
}
export interface IntakeText {
  meta: { title: string; description: string };
  eyebrow: string; h1a: string; h1b: string; lead: string; start: string; resume: string; time: string;
  question: string; of: string; optional: string; ok: string; enter: string; prev: string; next: string;
  errors: { pick: string; pickOne: string; add: string; email: string; url: string };
  review: { eyebrow: string; h1: string; lead: string; send: string; sending: string; copy: string; copied: string; restart: string; failed: string };
  done: { eyebrow: string; h1: string; lead: string; back: string };
  questions: Question[];
}
export interface Intake { id: string; dept: 'product' | 'marketing' | 'sales'; storageKey: string; en: IntakeText; de: IntakeText }

export const uxAudit: Intake = {
  id: 'ux-audit',
  dept: 'product',
  storageKey: 'kadanco_ux_intake_v1',
  en: {
    meta: { title: 'Book A UX Audit | Kadanco', description: 'A short intake for a Kadanco UX audit: your product, your users, your goal and the flows that matter. It becomes the brief we work from.' },
    eyebrow: 'UX audit intake', h1a: 'Book A', h1b: 'UX Audit.',
    lead: 'A short intake that becomes the brief we work from. We fix the scope here once, so the audit measures what matters to your business.',
    start: 'Start', resume: 'Resume where you left off', time: 'Takes about three minutes',
    question: 'Question', of: 'of', optional: 'optional', ok: 'OK', enter: 'press', prev: 'Previous question', next: 'Next question',
    errors: { pick: 'Pick at least one to continue.', pickOne: 'Choose one to continue.', add: 'Add {x} to continue.', email: 'That email looks off. Mind checking it?', url: 'Add a web address so we know where to look.' },
    review: { eyebrow: 'Brief ready', h1: "That's Everything.", lead: 'Here is your audit brief. Send it to us and we confirm the scope and suggest times by email.', send: 'Send Brief', sending: 'Sending…', copy: 'Copy brief', copied: 'Brief copied', restart: 'Start over', failed: 'We could not send it just now. Please try again or email hello@kadanco.com.' },
    done: { eyebrow: 'Brief sent', h1: 'Thank You.', lead: 'We have your brief and reply within one working day to confirm the scope and suggest times.', back: 'Back to the website' },
    questions: [
      { id: 'name', type: 'text', label: 'Audit', title: 'What should we call this audit?', help: 'A short name, usually your product or site.', placeholder: 'e.g. Talio website', required: true, missing: 'a name' },
      { id: 'url', type: 'url', label: 'URL', title: 'Where does it live?', help: 'The main URL we should start from.', placeholder: 'https://', required: true, missing: 'the URL' },
      { id: 'surfaces', type: 'multi', label: 'Surfaces', title: 'Which surfaces are in scope?', help: 'Pick each one you want audited. With more than one, a finding is worded the same across all of them.', required: true,
        options: [{ v: 'Website' }, { v: 'Web app' }, { v: 'Mobile app' }] },
      { id: 'depth', type: 'single', label: 'Depth', title: 'How deep should we go?', required: true,
        options: [
          { v: 'Express', d: 'First impressions and the path to convert.' },
          { v: 'Standard', d: 'All ten audit passes, end to end.' },
          { v: 'Deep', d: 'Every pass, plus watching real people attempt the task.' },
        ] },
      { id: 'domain', type: 'single', label: 'Domain', title: 'Which lens fits your world?', help: 'It switches on the right extra checks.', required: true,
        options: [{ v: 'General B2B SaaS' }, { v: 'Healthcare & medical data' }, { v: 'Fintech & payments' }, { v: 'E-commerce & DTC' }, { v: 'Something else' }] },
      { id: 'personas', type: 'long', label: 'Primary users', title: 'Who are your one or two main users?', help: 'Name them, and the single question each one shows up with.', placeholder: 'e.g. In-house recruiter: "Can I move candidates faster?"', required: true, missing: 'your users' },
      { id: 'goal', type: 'long', label: 'Business goal', title: 'What is the one goal this product exists to hit?', help: 'The business outcome that matters most.', placeholder: 'e.g. Book qualified demos with recruiting teams', required: true, missing: 'your goal' },
      { id: 'action', type: 'text', label: 'Primary action', title: 'What is the main action a visitor should take?', help: 'Your main conversion: book a demo, start a trial, buy.', placeholder: 'e.g. Request a demo', required: true, missing: 'the action' },
      { id: 'pages', type: 'long', label: 'Pages and flows', title: 'Which pages or flows must we walk?', help: 'List the journeys that matter. We audit exactly these.', placeholder: 'e.g. Home, Pricing, Demo request; the sign-up flow', required: true, missing: 'the pages' },
      { id: 'problems', type: 'long', label: 'Known problems', title: 'Anything already nagging you?', help: 'Hunches and sore spots welcome. Skip if nothing comes to mind.', placeholder: 'Optional', required: false },
      { id: 'analytics', type: 'single', label: 'Analytics', title: 'Can we see analytics or recordings?', help: 'Real behaviour sharpens every finding.', required: false,
        options: [{ v: 'Yes, we can share access' }, { v: 'Not yet, but maybe' }, { v: 'No' }] },
      { id: 'audience', type: 'text', label: 'Report audience', title: 'Who is the finished report for?', help: 'The people who read it and act on it.', placeholder: 'e.g. Head of Growth, founders', required: false },
      { id: 'email', type: 'email', label: 'Contact', title: 'Where do we send the brief?', help: 'We confirm the scope and suggest times here.', placeholder: 'you@company.com', required: true, missing: 'your email' },
    ],
  },
  de: {
    meta: { title: 'UX-Audit buchen | Kadanco', description: 'Ein kurzer Fragebogen für ein UX-Audit von Kadanco: Produkt, Nutzer, Ziel und die wichtigen Abläufe. Daraus wird das Briefing, mit dem wir arbeiten.' },
    eyebrow: 'UX-Audit Fragebogen', h1a: 'UX-Audit', h1b: 'buchen.',
    lead: 'Ein kurzer Fragebogen, aus dem das Briefing für unsere Arbeit wird. Wir legen den Umfang hier einmal fest, damit das Audit misst, was für Ihr Geschäft zählt.',
    start: 'Starten', resume: 'Dort weitermachen, wo Sie aufgehört haben', time: 'Dauert etwa drei Minuten',
    question: 'Frage', of: 'von', optional: 'optional', ok: 'OK', enter: 'drücken Sie', prev: 'Vorherige Frage', next: 'Nächste Frage',
    errors: { pick: 'Wählen Sie mindestens eine Option.', pickOne: 'Wählen Sie eine Option.', add: 'Bitte ergänzen Sie {x}.', email: 'Die E-Mail-Adresse sieht nicht ganz richtig aus. Bitte prüfen.', url: 'Geben Sie eine Webadresse an, damit wir wissen, wo wir anfangen.' },
    review: { eyebrow: 'Briefing fertig', h1: 'Das war alles.', lead: 'Hier ist Ihr Audit-Briefing. Senden Sie es uns, und wir bestätigen Umfang und Termine per E-Mail.', send: 'Briefing senden', sending: 'Wird gesendet…', copy: 'Briefing kopieren', copied: 'Briefing kopiert', restart: 'Neu beginnen', failed: 'Das hat gerade nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie an hello@kadanco.com.' },
    done: { eyebrow: 'Briefing gesendet', h1: 'Vielen Dank.', lead: 'Wir haben Ihr Briefing und melden uns innerhalb eines Werktags, um Umfang und Termine abzustimmen.', back: 'Zurück zur Website' },
    questions: [
      { id: 'name', type: 'text', label: 'Audit', title: 'Wie soll das Audit heißen?', help: 'Ein kurzer Name, meist Ihr Produkt oder Ihre Website.', placeholder: 'z. B. Talio Website', required: true, missing: 'einen Namen' },
      { id: 'url', type: 'url', label: 'URL', title: 'Wo finden wir es?', help: 'Die Haupt-URL, mit der wir beginnen.', placeholder: 'https://', required: true, missing: 'die URL' },
      { id: 'surfaces', type: 'multi', label: 'Bereiche', title: 'Welche Bereiche gehören dazu?', help: 'Wählen Sie alles, was geprüft werden soll. Bei mehreren Bereichen formulieren wir jeden Befund überall gleich.', required: true,
        options: [{ v: 'Website' }, { v: 'Web-App' }, { v: 'Mobile App' }] },
      { id: 'depth', type: 'single', label: 'Tiefe', title: 'Wie tief sollen wir gehen?', required: true,
        options: [
          { v: 'Express', d: 'Erster Eindruck und der Weg zur Conversion.' },
          { v: 'Standard', d: 'Alle zehn Prüfdurchgänge, von Anfang bis Ende.' },
          { v: 'Tief', d: 'Jeder Durchgang, dazu echte Nutzer bei der Aufgabe beobachten.' },
        ] },
      { id: 'domain', type: 'single', label: 'Branche', title: 'Welche Branche passt zu Ihnen?', help: 'Damit schalten wir die passenden Zusatzprüfungen ein.', required: true,
        options: [{ v: 'Allgemeines B2B-SaaS' }, { v: 'Gesundheit & medizinische Daten' }, { v: 'Fintech & Zahlungen' }, { v: 'E-Commerce & DTC' }, { v: 'Etwas anderes' }] },
      { id: 'personas', type: 'long', label: 'Hauptnutzer', title: 'Wer sind Ihre ein oder zwei wichtigsten Nutzer?', help: 'Nennen Sie sie und die eine Frage, mit der jeder kommt.', placeholder: 'z. B. Recruiterin im Unternehmen: „Bringe ich Kandidaten schneller weiter?“', required: true, missing: 'Ihre Nutzer' },
      { id: 'goal', type: 'long', label: 'Geschäftsziel', title: 'Welches eine Ziel soll das Produkt erreichen?', help: 'Das Geschäftsergebnis, das am meisten zählt.', placeholder: 'z. B. Qualifizierte Demos mit Recruiting-Teams buchen', required: true, missing: 'Ihr Ziel' },
      { id: 'action', type: 'text', label: 'Hauptaktion', title: 'Was sollen Besucher vor allem tun?', help: 'Ihre wichtigste Conversion: Demo buchen, Test starten, kaufen.', placeholder: 'z. B. Demo anfragen', required: true, missing: 'die Aktion' },
      { id: 'pages', type: 'long', label: 'Seiten und Abläufe', title: 'Welche Seiten oder Abläufe sollen wir prüfen?', help: 'Listen Sie die wichtigen Wege auf. Genau diese prüfen wir.', placeholder: 'z. B. Start, Preise, Demo-Anfrage; die Registrierung', required: true, missing: 'die Seiten' },
      { id: 'problems', type: 'long', label: 'Bekannte Probleme', title: 'Stört Sie schon etwas?', help: 'Vermutungen und wunde Punkte sind willkommen. Überspringen Sie die Frage, wenn Ihnen nichts einfällt.', placeholder: 'Optional', required: false },
      { id: 'analytics', type: 'single', label: 'Analyse', title: 'Können wir Analysedaten oder Aufzeichnungen sehen?', help: 'Echtes Verhalten macht jeden Befund genauer.', required: false,
        options: [{ v: 'Ja, wir geben Zugang' }, { v: 'Noch nicht, aber vielleicht' }, { v: 'Nein' }] },
      { id: 'audience', type: 'text', label: 'Leser des Berichts', title: 'Für wen ist der fertige Bericht?', help: 'Die Menschen, die ihn lesen und danach handeln.', placeholder: 'z. B. Head of Growth, Gründer', required: false },
      { id: 'email', type: 'email', label: 'Kontakt', title: 'Wohin senden wir das Briefing?', help: 'Hier bestätigen wir Umfang und Termine.', placeholder: 'sie@firma.de', required: true, missing: 'Ihre E-Mail-Adresse' },
    ],
  },
};

// department intakes by id; Marketing and Sales are added here when their designs exist
export const intakes: Record<string, Intake> = { 'ux-audit': uxAudit };
// where each department's audit buttons point (English path; localised by the page)
export const auditHref: Partial<Record<Intake['dept'], string>> = { product: '/ux-audit/' };
