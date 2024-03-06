import React from "react";
import "./Profile.css";
import PropTypes from 'prop-types';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({ setUser }) {
  const user = React.useContext(CurrentUserContext);

  const onSubmit = () => {
    console.log("submit")
  }

  return (
    <main className="profile">
      <h3 className="profile__title">Привет, {user.name}!</h3>
      <form className="profile__form" name={name} onSubmit={onSubmit}>
        <fieldset className="profile__form-set">
          <label className="profile__form-field">
            Имя
            <input
              className="profile__input profile__input_edit_name"
              type="text"
              id="input-name"
              name="name"
              placeholder="Имя"
              value={user.name}
              onChange={e => setUser(prevUser => ({
                ...prevUser,
                name: e.target.value,
              }))}
              minLength="2"
              maxLength="40"
              required />
            <span className="profile__input-error profile-name-error"></span>
          </label>
          <label className="profile__form-field">
            E-mail
            <input
              className="profile__input profile__input_edit_email"
              type="email"
              id="input-email"
              name="email"
              placeholder="email"
              value={user.email}
              onChange={e => setUser(prevUser => ({
                ...prevUser,
                email: e.target.value,
              }))}
              minLength="2"
              maxLength="200"
              required />
            <span className="profile__input-error profile-email-error"></span>
          </label>
        </fieldset>
        <button className="profile__save-button" aria-label="Сохранить" type="submit">Save</button>
      </form>
      <button>Выйти из аккаунта</button>
    </main>
  )
}

Profile.propTypes = {
  setUser: PropTypes.func,
};
