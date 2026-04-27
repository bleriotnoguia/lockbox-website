/*
  # Create feature requests history table

  ## Purpose
  Allow the same email to submit multiple feature requests over time.
  `leads` stays unique per email, while this table stores every request.
*/

CREATE TABLE IF NOT EXISTS public.feature_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_email text NOT NULL,
  message text NOT NULL,
  source text DEFAULT 'landing_v3',
  locale text DEFAULT 'en',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS feature_requests_lead_email_idx
  ON public.feature_requests (lead_email);

ALTER TABLE public.feature_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can insert feature requests" ON public.feature_requests;

CREATE POLICY "Public can insert feature requests"
  ON public.feature_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
