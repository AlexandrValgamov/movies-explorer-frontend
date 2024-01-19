// import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileLink from "../ProfileLink/ProfileLink";
import "./Navigation.css";

export default function Navigation() {

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/movies" className="navigation__link">Фильмы</Link>
        </li>
        <li className="navigation__item">
          <Link to="/saved-movies" className="navigation__link">Сохраненные фильмы</Link>
        </li>
      </ul>
      <ProfileLink />
    </nav>
  )
}