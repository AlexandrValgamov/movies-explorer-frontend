import './Fieldset.css';
import PropTypes from 'prop-types';

export default function Fieldset({ children }) {
  return <fieldset className="fieldset">{children}</fieldset>;
}

Fieldset.propTypes = {
  children: PropTypes.node,
};
