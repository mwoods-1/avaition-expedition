/**
 * Cloudflare Email Worker
 * This worker receives POST requests from the inquiry form
 * and sends emails using Cloudflare's native Email API
 */

export default {
  async fetch(request, env) {
    // CORS headers for Pages Function to call this worker
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return new Response('Method not allowed', {
        status: 405,
        headers: corsHeaders
      });
    }

    try {
      const { to, from, replyTo, subject, text } = await request.json();

      // Send email using the SEND_EMAIL binding
      await env.SEND_EMAIL.send({
        from: from,
        to: to,
        subject: subject,
        headers: {
          'Reply-To': replyTo,
        },
        text: text,
      });

      return new Response(
        JSON.stringify({ success: true, message: 'Email sent' }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.error('Email worker error:', error);
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
  },
};
