import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import RoundedInput from '@/components/atoms/RoundedInput';

import styles from '@/styles/Home.module.css';

type bookType = {
  id: number,
  created_at: string,
  isbn: string,
  titulo: string,
  autor: string | null,
  anho_publicacion: string | null,
  editorial: string,
  img: string
};

const Home: React.FC= () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [books, setBooks] = useState<Array<bookType>>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchBooks = async () => {
    const response = await fetch('/api/libros');
    if (!response.ok) { return;}
    
    const json = await response.json();

    setBooks(() => { return  json });
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
              <div className={styles.cardImage}><img src={book.img} alt="portada" /></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}> {book.titulo} </h3>
                <div> {book.isbn} </div>
                <div> {book.editorial} </div>
                <div> {new Date(book.created_at).toLocaleString()} </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;