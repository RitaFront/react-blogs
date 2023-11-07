import { Info } from 'entities/BlogInfo';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BlockRegister } from 'widgets/BlockRegister';
import { Login } from 'widgets/Login';

export const AuthLogin: React.FC = () => {
  return (
    <Row style={{ alignItems: 'center' }}>
      <Col sm={7}>
        <Info />
      </Col>
      <Col sm={5} style={{ gap: 15 }} className="d-flex flex-column">
        <Login />
        <BlockRegister />
      </Col>
    </Row>
  );
};
