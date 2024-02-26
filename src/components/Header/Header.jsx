import { useState } from "react";
import PropTypes from 'prop-types';
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header({ loggedIn, location }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(prev => !prev);
  }

  return (
    <header className={`header${location.pathname === '/' ? ' header_theme_dark' : ''}`}>
      <div className="header__logo" />
      <Navigation
        loggedIn={loggedIn}
        isOpen={isOpen}
        location={location}
      />
      {loggedIn && <button
        className={`header__burger-button${location.pathname === '/' ? ' header__burger-button_theme_dark' : ''}${isOpen ? ' header__burger-button_active' : ''}`}
        onClick={handleClick}
      />}
    </header>
  )
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};