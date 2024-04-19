import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './AuthFooter.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AUTH_TEXTS, LOADING_MESSAGE } from '../../utils/constants';

export default function AuthFooter({ isError, errorMessage, path, isLoading }) {
  const {
    text,
    link,
    linkText,
    buttonText: defaultButtonText,
  } = AUTH_TEXTS[path];
  const buttonText = isLoading ? LOADING_MESSAGE : defaultButtonText;
  const hasError = isError || errorMessage || isLoading;

  return (
    <div className="auth-footer">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <button
        className={`auth-footer__button ${hasError ? 'auth-footer__button_type_error' : ''}`}
        aria-label={buttonText}
        type="submit"
        disabled={hasError}
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
