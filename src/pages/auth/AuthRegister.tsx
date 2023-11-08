import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BlockLogin } from 'widgets/BlockLogin';
import { Register } from 'widgets/Register';

export const AuthRegister: React.FC = () => {
  return (
    <Row style={{ alignItems: 'center' }}>
      <Col sm={7}>
        <Register />
      </Col>
      <Col sm={5}>
        <BlockLogin />
      </Col>
    </Row>
  );
};
