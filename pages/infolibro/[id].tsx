import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from '@/styles/InfoLibro.module.css';


import PedirBoton from '@/components/atoms/PedirBoton';
import TarjetaCategoria from '@/components/atoms/TarjetaCategoria';
import TarjetaLibroMini from '@/components/TarjetaLibroMini';
import TarjetaResenha from '@/components/TarjetaResenha';

type bookType = {
  id: number;
  titulo: string;
  isbn: string;
  autor: string;
  editorial: string;
  anho_publicacion: number;
  portada: string;
  sinopsis: string;
  categorias: {
    id: number;
    nombre: string;
  }[];
};
type resenhaType = {
  id:number;
  titulo:string,
  valoracion:number,
  descripcion:string,
  created_at: number,
  nombrecompleto:string
};
const InfoLibro = () => {
  const router = useRouter();
  const { id } = router.query;

  const [libro, setLibro] = useState<bookType | null>(null);
  const [recoms, setRecoms] = useState<Array<bookType>>([]);
  const [resenhas, setResenhas] = useState<Array<resenhaType>>([]);

  const fetchBook = async (id: string) => {
    const response = await fetch(`/api/infolibro/infolibro?id=${id}`);
    if (response.ok) {
      const data = await response.json();
      return data as bookType;
    } else {
      setLibro(null);
      throw new Error('No se pudo obtener el libro');
    }
  };
  const fetchrecom = async (id: string) => {
    const response = await fetch(`/api/infolibro/recomendados?id=${id}`);
    if (response.ok) {
      const data = await response.json();
      return data as Array<bookType>;
    } else {
      setRecoms([]);
      throw new Error('No se pudo obtener el libro');
    }
  };
  const fetchresenhas = async (id: string) => {
    const response = await fetch(`/api/infolibro/resenhas?id=${id}`);
    if (response.ok) {
      const data = await response.json();
      return data as Array<resenhaType>;
    } else {
      setResenhas([]);
      throw new Error('No se pudo obtener resenhas');
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
    const getRecomendados = async () => {
      try {
        const data = await fetchrecom(id as string);
        setRecoms(data);
      } catch (error) {
        console.error(error);
      }
    };
    const getResenhas = async () => {
      try {
        const data = await fetchresenhas(id as string);
        setResenhas(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      getLibro();
      getRecomendados();
      getResenhas();
    }
  }, [id]);
  if (!libro) {
    return (
      <div>
        <Link href="/"><button>Volver al Catálogo</button></Link>
        <div>Cargando...</div>
        
      </div>
    );
  }
  return (
    <div className={styles.body}>
      <Link href="/" >
        <button className={styles.botonVolver}>
          &lt;&lt;
        </button>
      </Link>
      <main className={styles.main} key={libro.id}>
        <div className={styles.card} key={libro.id}>
          <div className={styles.cardImage}>
            <img className={styles.portada} src={libro.portada} alt="portada" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{libro.titulo}</h3>
            <div>{libro.autor}</div>
            <div>
              {libro.editorial}, {libro.anho_publicacion}
            </div>
          </div>
          <div className={styles.cardCategories}>
            {libro.categorias.map((categoria) => (
              <TarjetaCategoria key={categoria.id} nombreCategoria={categoria.nombre} />
            ))}
          </div>
          <div className={styles.sinopsis}>{libro.sinopsis}</div>
          <div className={styles.cardFooter}>
            <PedirBoton />
          </div>
        </div>
      </main>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Libros recomendados</h2>
        <div className={styles.recomendados}>
          {recoms && recoms.length && recoms.map((book: bookType, index) => {
          return (<TarjetaLibroMini key={index} book={book}></TarjetaLibroMini>)
           })}
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Reseñas</h2>
        <div>{resenhas && resenhas.length && resenhas.map((resenha: resenhaType, index) => {
          return (<TarjetaResenha key={index} resenha={resenha}/>)
           })}</div>
      </div>
    </div>
  );
};

export default InfoLibro;
