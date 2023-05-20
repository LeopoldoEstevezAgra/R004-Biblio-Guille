import React from 'react';
import styles from '@/styles/components/atoms/tarjetaCategoria.module.css';

interface IProps {
    nombreCategoria?: string;
    small?: boolean;
};

const TarjetaCategoria: React.FC<IProps> = ({nombreCategoria, small}) => {
    return (
      <div className={small ?  styles.smallContainer : styles.container}><div className={small ? styles.smallRound : styles.round}></div>
      <span>{nombreCategoria}</span>
      
      </div>
    );
  };


export default TarjetaCategoria;