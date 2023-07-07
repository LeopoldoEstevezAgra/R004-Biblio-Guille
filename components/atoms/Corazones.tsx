import styles from '@/styles/components/atoms/Corazones.module.css';
import React from 'react';
import Image from 'next/image';
interface IProps {
    valoracion: number;
}

const Corazones: React.FC<IProps> = ({ valoracion }) => {
    const corazonesRellenos = valoracion;
    const corazonesHuecos = 5 - valoracion;

    return (
        <div className={styles.heartlist}>
            {[...Array(corazonesRellenos)].map((_, index) => (
                <Image
                    key={index}
                    src="/corazonrelleno.svg"
                    alt="corazon relleno"
                    className={styles.heart}
                    width={100}
                    height={16}
                />
            ))}
            {[...Array(corazonesHuecos)].map((_, index) => (
                <Image
                    key={index}
                    src="/corazonhueco.svg"
                    alt="corazon hueco"
                    className={styles.heart}
                    width={100}
                    height={16}
                />
            ))}
        </div>
    );
};

export default Corazones;
