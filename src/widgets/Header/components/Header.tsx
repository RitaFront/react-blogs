import React from 'react';
import { Container } from 'react-bootstrap';
import { Logo } from 'shared/ui/Logo';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header + ' pt-2 pb-2'}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
};
