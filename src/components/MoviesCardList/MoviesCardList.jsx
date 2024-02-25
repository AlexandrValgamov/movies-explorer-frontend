import "./MoviesCardList.css";
import PropTypes from 'prop-types';
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ cards }) {
  return (
    <section className="cards">
      <div className="cards__gallary" aria-label="Галерея">
        {cards.slice(0, 16).map(
          card => <MoviesCard
            key={card.id}
            card={card}
          // onCardLike={onCardLike}
          />
        )}
      </div>
      <button className="cards__button">
        Ещё
      </button>
    </section>
  );
}

MoviesCardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
