import { createClient } from '@supabase/supabase-js';

export const createSupabaseClient = () => {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    throw new Error('Supabase not initialised');
  }

  return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
};
