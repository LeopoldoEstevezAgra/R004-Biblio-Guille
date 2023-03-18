import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/components/layout.module.css';

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <button className={styles.topbarButton}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className={`${styles.topbarButton} ${styles.topbarButtonCart}`}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;