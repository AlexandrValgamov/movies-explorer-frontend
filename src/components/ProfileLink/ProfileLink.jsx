import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./ProfileLink.css";

export default function ProfileLink({ location }) {
  return (
    <Link
      to="/profile"
      className={`profile-link${location.pathname === '/' ? ' profile-link_theme_dark' : ''}`}
    >
      <span className="profile-link__text">Аккаунт</span>
      <div className="profile-link__icon" />
    </Link>
  )
}

ProfileLink.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};