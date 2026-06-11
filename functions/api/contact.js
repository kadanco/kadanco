export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // 1. Read the submission
    let data;
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const form = await request.formData();
      data = Object.fromEntries(form.entries());
    }

    // 2. Honeypot (Catches bots)
    if (data && (data._gotcha || data.company_url)) {
      return json({ ok: true });
    }

    // 3. Validate inputs
    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const company = String(data.company || '').trim();
    const website = String(data.website || '').trim();
    const goal = String(data.goal || '').trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk) {
      return json({ ok: false, error: 'Please add your name and a valid email.' }, 422);
    }

    // 4. Ensure API Key exists and strip hidden spaces/newlines
    const apiKey = env.PLUNK_API_KEY ? String(env.PLUNK_API_KEY).trim() : '';
    
    if (!apiKey) {
      return json({ ok: false, error: 'Newsletter service is not configured yet.' }, 400);
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
    const res = await fetch('https://api.useplunk.com/v1/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(plunkPayload)
    });

    if (!res.ok) {
      // DEBUG: Show the exact Plunk rejection reason
      const errText = await res.text();
      return json({ ok: false, error: `Plunk Error ${res.status}: ${errText}` }, 400);
    }

    return json({ ok: true });

  } catch (err) {
    return json({ ok: false, error: 'Could not read your submission.' }, 400);
  }
}

// Block GET requests
export async function onRequest(context) {
  if (context.request.method === 'POST') return onRequestPost(context);
  return json({ ok: false, error: 'Method not allowed.' }, 405);
}

// Helper to format responses
function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}