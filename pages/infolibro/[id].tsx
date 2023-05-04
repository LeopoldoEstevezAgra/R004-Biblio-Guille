import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '@/styles/Home.module.css';

import InfBoton from '@/components/atoms/InfBoton';
import PedirBoton from '@/components/atoms/PedirBoton';
import TarjetaCategoria from '@/components/atoms/TarjetaCategoria';

type bookType = {
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
};

const InfoLibro = () => {
  const router = useRouter();
  const { id } = router.query;

  const [libro, setLibro] = useState<bookType | null>(null);

  const fetchBook = async (id: string) => {
    const response = await fetch(`/api/infolibro?id=${id}`);
    if (response.ok) {
      const data = await response.json();
      return data as bookType;
    } else {
      setLibro(null);
      throw new Error('No se pudo obtener el libro');
    }
  };

  useEffect(() => {
    const getLibro = async () => {
      try {
        const data = await fetchBook(id as string);
        setLibro(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      getLibro();
    }
  }, [id]);

  if (!libro) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.card} key={libro.id}>
      <div className={styles.cardImage}><img className={styles.portada} src={libro.portada} alt="portada" /></div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}> {libro.titulo} </h3>
        <div> {libro.autor} </div>
        <div> {libro.editorial}, {libro.anho_publicacion}  </div>
      </div>
      <div className={styles.cardCategories}>
        {libro.categorias.map(categoria => (
          <TarjetaCategoria key={categoria.id} nombreCategoria={categoria.nombre} />
        ))}
      </div>
      <div className={styles.cardFooter}>
        <PedirBoton />
      </div>
    </div>
  );
};

export default InfoLibro;
