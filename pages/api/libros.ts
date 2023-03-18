// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '@/utils/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase
  .from('libro')
  .select()

  if (error || !data) { 
    return res.status(400).json({ error: 'error '});
  }
  res.status(200).json(data);
}
