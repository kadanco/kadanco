// src/data/intakes.ts
//
// Audit intake forms, one per department, rendered by src/components/AuditIntake.astro
// on their own full-screen pages (src/pages/ux-audit.astro and so on). Built from
// design/Forms & CTAs/ (the UX audit intake), in our brand and voice.
// UX audit (Product, from the design), Marketing audit and Pipeline audit (Sales, drafted in
// the same style), and the strategy call (the general contact form).
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
      { id: 'name', type: 'text', label: 'Audit', title: 'What should we call this audit?', help: 'A short name, usually your product or site.', placeholder: 'e.g. Plovra website', required: true, missing: 'a name' },
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
      { id: 'name', type: 'text', label: 'Audit', title: 'Wie soll das Audit heißen?', help: 'Ein kurzer Name, meist Ihr Produkt oder Ihre Website.', placeholder: 'z. B. Plovra Website', required: true, missing: 'einen Namen' },
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

// Marketing audit (Digital Marketing & Branding). No design file: drafted 2026-10-26 in the
// UX audit's style, for owner review.
export const marketingAudit: Intake = {
  id: 'marketing-audit',
  dept: 'marketing',
  storageKey: 'kadanco_marketing_intake_v1',
  en: {
    meta: { title: 'Book A Marketing Audit | Kadanco', description: 'A short intake for a Kadanco marketing audit: your positioning, brand, website and content, your buyers and your goal. It becomes the brief we work from.' },
    eyebrow: 'Marketing audit intake', h1a: 'Book A', h1b: 'Marketing Audit.',
    lead: 'A short intake that becomes the brief we work from. We look at how your story, brand, website and content land with buyers, and where they lose them.',
    start: 'Start', resume: 'Resume where you left off', time: 'Takes about three minutes',
    question: 'Question', of: 'of', optional: 'optional', ok: 'OK', enter: 'press', prev: 'Previous question', next: 'Next question',
    errors: { pick: 'Pick at least one to continue.', pickOne: 'Choose one to continue.', add: 'Add {x} to continue.', email: 'That email looks off. Mind checking it?', url: 'Add a web address so we know where to look.' },
    review: { eyebrow: 'Brief ready', h1: "That's Everything.", lead: 'Here is your audit brief. Send it to us and we confirm the scope and suggest times by email.', send: 'Send Brief', sending: 'Sending…', copy: 'Copy brief', copied: 'Brief copied', restart: 'Start over', failed: 'We could not send it just now. Please try again or email hello@kadanco.com.' },
    done: { eyebrow: 'Brief sent', h1: 'Thank You.', lead: 'We have your brief and reply within one working day to confirm the scope and suggest times.', back: 'Back to the website' },
    questions: [
      { id: 'name', type: 'text', label: 'Company', title: 'Which company or product is this for?', placeholder: 'e.g. Plovra', required: true, missing: 'a name' },
      { id: 'url', type: 'url', label: 'Website', title: 'Where can we see it?', help: 'Your website. We start there.', placeholder: 'https://', required: true, missing: 'the URL' },
      { id: 'focus', type: 'multi', label: 'In scope', title: 'What should we look at?', help: 'Pick everything you want in the audit.', required: true,
        options: [{ v: 'Positioning and messaging' }, { v: 'Brand identity' }, { v: 'Website' }, { v: 'Content and LinkedIn' }, { v: 'SEO and GEO' }, { v: 'Sales decks and one-pagers' }] },
      { id: 'buyers', type: 'long', label: 'Buyers', title: 'Who buys from you?', help: 'The companies and the people in them who decide.', placeholder: 'e.g. Heads of HR at 200 to 2,000 person companies', required: true, missing: 'your buyers' },
      { id: 'market', type: 'single', label: 'Market', title: 'Which market matters most right now?', required: true,
        options: [{ v: 'DACH (Germany, Austria, Switzerland)' }, { v: 'Rest of Europe' }, { v: 'North America' }, { v: 'Global' }] },
      { id: 'stage', type: 'single', label: 'Stage', title: 'Where is the company today?', required: true,
        options: [{ v: 'Before launch' }, { v: 'First customers' }, { v: 'Growing' }, { v: 'Established, ready for the next step' }] },
      { id: 'goal', type: 'long', label: 'Goal', title: 'What should marketing achieve in the next six months?', help: 'The outcome that matters most.', placeholder: 'e.g. A clear offer and a steady flow of qualified leads', required: true, missing: 'your goal' },
      { id: 'competitors', type: 'long', label: 'Competitors', title: 'Who do buyers compare you with?', help: 'Two or three names are enough. Skip if you are not sure.', placeholder: 'Optional', required: false },
      { id: 'problems', type: 'long', label: 'Known problems', title: 'Anything already nagging you?', help: 'Hunches and sore spots welcome.', placeholder: 'Optional', required: false },
      { id: 'email', type: 'email', label: 'Contact', title: 'Where do we send the brief?', help: 'We confirm the scope and suggest times here.', placeholder: 'you@company.com', required: true, missing: 'your email' },
    ],
  },
  de: {
    meta: { title: 'Marketing-Audit buchen | Kadanco', description: 'Ein kurzer Fragebogen für ein Marketing-Audit von Kadanco: Positionierung, Marke, Website und Content, Ihre Käufer und Ihr Ziel. Daraus wird das Briefing, mit dem wir arbeiten.' },
    eyebrow: 'Marketing-Audit Fragebogen', h1a: 'Marketing-Audit', h1b: 'buchen.',
    lead: 'Ein kurzer Fragebogen, aus dem das Briefing für unsere Arbeit wird. Wir prüfen, wie Ihre Geschichte, Marke, Website und Inhalte bei Käufern ankommen und wo Sie sie verlieren.',
    start: 'Starten', resume: 'Dort weitermachen, wo Sie aufgehört haben', time: 'Dauert etwa drei Minuten',
    question: 'Frage', of: 'von', optional: 'optional', ok: 'OK', enter: 'drücken Sie', prev: 'Vorherige Frage', next: 'Nächste Frage',
    errors: { pick: 'Wählen Sie mindestens eine Option.', pickOne: 'Wählen Sie eine Option.', add: 'Bitte ergänzen Sie {x}.', email: 'Die E-Mail-Adresse sieht nicht ganz richtig aus. Bitte prüfen.', url: 'Geben Sie eine Webadresse an, damit wir wissen, wo wir anfangen.' },
    review: { eyebrow: 'Briefing fertig', h1: 'Das war alles.', lead: 'Hier ist Ihr Audit-Briefing. Senden Sie es uns, und wir bestätigen Umfang und Termine per E-Mail.', send: 'Briefing senden', sending: 'Wird gesendet…', copy: 'Briefing kopieren', copied: 'Briefing kopiert', restart: 'Neu beginnen', failed: 'Das hat gerade nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie an hello@kadanco.com.' },
    done: { eyebrow: 'Briefing gesendet', h1: 'Vielen Dank.', lead: 'Wir haben Ihr Briefing und melden uns innerhalb eines Werktags, um Umfang und Termine abzustimmen.', back: 'Zurück zur Website' },
    questions: [
      { id: 'name', type: 'text', label: 'Unternehmen', title: 'Für welches Unternehmen oder Produkt ist das?', placeholder: 'z. B. Plovra', required: true, missing: 'einen Namen' },
      { id: 'url', type: 'url', label: 'Website', title: 'Wo finden wir es?', help: 'Ihre Website. Dort beginnen wir.', placeholder: 'https://', required: true, missing: 'die URL' },
      { id: 'focus', type: 'multi', label: 'Umfang', title: 'Was sollen wir prüfen?', help: 'Wählen Sie alles, was ins Audit gehört.', required: true,
        options: [{ v: 'Positionierung und Botschaft' }, { v: 'Markenidentität' }, { v: 'Website' }, { v: 'Content und LinkedIn' }, { v: 'SEO und GEO' }, { v: 'Sales-Decks und One-Pager' }] },
      { id: 'buyers', type: 'long', label: 'Käufer', title: 'Wer kauft bei Ihnen?', help: 'Die Unternehmen und die Menschen darin, die entscheiden.', placeholder: 'z. B. HR-Leitungen in Unternehmen mit 200 bis 2.000 Mitarbeitenden', required: true, missing: 'Ihre Käufer' },
      { id: 'market', type: 'single', label: 'Markt', title: 'Welcher Markt zählt gerade am meisten?', required: true,
        options: [{ v: 'DACH (Deutschland, Österreich, Schweiz)' }, { v: 'Übriges Europa' }, { v: 'Nordamerika' }, { v: 'Weltweit' }] },
      { id: 'stage', type: 'single', label: 'Phase', title: 'Wo steht das Unternehmen heute?', required: true,
        options: [{ v: 'Vor dem Launch' }, { v: 'Erste Kunden' }, { v: 'Im Wachstum' }, { v: 'Etabliert, bereit für den nächsten Schritt' }] },
      { id: 'goal', type: 'long', label: 'Ziel', title: 'Was soll Marketing in den nächsten sechs Monaten erreichen?', help: 'Das Ergebnis, das am meisten zählt.', placeholder: 'z. B. Ein klares Angebot und stetig qualifizierte Leads', required: true, missing: 'Ihr Ziel' },
      { id: 'competitors', type: 'long', label: 'Wettbewerber', title: 'Mit wem vergleichen Käufer Sie?', help: 'Zwei oder drei Namen genügen. Überspringen Sie die Frage, wenn Sie unsicher sind.', placeholder: 'Optional', required: false },
      { id: 'problems', type: 'long', label: 'Bekannte Probleme', title: 'Stört Sie schon etwas?', help: 'Vermutungen und wunde Punkte sind willkommen.', placeholder: 'Optional', required: false },
      { id: 'email', type: 'email', label: 'Kontakt', title: 'Wohin senden wir das Briefing?', help: 'Hier bestätigen wir Umfang und Termine.', placeholder: 'sie@firma.de', required: true, missing: 'Ihre E-Mail-Adresse' },
    ],
  },
};

// Website audit (Website Production, Product department). Drafted 2026-10-26 in the UX
// audit's style, for owner review. Audit buttons on the Website Production page link here.
export const websiteAudit: Intake = {
  id: 'website-audit',
  dept: 'product',
  storageKey: 'kadanco_website_intake_v1',
  en: {
    meta: { title: 'Book A Website Audit | Kadanco', description: 'A short intake for a Kadanco website audit: your site, your buyers, your goal and what to look at, from brand and copy to SEO, AEO and GEO. It becomes the brief we work from.' },
    eyebrow: 'Website audit intake', h1a: 'Book A', h1b: 'Website Audit.',
    lead: 'A short intake that becomes the brief we work from. We check your story, your build and how you show up in search and AI answers, and show you what to fix first.',
    start: 'Start', resume: 'Resume where you left off', time: 'Takes about three minutes',
    question: 'Question', of: 'of', optional: 'optional', ok: 'OK', enter: 'press', prev: 'Previous question', next: 'Next question',
    errors: { pick: 'Pick at least one to continue.', pickOne: 'Choose one to continue.', add: 'Add {x} to continue.', email: 'That email looks off. Mind checking it?', url: 'Add a web address so we know where to look.' },
    review: { eyebrow: 'Brief ready', h1: "That's Everything.", lead: 'Here is your audit brief. Send it to us and we confirm the scope and suggest times by email.', send: 'Send Brief', sending: 'Sending…', copy: 'Copy brief', copied: 'Brief copied', restart: 'Start over', failed: 'We could not send it just now. Please try again or email hello@kadanco.com.' },
    done: { eyebrow: 'Brief sent', h1: 'Thank You.', lead: 'We have your brief and reply within one working day to confirm the scope and suggest times.', back: 'Back to the website' },
    questions: [
      { id: 'name', type: 'text', label: 'Company', title: 'Which company is this for?', placeholder: 'e.g. Plovra', required: true, missing: 'a name' },
      { id: 'url', type: 'url', label: 'Website', title: 'Where is your current website?', help: 'No site yet? Add the domain you plan to use.', placeholder: 'https://', required: true, missing: 'the URL' },
      { id: 'project', type: 'single', label: 'Project', title: 'What do you have in mind?', required: true,
        options: [{ v: 'A new website from scratch' }, { v: 'A redesign of our current site' }, { v: 'A new homepage first' }, { v: 'Not sure yet', d: 'Tell us what you see.' }] },
      { id: 'focus', type: 'multi', label: 'In scope', title: 'What should the audit look at?', help: 'Pick everything you want us to check.', required: true,
        options: [{ v: 'Brand and positioning' }, { v: 'Copy and message' }, { v: 'Design and user experience' }, { v: 'Speed, mobile and security' }, { v: 'SEO, AEO and GEO' }, { v: 'Forms, CRM and tracking' }] },
      { id: 'buyers', type: 'long', label: 'Buyers', title: 'Who should the website win over?', help: 'The companies and the people in them who decide.', placeholder: 'e.g. Heads of IT at mid-sized manufacturers', required: true, missing: 'your buyers' },
      { id: 'action', type: 'text', label: 'Main action', title: 'What should a visitor do on your site?', help: 'Your main conversion: book a demo, start a trial, get in touch.', placeholder: 'e.g. Book a demo', required: true, missing: 'the action' },
      { id: 'goal', type: 'long', label: 'Goal', title: 'What should the website achieve in the next six months?', help: 'The outcome that matters most.', placeholder: 'e.g. More qualified demo requests, and pages our team can edit', required: true, missing: 'your goal' },
      { id: 'cms', type: 'single', label: 'CMS', title: 'What runs your site today?', required: false,
        options: [{ v: 'WordPress' }, { v: 'Webflow' }, { v: 'Framer' }, { v: 'Custom code' }, { v: 'Something else or not sure' }] },
      { id: 'references', type: 'long', label: 'References', title: 'Which websites do you like, or compete with?', help: 'Two or three links are enough. Skip if nothing comes to mind.', placeholder: 'Optional', required: false },
      { id: 'timing', type: 'single', label: 'Timing', title: 'When should the new site be live?', required: false,
        options: [{ v: 'Within two months' }, { v: 'In three to six months' }, { v: 'No fixed date' }] },
      { id: 'email', type: 'email', label: 'Contact', title: 'Where do we send the brief?', help: 'We confirm the scope and suggest times here.', placeholder: 'you@company.com', required: true, missing: 'your email' },
    ],
  },
  de: {
    meta: { title: 'Website-Audit buchen | Kadanco', description: 'Ein kurzer Fragebogen für ein Website-Audit von Kadanco: Ihre Website, Ihre Käufer, Ihr Ziel und was wir prüfen sollen, von Marke und Texten bis SEO, AEO und GEO. Daraus wird das Briefing, mit dem wir arbeiten.' },
    eyebrow: 'Website-Audit Fragebogen', h1a: 'Website-Audit', h1b: 'buchen.',
    lead: 'Ein kurzer Fragebogen, aus dem das Briefing für unsere Arbeit wird. Wir prüfen Botschaft, Umsetzung und Ihre Sichtbarkeit in Suche und KI-Antworten und zeigen Ihnen, was Sie zuerst ändern sollten.',
    start: 'Starten', resume: 'Dort weitermachen, wo Sie aufgehört haben', time: 'Dauert etwa drei Minuten',
    question: 'Frage', of: 'von', optional: 'optional', ok: 'OK', enter: 'drücken Sie', prev: 'Vorherige Frage', next: 'Nächste Frage',
    errors: { pick: 'Wählen Sie mindestens eine Option.', pickOne: 'Wählen Sie eine Option.', add: 'Bitte ergänzen Sie {x}.', email: 'Die E-Mail-Adresse sieht nicht ganz richtig aus. Bitte prüfen.', url: 'Geben Sie eine Webadresse an, damit wir wissen, wo wir anfangen.' },
    review: { eyebrow: 'Briefing fertig', h1: 'Das war alles.', lead: 'Hier ist Ihr Audit-Briefing. Senden Sie es uns, und wir bestätigen Umfang und Termine per E-Mail.', send: 'Briefing senden', sending: 'Wird gesendet…', copy: 'Briefing kopieren', copied: 'Briefing kopiert', restart: 'Neu beginnen', failed: 'Das hat gerade nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie an hello@kadanco.com.' },
    done: { eyebrow: 'Briefing gesendet', h1: 'Vielen Dank.', lead: 'Wir haben Ihr Briefing und melden uns innerhalb eines Werktags, um Umfang und Termine abzustimmen.', back: 'Zurück zur Website' },
    questions: [
      { id: 'name', type: 'text', label: 'Unternehmen', title: 'Für welches Unternehmen ist das?', placeholder: 'z. B. Plovra', required: true, missing: 'einen Namen' },
      { id: 'url', type: 'url', label: 'Website', title: 'Wo finden wir Ihre aktuelle Website?', help: 'Noch keine Website? Geben Sie die geplante Domain an.', placeholder: 'https://', required: true, missing: 'die URL' },
      { id: 'project', type: 'single', label: 'Projekt', title: 'Was haben Sie vor?', required: true,
        options: [{ v: 'Eine neue Website von Grund auf' }, { v: 'Ein Redesign der aktuellen Website' }, { v: 'Zuerst eine neue Startseite' }, { v: 'Noch unklar', d: 'Sagen Sie uns, was Sie sehen.' }] },
      { id: 'focus', type: 'multi', label: 'Umfang', title: 'Was soll das Audit prüfen?', help: 'Wählen Sie alles, was wir uns ansehen sollen.', required: true,
        options: [{ v: 'Marke und Positionierung' }, { v: 'Texte und Botschaft' }, { v: 'Design und Nutzerführung' }, { v: 'Ladezeit, Mobil und Sicherheit' }, { v: 'SEO, AEO und GEO' }, { v: 'Formulare, CRM und Tracking' }] },
      { id: 'buyers', type: 'long', label: 'Käufer', title: 'Wen soll die Website überzeugen?', help: 'Die Unternehmen und die Menschen darin, die entscheiden.', placeholder: 'z. B. IT-Leitungen in mittelständischen Industrieunternehmen', required: true, missing: 'Ihre Käufer' },
      { id: 'action', type: 'text', label: 'Hauptaktion', title: 'Was sollen Besucher auf Ihrer Website tun?', help: 'Ihre wichtigste Conversion: Demo buchen, Test starten, Kontakt aufnehmen.', placeholder: 'z. B. Demo buchen', required: true, missing: 'die Aktion' },
      { id: 'goal', type: 'long', label: 'Ziel', title: 'Was soll die Website in den nächsten sechs Monaten erreichen?', help: 'Das Ergebnis, das am meisten zählt.', placeholder: 'z. B. Mehr qualifizierte Demo-Anfragen und Seiten, die unser Team selbst pflegt', required: true, missing: 'Ihr Ziel' },
      { id: 'cms', type: 'single', label: 'CMS', title: 'Worauf läuft Ihre Website heute?', required: false,
        options: [{ v: 'WordPress' }, { v: 'Webflow' }, { v: 'Framer' }, { v: 'Eigener Code' }, { v: 'Etwas anderes oder unklar' }] },
      { id: 'references', type: 'long', label: 'Referenzen', title: 'Welche Websites gefallen Ihnen, oder mit wem konkurrieren Sie?', help: 'Zwei oder drei Links genügen. Überspringen Sie die Frage, wenn Ihnen nichts einfällt.', placeholder: 'Optional', required: false },
      { id: 'timing', type: 'single', label: 'Zeitplan', title: 'Wann soll die neue Website live sein?', required: false,
        options: [{ v: 'Innerhalb von zwei Monaten' }, { v: 'In drei bis sechs Monaten' }, { v: 'Kein festes Datum' }] },
      { id: 'email', type: 'email', label: 'Kontakt', title: 'Wohin senden wir das Briefing?', help: 'Hier bestätigen wir Umfang und Termine.', placeholder: 'sie@firma.de', required: true, missing: 'Ihre E-Mail-Adresse' },
    ],
  },
};

// Pipeline audit (Sales Support & Systems). No design file: drafted 2026-10-26 in the
// UX audit's style, for owner review.
export const pipelineAudit: Intake = {
  id: 'pipeline-audit',
  dept: 'sales',
  storageKey: 'kadanco_pipeline_intake_v1',
  en: {
    meta: { title: 'Book A Pipeline Audit | Kadanco', description: 'A short intake for a Kadanco pipeline audit: what you sell, to whom, how deals come in today and your target. It becomes the brief we work from.' },
    eyebrow: 'Pipeline audit intake', h1a: 'Book A', h1b: 'Pipeline Audit.',
    lead: 'A short intake that becomes the brief we work from. We look at how deals come in today, where they stall, and what it takes to reach your target.',
    start: 'Start', resume: 'Resume where you left off', time: 'Takes about three minutes',
    question: 'Question', of: 'of', optional: 'optional', ok: 'OK', enter: 'press', prev: 'Previous question', next: 'Next question',
    errors: { pick: 'Pick at least one to continue.', pickOne: 'Choose one to continue.', add: 'Add {x} to continue.', email: 'That email looks off. Mind checking it?', url: 'Add a web address so we know where to look.' },
    review: { eyebrow: 'Brief ready', h1: "That's Everything.", lead: 'Here is your audit brief. Send it to us and we confirm the scope and suggest times by email.', send: 'Send Brief', sending: 'Sending…', copy: 'Copy brief', copied: 'Brief copied', restart: 'Start over', failed: 'We could not send it just now. Please try again or email hello@kadanco.com.' },
    done: { eyebrow: 'Brief sent', h1: 'Thank You.', lead: 'We have your brief and reply within one working day to confirm the scope and suggest times.', back: 'Back to the website' },
    questions: [
      { id: 'name', type: 'text', label: 'Company', title: 'Which company is this for?', placeholder: 'e.g. Plovra', required: true, missing: 'a name' },
      { id: 'url', type: 'url', label: 'Website', title: 'What is your website?', placeholder: 'https://', required: true, missing: 'the URL' },
      { id: 'offer', type: 'long', label: 'Offer and buyers', title: 'What do you sell, and to whom?', help: 'Your offer and the companies that buy it.', placeholder: 'e.g. Scheduling software for clinics with 5 to 50 doctors', required: true, missing: 'your offer' },
      { id: 'deal', type: 'single', label: 'Deal size', title: 'What is a typical first-year deal worth?', required: true,
        options: [{ v: 'Under EUR 10,000' }, { v: 'EUR 10,000 to 50,000' }, { v: 'EUR 50,000 to 150,000' }, { v: 'Over EUR 150,000' }] },
      { id: 'sources', type: 'multi', label: 'Where deals come from', title: 'Where do deals come from today?', help: 'Pick everything that brings in deals.', required: true,
        options: [{ v: 'The founder\'s network' }, { v: 'Inbound' }, { v: 'Outbound' }, { v: 'Events' }, { v: 'Partners' }, { v: 'Target account campaigns' }] },
      { id: 'team', type: 'single', label: 'Sales team', title: 'Who sells today?', required: true,
        options: [{ v: 'The founder alone' }, { v: 'The founder plus one or two people' }, { v: 'A sales team of three or more' }] },
      { id: 'crm', type: 'single', label: 'CRM', title: 'Which CRM do you use?', required: true,
        options: [{ v: 'HubSpot' }, { v: 'Salesforce' }, { v: 'Pipedrive' }, { v: 'Another CRM' }, { v: 'None yet' }] },
      { id: 'goal', type: 'long', label: 'Target', title: 'What pipeline do you need in the next six months?', help: 'Meetings per month, pipeline value, new customers: whatever you steer by.', placeholder: 'e.g. 15 qualified meetings a month', required: true, missing: 'your target' },
      { id: 'problems', type: 'long', label: 'Where it stalls', title: 'Where do deals stall today?', help: 'Hunches and sore spots welcome. Skip if nothing comes to mind.', placeholder: 'Optional', required: false },
      { id: 'email', type: 'email', label: 'Contact', title: 'Where do we send the brief?', help: 'We confirm the scope and suggest times here.', placeholder: 'you@company.com', required: true, missing: 'your email' },
    ],
  },
  de: {
    meta: { title: 'Pipeline-Audit buchen | Kadanco', description: 'Ein kurzer Fragebogen für ein Pipeline-Audit von Kadanco: was Sie verkaufen, an wen, woher Abschlüsse heute kommen und Ihr Ziel. Daraus wird das Briefing, mit dem wir arbeiten.' },
    eyebrow: 'Pipeline-Audit Fragebogen', h1a: 'Pipeline-Audit', h1b: 'buchen.',
    lead: 'Ein kurzer Fragebogen, aus dem das Briefing für unsere Arbeit wird. Wir prüfen, woher Abschlüsse heute kommen, wo sie hängen bleiben und was Ihr Ziel braucht.',
    start: 'Starten', resume: 'Dort weitermachen, wo Sie aufgehört haben', time: 'Dauert etwa drei Minuten',
    question: 'Frage', of: 'von', optional: 'optional', ok: 'OK', enter: 'drücken Sie', prev: 'Vorherige Frage', next: 'Nächste Frage',
    errors: { pick: 'Wählen Sie mindestens eine Option.', pickOne: 'Wählen Sie eine Option.', add: 'Bitte ergänzen Sie {x}.', email: 'Die E-Mail-Adresse sieht nicht ganz richtig aus. Bitte prüfen.', url: 'Geben Sie eine Webadresse an, damit wir wissen, wo wir anfangen.' },
    review: { eyebrow: 'Briefing fertig', h1: 'Das war alles.', lead: 'Hier ist Ihr Audit-Briefing. Senden Sie es uns, und wir bestätigen Umfang und Termine per E-Mail.', send: 'Briefing senden', sending: 'Wird gesendet…', copy: 'Briefing kopieren', copied: 'Briefing kopiert', restart: 'Neu beginnen', failed: 'Das hat gerade nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie an hello@kadanco.com.' },
    done: { eyebrow: 'Briefing gesendet', h1: 'Vielen Dank.', lead: 'Wir haben Ihr Briefing und melden uns innerhalb eines Werktags, um Umfang und Termine abzustimmen.', back: 'Zurück zur Website' },
    questions: [
      { id: 'name', type: 'text', label: 'Unternehmen', title: 'Für welches Unternehmen ist das?', placeholder: 'z. B. Plovra', required: true, missing: 'einen Namen' },
      { id: 'url', type: 'url', label: 'Website', title: 'Wie lautet Ihre Website?', placeholder: 'https://', required: true, missing: 'die URL' },
      { id: 'offer', type: 'long', label: 'Angebot und Käufer', title: 'Was verkaufen Sie, und an wen?', help: 'Ihr Angebot und die Unternehmen, die es kaufen.', placeholder: 'z. B. Terminsoftware für Praxen mit 5 bis 50 Ärzten', required: true, missing: 'Ihr Angebot' },
      { id: 'deal', type: 'single', label: 'Auftragsgröße', title: 'Was ist ein typischer Abschluss im ersten Jahr wert?', required: true,
        options: [{ v: 'Unter 10.000 EUR' }, { v: '10.000 bis 50.000 EUR' }, { v: '50.000 bis 150.000 EUR' }, { v: 'Über 150.000 EUR' }] },
      { id: 'sources', type: 'multi', label: 'Woher Abschlüsse kommen', title: 'Woher kommen Abschlüsse heute?', help: 'Wählen Sie alles, was Abschlüsse bringt.', required: true,
        options: [{ v: 'Das Netzwerk der Gründer' }, { v: 'Inbound' }, { v: 'Outbound' }, { v: 'Events' }, { v: 'Partner' }, { v: 'Kampagnen auf Zielaccounts' }] },
      { id: 'team', type: 'single', label: 'Vertriebsteam', title: 'Wer verkauft heute?', required: true,
        options: [{ v: 'Die Gründer allein' }, { v: 'Die Gründer und ein bis zwei Personen' }, { v: 'Ein Vertriebsteam ab drei Personen' }] },
      { id: 'crm', type: 'single', label: 'CRM', title: 'Welches CRM nutzen Sie?', required: true,
        options: [{ v: 'HubSpot' }, { v: 'Salesforce' }, { v: 'Pipedrive' }, { v: 'Ein anderes CRM' }, { v: 'Noch keins' }] },
      { id: 'goal', type: 'long', label: 'Ziel', title: 'Welche Pipeline brauchen Sie in den nächsten sechs Monaten?', help: 'Termine pro Monat, Pipelinewert, neue Kunden: woran Sie steuern.', placeholder: 'z. B. 15 qualifizierte Termine im Monat', required: true, missing: 'Ihr Ziel' },
      { id: 'problems', type: 'long', label: 'Wo es hängt', title: 'Wo bleiben Abschlüsse heute hängen?', help: 'Vermutungen und wunde Punkte sind willkommen. Überspringen Sie die Frage, wenn Ihnen nichts einfällt.', placeholder: 'Optional', required: false },
      { id: 'email', type: 'email', label: 'Kontakt', title: 'Wohin senden wir das Briefing?', help: 'Hier bestätigen wir Umfang und Termine.', placeholder: 'sie@firma.de', required: true, missing: 'Ihre E-Mail-Adresse' },
    ],
  },
};

// The strategy call: the general contact form (it replaced the contact modal on
// 2026-10-26). Same questions as the modal had, sent to Plunk under the modal's old
// event name (contact-form-submitted) so existing Plunk workflows keep working.
export const strategyCall: Intake = {
  id: 'strategy-call',
  dept: 'product', // not department specific; the field is unused for this form
  storageKey: 'kadanco_strategy_call_v1',
  en: {
    meta: { title: 'Book A Strategy Call | Kadanco', description: 'Tell us what you are trying to solve. We reply within one working day to set up a strategy call.' },
    eyebrow: 'Strategy call', h1a: 'Book A', h1b: 'Strategy Call.',
    lead: 'Tell us what you are trying to solve. We reply within one working day to set up a call with the people who would do the work.',
    start: 'Start', resume: 'Resume where you left off', time: 'Takes about one minute',
    question: 'Question', of: 'of', optional: 'optional', ok: 'OK', enter: 'press', prev: 'Previous question', next: 'Next question',
    errors: { pick: 'Pick at least one to continue.', pickOne: 'Choose one to continue.', add: 'Add {x} to continue.', email: 'That email looks off. Mind checking it?', url: 'Add a web address, or skip this question.' },
    review: { eyebrow: 'Ready to send', h1: "That's Everything.", lead: 'Here is what you told us. Send it and we reply by email to set up the call.', send: 'Send', sending: 'Sending…', copy: 'Copy', copied: 'Copied', restart: 'Start over', failed: 'We could not send it just now. Please try again or email hello@kadanco.com.' },
    done: { eyebrow: 'Sent', h1: 'Thanks, Talk Soon.', lead: 'We have your message and reply within one working day to set up the call.', back: 'Back to the website' },
    questions: [
      { id: 'goal', type: 'long', label: 'Problem to solve', title: 'What problem are you trying to solve?', help: 'A few lines are enough. Product, marketing, sales, or all three.', placeholder: 'e.g. Trials sign up but never come back', required: true, missing: 'a few words about the problem' },
      { id: 'name', type: 'text', label: 'Name', title: 'What is your name?', placeholder: 'First and last name', required: true, missing: 'your name' },
      { id: 'company', type: 'text', label: 'Company', title: 'Which company are you with?', placeholder: 'Company name', required: false },
      { id: 'website', type: 'url', label: 'Website', title: 'What is your website?', placeholder: 'https://', required: false },
      { id: 'email', type: 'email', label: 'Work email', title: 'Where can we reach you?', help: 'Your work email. We reply here to set up the call.', placeholder: 'you@company.com', required: true, missing: 'your email' },
    ],
  },
  de: {
    meta: { title: 'Strategiegespräch buchen | Kadanco', description: 'Sagen Sie uns, was Sie lösen wollen. Wir melden uns innerhalb eines Werktags und vereinbaren ein Strategiegespräch.' },
    eyebrow: 'Strategiegespräch', h1a: 'Strategiegespräch', h1b: 'buchen.',
    lead: 'Sagen Sie uns, was Sie lösen wollen. Wir melden uns innerhalb eines Werktags und vereinbaren ein Gespräch mit den Menschen, die die Arbeit machen.',
    start: 'Starten', resume: 'Dort weitermachen, wo Sie aufgehört haben', time: 'Dauert etwa eine Minute',
    question: 'Frage', of: 'von', optional: 'optional', ok: 'OK', enter: 'drücken Sie', prev: 'Vorherige Frage', next: 'Nächste Frage',
    errors: { pick: 'Wählen Sie mindestens eine Option.', pickOne: 'Wählen Sie eine Option.', add: 'Bitte ergänzen Sie {x}.', email: 'Die E-Mail-Adresse sieht nicht ganz richtig aus. Bitte prüfen.', url: 'Geben Sie eine Webadresse an oder überspringen Sie die Frage.' },
    review: { eyebrow: 'Bereit zum Senden', h1: 'Das war alles.', lead: 'Das haben Sie uns geschrieben. Senden Sie es ab, und wir melden uns per E-Mail für einen Termin.', send: 'Senden', sending: 'Wird gesendet…', copy: 'Kopieren', copied: 'Kopiert', restart: 'Neu beginnen', failed: 'Das hat gerade nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie an hello@kadanco.com.' },
    done: { eyebrow: 'Gesendet', h1: 'Danke, wir melden uns.', lead: 'Wir haben Ihre Nachricht und melden uns innerhalb eines Werktags für einen Termin.', back: 'Zurück zur Website' },
    questions: [
      { id: 'goal', type: 'long', label: 'Problem', title: 'Welches Problem möchten Sie lösen?', help: 'Ein paar Zeilen genügen. Produkt, Marketing, Vertrieb oder alles zusammen.', placeholder: 'z. B. Testnutzer melden sich an und kommen nie wieder', required: true, missing: 'ein paar Worte zum Problem' },
      { id: 'name', type: 'text', label: 'Name', title: 'Wie heißen Sie?', placeholder: 'Vor- und Nachname', required: true, missing: 'Ihren Namen' },
      { id: 'company', type: 'text', label: 'Unternehmen', title: 'Für welches Unternehmen arbeiten Sie?', placeholder: 'Unternehmen', required: false },
      { id: 'website', type: 'url', label: 'Website', title: 'Wie lautet Ihre Website?', placeholder: 'https://', required: false },
      { id: 'email', type: 'email', label: 'Geschäftliche E-Mail', title: 'Wie erreichen wir Sie?', help: 'Ihre geschäftliche E-Mail. Hier melden wir uns für einen Termin.', placeholder: 'sie@firma.de', required: true, missing: 'Ihre E-Mail-Adresse' },
    ],
  },
};

// intakes by id; Marketing and Sales audits are added here when their designs exist
export const intakes: Record<string, Intake> = { 'ux-audit': uxAudit, 'website-audit': websiteAudit, 'marketing-audit': marketingAudit, 'pipeline-audit': pipelineAudit, 'strategy-call': strategyCall };
// the strategy call page: every "Book A Strategy Call" button and every CTA without its own intake
export const callHref = '/strategy-call/';
// where each department's audit buttons point (English path; localised by the page)
export const auditHref: Record<Intake['dept'], string> = { product: '/ux-audit/', marketing: '/marketing-audit/', sales: '/pipeline-audit/' };
