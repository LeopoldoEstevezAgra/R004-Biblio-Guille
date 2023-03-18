import React from 'react';


import styles from '@/styles/components/atoms/inputs.module.css';

interface IProps {
    icon?: JSX.Element;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RoundedInput: React.FC<IProps> = ({ icon, onChange }) => {
    return (
        <div className={styles.roundedInputContainer}>
            <input 
                className={styles.roundedInput} 
                onChange={(e) => {onChange?.(e)}}
            />
            <button className={styles.roundedInputSearchButton}>
                { icon }
            </button>
        </div>
    );
};

export default RoundedInput;