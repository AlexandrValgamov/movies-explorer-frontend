import { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import Form from '../Form/Form';
import { useNavigate } from 'react-router-dom';
import Fieldset from '../Fieldset/Fieldset';
import Input from '../Input/Input';
import AuthFooter from '../AuthFooter/AuthFooter';

export default function Login({ setLoggedIn }) {
  const navigate = useNavigate();
  const isError = false;
  const errorMesage = null;
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const onLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <main className="login">
      <AuthHeader text="Рады видеть!" />
      <Form onSubmit={onLogin} name="login">
        <Fieldset>
          <Input
            handleChange={handleChange}
            label={'E-mail'}
            type={'email'}
            name={'email'}
            value={formValue.email}
            placeholder={'E-mail'}
            required
            maxLength="40"
            minLength="5"
          />
          <Input
            handleChange={handleChange}
            label={'Пароль'}
            type={'password'}
            name={'password'}
            value={formValue.password}
            placeholder={'Пароль'}
            required
            minLength="6"
            maxLength="20"
          />
        </Fieldset>
        <AuthFooter
          isError={isError}
          errorMesage={errorMesage}
          path={location.pathname}
        />
      </Form>
    </main>
  );
}

Login.propTypes = {
  setLoggedIn: PropTypes.func,
  setUser: PropTypes.func,
};
