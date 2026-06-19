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

// aliases is stored as a string in some entries and an array in others. Normalize both.
function aliasLine(aliases: string | string[]): string {
  let list: string[] = [];
  if (Array.isArray(aliases)) list = aliases;
  else if (typeof aliases === 'string' && aliases.trim()) list = aliases.split(',').map((s) => s.trim());
  list = list.filter(Boolean);
  return list.length ? `Also known as: ${list.join(', ')}.\n` : '';
}

const header = `# Kadanco

> Kadanco is a two-person senior B2B marketing firm in Berlin that owns your marketing strategy and runs the execution itself: an embedded marketing function for post-product-market-fit B2B companies (roughly EUR 2 to 5M in revenue) with no in-house marketing leader, and a strong German and Dutch language edge into the DACH and Benelux markets.

The same two senior operators who set the strategy do the hands-on work, with no junior handoffs and no agency layer. Engagements cover the full marketing stack: positioning and messaging, brand and website, content, SEO and GEO, paid media, events, demand generation, and revenue operations. Kadanco works with a small number of clients at a time. Its principle is results over activity.`;

export const GET: APIRoute = () => {
  // Group terms by category, categories sorted by size desc, terms alphabetical.
  const byCat: Record<string, Entry[]> = {};
  for (const e of entries) (byCat[e.category] ??= []).push(e);
  const cats = Object.keys(byCat).sort((a, b) => byCat[b].length - byCat[a].length || a.localeCompare(b));

  const sections = cats.map((cat) => {
    const terms = byCat[cat].slice().sort((a, b) => a.term.localeCompare(b.term));
    const blocks = terms.map((e) => {
      const al = aliasLine(e.aliases);
      const formula = e.formula ? `How it is calculated: ${e.formula}\n` : '';
      const euNote = e.euNote ? `In the European market: ${e.euNote}\n` : '';
      return `### ${e.term}
${al}${e.oneLiner}

Why it matters: ${e.whyItMatters}
${formula}What good looks like: ${e.benchmark}
Operator's take: ${e.operatorTake}
${euNote}`.trimEnd();
    });
    return `## ${cat} (${terms.length} terms)\n\n${blocks.join('\n\n')}`;
  });

  const total = entries.length;
  const body = `${header}

This file expands the full Kadanco marketing glossary: ${total} terms across ${cats.length} categories. Each entry includes a definition, why it matters, how it is calculated where applicable, what good looks like, an operator's take, and notes for the European market where relevant. The browsable version is at ${SITE}/glossary/.

${sections.join('\n\n')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};