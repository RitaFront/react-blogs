import styles from './register.module.scss';
import { Image } from 'react-bootstrap';
import { Input, InputName } from 'shared/ui/Input';
import { BtnBase } from 'shared/ui/BtnBase';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';

interface IErros {
  login: string;
  password: string;
  passwordCheck: string;
  isValid: boolean;
}

export const Register = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.register}>
      <Image src="/rb.png" className={styles.logo} />
      <h2 className={styles.title + ' mt-2'}>Регистрация</h2>
      <Formik
        initialValues={{
          login: '',
          password: '',
          passwordCheck: '',
        }}
        onSubmit={(values) => {
          axios
            .post('http://localhost:3000/auth/register', {
              login: values.login,
              password: values.password,
            })
            .then((res) => {
              toast.success(res.data.message);
              navigate('/auth/login');
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            });
        }}
        validate={(values) => {
          const errors: IErros = {
            login: '',
            password: '',
            passwordCheck: '',
            isValid: true,
          };

          if (!values.login) {
            errors.login = 'Логин не может быть пустым 🙂';
            errors.isValid = false;
          } else if (!/^[a-zA-Z0-9]{5,}$/.test(values.login)) {
            errors.login =
              'Нужно использовать только латинцу и цифры. Длина 5 символов';
            errors.isValid = false;
          }

          if (!values.password) {
            errors.password = 'Пароль не может быть пустым 🙂';
            errors.isValid = false;
          } else if (
            !/^[a-zA-Z0-9\/\-_]{5,}$/.test(values.password)
          ) {
            errors.password =
              'Нужно использовать только латиницу, цифры или символы /, -, _';
            errors.isValid = false;
          }

          if (values.passwordCheck !== values.password) {
            errors.passwordCheck = 'Пароли не совпадают 🥲';
            errors.isValid = false;
          }

          return errors.isValid ? {} : errors;
        }}
      >
        {({ errors, touched, values, handleChange, handleBlur }) => (
          <Form className={styles.form}>
            <Input
              name={InputName.login}
              value={values.login}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.login && touched.login && (
              <div className="inputError">{errors.login}</div>
            )}
            <Input
              name={InputName.password}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className="inputError">{errors.password}</div>
            )}
            <Input
              name={InputName.passwordCheck}
              value={values.passwordCheck}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.passwordCheck && touched.passwordCheck && (
              <div className="inputError">{errors.passwordCheck}</div>
            )}
            <BtnBase
              title="Зарегестрироваться"
              variant="outline-success"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
