import PropTypes from 'prop-types';
import './Login.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import Form from '../Form/Form';
import Fieldset from '../Fieldset/Fieldset';
import Input from '../Input/Input';
import AuthFooter from '../AuthFooter/AuthFooter';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '../../utils/constants';

export default function Login({
  handleLogin,
  errorForm,
  setErrorForm,
  isLoading,
}) {
  const location = useLocation();

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const onLogin = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  const onChange = (e) => {
    handleChange(e);
    if (errorForm) setErrorForm('');
  };

  useEffect(() => {
    return () => {
      setErrorForm('');
    };
  }, [setErrorForm]);

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
            isLoading={isLoading}
            required
            minLength={EMAIL_MIN_LENGTH}
            maxLength={EMAIL_MAX_LENGTH}
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
            isLoading={isLoading}
            required
            minLength={PASSWORD_MIN_LENGTH}
            maxLength={PASSWORD_MAX_LENGTH}
          />
        </Fieldset>
        <AuthFooter
          isLoading={isLoading}
          isError={!isValid}
          errorMessage={errorForm}
          path={location.pathname}
        />
      </Form>
    </main>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func,
  errorForm: PropTypes.string,
  setErrorForm: PropTypes.func,
  isLoading: PropTypes.bool,
};
