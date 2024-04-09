import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './AuthFooter.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function AuthFooter({ isError, errorMesage, path }) {
  const text =
    path === '/signin' ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?';
  const linkText = path === '/signin' ? 'Регистрация' : 'Войти';
  const buttonText = path === '/signin' ? 'Войти' : 'Зарегистрироваться';
  const link = path === '/signin' ? '/signup' : '/signin';

  return (
    <div className="auth-footer">
      {isError && <ErrorMessage message={errorMesage} />}
      <button
        className={`auth-footer__button ${isError ? 'auth-footer__button_type_error' : ''}`}
        aria-label={buttonText}
        type="submit"
        disabled={isError}
      >
        {buttonText}
      </button>
      <div className="auth-footer__wrapper">
        <p className="auth-footer__text">{text}</p>
        <Link to={link} className="auth-footer__link">
          {linkText}
        </Link>
      </div>
    </div>
  );
}

AuthFooter.propTypes = {
  isError: PropTypes.bool,
  errorMesage: PropTypes.string,
  path: PropTypes.string,
};
