// Cloudflare Pages Function for flight inquiry form
// Uses Cloudflare Workers Email (free)
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

    // Send email using Cloudflare Workers Email
    const response = await context.env.send_email.post({
      personalizations: [
        {
          to: [{ email: CONTACT_EMAIL }],
          reply_to: { email: email, name: name }
        }
      ],
      from: {
        email: 'noreply@aviation-expeditions.com',
        name: 'Aviation Expeditions'
      },
      subject: `New Flight Inquiry: ${tourLabel}`,
      content: [
        {
          type: 'text/plain',
          value: emailBody
        }
      ]
    });

    if (response.status >= 400) {
      console.error('Email sending error:', response);
      return new Response(
        JSON.stringify({
          error: 'Failed to send email. Please try again or contact us directly.'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Email sent successfully');

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
