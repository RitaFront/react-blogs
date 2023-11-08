import React, { ChangeEvent, FocusEvent } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import styles from './input.module.scss';

export enum InputName {
  login = 'Логин',
  password = 'Пароль',
  passwordCheck = 'Подтверждение пароля',
}

interface IInput {
  name: InputName;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent) => void;
}

export const Input = ({ name, value, onChange, onBlur }: IInput) => {
  return (
    <>
      <FloatingLabel
        controlId={
          name === InputName.login
            ? 'login'
            : name === InputName.password
            ? 'password'
            : 'passwordCheck'
        }
        label={name}
        className={styles.input}
      >
        <Form.Control
          type={name === InputName.login ? 'text' : 'password'}
          placeholder={
            name === InputName.login
              ? 'Введите логин'
              : name === InputName.password
              ? 'Введите пароль'
              : 'Подтверждение пароля'
          }
          name={
            name === InputName.login
              ? 'login'
              : name === InputName.password
              ? 'password'
              : 'passwordCheck'
          }
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </FloatingLabel>
    </>
  );
};
