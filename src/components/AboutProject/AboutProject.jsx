import SectionTitle from "../SectionTitle/SectionTitle"
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project">
      <SectionTitle text="О Проекте" />
      <article className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__brief">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__brief">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
            было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </article>
      <div className="about-project__timeline">
        <div className="about-project__item about-project__item_type_green">
          <p className="about-project__label about-project__label_type_green">1 неделя</p>
          <p className="about-project__category">Back-end</p>
        </div>
        <div className="about-project__item">
          <p className="about-project__label">4 недели</p>
          <p className="about-project__category">Front-end</p>
        </div>
      </div>
    </section>
  )
}
