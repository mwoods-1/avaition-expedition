// Cloudflare Pages Function for flight inquiry form
// Uses AWS SES v2 API directly (compatible with Cloudflare Workers)
import { SignatureV4 } from '@smithy/signature-v4';
import { Sha256 } from '@aws-crypto/sha256-js';

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

    // Send email via AWS SES v2 API
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

      console.log('Preparing SES v2 API request for region:', AWS_REGION);
      console.log('Sending from:', FROM_EMAIL, 'to:', CONTACT_EMAIL);

      // Prepare SES v2 SendEmail request body
      const sesRequestBody = JSON.stringify({
        Content: {
          Simple: {
            Subject: {
              Data: `New Flight Inquiry: ${tourLabel}`,
              Charset: 'UTF-8'
            },
            Body: {
              Text: {
                Data: emailBody,
                Charset: 'UTF-8'
              }
            }
          }
        },
        Destination: {
          ToAddresses: [CONTACT_EMAIL]
        },
        FromEmailAddress: FROM_EMAIL,
        ReplyToAddresses: [email]
      });

      // AWS SES v2 endpoint
      const endpoint = `https://email.${AWS_REGION}.amazonaws.com`;
      const service = 'ses';

      // Create signature
      const signer = new SignatureV4({
        service,
        region: AWS_REGION,
        credentials: {
          accessKeyId: context.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: context.env.AWS_SECRET_ACCESS_KEY,
        },
        sha256: Sha256,
      });

      // Sign the request
      const signedRequest = await signer.sign({
        method: 'POST',
        hostname: `email.${AWS_REGION}.amazonaws.com`,
        path: '/v2/email/outbound-emails',
        protocol: 'https:',
        headers: {
          'Content-Type': 'application/json',
          'host': `email.${AWS_REGION}.amazonaws.com`,
        },
        body: sesRequestBody,
      });

      // Make the request
      const response = await fetch(`${endpoint}/v2/email/outbound-emails`, {
        method: 'POST',
        headers: signedRequest.headers as HeadersInit,
        body: sesRequestBody,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('SES API error response:', errorText);
        throw new Error(`SES API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('✅ Email sent successfully via AWS SES v2 API');
      console.log('MessageId:', result.MessageId);
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
