import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Logo } from 'shared/ui/Logo';
import styles from './header.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { HeaderMenu } from 'widgets/Header';
import { LoginState } from 'widgets/Login/model/type/loginType';

export const Header: React.FC = () => {
  const { data } = useSelector<RootState, LoginState>(
    (state) => state.user
  );

  return (
    <header className={styles.header + ' pt-2 pb-2'}>
      <Container>
        <Row>
          <Col sm={3}>
            <Logo />
          </Col>
          <Col>{data.login && <HeaderMenu />}</Col>
        </Row>
      </Container>
    </header>
  );
};
