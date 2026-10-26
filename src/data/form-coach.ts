// src/data/form-coach.ts
// The side panel of the full-screen forms (AuditIntake.astro), owner decision 2026-10-26:
// beside every question a short reason to keep going: why we ask, an insight, a quote from
// the operators, how we work, or the career logos. The intro shows what you get, the review
// what happens next. On phones the panel sits under the question.
// Proof rules (owner): no invented results or testimonials. Quotes are DRAFTS in Maria's and
// Karan's voice until the owner signs them off (see the open tasks). Client testimonials get
// the kind 'testimonial' once real, approved ones exist; none are set yet.
// Career logos are the companies from Maria's and Karan's careers (the homepage logo row),
// always labelled as experience, never as clients.

export type Who = 'maria' | 'karan';
export type CoachKind = 'why' | 'insight' | 'quote' | 'facts' | 'logos' | 'testimonial';
export interface Coach { kind: CoachKind; body?: string; who?: Who; items?: string[]; source?: string }
export interface CoachText {
  intro: { title: string; items: string[] };
  next: { title: string; items: string[] };
  q: Record<string, Coach>;   // by question id
}
export interface CoachUi {
  kinds: Record<CoachKind, string>;
  cheers: [string, string, string, string, string];  // progress: start, early, past half, nearly, last
  left: string;                                       // '{n} questions left'
  roles: Record<Who, string>;
  logos: string;                                      // line under the logos
}

export const careerLogos = [
  { file: 'mercedes-benz', alt: 'Mercedes-Benz' },
  { file: 'opel', alt: 'Opel' },
  { file: 'toyota', alt: 'Toyota' },
  { file: 'merck', alt: 'Merck' },
  { file: 'oracle', alt: 'Oracle' },
  { file: 'consorsbank', alt: 'Consorsbank' },
  { file: 'dkb', alt: 'DKB' },
  { file: 'sparkasse', alt: 'Sparkasse' },
];

export const faces: Record<Who, { name: string; img: string }> = {
  maria: { name: 'Maria', img: 'https://assets.kadanco.com/public/maria.jpeg' },
  karan: { name: 'Karan', img: 'https://assets.kadanco.com/public/karan.jpeg' },
};

export const coachUi: Record<'en' | 'de', CoachUi> = {
  en: {
    kinds: { why: 'Why we ask', insight: 'Worth knowing', quote: 'From the operators', facts: 'How we work', logos: 'Experience from', testimonial: 'From a client' },
    cheers: ['Good start.', 'You are on a roll.', 'More than halfway.', 'Nearly there.', 'Last one.'],
    left: '{n} questions left',
    roles: { maria: 'Founder · Product & Marketing', karan: 'Founder · Marketing & Sales' },
    logos: 'Our careers before Kadanco, across product, marketing and sales.',
  },
  de: {
    kinds: { why: 'Warum wir fragen', insight: 'Gut zu wissen', quote: 'Von den Machern', facts: 'So arbeiten wir', logos: 'Erfahrung aus', testimonial: 'Von einem Kunden' },
    cheers: ['Guter Start.', 'Sie sind gut dabei.', 'Mehr als die Hälfte.', 'Fast geschafft.', 'Die letzte Frage.'],
    left: 'Noch {n} Fragen',
    roles: { maria: 'Gründerin · Produkt & Marketing', karan: 'Gründer · Marketing & Vertrieb' },
    logos: 'Unsere Laufbahnen vor Kadanco, in Produkt, Marketing und Vertrieb.',
  },
};

// shared pieces (EN / DE)
const F = {
  en: {
    reply: ['We reply within one working day.', 'The operators who read your answers do the work. No junior team.', 'If we work together, work starts within two weeks.'],
    free: ['The audit is free.', 'You keep the findings, whether you work with us or not.', 'We use your answers only to prepare it.'],
    draft: ['Your answers are saved in this browser, so you can stop and come back.', 'Nothing is sent until you press Send on the last screen.'],
  },
  de: {
    reply: ['Wir antworten innerhalb eines Werktags.', 'Die Macher, die Ihre Antworten lesen, machen auch die Arbeit. Kein Junior-Team.', 'Wenn wir zusammenarbeiten, startet die Arbeit innerhalb von zwei Wochen.'],
    free: ['Das Audit ist kostenlos.', 'Die Ergebnisse gehören Ihnen, ob Sie mit uns arbeiten oder nicht.', 'Wir nutzen Ihre Antworten nur zur Vorbereitung.'],
    draft: ['Ihre Antworten werden in diesem Browser gespeichert, Sie können also jederzeit pausieren.', 'Erst mit „Senden“ auf der letzten Seite geht etwas an uns.'],
  },
};
// draft operator quotes, for owner sign-off
const Q = {
  en: {
    m1: 'Most users decide in the first few minutes whether a product is for them. That is where I start looking.',
    m2: 'I design it and I build it, so nothing gets lost between the design file and your code.',
    m3: 'A website should explain your offer before anyone has to book a call.',
    k1: 'Buyers scan your homepage for one reason to keep reading. Our job is to put it at the top.',
    k2: 'The founder usually has the best story in the company. It just never gets written down.',
    k3: 'Pipeline comes from doing the same simple things every week, long after they feel boring.',
    k4: 'Most founders sell better than anyone they hire. We turn how they sell into a process the team can run.',
    k5: 'If we are not the right fit, we tell you on the first call. Your quarter is worth more than a sales pitch.',
  },
  de: {
    m1: 'Die meisten Nutzer entscheiden in den ersten Minuten, ob ein Produkt zu ihnen passt. Genau dort fange ich an zu suchen.',
    m2: 'Ich gestalte es und baue es, damit zwischen Designdatei und Code nichts verloren geht.',
    m3: 'Eine Website sollte Ihr Angebot erklären, bevor jemand einen Termin buchen muss.',
    k1: 'Käufer überfliegen Ihre Startseite auf der Suche nach einem Grund weiterzulesen. Unsere Aufgabe ist, ihn ganz oben hinzustellen.',
    k2: 'Die Gründer haben meist die beste Geschichte im Unternehmen. Sie wird nur nie aufgeschrieben.',
    k3: 'Pipeline entsteht, wenn man dieselben einfachen Dinge jede Woche tut, auch wenn sie längst langweilig wirken.',
    k4: 'Die meisten Gründer verkaufen besser als jeder, den sie einstellen. Wir machen aus ihrer Art zu verkaufen einen Prozess, den das Team führen kann.',
    k5: 'Wenn wir nicht passen, sagen wir es im ersten Gespräch. Ihr Quartal ist mehr wert als ein Verkaufsgespräch.',
  },
};
const logos: Coach = { kind: 'logos' };

const nextAudit = {
  en: { title: 'What happens next', items: ['We read your brief and check the scope.', 'We reply within one working day to confirm and suggest times.', 'We run the audit and walk you through the findings.'] },
  de: { title: 'Wie es weitergeht', items: ['Wir lesen Ihr Briefing und prüfen den Umfang.', 'Wir antworten innerhalb eines Werktags und schlagen Termine vor.', 'Wir führen das Audit durch und gehen die Ergebnisse mit Ihnen durch.'] },
};

export const coach: Record<string, { en: CoachText; de: CoachText }> = {
  'ux-audit': {
    en: {
      intro: { title: 'What you get', items: ['A drop-off map from first visit to first result', 'Fixes ranked by impact and effort', 'A readout with the operators who did the audit'] },
      next: nextAudit.en,
      q: {
        name: { kind: 'facts', items: F.en.free },
        url: { kind: 'why', body: 'We start where your users start, so we see the product the way a new user does.' },
        surfaces: { kind: 'quote', who: 'maria', body: Q.en.m1 },
        depth: { kind: 'insight', body: 'Express suits a quick read before a redesign. Deep adds real people trying the task, which usually shows the problems nobody on the team can see any more.' },
        domain: { kind: 'why', body: 'Healthcare, fintech and shops each have their own rules for consent, trust and checkout. Picking yours switches on the right checks.' },
        personas: { kind: 'insight', body: 'Products that try to serve everyone on the first screen usually serve nobody. Naming one or two users keeps the findings sharp.' },
        goal: logos,
        action: { kind: 'why', body: 'Every finding is ranked by how much it gets in the way of this one action.' },
        pages: { kind: 'quote', who: 'maria', body: Q.en.m2 },
        problems: { kind: 'insight', body: 'Your hunches are useful. We check each one and tell you which ones the data backs up.' },
        analytics: { kind: 'why', body: 'Real behaviour turns opinions into facts. If you cannot share access, we work from recordings and tests.' },
        audience: { kind: 'facts', items: F.en.draft },
        email: { kind: 'facts', items: F.en.reply },
      },
    },
    de: {
      intro: { title: 'Was Sie bekommen', items: ['Eine Abbruchkarte vom ersten Besuch bis zum ersten Ergebnis', 'Maßnahmen nach Wirkung und Aufwand geordnet', 'Eine Besprechung mit den Machern, die das Audit gemacht haben'] },
      next: nextAudit.de,
      q: {
        name: { kind: 'facts', items: F.de.free },
        url: { kind: 'why', body: 'Wir beginnen dort, wo Ihre Nutzer beginnen, und sehen das Produkt so wie ein neuer Nutzer.' },
        surfaces: { kind: 'quote', who: 'maria', body: Q.de.m1 },
        depth: { kind: 'insight', body: 'Express passt für einen schnellen Blick vor einem Redesign. Tief bezieht echte Menschen bei der Aufgabe ein und zeigt meist die Probleme, die im Team niemand mehr sieht.' },
        domain: { kind: 'why', body: 'Gesundheit, Fintech und Shops haben eigene Regeln für Einwilligung, Vertrauen und Checkout. Ihre Wahl schaltet die passenden Prüfungen ein.' },
        personas: { kind: 'insight', body: 'Produkte, die auf dem ersten Screen alle bedienen wollen, bedienen meist niemanden. Ein oder zwei Nutzer halten die Befunde scharf.' },
        goal: logos,
        action: { kind: 'why', body: 'Jeder Befund wird danach geordnet, wie sehr er diese eine Aktion behindert.' },
        pages: { kind: 'quote', who: 'maria', body: Q.de.m2 },
        problems: { kind: 'insight', body: 'Ihre Vermutungen sind wertvoll. Wir prüfen jede und sagen Ihnen, welche die Daten stützen.' },
        analytics: { kind: 'why', body: 'Echtes Verhalten macht aus Meinungen Fakten. Ohne Zugang arbeiten wir mit Aufzeichnungen und Tests.' },
        audience: { kind: 'facts', items: F.de.draft },
        email: { kind: 'facts', items: F.de.reply },
      },
    },
  },

  'website-audit': {
    en: {
      intro: { title: 'What you get', items: ['A check of your story, design, speed and phone view', 'How you show up in Google and in AI answers', 'A ranked list of what to fix first'] },
      next: nextAudit.en,
      q: {
        name: { kind: 'facts', items: F.en.free },
        url: { kind: 'why', body: 'We look at your site the way a buyer does: on a phone, in a hurry, comparing you with two other tabs.' },
        project: { kind: 'quote', who: 'maria', body: Q.en.m3 },
        focus: { kind: 'insight', body: 'Search and AI answers are now where many buyers start. We check both, so you know if you are on the shortlist before anyone visits.' },
        buyers: { kind: 'why', body: 'The same page reads very differently to a CTO and to a head of finance. Knowing who you sell to tells us what the site has to say first.' },
        action: logos,
        goal: { kind: 'quote', who: 'karan', body: Q.en.k1 },
        cms: { kind: 'why', body: 'Your CMS decides how easily your team can change the site later. We take it into account before we suggest anything.' },
        references: { kind: 'insight', body: 'Sites you like tell us more about your taste than any brief. Competitor sites show where you can stand out.' },
        timing: { kind: 'facts', items: F.en.draft },
        email: { kind: 'facts', items: F.en.reply },
      },
    },
    de: {
      intro: { title: 'Was Sie bekommen', items: ['Ein Blick auf Botschaft, Design, Ladezeit und Handy-Ansicht', 'Wie Sie in Google und in KI-Antworten auftauchen', 'Eine geordnete Liste, was Sie zuerst ändern sollten'] },
      next: nextAudit.de,
      q: {
        name: { kind: 'facts', items: F.de.free },
        url: { kind: 'why', body: 'Wir sehen Ihre Website so wie ein Käufer: auf dem Handy, in Eile, mit zwei anderen Tabs zum Vergleich.' },
        project: { kind: 'quote', who: 'maria', body: Q.de.m3 },
        focus: { kind: 'insight', body: 'Suche und KI-Antworten sind heute für viele Käufer der Anfang. Wir prüfen beides, damit Sie wissen, ob Sie auf der Auswahlliste stehen, bevor jemand Ihre Seite besucht.' },
        buyers: { kind: 'why', body: 'Dieselbe Seite liest sich für eine CTO ganz anders als für einen Finanzleiter. Wenn wir wissen, an wen Sie verkaufen, wissen wir, was die Seite zuerst sagen muss.' },
        action: logos,
        goal: { kind: 'quote', who: 'karan', body: Q.de.k1 },
        cms: { kind: 'why', body: 'Ihr CMS entscheidet, wie leicht Ihr Team die Website später ändern kann. Das berücksichtigen wir, bevor wir etwas vorschlagen.' },
        references: { kind: 'insight', body: 'Websites, die Ihnen gefallen, sagen mehr über Ihren Geschmack als jedes Briefing. Seiten von Wettbewerbern zeigen, wo Sie sich abheben können.' },
        timing: { kind: 'facts', items: F.de.draft },
        email: { kind: 'facts', items: F.de.reply },
      },
    },
  },

  'marketing-audit': {
    en: {
      intro: { title: 'What you get', items: ['Where your message, brand and content lose buyers', 'How you compare with the names buyers weigh you against', 'The few changes that matter most, in order'] },
      next: nextAudit.en,
      q: {
        name: { kind: 'facts', items: F.en.free },
        url: { kind: 'why', body: 'Your website is where most buyers form their first opinion. We start there and follow the trail to your content and decks.' },
        focus: { kind: 'quote', who: 'karan', body: Q.en.k1 },
        buyers: { kind: 'insight', body: 'Clear positioning starts with who you are for. The narrower the answer, the easier it is for the right buyers to recognise themselves.' },
        market: { kind: 'why', body: 'DACH buyers expect different proof, tone and detail than buyers in the US. We judge your marketing against the market you sell to.' },
        stage: logos,
        goal: { kind: 'quote', who: 'karan', body: Q.en.k2 },
        competitors: { kind: 'insight', body: 'Buyers always compare. Knowing who they compare you with shows us where you blend in and where you can stand out.' },
        problems: { kind: 'facts', items: F.en.draft },
        email: { kind: 'facts', items: F.en.reply },
      },
    },
    de: {
      intro: { title: 'Was Sie bekommen', items: ['Wo Botschaft, Marke und Content Käufer verlieren', 'Wie Sie neben den Namen wirken, mit denen Käufer Sie vergleichen', 'Die wenigen Änderungen, die am meisten bringen, in Reihenfolge'] },
      next: nextAudit.de,
      q: {
        name: { kind: 'facts', items: F.de.free },
        url: { kind: 'why', body: 'Auf Ihrer Website bilden sich die meisten Käufer ihre erste Meinung. Dort beginnen wir und folgen der Spur zu Content und Decks.' },
        focus: { kind: 'quote', who: 'karan', body: Q.de.k1 },
        buyers: { kind: 'insight', body: 'Klare Positionierung beginnt damit, für wen Sie da sind. Je enger die Antwort, desto leichter erkennen sich die richtigen Käufer wieder.' },
        market: { kind: 'why', body: 'Käufer im DACH-Raum erwarten andere Belege, einen anderen Ton und mehr Details als in den USA. Wir messen Ihr Marketing an dem Markt, in dem Sie verkaufen.' },
        stage: logos,
        goal: { kind: 'quote', who: 'karan', body: Q.de.k2 },
        competitors: { kind: 'insight', body: 'Käufer vergleichen immer. Wenn wir wissen, mit wem, sehen wir, wo Sie untergehen und wo Sie sich abheben können.' },
        problems: { kind: 'facts', items: F.de.draft },
        email: { kind: 'facts', items: F.de.reply },
      },
    },
  },

  'pipeline-audit': {
    en: {
      intro: { title: 'What you get', items: ['Where deals stall between first touch and signature', 'A look at your CRM, data and sequences', 'The changes we would make first, and why'] },
      next: nextAudit.en,
      q: {
        name: { kind: 'facts', items: F.en.free },
        url: { kind: 'why', body: 'Your site and your offer tell us how buyers arrive at a first call. That is where most pipelines start to leak.' },
        offer: { kind: 'quote', who: 'karan', body: Q.en.k4 },
        deal: { kind: 'insight', body: 'Deal size decides the motion. Small deals need a short, repeatable path; large ones need several people convinced. We audit against yours.' },
        sources: logos,
        team: { kind: 'why', body: 'Who sells today tells us what to write down first, and how much of the pipeline still depends on the founder.' },
        crm: { kind: 'insight', body: 'Most pipeline problems show up in the CRM long before they show up in the numbers. A quick look usually tells us where to dig.' },
        goal: { kind: 'quote', who: 'karan', body: Q.en.k3 },
        problems: { kind: 'facts', items: F.en.draft },
        email: { kind: 'facts', items: F.en.reply },
      },
    },
    de: {
      intro: { title: 'Was Sie bekommen', items: ['Wo Deals zwischen Erstkontakt und Unterschrift stocken', 'Ein Blick auf CRM, Daten und Sequenzen', 'Die Änderungen, die wir zuerst machen würden, und warum'] },
      next: nextAudit.de,
      q: {
        name: { kind: 'facts', items: F.de.free },
        url: { kind: 'why', body: 'Website und Angebot zeigen uns, wie Käufer zum Erstgespräch kommen. Dort beginnen die meisten Pipelines zu lecken.' },
        offer: { kind: 'quote', who: 'karan', body: Q.de.k4 },
        deal: { kind: 'insight', body: 'Die Dealgröße bestimmt den Weg. Kleine Deals brauchen einen kurzen, wiederholbaren Ablauf, große müssen mehrere Menschen überzeugen. Wir prüfen gegen Ihren.' },
        sources: logos,
        team: { kind: 'why', body: 'Wer heute verkauft, zeigt uns, was wir zuerst aufschreiben und wie viel der Pipeline noch an den Gründern hängt.' },
        crm: { kind: 'insight', body: 'Die meisten Pipeline-Probleme zeigen sich im CRM lange bevor sie in den Zahlen auftauchen. Ein kurzer Blick zeigt meist, wo wir graben müssen.' },
        goal: { kind: 'quote', who: 'karan', body: Q.de.k3 },
        problems: { kind: 'facts', items: F.de.draft },
        email: { kind: 'facts', items: F.de.reply },
      },
    },
  },

  'strategy-call': {
    en: {
      intro: { title: 'What you get', items: ['A direct conversation with the operators', 'An honest view on whether we are the right fit', 'Clear next steps, if it makes sense'] },
      next: { title: 'What happens next', items: ['We read your message.', 'We reply within one working day and suggest times.', 'We talk it through on a call with the operators.'] },
      q: {
        goal: { kind: 'quote', who: 'karan', body: Q.en.k5 },
        name: logos,
        company: { kind: 'why', body: 'Knowing your company lets us come prepared, so the call is about your problem from the first minute.' },
        website: { kind: 'facts', items: F.en.draft },
        email: { kind: 'facts', items: F.en.reply },
      },
    },
    de: {
      intro: { title: 'Was Sie bekommen', items: ['Ein direktes Gespräch mit den Machern', 'Eine ehrliche Einschätzung, ob wir passen', 'Klare nächste Schritte, wenn es passt'] },
      next: { title: 'Wie es weitergeht', items: ['Wir lesen Ihre Nachricht.', 'Wir antworten innerhalb eines Werktags und schlagen Termine vor.', 'Wir sprechen alles in einem Gespräch mit den Machern durch.'] },
      q: {
        goal: { kind: 'quote', who: 'karan', body: Q.de.k5 },
        name: logos,
        company: { kind: 'why', body: 'Wenn wir Ihr Unternehmen kennen, kommen wir vorbereitet, und das Gespräch dreht sich ab der ersten Minute um Ihr Problem.' },
        website: { kind: 'facts', items: F.de.draft },
        email: { kind: 'facts', items: F.de.reply },
      },
    },
  },
};
