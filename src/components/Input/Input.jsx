import './Input.css';
import PropTypes from 'prop-types';

export default function Input({
  type,
  name,
  value,
  onChange,
  label,
  placeholder,
  isValid,
  errorMessage,
  isLoading,
  ...props
}) {
  return (
    <label className="input">
      {label}
      <input
        className="input__field"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isLoading}
        {...props}
      />
      {!isValid && <span className="input__error">{errorMessage}</span>}
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isValid: PropTypes.bool,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
};
