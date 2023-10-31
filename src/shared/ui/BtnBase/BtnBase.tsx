import React, { MouseEvent } from 'react';
import { Button } from 'react-bootstrap';
import styles from './btnBase.module.scss';

interface IBtnBase {
  title: string;
  variant: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  maxWidth?: string;
}

export const BtnBase = ({
  title,
  variant,
  onClick,
  maxWidth,
}: IBtnBase) => {
  return (
    <Button
      variant={variant}
      className={styles.btnLogin}
      onClick={onClick}
      type="submit"
      style={{ maxWidth: maxWidth }}
    >
      {title}
    </Button>
  );
};
