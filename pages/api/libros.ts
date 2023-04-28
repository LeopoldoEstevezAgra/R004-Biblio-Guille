// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '@/utils/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 const { data: libro, error: libroError } = await supabase
    .from('libro')
    .select()

  const { data: libroCategoria, error: libroCategoriaError } = await supabase
  .from('libro_categoria')
  .select()

const { data: categoria, error: categoriaError } = await supabase
  .from('categoria')
  .select()

if (libroError || libroCategoriaError || categoriaError) {
  return res.status(400).json({ error: 'error '})
}

const librosConCategorias = libro.map(libro => {
  const categoriasDelLibro = libroCategoria
    .filter(asociacion => asociacion.libro_id === libro.id)
    .map(asociacion => {
      return categoria.find(categoria => categoria.id === asociacion.categoria_id)
    })
  return { ...libro, categorias: categoriasDelLibro }
})

res.status(200).json(librosConCategorias)
}

