import React from 'react';
import styles from './logo.module.scss';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link
      className={styles.link + ' d-flex align-items-center'}
      to="/home"
    >
      <img className={styles.logo} src="/rb.png" alt="Logo" />
      <span className={styles.title}>React Blogs</span>
    </Link>
  );
};
