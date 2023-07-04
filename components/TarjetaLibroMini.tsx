import React from 'react';
import Link from 'next/link';

import TarjetaCategoria from '@/components/atoms/TarjetaCategoria';
import Button from '@/components/atoms/Button';

import styles from '@/styles/components/TarjetaLibroMini.module.css';

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

type BookCardProps = {
    book: bookType;
};

const TarjetaLibroMini: React.FC<BookCardProps> = ({ book }) => {
    return (
        <div className={styles.card} key={book.id}>
            <div className={styles.innerContainer}>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{book.titulo}</h3>
                    <div className={styles.cardAuthor}>{book.autor}</div>
                </div>
                <div className={styles.cardCategories}>
                    {book.categorias.map((categoria) => (
                        <TarjetaCategoria
                            size="small"
                            modo="fondo"
                            key={categoria.id}
                            nombreCategoria={categoria.nombre}
                        />
                    ))}
                </div>
                <div className={styles.cardFooter}>
                    <Link href="/infolibro/[id]" as={`/infolibro/${book.id}`}>
                        <Button variant="secondary">Más info.</Button>
                    </Link>
                    <Button>Añadir</Button>
                </div>
            </div>
        </div>
    );
};
export default TarjetaLibroMini;
