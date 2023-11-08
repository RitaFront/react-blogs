import React from 'react';
import { BtnBase } from 'shared/ui/BtnBase';
import styles from './blockLogin.module.scss';
import { Link } from 'react-router-dom';

export const BlockLogin = () => {
  return (
    <div className={styles.blockLogin + ' d-flex flex-column'}>
      <Link to="/auth">
        <BtnBase title="Войти" variant="outline-dark" />
      </Link>
      <p className="mt-3">Вы уже зарегестрированы в RB?</p>
    </div>
  );
};
