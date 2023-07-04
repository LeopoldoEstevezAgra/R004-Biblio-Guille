import React from 'react';
import { useState } from 'react';

import styles from '@/styles/components/atoms/inputs.module.css';

interface IProps {
    icon?: JSX.Element;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RoundedInput: React.FC<IProps> = ({ icon, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={styles.roundedInputContainer}>
            <input
                className={`${styles.roundedInput} ${
                    isFocused && styles.noBorder
                }`}
                /*onChange={(e) => {
            onChange?.(e);
          }}*/
                //innabilitado por testeo
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                style={{ border: 'none' }}
            />
            <button className={styles.roundedInputSearchButton}>{icon}</button>
        </div>
    );
};

export default RoundedInput;
