import './Form.css';
import PropTypes from 'prop-types';

export default function Form({ onSubmit, name, children }) {
  return (
    <form className="form" name={name} onSubmit={onSubmit} noValidate>
      {children}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.node,
};
