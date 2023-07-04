import React from 'react';
import Link from 'next/link';

import TarjetaCategoria from '@/components/atoms/TarjetaCategoria';
import Button from '@/components/atoms/Button';

import styles from '@/styles/components/TarjetaLibro.module.css';

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

const TarjetaLibro: React.FC<BookCardProps> = ({ book }) => {
    return (
        <div className={styles.card} key={book.id}>
            <div className={styles.cardImage}>
                <img
                    className={styles.portada}
                    src={book.portada}
                    alt="portada"
                />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{book.titulo}</h3>
                <div>{book.autor}</div>
                <div>
                    {book.editorial}, {book.anho_publicacion}
                </div>
            </div>
            <div className={styles.cardCategories}>
                {book.categorias.map((categoria) => (
                    <TarjetaCategoria
                        modo="enfasis"
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
    );
};
export default TarjetaLibro;
