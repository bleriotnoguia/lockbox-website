/*
  # Fix leads insert policy for public form

  ## Why
  The landing page submits to `public.leads` with a public key.
  Depending on client role mapping, inserts may come through `anon`
  or `authenticated`. We allow INSERT for both while keeping reads private.
*/

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

CREATE POLICY "Anyone can submit a lead"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
