import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const hasSupabaseEnv = Boolean(supabaseUrl) && Boolean(supabaseAnonKey);

if (!hasSupabaseEnv) {
  console.error(
    '[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Waiting list submission is disabled.'
  );
}

export const supabase = hasSupabaseEnv
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface Lead {
  email: string;
  waiting_list_opt_in: boolean;
  newsletter_opt_in: boolean;
  feature_request?: string;
  source: string;
  locale: string;
}
