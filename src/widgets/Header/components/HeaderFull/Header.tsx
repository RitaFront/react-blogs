import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Logo } from 'shared/ui/Logo';
import styles from './header.module.scss';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

export const Header: React.FC = () => {
  return (
    <header className={styles.header + ' pt-2 pb-2'}>
      <Container>
        <Row>
          <Col>
            <Logo />
          </Col>
          <Col>
            <HeaderMenu />
          </Col>
        </Row>
      </Container>
    </header>
  );
};
