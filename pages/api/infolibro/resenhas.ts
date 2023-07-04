// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '@/utils/supabase';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log('se ha realizado una llamada resenhas');
    const { id } = req.query;
    console.log(id);
    const { data: resenhacompleta, error: resenhasError } = await supabase.rpc(
        'resenhas',
        { reqid: id }
    );

    if (resenhasError) {
        return res.status(400).json({ error: 'error ' });
    }

    console.log(resenhacompleta);
    console.log(resenhasError);
    res.status(200).json(resenhacompleta);
}
