import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileLink from '../ProfileLink/ProfileLink';
import './Navigation.css';

export default function Navigation({ loggedIn, isOpen, location }) {
  const links = loggedIn
    ? [
        { to: '/', text: 'Главная', activePath: '/' },
        { to: '/movies', text: 'Фильмы', activePath: '/movies' },
        {
          to: '/saved-movies',
          text: 'Сохраненные фильмы',
          activePath: '/saved-movies',
        },
      ]
    : [
        { to: '/signup', text: 'Регистрация' },
        { to: '/signin', text: 'Войти' },
      ];

  return (
    <>
      {loggedIn && (
        <nav
          className={`navigation navigation_type_movies ${isOpen ? ' navigation_type_movies_active' : ''}`}
        >
          <ul className="navigation__list navigation__list_type_movies">
            {links.map((link, index) => (
              <li
                key={index}
                className={`navigation__item ${index === 0 ? 'navigation__item_type_burger' : ''}`}
              >
                <Link
                  to={link.to}
                  className={`navigation__link ${location.pathname === link.activePath ? 'navigation__link_active' : ''} navigation__link_type_movies`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <ProfileLink location={location} />
        </nav>
      )}

      {!loggedIn && (
        <nav className="navigation">
          <ul className="navigation__list">
            {links.map((link, index) => (
              <li key={index} className={'navigation__item'}>
                <Link to={link.to} className={'navigation__link'}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

Navigation.propTypes = {
  loggedIn: PropTypes.bool,
  isOpen: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
