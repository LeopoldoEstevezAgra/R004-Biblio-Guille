import React from 'react';
import styles from '@/styles/components/atoms/tarjetaCategoria.module.css';

interface IProps {
    nombreCategoria?: string;
    small?: boolean;
    enfasis?:boolean;
};

const TarjetaCategoria: React.FC<IProps> = ({nombreCategoria, small, enfasis}) => {
    return (
      <div className={small ?  styles.smallContainer : styles.container}>
        <div className={small ? (enfasis ? `${styles.smallRound} ${styles.enfasis}` : `${styles.smallRound} ${styles.fondo}`) : (enfasis ? `${styles.round} ${styles.enfasis}` : `${styles.round} ${styles.fondo}`)}></div>
        <span>{nombreCategoria}</span>
      </div>
    );
  };


export default TarjetaCategoria;