import { Image } from 'react-bootstrap';
import styles from './login.module.scss';
import { Input, InputName } from 'shared/ui/Input';
import { BtnBase } from 'shared/ui/BtnBase';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import { useActions } from 'store/hooks/useActions';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { loginRequestAsync } = useActions();
  const navigate = useNavigate();

  return (
    <div className={styles.login}>
      <Image src="/rb.png" className={styles.logo} />
      <h2 className={styles.title + ' mt-2'}>Вход в React Blogs</h2>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        onSubmit={(values) => {
          axios
            .post('http://localhost:3000/auth/login', {
              login: values.login,
              password: values.password,
            })
            .then((res) => {
              localStorage.setItem('token', res.data.user.token);
              loginRequestAsync(res.data.user.token);
              navigate('/home');
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            });
        }}
      >
        {({ values, handleChange }) => (
          <Form className={styles.form}>
            <Input
              name={InputName.login}
              value={values.login}
              onChange={handleChange}
            />
            <Input
              name={InputName.password}
              value={values.password}
              onChange={handleChange}
            />
            <BtnBase title="Войти" variant="outline-dark" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
