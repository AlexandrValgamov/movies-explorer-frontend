import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProtectedRoute({ element: Component, ...props }) {
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
}

ProtectedRoute.propTypes = {
  element: PropTypes.elementType,
  loggedIn: PropTypes.bool,
};
