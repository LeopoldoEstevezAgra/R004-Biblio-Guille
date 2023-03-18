import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import RoundedInput from '@/components/atoms/RoundedInput';

import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchInputContainer}>
        <RoundedInput 
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          onChange={handleChangeInput}
        />
      </div>
      <div className={styles.booklistContainer}>

      </div>
    </div>
  )
}
