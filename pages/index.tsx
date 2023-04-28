import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import RoundedInput from '@/components/atoms/RoundedInput';

import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import InfBoton from '@/components/atoms/InfBoton';
import PedirBoton from '@/components/atoms/PedirBoton';
import TarjetaCategoria from '@/components/atoms/TarjetaCategoria';


type bookType = {
  id: number,
  created_at: string,
  isbn: string,
  titulo: string,
  autor: string | null,
  anho_publicacion: string | null,
  editorial: string,
  portada: string,
  categorias: categoriaType[]
};
type categoriaType = {
  id: number,
  nombre: string
};
const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [books, setBooks] = useState<Array<bookType>>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchBooks = async () => {
    const response = await fetch('/api/libros');
    if (!response.ok) { return; }

    const json = await response.json();

    setBooks(() => { return json });
  };

  useEffect(() => {
    fetchBooks();
  }, [])
  return (
    <div className={styles.container}>
      {/*<pre> { JSON.stringify(books, null, 2)} </pre>*/}
      <div className={styles.searchInputContainer}>
        <RoundedInput
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          onChange={handleChangeInput}
        />
      </div>
      <div className={styles.booklistContainer}>
        {books && books.length && books.map((book: bookType) => {
          return (
            <div className={styles.card} key={book.id}>
              <div className={styles.cardImage}><img className={styles.portada} src={book.portada} alt="portada" /></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}> {book.titulo} </h3>
                <div> {book.autor} </div>
                <div> {book.editorial}, {book.anho_publicacion}  </div>
              </div>
              <div className={styles.cardCategories}>
                {book.categorias.map(categoria => (
                  <TarjetaCategoria key={categoria.id} nombreCategoria={categoria.nombre}/>
                ))}
              </div>
              <div className={styles.cardFooter}><InfBoton /> <PedirBoton /></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;