import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './AuthFooter.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function AuthFooter({ isError, errorMessage, path, isLoading }) {
  const text =
    path === '/signin' ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?';
  const link = path === '/signin' ? '/signup' : '/signin';
  const linkText = path === '/signin' ? 'Регистрация' : 'Войти';
  let buttonText = path === '/signin' ? 'Войти' : 'Зарегистрироваться';

  if (isLoading) {
    buttonText = 'Загрузка...';
  }

  return (
    <div className="auth-footer">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <button
        className={`auth-footer__button ${isError || errorMessage || isLoading ? 'auth-footer__button_type_error' : ''}`}
        aria-label={buttonText}
        type="submit"
        disabled={isError || errorMessage || isLoading}
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
  errorMessage: PropTypes.string,
  path: PropTypes.string,
  isLoading: PropTypes.bool,
};
