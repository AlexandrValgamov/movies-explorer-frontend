import './Header.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

export default function Header({ loggedIn }) {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header
      className={`header${location.pathname === '/' ? ' header_theme_dark' : ''}`}
    >
      <Link to="/" className="header__link">
        <Logo />
      </Link>
      <Navigation
        loggedIn={loggedIn}
        isOpen={isOpen}
        location={location}
        handleClick={handleClick}
      />
      {loggedIn && (
        <>
          <div
            className={`header__overlay${isOpen ? ' header__overlay_active' : ''}`}
          ></div>
          <button
            className={`header__burger-button${location.pathname === '/' ? ' header__burger-button_theme_dark' : ''}${isOpen ? ' header__burger-button_active' : ''}`}
            onClick={handleClick}
          />
        </>
      )}
    </header>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
