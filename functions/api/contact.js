// functions/api/contact.js
// Cloudflare Pages Function — handles the Kadanco contact form.
// It pings Slack OR Discord (auto-detected from the URL).
//
// Setup: add an encrypted environment variable named WEBHOOK_URL to your
// Cloudflare Pages project (Settings -> Variables and Secrets), set to your
// Slack or Discord incoming-webhook URL. See README for the click-path.

export async function onRequestPost(context) {
  const { request, env } = context;

  // 1. Read the submission (JSON from the site; form-encoded as a fallback).
  let data;
  try {
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const form = await request.formData();
      data = Object.fromEntries(form.entries());
    }
  } catch {
    return json({ ok: false, error: 'Could not read your submission.' }, 400);
  }

  // 2. Honeypot: real people leave this hidden field empty. Bots fill it.
  //    Pretend everything is fine, but send nothing.
  if (data && (data._gotcha || data.company_url)) {
    return json({ ok: true });
  }

  // 3. Validate.
  const name = String(data.name || '').trim();
  const email = String(data.email || '').trim();
  const company = String(data.company || '').trim();
  const website = String(data.website || '').trim();
  const goal = String(data.goal || '').trim();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk) {
    return json({ ok: false, error: 'Please add your name and a valid email.' }, 422);
  }

  // 4. Make sure the webhook is configured.
  const url = env.WEBHOOK_URL;
  if (!url) {
    return json({ ok: false, error: 'The form is not configured yet.' }, 500);
  }

  // 5. Build the message and send it in the right shape.
  const rows = [
    ['Name', name],
    ['Email', email],
    ['Company', company],
    ['Website', website],
    ['Goal', goal],
  ].filter(([, v]) => v);

  const isDiscord =
    url.includes('discord.com/api/webhooks') || url.includes('discordapp.com/api/webhooks');

  let payload;
  if (isDiscord) {
    const body = rows.map(([k, v]) => `**${k}:** ${v}`).join('\n');
    payload = { content: `**New Kadanco enquiry**\n${body}` };
  } else {
    const body = rows.map(([k, v]) => `*${k}:* ${v}`).join('\n');
    payload = { text: `*New Kadanco enquiry*\n${body}` };
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return json({ ok: false, error: 'We could not deliver your message just now.' }, 502);
    }
  } catch {
    return json({ ok: false, error: 'We could not deliver your message just now.' }, 502);
  }

  return json({ ok: true });
}

// Anything other than POST gets a clean response.
export async function onRequest(context) {
  if (context.request.method === 'POST') return onRequestPost(context);
  return json({ ok: false, error: 'Method not allowed.' }, 405);
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
