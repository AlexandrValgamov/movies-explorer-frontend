import './ErrorMessage.css';
import PropTypes from 'prop-types';

export default function ErrorMessage({ message }) {
  return <span className="error-message">{message}</span>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
