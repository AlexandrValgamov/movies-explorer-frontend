import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import PropTypes from 'prop-types';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../Form/Form';
import Fieldset from '../Fieldset/Fieldset';
import Input from '../Input/Input';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

export default function Profile({
  handleEditProfile,
  isLoading,
  errorForm,
  setErrorForm,
  isSuccess,
  handleSignOut,
}) {
  const user = useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const onSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(values);
  };

  const onChange = (e) => {
    handleChange(e);
    if (errorForm) setErrorForm('');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    resetForm({
      name: user.name,
      email: user.email,
    });
  }, [user, resetForm]);

  useEffect(() => {
    return () => {
      setErrorForm('');
    };
  }, [setErrorForm]);

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {user.name}!</h1>
      {isEditing ? (
        <Form onSubmit={onSubmit} name={'profile'}>
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
              maxLength={40}
              required
            />
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
              minLength={5}
              maxLength={30}
              required
            />
          </Fieldset>
          <div className="profile__button-wrapper">
            {errorForm && <ErrorMessage message={errorForm} />}
            {isSuccess && (
              <p className="profile__success-message">
                Данные успешно изменены
              </p>
            )}
            <button
              className={`profile__save-button ${!isValid || errorForm || isLoading ? 'profile__save-button_type_error' : ''}`}
              aria-label="Сохранить"
              type="submit"
              disabled={!isValid || errorForm || isLoading}
            >
              {isLoading ? 'Загрузка...' : 'Сохранить'}
            </button>
          </div>
        </Form>
      ) : (
        <div className="profile__content">
          <div>
            <div className="profile__info">
              <label className="profile__label">Имя</label>
              <label className="profile__label">{user.name}</label>
            </div>
            <div className="profile__info">
              <label className="profile__label">E-mail</label>
              <label className="profile__label">{user.email}</label>
            </div>
          </div>
          <div className="profile__buttons">
            <button onClick={handleEditClick} className="profile__button">
              Редактировать
            </button>
            <button onClick={handleSignOut} className="profile__button">
              Выйти из аккаунта
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

Profile.propTypes = {
  handleEditProfile: PropTypes.func,
  isLoading: PropTypes.bool,
  errorForm: PropTypes.string,
  setErrorForm: PropTypes.func,
  isSuccess: PropTypes.bool,
  handleSignOut: PropTypes.func,
};
