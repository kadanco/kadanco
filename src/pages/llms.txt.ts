import type { APIRoute } from 'astro';
import glossary from '../data/glossary.json';

type Entry = {
  slug: string;
  term: string;
  aliases: string | string[];
  category: string;
  oneLiner: string;
  whyItMatters: string;
  benchmark: string;
  operatorTake: string;
  euNote?: string;
  formula?: string;
  related: string[];
};

const SITE = 'https://kadanco.com';
const entries = glossary as Entry[];

// Category name -> count, sorted by count desc then name.
function categoryCounts(): [string, number][] {
  const counts: Record<string, number> = {};
  for (const e of entries) counts[e.category] = (counts[e.category] ?? 0) + 1;
  return Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

const header = `# Kadanco

> Kadanco is a two-person senior B2B marketing firm in Berlin that owns your marketing strategy and runs the execution itself: an embedded marketing function for post-product-market-fit B2B companies (roughly EUR 2 to 5M in revenue) with no in-house marketing leader, and a strong German and Dutch language edge into the DACH and Benelux markets.

The same two senior operators who set the strategy do the hands-on work, with no junior handoffs and no agency layer. Engagements cover the full marketing stack: positioning and messaging, brand and website, content, SEO and GEO, paid media, events, demand generation, and revenue operations. Kadanco works with a small number of clients at a time. Its principle is results over activity.`;

export const GET: APIRoute = () => {
  const cats = categoryCounts();
  const total = entries.length;
  const catList = cats.map(([c, n]) => `- ${c} (${n} terms)`).join('\n');

  const body = `${header}

## Core pages

- [Home](${SITE}/): What Kadanco does, the three offers (Product Design Engineering, Product Marketing Engineering, Sales Engineering), and who runs it.
- [Marketing glossary](${SITE}/glossary/): A reference library of ${total} B2B marketing terms across ${cats.length} categories. Each entry has a plain definition, why it matters, what good looks like, and an operator's take.
- [Imprint and privacy](${SITE}/imprint/): Legal information (Impressum) and privacy policy.

## Glossary coverage

The glossary spans ${cats.length} categories:

${catList}

## Optional

- [Full glossary as plain text](${SITE}/llms-full.txt): Every glossary term expanded inline (definition, why it matters, formula where relevant, benchmark, operator's take, and European-market notes) so an AI can ingest the full reference in a single request.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};