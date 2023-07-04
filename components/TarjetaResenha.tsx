import React from 'react';
import Corazones from './atoms/Corazones';
import styles from '@/styles/components/TarjetaResenha.module.css';

type resenhaType = {
    id: number;
    titulo: string;
    valoracion: number;
    descripcion: string;
    created_at: number;
    nombrecompleto: string;
};

type ResenhaCardProps = {
    resenha: resenhaType;
};

const TarjetaResenha: React.FC<ResenhaCardProps> = ({ resenha }) => {
    return (
        <div className={styles.card} key={resenha.id}>
            <header className={styles.cardHeader}>
                <Corazones valoracion={resenha.valoracion} />{' '}
                <h3>{resenha.titulo}</h3> <span>{resenha.nombrecompleto}</span>
            </header>
            <main className={styles.cardContent}>{resenha.descripcion}</main>
            <footer className={styles.cardFooter}>{resenha.created_at}</footer>
        </div>
    );
};
export default TarjetaResenha;
