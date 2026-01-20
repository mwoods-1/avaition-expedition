// Cloudflare Worker for sending emails via SendGrid
// Deploy this as a separate Worker at: email-sender.aviation-expeditions.workers.dev

export default {
  async fetch(request, env) {
    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const { to, from, replyTo, subject, text } = await request.json();

      // Use SendGrid (free tier: 100 emails/day)
      // Or use Mailgun, Postmark, etc.
      const SENDGRID_API_KEY = env.SENDGRID_API_KEY;

      if (!SENDGRID_API_KEY) {
        return new Response(JSON.stringify({ error: 'SendGrid API key not configured' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: from },
          reply_to: { email: replyTo },
          subject: subject,
          content: [{ type: 'text/plain', value: text }],
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('SendGrid error:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};
