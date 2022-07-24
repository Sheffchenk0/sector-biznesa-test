import React from 'react';
import styles from 'components/Input/Input.module.scss';
import searchSvg from 'assets/img/svg/search.svg';

interface IInput {
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

function Input({ value, onChange }: IInput) {
  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Поиск"
        className={styles.input}
      />

      <img className={styles.searchIcon} src={searchSvg} alt="Поиск" />
    </div>
  );
}

export default Input;
