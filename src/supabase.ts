import { createClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  throw new Error('Supabase not initialised');
}

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
);

export const getAllIdsFrom = async (
  from: 'Plan' | 'BlogPost',
): Promise<number[]> => {
  const { data, error } = await supabase.from(from).select('id');

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ id }) => id);
};
