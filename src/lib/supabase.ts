import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  email: string;
  waiting_list_opt_in: boolean;
  newsletter_opt_in: boolean;
  feature_request?: string;
  source: string;
  locale: string;
}
