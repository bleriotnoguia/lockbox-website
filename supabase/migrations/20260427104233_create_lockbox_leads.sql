/*
  # Create Lockbox Leads Table

  ## Purpose
  Stores waiting list sign-ups, newsletter opt-ins, and feature requests
  collected from the Lockbox V3/Pro landing page.

  ## New Tables
  - `leads`
    - `id` (uuid, primary key)
    - `email` (text, unique, required)
    - `waiting_list_opt_in` (boolean, default false)
    - `newsletter_opt_in` (boolean, default false)
    - `feature_request` (text, optional)
    - `source` (text, default 'landing_v3')
    - `locale` (text, default 'en')
    - `tags` (text array, optional)
    - `created_at` (timestamptz)

  ## Security
  - RLS enabled
  - Public INSERT allowed (anonymous visitors can submit the form)
  - No SELECT policy for public (data is private)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  waiting_list_opt_in boolean DEFAULT false,
  newsletter_opt_in boolean DEFAULT false,
  feature_request text DEFAULT '',
  source text DEFAULT 'landing_v3',
  locale text DEFAULT 'en',
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can submit a lead" ON leads;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
