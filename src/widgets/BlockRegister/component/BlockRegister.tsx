import React from 'react';
import { BtnBase } from 'shared/ui/BtnBase';
import styles from './blockRegister.module.scss';
import { Link } from 'react-router-dom';

export const BlockRegister = () => {
  return (
    <div className={styles.blockRegister + ' d-flex flex-column'}>
      <Link to="/auth/register">
        <BtnBase
          title="Зарегестрироваться"
          variant="outline-success"
        />
      </Link>

      <p className="mt-3">
        После регистрации вы получите доступ ко всем возможностям RB
      </p>
    </div>
  );
};
