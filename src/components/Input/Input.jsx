import './Input.css';
import PropTypes from 'prop-types';

export default function Input({
  type,
  name,
  value,
  handleChange,
  label,
  placeholder,
  ...props
}) {
  return (
    <>
      <label className="input__label">
        {label}
        <input
          className="input"
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...props}
        />
        <span className="input__error"></span>
      </label>
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
