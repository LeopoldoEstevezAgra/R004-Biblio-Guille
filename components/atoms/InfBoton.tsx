import React from 'react';

import styles from '@/styles/components/atoms/botones.module.css';

interface Props {
  small?: boolean;
}

const InfBoton: React.FC<Props> = ({ small }) => {
  return (
    <button className={small ? styles.smallBotonSecundario : styles.largueBotonSecundario}>
      Más info.
    </button>
  );
};

export default InfBoton;