// src/pages/api/contact.js
export const POST = async ({ request }) => {
  // 1. Read the submission
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
    return new Response(JSON.stringify({ ok: false, error: 'Could not read your submission.' }), { status: 400 });
  }

  // 2. Honeypot (Catches bots instantly)
  if (data && (data._gotcha || data.company_url)) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  // 3. Validate inputs
  const name = String(data.name || '').trim();
  const email = String(data.email || '').trim();
  const company = String(data.company || '').trim();
  const website = String(data.website || '').trim();
  const goal = String(data.goal || '').trim();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk) {
    return new Response(JSON.stringify({ ok: false, error: 'Please add your name and a valid email.' }), { status: 422 });
  }

  // 4. Ensure API Key exists (In Astro, Cloudflare env vars are on import.meta.env)
  const PLUNK_KEY = import.meta.env.PLUNK_API_KEY;
  if (!PLUNK_KEY) {
    return new Response(JSON.stringify({ ok: false, error: 'Newsletter service is not configured yet.' }), { status: 500 });
  }

  // 5. Construct the Plunk Track Payload
  const plunkPayload = {
    event: 'contact-form-submitted',
    email: email,
    subscribed: true,
    data: {
      name: name,
      company: company,
      website: website || 'Not provided',
      goal: goal
    }
  };

  // 6. Send the lead to Plunk
  try {
    const res = await fetch('https://api.useplunk.com/v1/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PLUNK_KEY}`
      },
      body: JSON.stringify(plunkPayload)
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ ok: false, error: 'We could not deliver your message just now.' }), { status: 502 });
    }
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'We could not deliver your message just now.' }), { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};