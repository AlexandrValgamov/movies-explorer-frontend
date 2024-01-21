import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/AlexandrValgamov/how-to-learn"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__link portfolio__link_type_arrow"
            href="https://github.com/AlexandrValgamov/how-to-learn"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/AlexandrValgamov/russian-travel"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__link portfolio__link_type_arrow"
            href="https://github.com/AlexandrValgamov/russian-travel"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/AlexandrValgamov/react-mesto-api-full-gha"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__link portfolio__link_type_arrow"
            href="https://github.com/AlexandrValgamov/react-mesto-api-full-gha"
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  )
}