import React from 'react';
import { BtnBase } from 'shared/ui/BtnBase';
import styles from './blockRegister.module.scss';

export const BlockRegister = () => {
  return (
    <div className={styles.blockRegister + ' d-flex flex-column'}>
      <BtnBase
        title="Зарегестрироваться"
        variant="outline-success"
        href="/auth/register"
      />
      <p className="mt-3">
        После регистрации вы получите доступ ко всем возможностям RB
      </p>
    </div>
  );
};
