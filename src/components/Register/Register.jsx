import './Register.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import AuthHeader from '../AuthHeader/AuthHeader';
import Fieldset from '../Fieldset/Fieldset';
import Input from '../Input/Input';
import AuthFooter from '../AuthFooter/AuthFooter';
import PropTypes from 'prop-types';
import { useFormWithValidation } from '../../hooks/useForm';

export default function Register({ errorForm, setErrorForm, handleRegister }) {
  const location = useLocation();

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const onRegister = (e) => {
    e.preventDefault();
    handleRegister(values);
  };

  const onChange = (e) => {
    handleChange(e);
    if (errorForm) setErrorForm('');
  };

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
            minLength={8}
            maxLength={20}
            required
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

Register.propTypes = {
  setUser: PropTypes.func.isRequired,
};
