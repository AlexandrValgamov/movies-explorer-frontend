// import React, { useState } from "react";
// import PropTypes from 'prop-types';
import SectionTitle from "../SectionTitle/SectionTitle"
import "./Techs.css";

export default function Promo() {
  return (
    <section className="techs">
      <SectionTitle text="Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__item">
          <p className="techs__heading">HTML</p>
        </li>
        <li className="techs__item">
          <p className="techs__heading">CSS</p>
        </li>
        <li className="techs__item">
          <p className="techs__heading">JS</p>
        </li>
        <li className="techs__item">
          <p className="techs__heading">React</p>
        </li>
        <li className="techs__item">
          <p className="techs__heading">Git</p>
        </li>
        <li className="techs__item">
          <p className="techs__heading">Express.js</p>
        </li>
        <li className="techs__item">
          <p className="techs__heading">mongoDB</p>
        </li>
      </ul>
    </section>
  )
}
