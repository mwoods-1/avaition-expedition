# Deployment Guide - Cloudflare Email Setup

This guide shows how to deploy the 100% Cloudflare-native email solution.

## Architecture

1. **Pages Function** (`functions/api/inquiry.ts`) - Receives form submissions
2. **Email Worker** (`workers/email-forwarder.js`) - Sends emails via Cloudflare Email API
3. **Email Routing** - Forwards emails to your Gmail

## Step 1: Deploy the Email Worker via Cloudflare Dashboard

1. Go to **Cloudflare Dashboard** → **Workers & Pages**
2. Click **Create** → **Create Worker**
3. Name it: `email-forwarder`
4. Click **Deploy**
5. Click **Edit Code**
6. Copy the contents of `workers/email-forwarder.js` and paste it into the editor
7. Click **Save and Deploy**

The worker will be deployed to: `https://email-forwarder.<your-account>.workers.dev`

**Important:** Update the worker URL in `functions/api/inquiry.ts` line 62 with your actual worker URL.

## Step 2: Configure Email Worker Binding

After deploying, you need to add the Email Sending binding in Cloudflare Dashboard:

1. Go to **Cloudflare Dashboard** → **Workers & Pages**
2. Click on **email-forwarder** worker
3. Go to **Settings** → **Bindings**
4. Scroll to **Send Email** section
5. Click **Add**
6. This creates the `SEND_EMAIL` binding that the worker uses via `env.SEND_EMAIL.send()`

Note: The binding name `SEND_EMAIL` is already configured in `wrangler.toml`

## Step 3: Deploy Pages (Already Done)

Your Pages project is already configured and built. Just push to your repository or redeploy via Cloudflare Dashboard.

## Step 4: Test the Form

1. Go to `https://aviation-expeditions.pages.dev/inquiry`
2. Fill out and submit the form
3. Check your Gmail for the inquiry email

## Email Flow

```
User fills form
    ↓
Pages Function (/api/inquiry)
    ↓
POST to Email Worker
    ↓
Email Worker sends via Cloudflare Email API
    ↓
Email Routing forwards to Gmail
```

## Troubleshooting

### Worker not sending emails
- Check that the Email binding is configured in Worker settings
- Verify Email Routing is active in Cloudflare Dashboard → Email

### 404 on worker URL
- Make sure you deployed the worker: `cd workers && npx wrangler deploy`
- Check the worker URL matches in `functions/api/inquiry.ts`

### Emails not arriving
- Check spam folder
- Verify Email Routing rules are active
- Check worker logs: Cloudflare Dashboard → Workers → email-forwarder → Logs
