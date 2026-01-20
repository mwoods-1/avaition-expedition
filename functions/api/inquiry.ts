// Cloudflare Pages Function for flight inquiry form
// Uses Cloudflare Email API (free)
export async function onRequestPost(context: any) {
  try {
    const body = await context.request.json();
    const { name, email, phone, tourType, preferredDate, passengers, experience, specialRequests } = body;

    // Map tour type values to full labels
    const tourLabels: Record<string, string> = {
      'gates': 'Gates of the Arctic National Park',
      'kobuk': 'Kobuk Valley National Park',
      'arctic-circle': 'Arctic Circle Flight',
      'denali': 'Denali Vista',
      'white-mountains': 'White Mountains & Hotsprings',
      'custom': 'Custom Adventure'
    };
    const tourLabel = tourLabels[tourType] || tourType;

    // Validate required fields
    if (!name || !email || !phone || !tourType || !passengers) {
      return new Response(JSON.stringify({ error: 'All required fields must be filled' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create email body
    const emailBody = `
New Flight Inquiry from Aviation Expeditions Website

Name: ${name}
Email: ${email}
Phone: ${phone}

Tour Type: ${tourLabel}
Preferred Date: ${preferredDate || 'Not specified'}
Number of Passengers: ${passengers}
Flying Experience: ${experience || 'Not specified'}

Special Requests:
${specialRequests || 'None'}

---
This email was sent from the flight inquiry form at aviationexpeditions.com
Reply directly to this email to respond to ${name} at ${email}
    `.trim();

    // Get contact email from environment or use default
    const CONTACT_EMAIL = context.env.CONTACT_EMAIL || 'inquiries@aviation-expeditions.com';
    const SENDER_EMAIL = context.env.SENDER_EMAIL || 'noreply@aviation-expeditions.com';

    // Send email using Cloudflare Mailchannels API
    try {
      const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: CONTACT_EMAIL }],
              reply_to: { email: email, name: name },
            },
          ],
          from: {
            email: SENDER_EMAIL,
            name: 'Aviation Expeditions',
          },
          subject: `New Flight Inquiry: ${tourLabel}`,
          content: [
            {
              type: 'text/plain',
              value: emailBody,
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Mailchannels error:', errorData);
        throw new Error(`Mailchannels returned ${response.status}`);
      }

      console.log('Email sent successfully via Mailchannels');
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return new Response(
        JSON.stringify({
          error: 'Email service temporarily unavailable. Please try again.'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Inquiry sent successfully!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Inquiry form error:', error);
    return new Response(
      JSON.stringify({
        error: 'An unexpected error occurred. Please try again or contact us directly.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
