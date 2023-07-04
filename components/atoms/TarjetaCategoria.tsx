import React from 'react';
import styles from '@/styles/components/atoms/tarjetaCategoria.module.css';

interface IProps {
    nombreCategoria?: string;
    size?: 'small' | 'large';
    modo?: 'fondo' | 'enfasis';
    className?: string;
}

const TarjetaCategoria: React.FC<IProps> = ({
    nombreCategoria,
    size = 'large',
    modo = 'enfasis',
    className = '',
}) => {
    const perforationClass = `${size}Round`;
    const containerClass = `${size}Container`;

    return (
        <div className={`${styles[containerClass]} ${className}`}>
            <div
                className={`${styles[perforationClass]} ${styles[modo]} ${className}`}
            ></div>
            <span>{nombreCategoria}</span>
        </div>
    );
};

export default TarjetaCategoria;
