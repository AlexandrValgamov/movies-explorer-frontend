import './Register.css';
import { useLocation } from 'react-router-dom';
import Form from '../Form/Form';
import AuthHeader from '../AuthHeader/AuthHeader';
import Fieldset from '../Fieldset/Fieldset';
import Input from '../Input/Input';
import AuthFooter from '../AuthFooter/AuthFooter';
import PropTypes from 'prop-types';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useEffect } from 'react';

export default function Register({
  errorForm,
  setErrorForm,
  handleRegister,
  isLoading,
}) {
  const location = useLocation();

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const onRegister = (e) => {
    e.preventDefault();
    handleRegister(values);
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
    <main className="register">
      <AuthHeader text={'Добро пожаловать!'} />
      <Form onSubmit={onRegister} name="register">
        <Fieldset>
          <Input
            onChange={onChange}
            label={'Имя'}
            type={'text'}
            name={'name'}
            value={values.name || ''}
            placeholder={'Имя'}
            isValid={isValid}
            errorMessage={errors.name}
            isLoading={isLoading}
            minLength={2}
            maxLength={30}
            required
          />
          <Input
            onChange={onChange}
            label={'E-mail'}
            type="email"
            name={'email'}
            value={values.email || ''}
            placeholder="E-mail"
            isValid={isValid}
            errorMessage={errors.email}
            isLoading={isLoading}
            minLength={5}
            maxLength={30}
            required
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
            minLength={8}
            maxLength={20}
            required
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

Register.propTypes = {
  errorForm: PropTypes.string,
  setErrorForm: PropTypes.func,
  handleRegister: PropTypes.func,
  isLoading: PropTypes.bool,
};
