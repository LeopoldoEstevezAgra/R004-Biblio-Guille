import React from 'react';
import styles from '@/styles/components/atoms/botones.module.css';

interface Props {
  small?: boolean;
}

const PedirBoton: React.FC<Props> = ({ small }) => {
  return (
    <button className={small ? styles.sBotonPrim : styles.lBotonPrim}>
      Añadir
    </button>
  );
};

export default PedirBoton;
