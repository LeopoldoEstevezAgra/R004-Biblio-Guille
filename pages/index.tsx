import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TarjetaLibro from '@/components/TarjetaLibro';
import RoundedInput from '@/components/atoms/RoundedInput';

import styles from '@/styles/Home.module.css';

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

const Home: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [books, setBooks] = useState<Array<bookType>>([]);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const fetchBooks = async () => {
        const response = await fetch('/api/libros');
        if (!response.ok) {
            return;
        }

        const json = await response.json();

        setBooks(() => {
            return json;
        });
    };

    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.searchInputContainer}>
                <RoundedInput
                    icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    onChange={handleChangeInput}
                />
            </div>
            <div className={styles.booklistContainer}>
                {books &&
                    books.length &&
                    books.map((book: bookType) => {
                        return <TarjetaLibro book={book}></TarjetaLibro>;
                    })}
            </div>
        </div>
    );
};

export default Home;
