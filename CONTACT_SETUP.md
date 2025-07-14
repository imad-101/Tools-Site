# Contact Form Setup Guide

## Email Service Setup

The contact form uses [Resend](https://resend.com) to send emails. Follow these steps to set it up:

### 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. Go to the API Keys section in your Resend dashboard
2. Create a new API key
3. Copy the API key

### 3. Configure Environment Variables

Create a `.env.local` file in your project root with the following content:

```env
# Resend API Key for email functionality
RESEND_API_KEY=your_resend_api_key_here

# Replace with your actual email address where you want to receive contact form submissions
CONTACT_EMAIL=your-email@example.com
```

### 4. Update the API Route

In `app/api/contact/route.ts`, replace the email address in the `to` field:

```typescript
to: [process.env.CONTACT_EMAIL || "your-email@example.com"],
```

### 5. Domain Verification (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. Go to the Domains section in your Resend dashboard
2. Add and verify your domain
3. Update the `from` field in the API route to use your verified domain

## Testing the Contact Form

1. Start your development server: `pnpm dev`
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check your email for the message
5. Check the console logs for any errors

## Troubleshooting

- **API Key Issues**: Make sure your Resend API key is correct and active
- **Email Not Received**: Check your spam folder
- **Domain Issues**: For production, verify your domain with Resend
- **Rate Limits**: Resend has rate limits on free accounts

## Alternative Email Services

If you prefer to use a different email service, you can replace Resend with:

- SendGrid
- AWS SES
- Nodemailer with SMTP
- Mailgun

Just update the API route accordingly.
