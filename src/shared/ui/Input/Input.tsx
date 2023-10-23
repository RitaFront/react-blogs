import { ChangeEvent } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import styles from './input.module.scss';

export enum InputName {
  login = 'Логин',
  password = 'Пароль',
}

interface IInput {
  name: InputName;
  update: (event: string) => void;
}

export const Input = ({ name, update }: IInput) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    update(e.target.value);
  };
  return (
    <>
      <FloatingLabel
        controlId={name === InputName.login ? 'login' : 'password'}
        label={name}
        className={styles.input}
      >
        <Form.Control
          onChange={handleChange}
          type={name === InputName.login ? 'text' : 'password'}
          placeholder={
            name === InputName.login
              ? 'Введите логин'
              : 'Введите пароль'
          }
        />
      </FloatingLabel>
    </>
  );
};
