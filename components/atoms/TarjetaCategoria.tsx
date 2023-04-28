import React from 'react';
import styles from '@/styles/components/atoms/tarjetaCategoria.module.css';

interface IProps {
    nombreCategoria?: any;
};

const TarjetaCategoria: React.FC<IProps> = ({nombreCategoria}) => {
    return (
      <div className={styles.container}><div className={styles.round}></div>
      <span>{nombreCategoria}</span>
      
      </div>
    );
  };


export default TarjetaCategoria;