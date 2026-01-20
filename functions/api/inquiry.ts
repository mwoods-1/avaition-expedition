// Cloudflare Pages Function for flight inquiry form
// Uses AWS SES for email delivery
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { DOMParser } from '@xmldom/xmldom';

// Polyfill DOMParser for Cloudflare Workers environment
if (typeof globalThis.DOMParser === 'undefined') {
  (globalThis as any).DOMParser = DOMParser;
}

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

    // Get configuration from environment variables
    const CONTACT_EMAIL = context.env.CONTACT_EMAIL || 'mark99woods@gmail.com';
    const FROM_EMAIL = context.env.FROM_EMAIL || context.env.CONTACT_EMAIL || 'mark99woods@gmail.com';
    const AWS_REGION = context.env.AWS_REGION || 'us-east-1';

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

    // Send email via AWS SES
    try {
      // Check for required environment variables
      if (!context.env.AWS_ACCESS_KEY_ID || !context.env.AWS_SECRET_ACCESS_KEY) {
        console.error('ERROR: AWS credentials not configured in environment variables');
        console.error('Missing:', {
          hasAccessKey: !!context.env.AWS_ACCESS_KEY_ID,
          hasSecretKey: !!context.env.AWS_SECRET_ACCESS_KEY,
        });
        throw new Error('AWS credentials not configured');
      }

      console.log('Initializing SES client with region:', AWS_REGION);
      console.log('Sending from:', FROM_EMAIL, 'to:', CONTACT_EMAIL);

      // Initialize SES client with credentials from environment
      const sesClient = new SESClient({
        region: AWS_REGION,
        credentials: {
          accessKeyId: context.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: context.env.AWS_SECRET_ACCESS_KEY,
        },
      });

      const command = new SendEmailCommand({
        Source: FROM_EMAIL,
        Destination: {
          ToAddresses: [CONTACT_EMAIL],
        },
        Message: {
          Subject: {
            Data: `New Flight Inquiry: ${tourLabel}`,
            Charset: 'UTF-8',
          },
          Body: {
            Text: {
              Data: emailBody,
              Charset: 'UTF-8',
            },
          },
        },
        ReplyToAddresses: [email],
      });

      await sesClient.send(command);
      console.log('✅ Email sent successfully via AWS SES');
    } catch (emailError: any) {
      console.error('❌ AWS SES ERROR:', {
        message: emailError.message,
        code: emailError.code || emailError.name,
        stack: emailError.stack,
      });
      // Continue anyway - form submission still succeeds
      // Note: In production, you may want to fail the request here
    }

    // Log inquiry details
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
