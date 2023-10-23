import React, { MouseEvent } from 'react';
import { Button } from 'react-bootstrap';
import styles from './btnBase.module.scss';
import { Link } from 'react-router-dom';

interface IBtnBase {
  title: string;
  variant: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const BtnBase = ({
  title,
  variant,
  href,
  onClick,
}: IBtnBase) => {
  return (
    <Link to={href!}>
      <Button
        variant={variant}
        className={styles.btnLogin}
        onClick={onClick}
        type="submit"
      >
        {title}
      </Button>
    </Link>
  );
};
