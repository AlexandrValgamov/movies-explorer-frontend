import { Link } from "react-router-dom";
import "./ProfileLink.css";

export default function ProfileLink() {
  return (
    <Link to="/profile" className="profile-link">
      <span className="profile-link__text">Аккаунт</span>
      <div className="profile-link__icon" />
    </Link>
  )
}
