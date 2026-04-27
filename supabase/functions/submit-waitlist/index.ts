// @ts-nocheck
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

type SubmitPayload = {
  email: string;
  waiting_list_opt_in: boolean;
  newsletter_opt_in: boolean;
  feature_request?: string;
  source?: string;
  locale?: string;
  turnstileToken?: string;
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const payload = (await req.json()) as SubmitPayload;
    const email = payload.email?.trim().toLowerCase();
    const featureRequest = payload.feature_request?.trim() ?? '';

    if (!email) {
      return jsonResponse({ error: 'Email is required.' }, 400);
    }

    if (!payload.waiting_list_opt_in && !payload.newsletter_opt_in) {
      return jsonResponse({ error: 'Select at least one opt-in.' }, 400);
    }

    const turnstileSecret = Deno.env.get('TURNSTILE_SECRET_KEY');
    if (turnstileSecret) {
      const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
      const verifyBody = new URLSearchParams({
        secret: turnstileSecret,
        response: payload.turnstileToken ?? '',
      });

      if (ipAddress) {
        verifyBody.append('remoteip', ipAddress);
      }

      const verificationRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: verifyBody,
      });
      const verification = await verificationRes.json();
      if (!verification.success) {
        return jsonResponse({ error: 'Bot verification failed.' }, 400);
      }
    }

async function sendSuccessEmail(to: string) {
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  const fromEmail = Deno.env.get('RESEND_FROM_EMAIL');
  if (!resendApiKey || !fromEmail) {
    return;
  }

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [to],
      subject: 'You are on the Lockbox waiting list',
      text: 'Thanks for signing up. We will email you with roadmap updates and early access details.',
    }),
  });
}

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { data: existingLead, error: selectError } = await supabase
      .from('leads')
      .select('email')
      .eq('email', email)
      .maybeSingle();

    if (selectError) {
      return jsonResponse({ error: 'Unable to process request.' }, 500);
    }

    if (!existingLead) {
      const { error: insertLeadError } = await supabase.from('leads').insert({
        email,
        waiting_list_opt_in: payload.waiting_list_opt_in,
        newsletter_opt_in: payload.newsletter_opt_in,
        source: payload.source ?? 'landing_v3',
        locale: payload.locale ?? 'en',
      });

      if (insertLeadError) {
        return jsonResponse({ error: 'Unable to save lead.' }, 500);
      }

      // Optional transactional email when provider secrets are configured.
      await sendSuccessEmail(email);
    }

    if (featureRequest.length > 0) {
      const { error: insertFeatureError } = await supabase.from('feature_requests').insert({
        lead_email: email,
        message: featureRequest,
        source: payload.source ?? 'landing_v3',
        locale: payload.locale ?? 'en',
      });

      if (insertFeatureError) {
        return jsonResponse({ error: 'Unable to save feature request.' }, 500);
      }
    }

    return jsonResponse({
      status: existingLead ? 'already_subscribed' : 'subscribed',
    });
  } catch (_error) {
    return jsonResponse({ error: 'Invalid payload.' }, 400);
  }
});
