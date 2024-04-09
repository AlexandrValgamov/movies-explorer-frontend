import { useContext, useState } from 'react';
import './Profile.css';
import PropTypes from 'prop-types';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import Fieldset from '../Fieldset/Fieldset';
import Input from '../Input/Input';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function Profile({ setUser, setLoggedIn }) {
  const user = useContext(CurrentUserContext);
  const isError = false;
  const errorMesage = null;
  const [isEditing, setIsEditing] = useState(false);
  const [formValue, setFormValue] = useState({
    name: user.name,
    email: user.email,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUser(formValue);
    setIsEditing(false);
  };

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleExitClick() {
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {user.name}!</h1>
      {isEditing ? (
        <Form onSubmit={onSubmit} name={'profile'}>
          <Fieldset>
            <Input
              handleChange={handleChange}
              label={'Имя'}
              type={'text'}
              name={'name'}
              value={formValue.name}
              placeholder={'Имя'}
              minLength={2}
              maxLength={40}
              required
            />
            <Input
              handleChange={handleChange}
              label={'E-mail'}
              type={'email'}
              name={'email'}
              value={formValue.email}
              placeholder={'E-mail'}
              minLength={2}
              maxLength={40}
              required
            />
          </Fieldset>
          <div className="profile__button-wrapper">
            {isError && <ErrorMessage message={errorMesage} />}
            <button
              className={`profile__save-button ${isError ? 'profile__save-button_type_error' : ''}`}
              aria-label="Сохранить"
              type="submit"
              disabled={isError}
            >
              Сохранить
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
            <button onClick={handleExitClick} className="profile__button">
              Выйти из аккаунта
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

Profile.propTypes = {
  setUser: PropTypes.func,
  setLoggedIn: PropTypes.func,
};
