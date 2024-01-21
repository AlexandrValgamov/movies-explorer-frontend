// import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
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
        <Link href="#additional-info" className="promo__learn-more">Узнать больше</Link>
      </div>
      <img className='promo__logo' src="/images/planet.svg" alt="" />
    </section>
  )
}
