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

    // 3a. The strategy call page (/strategy-call/) replaced the contact modal. It keeps
    //     the modal's Plunk event and fields, so existing Plunk workflows keep working.
    if (data && data.type === 'strategy-call') {
      const a = data.answers || {};
      data = { name: a.name, email: a.email || data.email, company: a.company, website: a.website, goal: a.goal };
    }

    // 3. Audit intakes (the full-screen forms, e.g. /ux-audit/) send a brief.
    //    They post { type, email, name, answers, brief }; `type` is the intake id.
    const INTAKES = ['ux-audit', 'website-audit', 'marketing-audit', 'pipeline-audit'];
    if (data && INTAKES.includes(data.type)) {
      const email = String(data.email || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return json({ ok: false, error: 'Please add a valid email.' }, 422);
      }
      const apiKey = env.PLUNK_API_KEY ? String(env.PLUNK_API_KEY).trim() : '';
      if (!apiKey) return json({ ok: false, error: 'The form service is not configured yet.' }, 400);
      // keep the payload small and flat: strings only, capped in length
      const answers = {};
      for (const [k, v] of Object.entries(data.answers || {}).slice(0, 40)) {
        answers[String(k).slice(0, 40)] = (Array.isArray(v) ? v.join(', ') : String(v ?? '')).slice(0, 2000);
      }
      const res = await fetch('https://next-api.useplunk.com/v1/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
        body: JSON.stringify({ event: `${data.type}-submitted`, email, data: { ...answers, brief: String(data.brief || '').slice(0, 8000) } }),
      });
      if (!res.ok) return json({ ok: false, error: 'We could not deliver your brief just now. Please try again.' }, 400);
      return json({ ok: true });
    }

    // 4. Validate inputs (contact modal)
    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const company = String(data.company || '').trim();
    const website = String(data.website || '').trim();
    const goal = String(data.goal || '').trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk) {
      return json({ ok: false, error: 'Please add your name and a valid email.' }, 422);
    }

    // 5. Ensure API Key exists and strip hidden spaces/newlines
    const apiKey = env.PLUNK_API_KEY ? String(env.PLUNK_API_KEY).trim() : '';
    
    if (!apiKey) {
      return json({ ok: false, error: 'Newsletter service is not configured yet.' }, 400);
    }

    // 6. Construct the Plunk Track Payload
    const plunkPayload = {
      event: 'contact-form-submitted',
      email: email,
      data: {
        name: name,
        company: company,
        website: website || 'Not provided',
        goal: goal
      }
    };

    // 7. Send the lead to Plunk's NEW v2 API server
    const res = await fetch('https://next-api.useplunk.com/v1/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(plunkPayload)
    });

    if (!res.ok) {
      // Show clean error message instead of raw JSON
      return json({ ok: false, error: 'We could not deliver your message just now. Please try again.' }, 400);
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