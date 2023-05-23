import styles from '@/styles/components/atoms/Corazones.module.css';
import React from 'react';
import Image from 'next/image';
interface IProps {
    valoracion: number
};


const Corazones : React.FC<IProps> = ({valoracion}) => {
  const corazonesRellenos = valoracion;
  const corazonesHuecos = 5 - valoracion;

  return (
    <div>
      {[...Array(corazonesRellenos)].map((_, index) => (
        <Image key={index}
        src="/corazonrelleno.svg"
        alt="corazon relleno"
        className={styles.corazonesRellenos}
        width={100}
        height={24}
      />
      ))}
      {[...Array(corazonesHuecos)].map((_, index) => (
        <Image key={index}
        src="/corazonhueco.svg"
        alt="corazon hueco"
        className={styles.corazonesHuecos}
        width={100}
        height={24}
      />
      ))}
    </div>
  );
};

export default Corazones;
