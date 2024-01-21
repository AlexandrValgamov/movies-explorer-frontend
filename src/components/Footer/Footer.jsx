import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__project">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link" href="https://practicum.yandex.ru/">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://practicum.yandex.ru/">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}