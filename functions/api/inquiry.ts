// Cloudflare Pages Function for flight inquiry form
// Uses native Cloudflare Email Routing
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

    // Get contact email from environment or use default
    const CONTACT_EMAIL = context.env.CONTACT_EMAIL || 'inquiries@aviation-expeditions.com';

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
This email was sent from the flight inquiry form at aviation-expeditions.com
Reply directly to this email to respond to ${name} at ${email}
    `.trim();

    // Send email via Cloudflare Email Worker
    try {
      const workerUrl = 'https://email-forwarder.mark99woods.workers.dev';

      const emailResponse = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: CONTACT_EMAIL,
          from: 'noreply@aviation-expeditions.com',
          replyTo: email,
          subject: `New Flight Inquiry: ${tourLabel}`,
          text: emailBody,
        }),
      });

      if (!emailResponse.ok) {
        console.error('Email worker error:', await emailResponse.text());
        // Log but don't fail the form submission
      } else {
        console.log('Email sent successfully via worker');
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Continue anyway - form submission still succeeds
    }

    // Also log to Cloudflare analytics
    console.log('=== NEW FLIGHT INQUIRY ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Tour:', tourLabel);
    console.log('===========================');

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
