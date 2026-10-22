// src/data/use-case-pages/positioning-and-brand.ts
// Positioning and Brand (formerly From Feature List To Clear Offer). Combines
// design/261021_Kadanco_Use_Cases/use-case-clear-offer.html (positioning,
// message, sales story) with use-case-brand-design.html (visual identity,
// voice, guidelines, asset library), owner decision 2026-10-22: brand is one
// of the four steps. "X, not Y" lines rewritten (masterplan D29).
import type { UseCasePage } from './types';

export const positioningAndBrand: UseCasePage = {
  id: 'positioning-and-brand',
  dept: 'marketing',
  icon: 'score',
  stepIcons: ['door', 'posts', 'dice', 'docs'],
  en: {
    meta: {
      title: 'Positioning and Brand: Messaging, Brand Identity and a Clear Offer | Kadanco',
      description: 'Positioning, messaging and brand identity built around the outcome buyers pay for: value proposition, voice, logo and visual identity, sales story and brand guidelines. Run by two senior operators.',
    },
    crumb: 'Positioning and brand',
    dept: 'Marketing · Product · Sales',
    h1a: 'A Clear Offer.',
    h1b: 'Buyers Get It In Five Seconds.',
    lead: 'Positioning, messaging and a brand identity built around the outcome buyers pay for. When the promise, the voice and the visuals say the same thing, the value is obvious before anyone reads the fine print.',
    ctaPrimary: 'Get A Free Positioning Audit',
    ctaSecondary: 'Book A Strategy Call',
    situation: {
      eyebrow: 'The situation',
      h2a: 'You Were Selling Features.',
      h2b: 'Buyers Were Buying Outcomes.',
      lede: 'The site listed everything the product could do, the deck said something else, and every surface looked slightly different. Prospects had to work out for themselves why it mattered. Most did not bother.',
      problem: 'A long feature list, no clear promise and a different pitch on every page. The brand grew by accident: different fonts on the deck, the site and the app, and a logo that no longer fits the story. Buyers cannot tell at a glance what they get or why to choose you.',
      solve: 'We find the outcome buyers actually pay for and build everything around it: positioning, message and voice, a visual identity that carries it, and a sales story that matches. Then we hand over guidelines so your team keeps it consistent.',
    },
    inside: {
      eyebrow: "What's inside",
      h2: 'From A Feature List To A Brand That Sells.',
      lede: 'Four steps that turn what the product can do into a reason to buy, owned and shipped by the operators who scoped them.',
      steps: [
        { label: '01 · Positioning', title: 'The one thing you own', body: 'We define the outcome you win on, the buyer you win it for and what they compare you to, so every page points at the same promise instead of ten scattered features.' },
        { label: '02 · Message & voice', title: 'How the company speaks', body: 'A value proposition, key messages and a voice guide, so a headline, an onboarding email and a sales reply all sound like one company.' },
        { label: '03 · Visual identity', title: 'Logo, colour, type and system', body: 'A logo, palette, typography and layout system that look deliberate and work everywhere, from a pitch deck to a trade fair stand to a 48px favicon. We refine what is worth keeping.' },
        { label: '04 · Sales story', title: 'One story sales can repeat', body: 'A sales narrative and deck that match the site, so the pitch in the room carries the same promise that brought the buyer in.' },
      ],
    },
    also: {
      eyebrow: 'Also included',
      h2: 'So The Brand Holds After We Hand It Over.',
      items: [
        { title: 'Brand guidelines', body: 'A clear, usable guide so your team applies the brand consistently without asking us every time.' },
        { title: 'Asset library', body: 'Logos, templates and export-ready files, organised so the right version is always one click away.' },
        { title: 'Website and product', body: 'The brand feeds straight into the website and the product UI, so what buyers see outside matches what users get inside.' },
      ],
      tagsHead: 'What we deliver',
      tags: ['Positioning', 'Value proposition', 'Messaging framework', 'Tone of voice', 'Logo', 'Colour palette', 'Typography', 'Corporate design', 'Brand guidelines', 'Templates', 'Sales deck', 'Comparison page'],
    },
    outcomes: {
      eyebrow: 'What you get',
      h2: 'An Offer That Sells Before The Call.',
      items: [
        { big: '5 seconds', text: 'A visitor gets what you do and why it matters at a glance.' },
        { big: 'One promise', text: 'Site, deck, voice and visuals all say the same thing.' },
        { big: 'Deck to favicon', text: 'A brand system that holds up everywhere, with guidelines your team can run.' },
      ],
    },
    operator: {
      eyebrow: 'Who does the work',
      h2a: 'Story And Design',
      h2b: 'From The Same Two People.',
      body: 'Karan finds the positioning and writes the message and the sales story. Maria, a senior product engineer and design director, builds the visual identity and carries it into the website and the product. The two of them do the work themselves, with no hand-offs between a strategy firm, a design studio and a copywriter.',
      link: 'Meet the operators',
    },
    timeline: {
      eyebrow: 'The first 90 days',
      h2a: 'Find The Promise.',
      h2b: 'Then Make It Visible.',
      steps: [
        { n: '01', title: 'Map', body: 'We talk to customers, sales and the founders, look at what buyers compare you to, and agree the one outcome you win on.' },
        { n: '02', title: 'Build', body: 'We write the message and the voice, design the identity and rebuild the sales story around the promise.' },
        { n: '03', title: 'Ship', amp: '& improve', body: 'Work starts within two weeks. We roll the brand out across site, deck and product, then refine it with what real buyers respond to.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Questions, Answered.',
      items: [
        { q: 'Is this just new copy or a new logo?', a: 'Both are outputs. We start with positioning and build message, voice, visual identity and sales story from it.' },
        { q: 'Do you change the product?', a: 'We change how it is framed and sold, so the value you already deliver becomes obvious. Product changes are a separate use case.' },
        { q: 'Can you build on our existing brand?', a: 'Yes. If there is equity worth keeping, we refine it and tighten what pulls in different directions.' },
        { q: 'Do we get editable files?', a: 'Yes: an organised asset library, editable source files and guidelines so your team can apply the brand on its own.' },
        { q: 'Will sales and marketing match?', a: 'That is the point. Site, deck and sales story carry one promise, so the pitch never contradicts the page.' },
        { q: 'How long does it take?', a: 'Work starts within two weeks of kickoff. We agree the scope and the order of the steps in the first conversation.' },
      ],
    },
    cta: {
      h2a: 'Tell Us What',
      h2b: 'You Actually Sell.',
      lead: "We'll find the outcome buyers pay for, then build the offer, the voice and the brand around it.",
      button: 'Get A Free Positioning Audit',
    },
  },
  de: {
    meta: {
      title: 'Positionierung und Marke: Messaging, Markenidentität und ein klares Angebot | Kadanco',
      description: 'Positionierung, Messaging und Markenidentität rund um das Ergebnis, für das Käufer bezahlen: Wertversprechen, Tonalität, Logo und Corporate Design, Vertriebsstory und Markenrichtlinien. Umgesetzt von zwei erfahrenen Machern.',
    },
    crumb: 'Positionierung und Marke',
    dept: 'Marketing · Produkt · Vertrieb',
    h1a: 'Ein klares Angebot.',
    h1b: 'Käufer verstehen es in fünf Sekunden.',
    lead: 'Positionierung, Messaging und eine Markenidentität rund um das Ergebnis, für das Käufer bezahlen. Wenn Versprechen, Tonalität und Gestaltung dasselbe sagen, ist der Nutzen klar, bevor jemand das Kleingedruckte liest.',
    ctaPrimary: 'Kostenloses Positionierungs-Audit',
    ctaSecondary: 'Strategiegespräch buchen',
    situation: {
      eyebrow: 'Die Ausgangslage',
      h2a: 'Sie haben Features verkauft.',
      h2b: 'Käufer kaufen Ergebnisse.',
      lede: 'Die Website zählte alles auf, was das Produkt kann, das Deck sagte etwas anderes, und jeder Auftritt sah ein bisschen anders aus. Interessenten mussten selbst herausfinden, warum das wichtig ist. Die meisten haben es gelassen.',
      problem: 'Eine lange Feature-Liste, kein klares Versprechen und auf jeder Seite ein anderer Pitch. Die Marke ist zufällig gewachsen: andere Schriften im Deck, auf der Website und in der App, und ein Logo, das nicht mehr zur Geschichte passt. Käufer erkennen nicht auf einen Blick, was sie bekommen und warum sie Sie wählen sollten.',
      solve: 'Wir finden das Ergebnis, für das Käufer wirklich bezahlen, und bauen alles darum herum: Positionierung, Botschaft und Tonalität, eine visuelle Identität, die sie trägt, und eine passende Vertriebsstory. Dann übergeben wir Richtlinien, damit Ihr Team den Auftritt einheitlich hält.',
    },
    inside: {
      eyebrow: 'Was dazugehört',
      h2: 'Von der Feature-Liste zur Marke, die verkauft.',
      lede: 'Vier Schritte, die aus dem, was das Produkt kann, einen Kaufgrund machen, verantwortet und umgesetzt von denselben Machern, die sie geplant haben.',
      steps: [
        { label: '01 · Positionierung', title: 'Das eine, das Ihnen gehört', body: 'Wir legen das Ergebnis fest, mit dem Sie gewinnen, den Käufer, für den Sie es liefern, und womit er Sie vergleicht. So zeigt jede Seite auf dasselbe Versprechen statt auf zehn verstreute Features.' },
        { label: '02 · Botschaft & Tonalität', title: 'Wie das Unternehmen spricht', body: 'Ein Wertversprechen, Kernbotschaften und ein Tonalitäts-Leitfaden, damit Headline, Onboarding-Mail und Antwort des Vertriebs nach einem Unternehmen klingen.' },
        { label: '03 · Visuelle Identität', title: 'Logo, Farbe, Schrift und System', body: 'Logo, Farbpalette, Typografie und Layoutsystem, die durchdacht wirken und überall funktionieren, vom Pitch-Deck über den Messestand bis zum 48-Pixel-Favicon. Was sich lohnt, entwickeln wir weiter.' },
        { label: '04 · Vertriebsstory', title: 'Eine Geschichte, die der Vertrieb wiederholen kann', body: 'Eine Vertriebserzählung und ein Deck, die zur Website passen, damit der Pitch im Termin dasselbe Versprechen trägt, das den Käufer hergebracht hat.' },
      ],
    },
    also: {
      eyebrow: 'Ebenfalls enthalten',
      h2: 'Damit die Marke nach der Übergabe hält.',
      items: [
        { title: 'Markenrichtlinien', body: 'Ein klarer, nutzbarer Leitfaden, damit Ihr Team die Marke einheitlich anwendet, ohne jedes Mal nachzufragen.' },
        { title: 'Asset-Bibliothek', body: 'Logos, Vorlagen und exportfertige Dateien, so geordnet, dass die richtige Version immer einen Klick entfernt ist.' },
        { title: 'Website und Produkt', body: 'Die Marke fließt direkt in Website und Produktoberfläche, damit das, was Käufer außen sehen, zu dem passt, was Nutzer innen erleben.' },
      ],
      tagsHead: 'Was wir liefern',
      tags: ['Positionierung', 'Wertversprechen', 'Messaging-Framework', 'Tonalität', 'Logo', 'Farbpalette', 'Typografie', 'Corporate Design', 'Markenrichtlinien', 'Vorlagen', 'Sales-Deck', 'Vergleichsseite'],
    },
    outcomes: {
      eyebrow: 'Was Sie bekommen',
      h2: 'Ein Angebot, das vor dem Termin verkauft.',
      items: [
        { big: '5 Sekunden', text: 'Besucher verstehen auf einen Blick, was Sie tun und warum es zählt.' },
        { big: 'Ein Versprechen', text: 'Website, Deck, Tonalität und Gestaltung sagen dasselbe.' },
        { big: 'Vom Deck zum Favicon', text: 'Ein Markensystem, das überall hält, mit Richtlinien, die Ihr Team selbst anwendet.' },
      ],
    },
    operator: {
      eyebrow: 'Wer die Arbeit macht',
      h2a: 'Geschichte und Gestaltung',
      h2b: 'von denselben zwei Menschen.',
      body: 'Karan findet die Positionierung und schreibt Botschaft und Vertriebsstory. Maria, Senior Product Engineer und Design Director, entwickelt die visuelle Identität und bringt sie in Website und Produkt. Die beiden machen die Arbeit selbst, ohne Übergaben zwischen Strategieberatung, Designstudio und Texter.',
      link: 'Die Macher kennenlernen',
    },
    timeline: {
      eyebrow: 'Die ersten 90 Tage',
      h2a: 'Erst das Versprechen.',
      h2b: 'Dann sichtbar machen.',
      steps: [
        { n: '01', title: 'Verstehen', body: 'Wir sprechen mit Kunden, Vertrieb und Gründern, schauen, womit Käufer Sie vergleichen, und einigen uns auf das eine Ergebnis, mit dem Sie gewinnen.' },
        { n: '02', title: 'Aufbauen', body: 'Wir schreiben Botschaft und Tonalität, gestalten die Identität und bauen die Vertriebsstory um das Versprechen neu.' },
        { n: '03', title: 'Liefern', amp: '& verbessern', body: 'Die Arbeit startet innerhalb von zwei Wochen. Wir bringen die Marke auf Website, Deck und Produkt und schärfen sie anhand dessen, worauf echte Käufer reagieren.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Fragen, beantwortet.',
      items: [
        { q: 'Sind das nur neue Texte oder ein neues Logo?', a: 'Beides sind Ergebnisse. Wir beginnen mit der Positionierung und entwickeln daraus Botschaft, Tonalität, visuelle Identität und Vertriebsstory.' },
        { q: 'Ändern Sie das Produkt?', a: 'Wir ändern, wie es dargestellt und verkauft wird, damit der Nutzen, den Sie schon liefern, sichtbar wird. Änderungen am Produkt sind ein eigener Use Case.' },
        { q: 'Können Sie auf unserer bestehenden Marke aufbauen?', a: 'Ja. Wenn es Markenwert gibt, der sich lohnt, entwickeln wir ihn weiter und ziehen zusammen, was auseinanderläuft.' },
        { q: 'Bekommen wir bearbeitbare Dateien?', a: 'Ja: eine geordnete Asset-Bibliothek, bearbeitbare Quelldateien und Richtlinien, damit Ihr Team die Marke selbst anwenden kann.' },
        { q: 'Passen Vertrieb und Marketing danach zusammen?', a: 'Genau darum geht es. Website, Deck und Vertriebsstory tragen ein Versprechen, damit der Pitch nie der Seite widerspricht.' },
        { q: 'Wie lange dauert es?', a: 'Die Arbeit startet innerhalb von zwei Wochen nach dem Kickoff. Umfang und Reihenfolge der Schritte klären wir im ersten Gespräch.' },
      ],
    },
    cta: {
      h2a: 'Sagen Sie uns, was',
      h2b: 'Sie wirklich verkaufen.',
      lead: 'Wir finden das Ergebnis, für das Käufer bezahlen, und bauen Angebot, Tonalität und Marke darum herum.',
      button: 'Kostenloses Positionierungs-Audit',
    },
  },
};
