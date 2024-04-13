import PropTypes from 'prop-types';
import './Login.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import Form from '../Form/Form';
import Fieldset from '../Fieldset/Fieldset';
import Input from '../Input/Input';
import AuthFooter from '../AuthFooter/AuthFooter';
import { useFormWithValidation } from '../../hooks/useForm';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Login({ handleLogin, errorForm, setErrorForm }) {
  const location = useLocation();

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const onLogin = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  const onChange = (e) => {
    handleChange(e);
    if (errorForm) setErrorForm('');
  };

  return (
    <main className="login">
      <AuthHeader text="Рады видеть!" />
      <Form onSubmit={onLogin} name="login">
        <Fieldset>
          <Input
            onChange={onChange}
            label={'E-mail'}
            type={'email'}
            name={'email'}
            value={values.email || ''}
            placeholder={'E-mail'}
            isValid={isValid}
            errorMessage={errors.email}
            required
            minLength={5}
            maxLength={30}
          />
          <Input
            onChange={onChange}
            label={'Пароль'}
            type={'password'}
            name={'password'}
            value={values.password || ''}
            placeholder={'Пароль'}
            isValid={isValid}
            errorMessage={errors.password}
            required
            minLength={8}
            maxLength={20}
          />
        </Fieldset>
        <AuthFooter
          isError={!isValid}
          errorMesage={errorForm}
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
