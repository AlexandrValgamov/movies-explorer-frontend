import './AuthHeader.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function AuthHeader({ text }) {
  return (
    <div className="auth-header">
      <Link to="/" className="auth-header__link">
        <Logo />
      </Link>
      <h1 className="auth-header__title">{text}</h1>
    </div>
  );
}

AuthHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
