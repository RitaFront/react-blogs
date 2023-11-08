import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import styles from './alertMessage.modules.scss';

interface IAlert {
  type: string;
  message: string;
}

export const AlertMessage = ({ type, message }: IAlert) => {
  const [show, setShow] = useState(true);

  return (
    <Alert
      key={type}
      variant={type}
      show={show}
      className={styles.alert}
    >
      {message}
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-dark">
          Close
        </Button>
      </div>
    </Alert>
  );
};
