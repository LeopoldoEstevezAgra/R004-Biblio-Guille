import React from 'react';

import styles from '@/styles/components/atoms/botones.module.css';

interface IProps {
    children?: React.ReactNode;
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
    size?: 'small' | 'large';
    variant?: 'primary' | 'secondary';
    className?: string;
    sx?: React.CSSProperties;
};

const Button: React.FC<IProps> = ({
    children,
    onClick,
    size = 'large',
    variant = 'primary',
    className = '',
    sx = {}
}) => {
    return (
        <button 
            className={`${styles[size]} ${styles[variant]} ${className}`}
            style={sx}
            onClick={(e) => onClick?.(e) }
        >
            {children}
        </button>
    );
};

export default Button;