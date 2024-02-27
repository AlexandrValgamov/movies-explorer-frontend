import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import ProfileLink from "../ProfileLink/ProfileLink";
import "./Navigation.css";

export default function Navigation({ loggedIn, isOpen, location }) {

  return (
    <>
      {loggedIn && (
        <nav className={
          `navigation
          navigation_type_movies
          ${isOpen ? ' navigation_type_movies_active' : ''}
          `
        }>
          <ul className="navigation__list navigation__list_type_movies navigation__list_type_movies">
            <li className="navigation__item navigation__item_type_movies">
              <Link
                to="/"
                className={`navigation__link ${location.pathname === "/"
                  ? "navigation__link_active"
                  : ""
                  } navigation__link_type_movies`}
              >Главная</Link>
            </li>
            <li className="navigation__item">
              <Link
                to="/movies"
                className={`navigation__link ${location.pathname === "/movies"
                  ? "navigation__link_active"
                  : ""
                  } navigation__link_type_movies`}
              >Фильмы</Link>
            </li>
            <li className="navigation__item">
              <Link
                to="/saved-movies"
                className={`navigation__link ${location.pathname === "/saved-movies"
                  ? "navigation__link_active"
                  : ""
                  } navigation__link_type_movies`}
              >Сохраненные фильмы</Link>
            </li>
          </ul>
          <ProfileLink location={location} />
        </nav>
      )}

      {!loggedIn && (
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/register" className="navigation__link">Регистрация</Link>
            </li>
            <li className="navigation__item">
              <Link to="/login" className="navigation__link navigation__link_type_login">Войти</Link>            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

Navigation.propTypes = {
  loggedIn: PropTypes.bool,
  isOpen: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};