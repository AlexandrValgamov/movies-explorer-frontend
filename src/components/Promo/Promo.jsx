// import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { Link as ScrollLink } from "react-scroll";
import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб‑разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <ScrollLink to="about-project" smooth={true} duration={500} className="promo__learn-more">Узнать больше</ScrollLink>
      </div>
      <img className='promo__logo' src="/images/planet.svg" alt="" />
    </section>
  )
}
