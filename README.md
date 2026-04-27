# lockbox-website

## Local setup

1. Copy `.env.example` to `.env.local` and fill the values.
2. Install dependencies with `npm install`.
3. Start the app with `npm run dev`.

## Supabase migrations

Apply the SQL migrations in `supabase/migrations` to your Supabase project.

## Waitlist function deployment

Deploy `supabase/functions/submit-waitlist` and set secrets:

- `TURNSTILE_SECRET_KEY` (optional, but recommended)
- `RESEND_API_KEY` (optional, for confirmation emails)
- `RESEND_FROM_EMAIL` (optional, for confirmation emails)

If email secrets are not configured, form submission still works and only skips sending mail.
