// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '@/utils/supabase';

interface bookType {
    id: number;
    titulo: string;
    isbn: string;
    autor: string;
    editorial: string;
    anho_publicacion: number;
    portada: string;
    categorias: {
        id: number;
        nombre: string;
    }[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log('se ha realizado una llamada a la API');
    const { id } = req.query;
    const { data: libro, error: libroError } = await supabase.rpc(
        'recomendados',
        { reqid: id }
    );
    const { data: libroCategoria, error: libroCategoriaError } = await supabase
        .from('libro_categoria')
        .select();
    const { data: categoria, error: categoriaError } = await supabase
        .from('categoria')
        .select();

    if (libroError || libroCategoriaError || categoriaError) {
        return res.status(400).json({ error: 'error ' });
    }

    const librosConCategorias = libro.map((libro: bookType) => {
        const categoriasDelLibro = libroCategoria
            .filter((asociacion) => asociacion.libro_id === libro.id)
            .map((asociacion) => {
                return categoria.find(
                    (categoria) => categoria.id === asociacion.categoria_id
                );
            });

        return { ...libro, categorias: categoriasDelLibro };
    });

    res.status(200).json(librosConCategorias);
}
