// src/data/use-case-pages/content-production.ts
// Content Production (formerly Founder-led content). Combines the design file
// design/261021_Kadanco_Use_Cases/use-case-founder-content.html (voice,
// publishing, pipeline from content) with the previous page (why founder
// content stalls, SEO and GEO, warmed outbound, CRM tracking, first 90 days)
// and adds sales collateral (decks, one-pagers, case studies), owner decision
// 2026-10-22. "X, not Y" lines from both sources rewritten (masterplan D29).
import type { UseCasePage } from './types';

export const contentProduction: UseCasePage = {
  id: 'content-production',
  dept: 'marketing',
  icon: 'posts',
  stepIcons: ['rocket', 'posts', 'seo', 'docs'],
  en: {
    meta: {
      title: 'Content Production: Founder-Led LinkedIn, Articles, Sales Decks and One-Pagers | Kadanco',
      description: "Content production in the founder's voice: LinkedIn ghostwriting, SEO and GEO articles, sales decks, one-pagers and case studies, tracked through to pipeline. Run by two senior operators.",
    },
    crumb: 'Content production',
    dept: 'Marketing · Sales',
    h1a: 'Content That Sells.',
    h1b: 'In Your Voice, Every Week.',
    lead: "LinkedIn posts in the founder's voice, articles that rank in search and AI answers, and the sales decks and one-pagers your team sends after the call. One team writes it all, tells one story, and tracks it through to pipeline.",
    ctaPrimary: 'Get A Free Content Audit',
    ctaSecondary: 'Book A Strategy Call',
    situation: {
      eyebrow: 'The situation',
      h2a: 'The Founder Had The Insight.',
      h2b: 'It Never Got Published.',
      lede: 'Everyone agreed the founder should be posting. Between running the company and shipping, it happened twice a quarter, and the sales deck told a different story anyway.',
      problem: 'Sporadic posts in an inconsistent voice, a blog nobody updates, and a deck that was last touched two pitches ago. Nothing connects a post to a booked meeting, and reach, when it comes, never turns into pipeline.',
      solve: "We run the whole content operation around the founder: the angle, the weekly posts, the articles and the sales material, all written in their voice and telling the same story. Then we track it from the first post to the signed deal.",
    },
    why: {
      eyebrow: 'Why founder content stalls',
      h2a: 'Most Founders Start.',
      h2b: 'Few Keep Going.',
      items: [
        { title: 'It runs for a month', body: 'You post consistently until the first busy week. Then it stops, and the audience you were building forgets you.' },
        { title: 'It gets likes and no meetings', body: 'Engagement looks healthy and nothing reaches the pipeline, because nobody connected the posts to the accounts you want.' },
        { title: 'It stops sounding like you', body: 'Hand it to a junior or an agency and it flattens into marketing language. Buyers notice, and credibility is the whole point.' },
      ],
    },
    inside: {
      eyebrow: "What's inside",
      h2: 'Four Parts. One Story.',
      lede: "Each part is written by the operators who found the angle, so a LinkedIn post, an article and a sales deck all sound like the same company.",
      steps: [
        { label: '01 · Voice & angle', title: "The founder's real point of view", body: 'We interview the founder properly, pull out the opinions and stories they already have, and agree the few arguments worth repeating until the market remembers them.' },
        { label: '02 · Founder publishing', title: 'LinkedIn, every week', body: 'We draft, edit and schedule posts in the founder\'s voice on a steady cadence. The founder reviews and approves; we handle everything around it, week after week.' },
        { label: '03 · Articles', title: 'Found in search and AI answers', body: 'The same ideas turned into articles and guides built for SEO and GEO, so one interview earns traffic for months and gets quoted when buyers ask an AI.' },
        { label: '04 · Sales material', title: 'Decks and one-pagers that match', body: 'Sales decks, one-pagers and case studies that carry the same story as the content, so the pitch in the room continues what brought the buyer in.' },
      ],
    },
    also: {
      eyebrow: 'Also included',
      h2: 'So Content Turns Into Pipeline.',
      items: [
        { title: 'Outbound, warmed', body: 'Outreach that lands after the account has already seen your posts, so the first message continues a conversation.' },
        { title: 'Tracking to pipeline', body: 'Content tied to accounts, meetings and deals in your CRM, so you can see which pieces produced revenue.' },
      ],
      tagsHead: 'What we produce',
      tags: ['LinkedIn posts', 'Ghostwriting', 'Articles', 'Guides', 'SEO & GEO', 'Newsletters', 'Sales decks', 'One-pagers', 'Case studies', 'Messaging framework'],
    },
    outcomes: {
      eyebrow: 'What you get',
      h2: 'Reach You Can Measure In Meetings.',
      items: [
        { big: 'Weekly', text: 'A publishing cadence that keeps running, whether or not the founder had time that week.' },
        { big: 'In-voice', text: 'Content that sounds like the founder, from the first post to the last slide.' },
        { big: 'One story', text: 'Posts, articles, decks and one-pagers that say the same thing, tracked to booked meetings.' },
      ],
    },
    timeline: {
      eyebrow: 'The first 90 days',
      h2a: 'Publishing Within Two Weeks.',
      h2b: 'Then Every Week.',
      steps: [
        { n: '01', title: 'Map', body: 'We interview you properly, pull out the point of view you already have, and agree the arguments worth owning.' },
        { n: '02', title: 'Build', body: 'We build the messaging, the content plan, the sales material and the tracking, then write the first weeks ahead so publishing never depends on a free afternoon.' },
        { n: '03', title: 'Ship', amp: '& improve', body: 'You approve, we publish, every week. Then we read what converted and write more of it.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Questions, Answered.',
      items: [
        { q: 'How much founder time is needed?', a: 'A short recurring interview and review slot. We do the drafting, editing, scheduling and follow-up around it.' },
        { q: 'What if the founder is not a writer?', a: 'They do not need to be. We draft in their voice from their raw thinking; they approve.' },
        { q: 'Which platforms?', a: 'Where your buyers are: usually LinkedIn, your own blog and a newsletter. We focus on a few channels and run them properly.' },
        { q: 'Is this about likes and views?', a: 'Likes and views are a side effect. We track content through to booked meetings and pipeline in your CRM.' },
        { q: 'Do you write sales decks on their own?', a: 'Yes. Many teams start with the deck and one-pagers, then add publishing once the story is clear.' },
        { q: 'Can you write in German?', a: 'Yes. We produce content in English and native German, which is also how we run DACH market entry.' },
      ],
    },
    cta: {
      h2a: 'Tell Us What',
      h2b: 'Your Founder Actually Thinks.',
      lead: "We'll turn it into posts, articles and sales material that publish every week and a pipeline you can measure.",
      button: 'Get A Free Content Audit',
    },
  },
  de: {
    meta: {
      title: 'Content-Produktion: Founder-Content, Artikel, Sales-Decks und One-Pager | Kadanco',
      description: 'Content-Produktion in der Stimme der Gründer: LinkedIn-Ghostwriting, Artikel für SEO und GEO, Sales-Decks, One-Pager und Case Studies, gemessen bis zur Pipeline. Umgesetzt von zwei erfahrenen Machern.',
    },
    crumb: 'Content-Produktion',
    dept: 'Marketing · Vertrieb',
    h1a: 'Content, der verkauft.',
    h1b: 'In Ihrer Stimme, jede Woche.',
    lead: 'LinkedIn-Posts in der Stimme der Gründer, Artikel, die in der Suche und in KI-Antworten auftauchen, und die Sales-Decks und One-Pager, die Ihr Team nach dem Termin verschickt. Ein Team schreibt alles, erzählt eine Geschichte und misst sie bis zur Pipeline.',
    ctaPrimary: 'Kostenloses Content-Audit',
    ctaSecondary: 'Strategiegespräch buchen',
    situation: {
      eyebrow: 'Die Ausgangslage',
      h2a: 'Die Gründer hatten die Einsicht.',
      h2b: 'Veröffentlicht wurde sie nie.',
      lede: 'Alle waren sich einig, dass die Gründer posten sollten. Zwischen Unternehmensführung und Produkt passierte es zweimal im Quartal, und das Sales-Deck erzählte ohnehin eine andere Geschichte.',
      problem: 'Vereinzelte Posts in wechselnder Tonalität, ein Blog, den niemand pflegt, und ein Deck, das seit zwei Pitches niemand angefasst hat. Nichts verbindet einen Post mit einem gebuchten Termin, und Reichweite wird, wenn sie kommt, nie zu Pipeline.',
      solve: 'Wir betreiben die gesamte Content-Arbeit rund um die Gründer: den Blickwinkel, die wöchentlichen Posts, die Artikel und die Vertriebsunterlagen, alles in ihrer Stimme und mit derselben Geschichte. Dann messen wir sie vom ersten Post bis zum unterschriebenen Vertrag.',
    },
    why: {
      eyebrow: 'Warum Founder-Content ins Stocken gerät',
      h2a: 'Die meisten Gründer fangen an.',
      h2b: 'Wenige bleiben dran.',
      items: [
        { title: 'Es läuft einen Monat', body: 'Sie posten regelmäßig bis zur ersten vollen Woche. Dann hört es auf, und das Publikum, das Sie aufgebaut haben, vergisst Sie.' },
        { title: 'Es bringt Likes und keine Termine', body: 'Die Interaktion sieht gut aus, aber nichts kommt in der Pipeline an, weil niemand die Posts mit Ihren Wunschaccounts verbunden hat.' },
        { title: 'Es klingt nicht mehr nach Ihnen', body: 'Geben Sie es an Junioren oder eine Agentur, wird es zu Marketingsprache. Käufer merken das, und Glaubwürdigkeit ist der ganze Sinn.' },
      ],
    },
    inside: {
      eyebrow: 'Was dazugehört',
      h2: 'Vier Teile. Eine Geschichte.',
      lede: 'Jeder Teil wird von den Machern geschrieben, die den Blickwinkel gefunden haben. So klingen LinkedIn-Post, Artikel und Sales-Deck nach demselben Unternehmen.',
      steps: [
        { label: '01 · Stimme & Blickwinkel', title: 'Die echte Haltung der Gründer', body: 'Wir interviewen die Gründer gründlich, holen die Meinungen und Geschichten heraus, die sie ohnehin haben, und einigen uns auf die wenigen Argumente, die sich der Markt merken soll.' },
        { label: '02 · Founder-Publishing', title: 'LinkedIn, jede Woche', body: 'Wir entwerfen, redigieren und planen Posts in der Stimme der Gründer in festem Rhythmus. Die Gründer prüfen und geben frei; um alles andere kümmern wir uns, Woche für Woche.' },
        { label: '03 · Artikel', title: 'Gefunden in Suche und KI-Antworten', body: 'Dieselben Ideen als Artikel und Leitfäden für SEO und GEO, damit ein Interview monatelang Traffic bringt und zitiert wird, wenn Käufer eine KI fragen.' },
        { label: '04 · Vertriebsunterlagen', title: 'Decks und One-Pager, die passen', body: 'Sales-Decks, One-Pager und Case Studies mit derselben Geschichte wie der Content, damit der Pitch im Termin dort weitermacht, wo der Content aufgehört hat.' },
      ],
    },
    also: {
      eyebrow: 'Ebenfalls enthalten',
      h2: 'Damit aus Content Pipeline wird.',
      items: [
        { title: 'Vorgewärmtes Outbound', body: 'Ansprache, die kommt, nachdem der Account Ihre Posts schon gesehen hat. Die erste Nachricht setzt ein Gespräch fort.' },
        { title: 'Messung bis zur Pipeline', body: 'Content verknüpft mit Accounts, Terminen und Deals in Ihrem CRM, damit Sie sehen, welche Inhalte Umsatz gebracht haben.' },
      ],
      tagsHead: 'Was wir produzieren',
      tags: ['LinkedIn-Posts', 'Ghostwriting', 'Artikel', 'Leitfäden', 'SEO & GEO', 'Newsletter', 'Sales-Decks', 'One-Pager', 'Case Studies', 'Messaging-Framework'],
    },
    outcomes: {
      eyebrow: 'Was Sie bekommen',
      h2: 'Reichweite, die Sie in Terminen messen.',
      items: [
        { big: 'Wöchentlich', text: 'Ein Publishing-Rhythmus, der weiterläuft, auch wenn die Gründer in der Woche keine Zeit hatten.' },
        { big: 'Ihre Stimme', text: 'Content, der nach den Gründern klingt, vom ersten Post bis zur letzten Folie.' },
        { big: 'Eine Geschichte', text: 'Posts, Artikel, Decks und One-Pager mit derselben Aussage, gemessen bis zum gebuchten Termin.' },
      ],
    },
    timeline: {
      eyebrow: 'Die ersten 90 Tage',
      h2a: 'Live innerhalb von zwei Wochen.',
      h2b: 'Dann jede Woche.',
      steps: [
        { n: '01', title: 'Verstehen', body: 'Wir interviewen Sie gründlich, holen die Haltung heraus, die Sie ohnehin haben, und einigen uns auf die Argumente, die Sie besetzen wollen.' },
        { n: '02', title: 'Aufbauen', body: 'Wir bauen Messaging, Content-Plan, Vertriebsunterlagen und Tracking und schreiben die ersten Wochen vor, damit das Publishing nie von einem freien Nachmittag abhängt.' },
        { n: '03', title: 'Liefern', amp: '& verbessern', body: 'Sie geben frei, wir veröffentlichen, jede Woche. Danach lesen wir, was konvertiert hat, und schreiben mehr davon.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Fragen, beantwortet.',
      items: [
        { q: 'Wie viel Zeit brauchen die Gründer?', a: 'Einen kurzen, regelmäßigen Termin für Interview und Freigabe. Entwurf, Redaktion, Planung und Follow-up übernehmen wir.' },
        { q: 'Und wenn die Gründer nicht gern schreiben?', a: 'Müssen sie nicht. Wir schreiben in ihrer Stimme aus ihren Gedanken; sie geben frei.' },
        { q: 'Welche Kanäle?', a: 'Dort, wo Ihre Käufer sind: meist LinkedIn, Ihr eigener Blog und ein Newsletter. Wir konzentrieren uns auf wenige Kanäle und bespielen sie richtig.' },
        { q: 'Geht es um Likes und Reichweite?', a: 'Likes und Reichweite kommen nebenbei. Wir messen Content bis zu gebuchten Terminen und Pipeline in Ihrem CRM.' },
        { q: 'Schreiben Sie auch nur Sales-Decks?', a: 'Ja. Viele Teams starten mit Deck und One-Pagern und nehmen das Publishing dazu, sobald die Geschichte steht.' },
        { q: 'Schreiben Sie auf Deutsch?', a: 'Ja. Wir produzieren Content auf Englisch und in muttersprachlichem Deutsch, so wie beim DACH-Markteintritt.' },
      ],
    },
    cta: {
      h2a: 'Sagen Sie uns, was',
      h2b: 'Ihre Gründer wirklich denken.',
      lead: 'Wir machen daraus Posts, Artikel und Vertriebsunterlagen, die jede Woche erscheinen, und eine Pipeline, die Sie messen können.',
      button: 'Kostenloses Content-Audit',
    },
  },
};
