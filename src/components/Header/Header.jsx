// import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header({ loggedIn }) {

  return (
    <header className="header">
      <div className="header__logo" />
      <div className="header__container">
        {loggedIn ? (
          <Navigation />
        ) : (
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <Link to="/register" className="header__link">Регистрация</Link>
              </li>
              <li className="header__item">
                <Link to="/login" className="header__link header__link_type_login">Войти</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  loggedIn: PropTypes.bool
};