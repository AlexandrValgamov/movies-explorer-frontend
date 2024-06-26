import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section className="about-me">
      <SectionTitle text="Студент" />
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__title">Виталий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__info">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб‑разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/AlexandrValgamov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__image"
          src="/images/student.jpg"
          alt="фото студента"
        />
      </div>
    </section>
  );
}
