import React, { FormEvent, useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import styles from './login.module.scss';
import { Input, InputName } from 'shared/ui/Input';
import { BtnBase } from 'shared/ui/BtnBase';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Login = () => {
  const [value, setValue] = useState({
    login: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/auth/login', {
        login: value.login,
        password: value.password,
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const updateLogin = (login: string) => {
    setValue({ ...value, login });
  };

  const updatePassword = (password: string) => {
    setValue({ ...value, password });
  };

  return (
    <div className={styles.login}>
      <Image src="/rb.png" className={styles.logo} />
      <h2 className={styles.title + ' mt-2'}>Вход в React Blogs</h2>
      <Form className={styles.form}>
        <Input name={InputName.login} update={updateLogin} />
        <Input name={InputName.password} update={updatePassword} />
        <BtnBase
          title="Войти"
          variant="outline-dark"
          onClick={handleSubmit}
        />
      </Form>
    </div>
  );
};
