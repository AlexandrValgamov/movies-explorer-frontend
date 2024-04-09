import './Register.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import AuthHeader from '../AuthHeader/AuthHeader';
import Fieldset from '../Fieldset/Fieldset';
import Input from '../Input/Input';
import AuthFooter from '../AuthFooter/AuthFooter';
import PropTypes from 'prop-types';

export default function Register({ setUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isError = false;
  const errorMesage = null;
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onRegister = (e) => {
    e.preventDefault();
    setUser(formValue);
    navigate('/');
  };

  return (
    <main className="register">
      <AuthHeader text={'Добро пожаловать!'} />
      <Form onSubmit={onRegister} name="register">
        <Fieldset>
          <Input
            handleChange={handleChange}
            label={'Имя'}
            type={'text'}
            name={'name'}
            value={formValue.name}
            placeholder={'Имя'}
            minLength={2}
            maxLength={30}
            required
          />
          <Input
            handleChange={handleChange}
            label={'E-mail'}
            type="email"
            name={'email'}
            value={formValue.email}
            placeholder="E-mail"
            minLength={2}
            maxLength={30}
            required
          />
          <Input
            handleChange={handleChange}
            label={'Пароль'}
            type={'password'}
            name={'password'}
            value={formValue.password}
            placeholder={'Пароль'}
            minLength={2}
            maxLength={30}
            required
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

Register.propTypes = {
  setUser: PropTypes.func.isRequired,
};
